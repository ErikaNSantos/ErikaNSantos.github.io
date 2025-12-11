import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/projects", label: t('nav.projects') },
    { href: "/blog", label: 'Blog' },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background Elements - Refined */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]" />
        {/* Noise texture removida para evitar erro de build se o arquivo não existir */}
      </div>

      {/* Navigation with iOS Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect-strong border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-primary font-heading tracking-tight hover:opacity-80 transition-opacity">
              Érika Santos
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 glass-effect rounded-full p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all",
                  language === 'pt'
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all",
                  language === 'en'
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>

            <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/10 transition-colors">
              <a href="https://github.com/ErikaNSantos" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/10 transition-colors">
              <a href="https://www.linkedin.com/in/erikanogueirasantos/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer with Glass Effect */}
      <footer className="glass-effect border-t border-white/10 py-8 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Érika Nogueira Santos. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:erika.nogueira.santos@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="h-4 w-4" />
              erika.nogueira.santos@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
