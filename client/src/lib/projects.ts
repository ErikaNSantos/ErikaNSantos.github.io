import { Trophy, Wallet, Swords, Zap, FlaskConical, Wrench, type LucideIcon } from "lucide-react";
// ^ O Wrench precisa estar nesta linha de import. Usar o ícone sem importá-lo
//   lança ReferenceError em runtime e derruba a página.

export interface Project {
  key: string;
  tags: string[];
  github: string;
  demo: string | null;
  icon: LucideIcon;
  accent: string; // token CSS de destaque do card (ex.: var(--primary))
}

export const PROJECTS: Project[] = [
  {
    key: "maintenance",
    tags: ["Python", "Pandas", "scikit-learn", "streamlit"],
    github: "https://github.com/predictive-mainentance",
    demo: null,
    icon: Wrench,
    accent: "var(--accent-violet)", // requer a linha nova no index.css (ver instruções)
  },
  {
    key: "cblow",
    tags: ["FastAPI", "PostgreSQL", "React", "Riot API"],
    github: "https://github.com/ErikaNSantos",
    demo: null,
    icon: Trophy,
    accent: "var(--accent-sky)",
  },
  {
    key: "finance",
    tags: ["Python", "PostgreSQL", "ETL", "Docker"],
    github: "https://github.com/ErikaNSantos",
    demo: null,
    icon: Wallet,
    accent: "var(--teal)",
  },
  {
    key: "rpg",
    tags: ["React 19", "Vite", "Supabase", "TypeScript"],
    github: "https://github.com/ErikaNSantos",
    demo: null,
    icon: Swords,
    accent: "var(--accent-gold)",
  },
  {
    key: "tcc",
    tags: ["Python", "SciPy", "UNIFAC", "Optimization"],
    github: "https://github.com/ErikaNSantos",
    demo: null,
    icon: FlaskConical,
    accent: "var(--accent-rose)",
  },
  {
    key: "energyBot",
    tags: ["Python", "SQLite", "Telegram Bot"],
    github: "https://github.com/ErikaNSantos/Energy-Bot",
    demo: null,
    icon: Zap,
    accent: "var(--primary)",
  },
];

export const getProject = (key: string) => PROJECTS.find((p) => p.key === key);
