import React from 'react';
import { ArrowDown, Briefcase, Mail } from "lucide-react";

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      // Changed min-h-screen to min-h-[85vh] to prevent it from feeling like it's "trapping" the user
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white"
    >
      {/* Background Orbs - Reduced size and moved further out to avoid crowding text */}
      <div className="absolute top-1/4 -left-20 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="text-blue-600 font-semibold mb-3 tracking-widest uppercase text-sm">
            Hello, I'm
          </p>

          {/* Scaled down from 7xl to 6xl for a cleaner desktop look */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Precious Uwadone
          </h1>

          {/* Scaled down subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium">
            Aspiring Cloud Engineer | Final-Year CS Student
          </p>

          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building technology that improves lives. Passionate about cloud computing, 
            AI, and creating meaningful software that solves real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleScroll("#projects")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 font-bold"
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </button>
            
            <button
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 font-bold"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
          </div>
        </div>

        {/* Improved Scroll indicator positioning */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => handleScroll("#about")}
            className="text-slate-300 hover:text-blue-600 transition-colors p-2"
            aria-label="Scroll to about"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;