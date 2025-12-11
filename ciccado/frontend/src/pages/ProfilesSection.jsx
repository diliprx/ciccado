import { Linkedin, Instagram, Clock, MessageCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { socialProfiles } from "../assets/data";

export const ProfilesSection = () => {
  const { borderColor, hoverColor, cardBg } = useTheme();

  const iconComponents = {
    Linkedin,
    Instagram,
    Clock,
    MessageCircle
  };

  return (
    <section id="profiles" className="min-h-screen py-20 px-6 relative flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Find Us Online</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialProfiles.map((profile, index) => {
            const IconComponent = iconComponents[profile.icon];
            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`border ${borderColor} p-12 ${profile.roundedClass} ${hoverColor} transition-all transform hover:scale-105 ${cardBg} group`}
              >
                <IconComponent size={64} className={`mx-auto mb-4 ${profile.hoverColor}`} />
                <h3 className="text-xl font-bold">{profile.name}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};