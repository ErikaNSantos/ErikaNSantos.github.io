import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link, Redirect, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS, getProject } from "@/lib/projects";

const range = (n = 0) => Array.from({ length: n }, (_, i) => i);

/** Título de seção no acento do projeto, igual em todas as seções. */
function SectionLabel({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <h2 className="text-[14px] font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>
      {children}
    </h2>
  );
}

function Figure({ src, caption, narrow }: { src: string; caption: string; narrow?: boolean }) {
  return (
    <figure className={narrow ? "max-w-2xl" : undefined}>
      {/* Abre em tamanho real: no celular os prints de dashboard ficam pequenos demais para ler */}
      <a href={src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="w-full rounded-2xl border border-white/10 bg-tertiary hover:border-primary/50 transition-colors"
        />
      </a>
      <figcaption className="mt-3 text-[14px] leading-[22px] text-secondary">{caption}</figcaption>
    </figure>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const project = id ? getProject(id) : undefined;

  // O link "Próximo projeto" fica no fim da página e reaproveita este componente: sem isso, a página nova abriria no rodapé.
  useEffect(() => window.scrollTo(0, 0), [id]);

  if (!project) return <Redirect to="/projects" />;

  const Icon = project.icon;
  const k = (field: string) => `projects.${project.key}.${field}`;
  // t() devolve a própria chave quando o texto não existe: assim os campos novos são opcionais.
  const has = (field: string) => t(k(field)) !== k(field);
  const next = PROJECTS[(PROJECTS.findIndex((p) => p.key === project.key) + 1) % PROJECTS.length];

  const meta = [
    has("role") && { label: t("projects.detail.role"), value: t(k("role")) },
    has("origin") && { label: t("projects.detail.origin"), value: t(k("origin")) },
    project.year && { label: t("projects.detail.year"), value: project.year },
    { label: t("projects.detail.stack"), value: project.tags.join(" · ") },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <Layout>
      <section className="py-24 pt-32 container bg-background min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-[15px] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("projects.detail.back")}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Cabeçalho: o que é e por que importa, antes de qualquer parágrafo */}
            <header className="max-w-3xl">
              {!project.cover && (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border mb-6"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                    borderColor: `color-mix(in srgb, ${project.accent} 33%, transparent)`,
                  }}
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8" style={{ color: project.accent }} />
                </div>
              )}
              <h1 className="text-white font-black md:text-[48px] sm:text-[38px] text-[30px] leading-tight font-heading">
                {t(k("title"))}
              </h1>
              <p className="mt-5 text-lavender text-[18px] sm:text-[20px] leading-[30px] sm:leading-[32px]">
                {has("tagline") ? t(k("tagline")) : t(k("desc"))}
              </p>
            </header>

            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10">
              {meta.map((item) => (
                <div key={item.label} className="bg-background p-4 sm:p-5">
                  <dt className="text-[12px] uppercase tracking-wider text-secondary">{item.label}</dt>
                  <dd className="mt-1 text-[15px] text-white leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>

            {project.metrics ? (
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {range(project.metrics).map((i) => (
                  <div key={i} className="bg-tertiary rounded-2xl border border-white/5 p-5">
                    <p
                      className="font-heading font-black text-[32px] sm:text-[36px] leading-none"
                      style={{ color: project.accent }}
                    >
                      {t(k(`metrics.${i}.value`))}
                    </p>
                    <p className="mt-3 text-[14px] leading-[22px] text-secondary">{t(k(`metrics.${i}.label`))}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {project.cover && (
              <div className="mt-10">
                <Figure src={project.cover} caption={has("figures.cover") ? t(k("figures.cover")) : t(k("title"))} />
              </div>
            )}

            <div className="mt-14 max-w-3xl flex flex-col gap-12">
              <div>
                <SectionLabel accent={project.accent}>{t("projects.detail.context")}</SectionLabel>
                <p className="text-secondary text-[17px] leading-[30px]">{t(k("context"))}</p>
              </div>

              <div>
                <SectionLabel accent={project.accent}>{t("projects.detail.problem")}</SectionLabel>
                <p className="text-secondary text-[17px] leading-[30px]">{t(k("problem"))}</p>
              </div>

              <div>
                <SectionLabel accent={project.accent}>{t("projects.detail.approach")}</SectionLabel>
                {project.steps ? (
                  <ol className="flex flex-col">
                    {range(project.steps).map((i) => (
                      <li
                        key={i}
                        className="grid grid-cols-[3rem_1fr] gap-4 py-5 border-t border-white/5 first:border-t-0 first:pt-0"
                      >
                        <span className="font-heading font-bold text-[20px] text-secondary/60 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-white font-bold text-[18px]">{t(k(`steps.${i}.title`))}</h3>
                          <p className="mt-1 text-secondary text-[16px] leading-[28px]">{t(k(`steps.${i}.desc`))}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-secondary text-[17px] leading-[30px]">{t(k("approach"))}</p>
                )}
              </div>
            </div>

            {project.figures?.length ? (
              <div className="mt-12 grid gap-10">
                {project.figures.map((fig) => (
                  <Figure key={fig.key} src={fig.src} caption={t(k(`figures.${fig.key}`))} narrow={fig.narrow} />
                ))}
              </div>
            ) : null}

            <div className="mt-14 max-w-3xl flex flex-col gap-12">
              <div>
                <SectionLabel accent={project.accent}>{t("projects.detail.result")}</SectionLabel>
                <p className="text-secondary text-[17px] leading-[30px]">{t(k("result"))}</p>
              </div>

              {has("limitations") && (
                <div>
                  <SectionLabel accent={project.accent}>{t("projects.detail.limitations")}</SectionLabel>
                  <p className="text-secondary text-[17px] leading-[30px]">{t(k("limitations"))}</p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-tertiary border border-white/10 hover:border-primary/50 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                <Github className="w-5 h-5" />
                {t("projects.detail.viewCode")}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t("projects.detail.viewDemo")}
                </a>
              )}
            </div>

            {next.key !== project.key && (
              <Link
                href={`/projects/${next.key}`}
                className="mt-12 group flex items-center justify-between gap-6 rounded-2xl border border-white/5 hover:border-primary/50 bg-tertiary p-6 transition-colors"
              >
                <div>
                  <p className="text-[13px] uppercase tracking-wider text-secondary">{t("projects.detail.next")}</p>
                  <p className="mt-1 text-white font-bold text-[20px] group-hover:text-primary transition-colors">
                    {t(`projects.${next.key}.title`)}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
