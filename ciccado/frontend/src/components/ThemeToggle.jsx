import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme, cardBg, hoverColor } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full ${cardBg} border-none ${hoverColor} transition-all hover:scale-110 shadow-lg`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-gray-600" />}
    </button>
  );
};