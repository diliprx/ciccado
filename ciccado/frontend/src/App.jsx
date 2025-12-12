import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useActiveSection } from "./hooks/useActiveSection";
import { BinaryRain } from "./components/BinaryRain";
import { Navigation } from "./components/Navigation";
import { ThemeToggle } from "./components/ThemeToggle";
import { Footer } from "./components/Footer";
import { HomeSection } from "./pages/HomeSection";
import { TeamSection } from "./pages/TeamSection";
import { AchievementsSection } from "./pages/AchievementsSection";
import { ProfilesSection } from "./pages/ProfilesSection";
import { SponsorsSection } from "./pages/SponsorsSection";
import { ContactSection } from "./pages/ContactSection";
import { navItems } from "./assets/data";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader";

const CTFTeamWebsite = () => {
  const { themeClasses } = useTheme();
  const activeSection = useActiveSection(navItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader />
      </div>
    );
  }


  return (
    <div className={`min-h-screen ${themeClasses} font-mono relative overflow-hidden transition-colors duration-300`}>
      <BinaryRain />
      <ThemeToggle />
      <Navigation activeSection={activeSection} />
      <HomeSection />
      <TeamSection />
      <AchievementsSection />
      <ProfilesSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CTFTeamWebsite />
    </ThemeProvider>
  );
}
