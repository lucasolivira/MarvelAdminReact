import React, { createContext, useContext, useState, useEffect } from "react";

export const lightTheme = {
  name: "light",
  colors: {
    "--bg": "#ffffff",
    "--text": "#121212",
    "--primary": "#8257e6",
  },
};

export const darkTheme = {
  name: "dark",
  colors: {
    "--bg": "#121212",
    "--text": "#ffffff",
    "--primary": "#bb86fc",
  },
};

export type Theme = typeof lightTheme;

interface ThemeContextType {
  theme?: Theme;
  toggleTheme?: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme,
  );

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    const newTheme = newIsDarkMode ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
