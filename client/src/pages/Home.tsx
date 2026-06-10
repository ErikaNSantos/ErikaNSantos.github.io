import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Database, Terminal } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";

// three.js (~1 MB) carrega depois do conteúdo: o texto do hero aparece
// imediatamente e as partículas entram em seguida.
const ComputersCanvas = lazy(() => import("@/components/ComputersCanvas"));

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
      <section className="relative w-full h-screen mx-auto overflow-hidden bg-background">
        {/* Background gradiente local (sem dependência externa) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(120%_80%_at_70%_10%,rgba(145,94,255,0.18)_0%,transparent_60%),radial-gradient(80%_60%_at_10%_90%,rgba(0,206,168,0.08)_0%,transparent_55%)]" />

        {/* Elemento 3D Interativo no Fundo (Wave Particles) */}
        <div className="absolute inset-0 z-10">
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </div>

        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-20 pointer-events-none`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-primary' />
            {/* Linha pontilhada estilo Arjun */}
            <div className='w-1 sm:h-80 h-40 dotted-line' />
          </div>

          <div className="pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/80 text-primary text-sm font-bold border border-primary/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('hero.status')}
            </div>

            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              {t('hero.greeting')} <span className='text-primary'>Erika</span>
            </h1>
            <p className="text-lavender font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 max-w-3xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-8">
              <Button size="lg" className="rounded-xl px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all" asChild>
                <Link href="/projects">
                  {t('hero.viewProjects')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                <Link href="/about">
                  {t('hero.aboutMe')}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Foto Pessoal Integrada com Badges Reais */}
        <div className="absolute right-10 bottom-20 lg:block hidden z-30">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Brilho de fundo */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            
            {/* Container da Foto */}
            <div className="relative w-[320px] h-[320px] rounded-full p-1 bg-gradient-to-r from-primary to-teal shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                <img 
                  src="/images/Foto1.jpg" 
                  alt="Erika Nogueira Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tags Flutuantes Reais */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 glass-effect px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-primary/30 pointer-events-auto"
            >
              <Database className="h-4 w-4 text-primary" />
              <span className="text-xs font-black text-white uppercase tracking-tighter">SQL & Python</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-16 glass-effect px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-teal/30 pointer-events-auto"
            >
              <Terminal className="h-4 w-4 text-teal" />
              <span className="text-xs font-black text-white uppercase tracking-tighter">Lean Six Sigma</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="about" className="py-24 relative bg-background z-10">
        <div className="container">
          <div className="mb-16">
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">{t('common.introduction')}</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{t('pillars.title')}</h2>
            <div className="w-20 h-1.5 bg-primary mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-tertiary border border-white/5 shadow-card hover:border-primary/50 transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-4xl mb-6 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-white text-[20px] font-bold mb-4">{pillar.title}</h3>
                <p className="text-secondary text-[14px] leading-[24px]">
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
