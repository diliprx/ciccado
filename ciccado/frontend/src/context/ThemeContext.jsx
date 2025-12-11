import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeClasses = theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900";
  const borderColor = theme === "dark" ? "border-gray-800" : "border-gray-300";
  const hoverColor = theme === "dark" ? "hover:border-red-400" : "hover:border-red-600";
  const cardBg = theme === "dark" ? "bg-black bg-opacity-50" : "bg-white bg-opacity-80";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeClasses, borderColor, hoverColor, cardBg }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
