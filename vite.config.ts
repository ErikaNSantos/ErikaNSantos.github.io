import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Removidos os plugins jsxLocPlugin e vitePluginManusRuntime que causam erro no deploy
const plugins = [react(), tailwindcss()];

export default defineConfig({
  // MANTENHA O NOME DO SEU REPOSITÓRIO AQUI EXATAMENTE COMO ESTAVA
  base: '/ErikaNSantos.github.io/', 

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
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
