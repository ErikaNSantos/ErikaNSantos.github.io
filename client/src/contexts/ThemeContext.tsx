import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

const STORAGE_KEY = "theme";

// localStorage pode lançar (aba anônima, cookies bloqueados): o tema nunca pode derrubar a página.
function readStored(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/** Sem escolha salva, segue o sistema do visitante. O script em index.html faz a mesma conta antes do React, para não piscar. */
function initialTheme(defaultTheme: Theme, switchable: boolean): Theme {
  if (!switchable) return defaultTheme;
  const stored = readStored();
  if (stored) return stored;
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  return defaultTheme;
}

export function ThemeProvider({ children, defaultTheme = "dark", switchable = false }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => initialTheme(defaultTheme, switchable));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = switchable
    ? () => {
        setTheme((prev) => {
          const next = prev === "light" ? "dark" : "light";
          try {
            localStorage.setItem(STORAGE_KEY, next);
          } catch {
            // sem storage, a escolha vale só nesta visita
          }
          return next;
        });
      }
    : undefined;

  return <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
