import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Code2, Cloud, Database, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">{t('about.title')}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('about.intro')}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass-effect-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{t('about.journey')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('about.journeyDesc')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.transition')}
                  </p>
                </div>

                <div className="glass-effect-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-4">{t('about.doing')}</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="text-2xl">🔭</span>
                      <div>
                        <strong className="block text-lg">{t('about.dataAnalyst')}</strong>
                        <span className="text-sm text-muted-foreground">{t('about.continentalTires')}</span>
                        <p className="text-sm mt-2 text-muted-foreground">{t('about.dataDesc')}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-2xl">🌱</span>
                      <div>
                        <strong className="block text-lg">{t('about.studyingCloud')}</strong>
                        <p className="text-sm mt-2 text-muted-foreground">{t('about.cloudDesc')}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <strong className="block text-lg">{t('about.degree')}</strong>
                        <span className="text-sm text-muted-foreground">{t('about.inProgress')}</span>
                        <p className="text-sm mt-2 text-muted-foreground">{t('about.degreeDesc')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-6">
                <div className="glass-effect-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Database className="h-6 w-6 text-blue-400" />
                    {t('about.dataAnalysis')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Pandas", "NumPy", "Power BI", "SQL", "Excel"].map(tech => (
                      <motion.span 
                        key={tech} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full glass-effect text-sm font-medium hover:bg-white/15 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="glass-effect-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-purple-400" />
                    {t('about.cloudDevops')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["AWS", "Docker", "Terraform", "Linux", "Git", "CI/CD"].map(tech => (
                      <motion.span 
                        key={tech} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full glass-effect text-sm font-medium hover:bg-white/15 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="glass-effect-dark rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    {t('about.softSkills')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Análise Crítica", "Comunicação", "Liderança", "Resolução de Problemas"].map(skill => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full glass-effect text-sm font-medium hover:bg-white/15 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
