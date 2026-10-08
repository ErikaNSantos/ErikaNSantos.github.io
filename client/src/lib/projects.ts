import { Zap, FlaskConical, Wrench, Fuel, type LucideIcon } from "lucide-react";
// ^ Todo ícone usado abaixo precisa estar nesta linha de import. Usar o ícone sem importá-lo
//   lança ReferenceError em runtime e derruba a página.

export interface Project {
  key: string;
  tags: string[];
  github: string;
  demo: string | null;
  icon: LucideIcon;
  accent: string; // token CSS de destaque do card (ex.: var(--primary))
  year?: string;
  /** Imagem real do projeto: vira o visual do card e a capa da página. */
  cover?: string;
  /** Quantidade de números em projects.<key>.metrics.N (value + label). */
  metrics?: number;
  /** Quantidade de etapas em projects.<key>.steps.N (title + desc). Sem isso, a abordagem vira parágrafo. */
  steps?: number;
  /** Figuras com legenda em projects.<key>.figures.<key>. */
  /** narrow: gráfico simples, que fica grande demais na largura toda. */
  figures?: { key: string; src: string; narrow?: boolean }[];
}

export const PROJECTS: Project[] = [
  {
    key: "fuel",
    tags: ["Python", "DuckDB", "Parquet", "GitHub Actions", "D3.js"],
    github: "https://github.com/ErikaNSantos/raio-x-combustiveis",
    demo: "https://erikansantos.github.io/raio-x-combustiveis/",
    icon: Fuel,
    accent: "var(--accent-sky)",
    year: "2026",
    cover: "/images/projects/raio-x/mapa.webp",
    metrics: 3,
    steps: 5,
    figures: [
      { key: "etanol", src: "/images/projects/raio-x/etanol.webp" },
      { key: "evolucao", src: "/images/projects/raio-x/evolucao.webp" },
      { key: "capitais", src: "/images/projects/raio-x/capitais.webp" },
    ],
  },
  {
    key: "maintenance",
    tags: ["Python", "Pandas", "scikit-learn", "D3.js"],
    github: "https://github.com/ErikaNSantos/predictive-mainentance",
    demo: "https://erikansantos.github.io/predictive-mainentance/",
    icon: Wrench,
    accent: "var(--accent-violet)",
    year: "2026",
    cover: "/images/projects/maintenance/classification.webp",
    metrics: 3,
    steps: 5,
    figures: [
      { key: "overview", src: "/images/projects/maintenance/overview.webp" },
      { key: "rules", src: "/images/projects/maintenance/rules-validation.webp" },
    ],
  },
  {
    key: "tcc",
    tags: ["Python", "SciPy", "UNIFAC-LL", "COSMO-SAC", "GAMESS"],
    github: "https://github.com/ErikaNSantos/lle-pil-biodiesel",
    demo: null,
    icon: FlaskConical,
    accent: "var(--accent-rose)",
    year: "2026",
    cover: "/images/projects/tcc/binodais.webp",
    metrics: 3,
    steps: 5,
    figures: [{ key: "gap", src: "/images/projects/tcc/lacuna.webp", narrow: true }],
  },
  {
    key: "energyBot",
    tags: ["Python", "SQLite", "Telegram Bot", "Streamlit", "VPS"],
    github: "https://github.com/ErikaNSantos/Energy-Bot",
    demo: "http://137.131.144.54:8501",
    icon: Zap,
    accent: "var(--primary)",
  },
];

export const getProject = (key: string) => PROJECTS.find((p) => p.key === key);
