import { Linkedin, Flag } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { teamMembers } from "../assets/data";

export const TeamSection = () => {
  const { borderColor, hoverColor, cardBg, theme } = useTheme();

  return (
    <section id="team" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className={`border ${borderColor} p-6 rounded-2xl ${hoverColor} transition-all transform hover:scale-105 ${cardBg}`}>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4`}>{member.handle}</p>
              <div className={`flex space-x-3 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="hover:text-blue-300 cursor-pointer" />
                </a>
                <a href={member.ctftime} target="_blank" rel="noopener noreferrer">
                  <Flag size={20} className="hover:text-green-600 cursor-pointer" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
