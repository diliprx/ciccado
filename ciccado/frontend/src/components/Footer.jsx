import { useTheme } from "../context/ThemeContext";

export const Footer = () => {
  const { borderColor, theme } = useTheme();

  return (
    <footer className={`border-t ${borderColor} py-6 text-center ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>
      &copy; {new Date().getFullYear()} C1CC4D0
    </footer>
  );
};