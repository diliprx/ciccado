import { Mail, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { contactInfo } from "../assets/data";

export const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Get In Touch</h2>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Join Our Team</h3>
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-8`}>
            Ready to roll with C1CC4D0? Hit the application form and shoot your shot — your place on the squad might be waiting.
          </p>
          <a href={contactInfo.applicationFormUrl} target="_blank" rel="noopener noreferrer">
            <button className={`${theme === "dark" ? "bg-white text-black hover:bg-red-600 hover:text-white" : "bg-black text-white hover:bg-red-600"} px-8 py-3 font-bold rounded-full transition-all transform hover:scale-105 cursor-pointer`}>
              Apply Now
            </button>
          </a>
        </div>
        <div className={`border-t ${theme === "dark" ? "border-gray-700" : "border-gray-300"} pt-16`}>
          <h3 className="text-2xl font-bold mb-8">General Inquiries</h3>
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center">
              <Mail className="mr-4 text-red-600" />
              <div>
                <span className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-center`}>Email:</span>
                <span className="ml-4 text-center">{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-red-600" />
              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>Phone:</span>
                <span className="ml-4">{contactInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
