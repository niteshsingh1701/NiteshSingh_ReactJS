import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode
} from "react";

export type Theme = "light" | "dark" | "colorful";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage during initial render
    const savedTheme = localStorage.getItem("app-theme") as Theme | null;
    if (savedTheme && ["light", "dark", "colorful"].includes(savedTheme)) {
      return savedTheme;
    }
    return "light";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Add a small delay to ensure proper theme application
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null; // or return a loading spinner
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
