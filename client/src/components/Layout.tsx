import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SOCIAL = {
  github: "https://github.com/ErikaNSantos",
  linkedin: "https://www.linkedin.com/in/erikanogueirasantos/",
  email: "mailto:erika.nogueira.santos@gmail.com",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: t("nav.contact") },
  ];

  // Fecha o menu ao navegar e trava o scroll do body enquanto aberto
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const LanguageToggle = (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1 border border-white/10">
      {(["pt", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "px-3 py-1 rounded-full text-xs font-bold transition-all",
            language === lang
              ? "bg-primary text-primary-foreground"
              : "text-secondary hover:text-white"
          )}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-black text-primary-foreground text-xl group-hover:rotate-12 transition-transform">
              E
            </div>
            <span className="text-white text-[18px] font-bold flex">
              Érika Santos
              <span className="lg:block hidden">&nbsp;| Process &amp; Data</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[17px] font-medium transition-colors hover:text-white",
                  location === item.href
                    ? "text-white font-bold"
                    : "text-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {LanguageToggle}

            <div className="hidden md:flex gap-2">
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2 -mr-2"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
            >
              <div className="container py-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "py-3 px-2 rounded-lg text-[18px] font-medium transition-colors",
                      location === item.href
                        ? "text-white font-bold bg-white/5"
                        : "text-secondary hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex gap-6 pt-5 mt-3 border-t border-white/5 px-2">
                  <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={SOCIAL.email} aria-label="Email" className="text-secondary hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-white font-bold text-lg">Érika Nogueira Santos</p>
            <p className="text-secondary text-sm">© 2026 — {t("footer.copyright")}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href={SOCIAL.email}
              className="text-secondary hover:text-primary transition-colors flex items-center gap-2 text-lg break-all"
            >
              <Mail className="h-5 w-5 shrink-0" />
              erika.nogueira.santos@gmail.com
            </a>
            <div className="flex gap-6">
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
