import { useTheme } from "../context/ThemeContext";

export const HomeSection = () => {
  const { theme } = useTheme();

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">C1CC4D0</h1>
        <p className="text-xl md:text-2xl mb-8 text-red-400">/ Recon | Break | Capture</p>
        <p className={`max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-8 leading-relaxed`}>
          From national arenas to global CTF battlegrounds, we push ourselves to break limits and think differently. Each challenge teaches us something new, helping us grow, innovate, and sharpen our technical and analytical skills as a team.
        </p>
        <button
          onClick={() => scrollToSection("profiles")}
          className={`${theme === "dark" ? "bg-white text-black hover:bg-red-600 hover:text-white" : "bg-black text-white hover:bg-red-600"} px-8 py-3 font-bold rounded-full transition-all transform hover:scale-105 cursor-pointer`}
        >
          JOIN OUR NEXT EVENT
        </button>
      </div>
    </section>
  );
};