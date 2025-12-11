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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-strong text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
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

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glass Card Container with iOS effect */}
              <div className="absolute inset-0 glass-effect-dark rounded-3xl shadow-2xl flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/15 transition-all"
                  >
                    <Database className="h-10 w-10 text-blue-400" />
                    <span className="font-medium text-sm text-center">Data Analysis</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/15 transition-all"
                  >
                    <Cloud className="h-10 w-10 text-purple-400" />
                    <span className="font-medium text-sm text-center">Cloud Eng</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/15 transition-all"
                  >
                    <Code className="h-10 w-10 text-green-400" />
                    <span className="font-medium text-sm text-center">Python</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/15 transition-all"
                  >
                    <Terminal className="h-10 w-10 text-orange-400" />
                    <span className="font-medium text-sm text-center">DevOps</span>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-700" />
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
