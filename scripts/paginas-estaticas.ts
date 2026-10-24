import fs from "fs";
import path from "path";
import type { Plugin } from "vite";
import { translations } from "../client/src/lib/translations";

// Gera, depois do build, uma cópia do index.html para cada rota do site (com título
// e descrição próprios), mais o sitemap.xml, o robots.txt e o llms.txt.
// Motivo: o GitHub Pages não conhece as rotas do React e respondia 404 em /projects,
// /about etc. Quem visita era salvo pelo 404.html, mas o Google descartava as páginas.
// O texto das páginas é preenchido depois pelo scripts/prerender.mjs.

const SITE = "https://erikansantos.github.io";
const NOME = "Erika Nogueira Santos";
const LINKEDIN = "https://www.linkedin.com/in/erikanogueirasantos/";
const GITHUB = "https://github.com/ErikaNSantos";
const EMAIL = "erika.nogueira.santos@gmail.com";

// Em inglês, como o conteúdo pré-renderizado: o público são vagas remotas internacionais.
const en = translations.en;

interface Pagina {
  rota: string;
  titulo: string;
  descricao: string;
}

function projetos() {
  return Object.entries(en.projects)
    .filter(([, v]) => typeof v === "object" && v !== null && "title" in v && "desc" in v)
    .map(([key, v]) => ({ key, ...(v as { title: string; desc: string }) }));
}

function paginas(): Pagina[] {
  return [
    { rota: "/", titulo: `${NOME} | Data Analyst and Chemical Engineer`, descricao: en.hero.description },
    { rota: "/about/", titulo: `About | ${NOME}`, descricao: en.about.intro },
    { rota: "/projects/", titulo: `Projects | ${NOME}`, descricao: en.projects.subtitle },
    ...projetos().map((p) => ({ rota: `/projects/${p.key}/`, titulo: `${p.title} | ${NOME}`, descricao: p.desc })),
    { rota: "/contact/", titulo: `Contact | ${NOME}`, descricao: en.contact.description },
  ];
}

// Resumo em Markdown para IAs (padrão llms.txt).
function llmsTxt(): string {
  const lista = projetos()
    .map((p) => `- [${p.title}](${SITE}/projects/${p.key}/): ${p.desc}`)
    .join("\n");
  return `# ${NOME}

> ${en.hero.description}

${en.about.intro}

${en.about.journeyDesc}

${en.about.transition}

- Location: ${en.contact.location}
- Availability: ${en.contact.description}
- Also known as: Érika Santos

## Projects

${lista}

## Pages

- [About](${SITE}/about/): background, experience and education
- [Projects](${SITE}/projects/): all case studies
- [Contact](${SITE}/contact/)

## Contact

- Email: ${EMAIL}
- LinkedIn: ${LINKEDIN}
- GitHub: ${GITHUB}
`;
}

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function aplicar(html: string, p: Pagina): string {
  const url = SITE + p.rota;
  const titulo = escapar(p.titulo);
  const descricao = escapar(p.descricao);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${titulo}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${descricao}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${titulo}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${descricao}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
}

export function paginasEstaticas(): Plugin {
  let outDir = "";
  return {
    name: "paginas-estaticas",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const base = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");
      const lista = paginas();

      for (const p of lista) {
        const destino = path.join(outDir, p.rota, "index.html");
        fs.mkdirSync(path.dirname(destino), { recursive: true });
        fs.writeFileSync(destino, aplicar(base, p));
      }

      const hoje = new Date().toISOString().slice(0, 10);
      const urls = lista
        .map((p) => `  <url>\n    <loc>${SITE}${p.rota}</loc>\n    <lastmod>${hoje}</lastmod>\n  </url>`)
        .join("\n");
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      fs.writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
      fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt());
    },
  };
}
