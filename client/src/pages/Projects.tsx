import Layout from "@/components/Layout";
import { Github, Trophy, Wallet, Swords, Zap, FlaskConical, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
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
const PROJECTS: Project[] = [
  {
    key: "cblow",
    tags: ["FastAPI", "PostgreSQL", "React", "Riot API"],
    github: "https://github.com/ErikaNSantos",
    demo: null,
    icon: Trophy,
    accent: "var(--primary)",
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
    accent: "var(--accent-sky)",
  },
];

/** Cabeçalho visual do card: gradiente + grade SVG inline. Zero peso de imagem. */
function ProjectVisual({ icon: Icon, accent, patternId }: { icon: LucideIcon; accent: string; patternId: string }) {
  return (
    <div
      className="relative w-full h-[180px] rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: `radial-gradient(120% 140% at 85% 0%, color-mix(in srgb, ${accent} 20%, transparent) 0%, transparent 55%), linear-gradient(160deg, var(--muted) 0%, color-mix(in srgb, var(--background) 70%, var(--muted)) 100%)`,
      }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${patternId}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${patternId})`} />
      </svg>
      <div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center border"
        style={{
          backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
          borderColor: `color-mix(in srgb, ${accent} 33%, transparent)`,
        }}
      >
        <Icon className="w-8 h-8" style={{ color: accent }} />
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-24 pt-32 container bg-background min-h-screen">
        <div className="max-w-2xl mb-12">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            {t("projects.sectionTitle")}
          </p>
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-heading">
            {t("projects.title")}
          </h1>
          <div className="w-20 h-1.5 bg-primary mt-4 mb-8" />
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-tertiary p-5 rounded-2xl w-full border border-white/5 hover:border-primary/50 transition-all group flex flex-col"
            >
              <div className="relative">
                <ProjectVisual icon={project.icon} accent={project.accent} patternId={project.key} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t(`projects.${project.key}.title`)} — GitHub`}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full flex justify-center items-center bg-background/80 hover:bg-primary transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>

              <div className="mt-5 flex-1">
                <h3 className="text-white font-bold text-[22px] leading-snug group-hover:text-primary transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="mt-2 text-secondary text-[14px] leading-[24px]">
                  {t(`projects.${project.key}.desc`)}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[13px] text-blue-400">
                    #{tag.replace(/\s+/g, "").toLowerCase()}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
