import fs from "fs";
import path from "path";
import type { Plugin } from "vite";
import { translations } from "../client/src/lib/translations";

// Gera, depois do build, uma cópia do index.html para cada rota do site (com título
// e descrição próprios), mais o sitemap.xml e o robots.txt.
// Motivo: o GitHub Pages não conhece as rotas do React e respondia 404 em /projects,
// /about etc. Quem visita era salvo pelo 404.html, mas o Google descartava as páginas.

const SITE = "https://erikansantos.github.io";
const NOME = "Erika Nogueira Santos";

interface Pagina {
  rota: string;
  titulo: string;
  descricao: string;
}

function paginas(): Pagina[] {
  const pt = translations.pt;
  const projetos = Object.entries(pt.projects)
    .filter(([, v]) => typeof v === "object" && v !== null && "title" in v && "desc" in v)
    .map(([key, v]) => {
      const p = v as { title: string; desc: string };
      return { rota: `/projects/${key}/`, titulo: `${p.title} | ${NOME}`, descricao: p.desc };
    });

  return [
    {
      rota: "/",
      titulo: `${NOME} | Analista de Dados e Engenheira Química`,
      descricao: pt.hero.description,
    },
    {
      rota: "/about/",
      titulo: `Sobre | ${NOME}`,
      descricao: `Trajetória de ${NOME}: Engenharia Química na UFBA, dados industriais na Continental Pneus e análise de dados na logística do iFood.`,
    },
    { rota: "/projects/", titulo: `Projetos | ${NOME}`, descricao: pt.projects.subtitle },
    ...projetos,
    {
      rota: "/contact/",
      titulo: `Contato | ${NOME}`,
      descricao: `Fale com ${NOME}, Analista de Dados e Engenheira Química, aberta a trabalho remoto.`,
    },
  ];
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
    },
  };
}
