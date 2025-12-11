import { Trophy } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { achievements } from "../assets/data";

export const AchievementsSection = () => {
  const { borderColor, hoverColor, cardBg, theme } = useTheme();

  return (
    <section id="succeeds" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Achievements & Milestones</h2>
        <p className={`text-center ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-16 max-w-3xl mx-auto`}>
          From local hackathons to international arenas, our teams have consistently ranked among the best—proving our commitment to excellence, innovation, and cybersecurity mastery.
        </p>
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-8">
                <Trophy className="text-yellow-400 mb-4" size={32} />
                <div className={`w-0.5 h-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}></div>
              </div>
              <div className={`flex-1 border ${borderColor} p-8 rounded-2xl ${hoverColor} transition-all ${cardBg}`}>
                <div className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-600"} mb-2`}>
                  {achievement.year} • {achievement.event}
                </div>
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <div className="flex items-center mb-4">
                  <Trophy className="text-orange-400 mr-2" size={20} />
                  <span className="text-lg font-semibold">{achievement.place}</span>
                </div>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-4`}>{achievement.description}</p>
                <ul className="space-y-2">
                  {achievement.details.map((detail, i) => (
                    <li key={i} className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} flex items-start`}>
                      <span className="text-red-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};