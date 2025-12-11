import Layout from "@/components/Layout";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center container py-20">
        <div className="max-w-2xl w-full space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.description')}
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.a
              href="mailto:erika.nogueira.santos@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl glass-effect-dark hover:glass-effect-strong transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('contact.email')}</h3>
                  <p className="text-muted-foreground text-sm">erika.nogueira.santos@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/erikanogueirasantos/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl glass-effect-dark hover:glass-effect-strong transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Linkedin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('contact.linkedin')}</h3>
                  <p className="text-muted-foreground text-sm">/in/erikanogueirasantos</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="https://github.com/ErikaNSantos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl glass-effect-dark hover:glass-effect-strong transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('contact.github')}</h3>
                  <p className="text-muted-foreground text-sm">@ErikaNSantos</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center glass-effect rounded-3xl p-6"
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{t('contact.location')}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
