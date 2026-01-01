import React from "react";
import { Cloud, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=precious.uwadone@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/Preciousuwadone", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/precious-uwadone-b42bba242/", icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors"
            >
              <Cloud className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <span>Precious Uwadone</span>
            </a>

            <nav className="flex flex-wrap justify-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const isMail = link.href.startsWith("mailto:");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    // CRITICAL FIX: Ensures email doesn't open empty tabs
                    target={isMail ? "_self" : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm font-medium text-slate-400">
              © {new Date().getFullYear()}. Precious Uwadone. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;