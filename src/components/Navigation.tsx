import React, { useState, useEffect } from "react";
import { Menu, X, Download, Cloud, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 no-print ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <a
            href="#"
            className="group flex items-center gap-2.5"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-black text-xl leading-none tracking-tight">
                PRECIOUS
              </span>
              <span className="text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase leading-none mt-1">
                Personal Portfolio
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-5 py-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-300 text-sm font-bold"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={handleDownloadPDF}
              className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95"
            >
              <span>Export PDF</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 px-6 transition-all duration-500">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between px-6 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-300 group"
                >
                  <span className="font-bold text-lg">{link.label}</span>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
              <button 
                onClick={handleDownloadPDF}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-[1.8rem] font-black text-lg mt-4 shadow-lg shadow-blue-100"
              >
                <Download className="w-5 h-5" />
                Export PDF
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;