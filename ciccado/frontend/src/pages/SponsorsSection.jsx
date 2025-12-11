import { useTheme } from "../context/ThemeContext";
import { sponsors } from "../assets/data";

export const SponsorsSection = () => {
  const { borderColor, cardBg } = useTheme();

  return (
    <section id="sponsors" className="min-h-screen py-20 px-6 relative flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Sponsors</h2>
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className={`inline-flex items-center justify-center border ${borderColor} px-8 py-4 ${cardBg} min-w-[200px] mx-6 shrink-0`}>
                <span className="text-xl font-bold">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};