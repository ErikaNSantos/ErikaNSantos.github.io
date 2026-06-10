import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Briefcase, Zap, Code, LineChart, FlaskConical, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const skillCards = [
    {
      title: t('about.skills.data'),
      icon: LineChart,
      color: "text-blue-400",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel"]
    },
    {
      title: t('about.skills.industrial'),
      icon: Briefcase,
      color: "text-primary",
      skills: ["Lean Six Sigma", "KPI Management", "Root Cause Analysis", "Process Automation"]
    },
    {
      title: t('about.skills.scientific'),
      icon: FlaskConical,
      color: "text-teal",
      skills: ["SciPy", "Optimization", "Statistical Modeling", "Validation"]
    },
    {
      title: t('about.skills.soft'),
      icon: BrainCircuit,
      color: "text-yellow-400",
      skills: ["Critical Analysis", "Communication", "Problem Solving", "Analytical Thinking"]
    }
  ];

  const experiences = [
    {
      title: t('about.items.data.title'),
      company: t('about.items.data.subtitle'),
      desc: t('about.items.data.desc'),
      icon: Briefcase,
      date: `2022 — ${t('common.present')}`
    },
    {
      title: t('about.items.thesis.title'),
      company: t('about.items.thesis.subtitle'),
      desc: t('about.items.thesis.desc'),
      icon: Code,
      date: "2026"
    },
    {
      title: t('about.items.openSource.title'),
      company: t('about.items.openSource.subtitle'),
      desc: t('about.items.openSource.desc'),
      icon: Zap,
      date: t('common.continuous')
    }
  ];

  return (
    <Layout>
      <section className="py-24 container bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Header & Intro */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">{t('common.introduction')}</p>
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-heading leading-tight">{t('about.title')}</h1>
                <div className="w-20 h-1.5 bg-primary mt-4 mb-8" />
                <p className="text-secondary text-[18px] leading-[32px]">
                  {t('about.intro')}
                </p>
              </div>
              <div className="bg-tertiary rounded-2xl p-8 border border-white/5 shadow-card">
                <h3 className="text-white text-[24px] font-bold mb-6">{t('about.journey')}</h3>
                <div className="space-y-4 text-secondary leading-[28px]">
                  <p>{t('about.journeyDesc')}</p>
                  <p>{t('about.transition')}</p>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">{t('common.journey')}</p>
              <h2 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] mb-12">{t('about.doing')}</h2>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal to-transparent hidden md:block" />
                
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Card Content */}
                      <div className="w-full md:w-[45%] bg-tertiary p-8 rounded-2xl border border-white/5 shadow-card relative group hover:border-primary/50 transition-all">
                        <span className="text-primary text-sm font-bold mb-2 block">{exp.date}</span>
                        <h4 className="text-white text-xl font-bold mb-1">{exp.title}</h4>
                        <p className="text-teal font-medium text-sm mb-4">{exp.company}</p>
                        <p className="text-secondary text-sm leading-relaxed">{exp.desc}</p>
                        
                        {/* Decorative Dot for MD+ screens */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 hidden md:block
                          ${index % 2 === 0 ? '-right-[2.6rem]' : '-left-[2.6rem]'}`} 
                        />
                      </div>
                      
                      {/* Icon Spacer for MD+ screens */}
                      <div className="w-12 h-12 rounded-full bg-tertiary border-2 border-primary flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-xl">
                        <exp.icon className="h-5 w-5 text-primary" />
                      </div>
                      
                      <div className="hidden md:block w-[45%]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Reorganized */}
            <div>
              <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">{t('common.skills')}</p>
              <h2 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] mb-12">{t('about.skills.technicalTitle')}</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCards.map((stack, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-tertiary rounded-2xl p-8 border border-white/5 shadow-card hover:border-primary/30 transition-all flex flex-col h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 shadow-inner">
                      <stack.icon className={`h-6 w-6 ${stack.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-6">{stack.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {stack.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 rounded-lg bg-background text-secondary text-xs font-medium border border-white/5 hover:text-white hover:border-primary/50 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
