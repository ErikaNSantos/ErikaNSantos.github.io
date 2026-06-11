import Layout from "@/components/Layout";
import { Link, Redirect, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProject } from "@/lib/projects";

const SECTIONS = ["context", "problem", "approach", "result"] as const;

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const project = id ? getProject(id) : undefined;

  if (!project) return <Redirect to="/projects" />;

  const Icon = project.icon;

  return (
    <Layout>
      <section className="py-24 pt-32 container bg-background min-h-screen">
        <div className="max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-[15px] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("projects.detail.back")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Faixa visual no acento do projeto */}
            <div
              className="relative w-full h-[140px] rounded-2xl overflow-hidden flex items-center px-8 mb-8"
              style={{
                background: `radial-gradient(120% 160% at 90% 0%, color-mix(in srgb, ${project.accent} 22%, transparent) 0%, transparent 60%), linear-gradient(160deg, var(--muted) 0%, color-mix(in srgb, var(--background) 70%, var(--muted)) 100%)`,
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                style={{
                  backgroundColor: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                  borderColor: `color-mix(in srgb, ${project.accent} 33%, transparent)`,
                }}
                aria-hidden="true"
              >
                <Icon className="w-8 h-8" style={{ color: project.accent }} />
              </div>
            </div>

            <h1 className="text-white font-black md:text-[44px] sm:text-[36px] text-[28px] leading-tight">
              {t(`projects.${project.key}.title`)}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] px-3 py-1 rounded-full border border-white/10 text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-8">
              {SECTIONS.map((section) => (
                <div key={section}>
                  <h2
                    className="text-[14px] font-bold uppercase tracking-wider mb-2"
                    style={{ color: project.accent }}
                  >
                    {t(`projects.detail.${section}`)}
                  </h2>
                  <p className="text-secondary text-[17px] leading-[30px]">
                    {t(`projects.${project.key}.${section}`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-tertiary border border-white/10 hover:border-primary/50 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                <Github className="w-5 h-5" />
                {t("projects.detail.viewCode")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
