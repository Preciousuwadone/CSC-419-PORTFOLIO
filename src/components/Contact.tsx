import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
  name: "Email",
  value: "precious.uwadone@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=precious.uwadone@gmail.com",
  icon: Mail,
  hoverClass: "hover:border-blue-500 hover:bg-blue-50/50",
  iconClass: "text-blue-600" 
  },
  {
    name: "GitHub",
    value: "github.com/Preciousuwadone",
    href: "https://github.com/Preciousuwadone",
    icon: Github,
    hoverClass: "hover:border-slate-900 hover:bg-slate-50",
    iconClass: "text-slate-900"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/precious-uwadone-b42bba242",
    href: "https://www.linkedin.com/in/precious-uwadone-b42bba242/",
    icon: Linkedin,
    hoverClass: "hover:border-blue-700 hover:bg-blue-50/50",
    iconClass: "text-blue-700"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          
          <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply have a conversation about technology.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactLinks.map((link) => {
              const isMail = link.href.startsWith("mailto:");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  // CRITICAL FIX: target must be _self for mailto to work correctly
                  target={isMail ? "_self" : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className={`group flex flex-col items-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${link.hoverClass}`}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className={`w-6 h-6 ${link.iconClass}`} aria-hidden="true" />
                  </div>

                  <span className="font-bold text-slate-800 mb-1 text-lg">{link.name}</span>
                  <span className="text-sm text-slate-400 font-medium flex items-center gap-1">
                    {isMail ? "Send Email" : "Connect"}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="text-slate-400 font-medium flex items-center justify-center gap-2">
              <span>Based in Lagos, Nigeria 🇳🇬</span>
              <span className="text-slate-200">•</span>
              <span>Open to remote opportunities</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;