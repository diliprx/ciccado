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

const CTFTeamWebsite = () => {
  const { themeClasses } = useTheme();
  const activeSection = useActiveSection(navItems);

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
