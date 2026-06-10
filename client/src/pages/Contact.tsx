import React, { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import { Linkedin, Github, MapPin } from "lucide-react";

// Para envio real sem backend (compatível com GitHub Pages), crie um form em
// https://formspree.io e defina no .env:  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ID
// Sem essa variável, o formulário abre o app de e-mail com a mensagem preenchida.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
const CONTACT_EMAIL = "erika.nogueira.santos@gmail.com";

const inputClass =
  "bg-background py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none font-medium border border-white/5 focus:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/40 transition-all";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    // Honeypot: bots preenchem o campo invisível; humanos não.
    if (honeypot) {
      setForm({ name: "", email: "", message: "" });
      return;
    }

    if (!FORM_ENDPOINT) {
      // Fallback sem backend: abre o cliente de e-mail com tudo preenchido.
      const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      toast.info(t("contact.form.mailtoNotice"));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success(t("contact.form.success"));
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t("contact.form.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center container py-24 pt-32 bg-background">
        <div className="w-full flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-[0.75] bg-tertiary p-6 sm:p-8 rounded-2xl border border-white/5 shadow-card"
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              {t("contact.sectionTitle")}
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              {t("contact.title")}
            </h2>
            <div className="w-20 h-1.5 bg-primary mt-4 mb-8" />

            <p className="text-secondary text-[17px] mb-8 leading-[30px]">
              {t("contact.description")}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              {/* Honeypot anti-spam (invisível para humanos) */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">{t("contact.form.name")}</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  className={inputClass}
                  autoComplete="name"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">{t("contact.form.email")}</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={inputClass}
                  autoComplete="email"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">{t("contact.form.message")}</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className={`${inputClass} resize-none`}
                  required
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100 focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {loading ? t("contact.form.sending") : t("contact.form.send")}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center md:justify-start">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{t("contact.location")}</span>
              </div>
              <a
                href="https://www.linkedin.com/in/erikanogueirasantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ErikaNSantos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors"
              >
                <Github className="h-5 w-5 text-primary" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="xl:flex-1 flex justify-center items-center min-h-[280px]"
          >
            <InteractiveGlobe />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
