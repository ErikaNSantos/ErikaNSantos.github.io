import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Cloud, Database, Code, Terminal } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('pillars.clarity.title'),
      icon: "🧠",
      desc: t('pillars.clarity.desc'),
    },
    {
      title: t('pillars.wisdom.title'),
      icon: "🎓",
      desc: t('pillars.wisdom.desc'),
    },
    {
      title: t('pillars.creativity.title'),
      icon: "💡",
      desc: t('pillars.creativity.desc'),
    },
    {
      title: t('pillars.freedom.title'),
      icon: "🕊️",
      desc: t('pillars.freedom.desc'),
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-strong text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t('hero.status')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-2xl px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40" asChild>
                <Link href="/projects">
                  {t('hero.viewProjects')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                <Link href="/about">
                  {t('hero.aboutMe')}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Lado Direito: Foto (New) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 w-[350px] h-[350px] rounded-full p-2 glass-effect-strong border border-white/10 shadow-2xl">
                <img 
                  src="/images/Foto1.webp" 
                  alt="Erika Nogueira Santos"
                  className="w-full h-full rounded-full object-cover border-4 border-white/5"
                />
              </div>

              {/* Cards Flutuantes */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-10 glass-effect p-3 rounded-xl flex items-center gap-2 shadow-lg"
              >
                <Database className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-bold">SQL Expert</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-20 glass-effect p-3 rounded-xl flex items-center gap-2 shadow-lg"
              >
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold">Lean Six Sigma</span>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pillars.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl glass-effect hover:glass-effect-strong transition-all"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
