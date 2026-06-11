import { Trophy, Wallet, Swords, Zap, FlaskConical, type LucideIcon } from "lucide-react";

export interface Project {
  key: string;
  tags: string[];
  github: string;
  demo: string | null;
  icon: LucideIcon;
  accent: string; // token CSS de destaque do card (ex.: var(--primary))
}

// TODO(Érika): apontar `github` para os repositórios reais de cada projeto
// (cblow, automação financeira e RPG). Enquanto o repo não for público,
// o link cai no perfil — funciona, mas o link direto conta mais.
export const PROJECTS: Project[] = [
  {
    key: "manutencao-preditiva",
    tags: ["Python", "Scikit-learn", "Streamlit", "Plotly"],
    github: "https://github.com/ErikaNSantos/predictive-mainentance",
    demo: null,
    icon: Wrench,
    accent: "var(--accent-amber)",
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
