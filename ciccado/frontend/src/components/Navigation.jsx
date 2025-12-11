import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navItems } from "../assets/data";

export const Navigation = ({ activeSection }) => {
  const { theme, borderColor } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full ${theme === "dark" ? "bg-black" : "bg-white"} bg-opacity-90 backdrop-blur-sm z-50 border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <h1>C1CC4D0</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`hover:text-red-400 transition-colors capitalize ${
                activeSection === item ? "text-red-400 border-b-2 border-red-400" : ""
              }`}
            >
              {item === "sponsors" ? "Our Sponsors" : item}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${theme === "dark" ? "bg-black" : "bg-white"} border-t ${borderColor}`}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left px-6 py-3 capitalize ${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100"}`}
            >
              {item === "sponsors" ? "Our Sponsors" : item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
