import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.sadhobbit.title'),
      description: t('projects.sadhobbit.desc'),
      tags: ["Markdown", "GitHub Actions", "Automation"],
      github: "https://github.com/ErikaNSantos/SadHobbit",
      demo: null,
      image: "/images/project-bg.png"
    },
    {
      title: t('projects.pythonFundamentals.title'),
      description: t('projects.pythonFundamentals.desc'),
      tags: ["Python", "Jupyter", "Data Science"],
      github: "https://github.com/ErikaNSantos/python-fundamentals",
      demo: null,
      image: "/images/project-bg.png"
    },
    {
      title: t('projects.sigaaPlugin.title'),
      description: t('projects.sigaaPlugin.desc'),
      tags: ["JavaScript", "Browser Extension", "UX"],
      github: "https://github.com/ErikaNSantos/SIGAA-plugin",
      demo: null,
      image: "/images/project-bg.png"
    }
  ];
  return (
    <Layout>
      <section className="py-20 container">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">{t('projects.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden glass-effect-dark hover:glass-effect-strong transition-all duration-300"
            >
              {/* Image Area */}
              <div className="aspect-video w-full bg-black/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full glass-effect text-primary transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-xl w-full glass-effect hover:glass-effect-strong transition-all" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> {t('projects.github')}
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" className="rounded-xl w-full bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> {t('projects.demo')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
