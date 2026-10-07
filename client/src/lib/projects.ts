import { Zap, FlaskConical, Wrench, type LucideIcon } from "lucide-react";
// ^ O Wrench precisa estar nesta linha de import. Usar o ícone sem importá-lo
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
  figures?: { key: string; src: string }[];
}

export const PROJECTS: Project[] = [
  {
    key: "maintenance",
    tags: ["Python", "Pandas", "scikit-learn", "streamlit"],
    github: "https://github.com/ErikaNSantos/predictive-mainentance",
    demo: null,
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
    tags: ["Python", "UNIFAC-LL", "COSMO-SAC", "Termodinâmica"],
    github: "https://github.com/ErikaNSantos/lle-pil-biodiesel",
    demo: null,
    icon: FlaskConical,
    accent: "var(--accent-rose)",
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
