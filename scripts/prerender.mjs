// Abre cada página do sitemap num Chromium sem tela e grava o HTML já renderizado
// dentro do index.html daquela rota. Assim quem lê o site sem rodar JavaScript
// (robôs de IA, a maioria dos leitores de link) recebe o texto, e não uma <div> vazia.
// Quem tem JavaScript não vê essa cópia: o React substitui o conteúdo do #root ao montar.
import fs from "fs";
import http from "http";
import path from "path";
import { chromium } from "playwright";

const OUT = path.resolve(import.meta.dirname, "..", "dist", "public");
const SITE = "https://erikansantos.github.io";
const TIPOS = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain",
};

// Servidor estático com a mesma regra do GitHub Pages: pasta → index.html.
const servidor = http.createServer((req, res) => {
  let arquivo = path.join(OUT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (fs.existsSync(arquivo) && fs.statSync(arquivo).isDirectory()) arquivo = path.join(arquivo, "index.html");
  if (!fs.existsSync(arquivo)) {
    res.writeHead(404);
    return res.end();
  }
  res.writeHead(200, { "Content-Type": TIPOS[path.extname(arquivo)] ?? "application/octet-stream" });
  fs.createReadStream(arquivo).pipe(res);
});
await new Promise((ok) => servidor.listen(0, ok));
const local = `http://localhost:${servidor.address().port}`;

const rotas = [...fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf-8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1].replace(SITE, ""),
);

// Inglês: o público-alvo do portfólio são vagas remotas internacionais.
const navegador = await chromium.launch();
const pagina = await navegador.newPage({ locale: "en-US" });
let erros = 0;

for (const rota of rotas) {
  await pagina.goto(local + rota, { waitUntil: "networkidle" });
  // Rola até o fim pra montar o que só aparece ao entrar na tela.
  await pagina.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
  });
  await pagina.waitForTimeout(300);
  const conteudo = await pagina.$eval("#root", (el) => el.innerHTML);
  const texto = await pagina.$eval("#root", (el) => el.innerText.trim().length);
  if (texto < 200) {
    console.error(`prerender: ${rota} renderizou só ${texto} caracteres`);
    erros++;
    continue;
  }

  const destino = path.join(OUT, rota, "index.html");
  const html = fs
    .readFileSync(destino, "utf-8")
    .replace('<html lang="pt-BR">', '<html lang="en">')
    .replace('<div id="root"></div>', `<div id="root"><div data-prerender>${conteudo}</div></div>`);
  fs.writeFileSync(destino, html);
  console.log(`prerender: ${rota} (${texto} caracteres)`);
}

await navegador.close();
servidor.close();
if (erros) process.exit(1);
