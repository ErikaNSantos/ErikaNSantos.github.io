import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Plugins limpos para produção
const plugins = [react(), tailwindcss()];

export default defineConfig({
  // SE O NOME DO REPO FOR 'ErikaNSantos.github.io', USE '/'
  // SE O NOME DO REPO FOR 'portfolio', USE '/portfolio/'
  base: '/', 

  plugins,

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),

  build: {
    // Garante que o build vá para a pasta que o GitHub Actions vai ler
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
