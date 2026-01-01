import React from 'react';
import { Heart, Target, Users, GraduationCap } from "lucide-react";
import photo1 from '../assets/photo1.jpg'; 

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Collaborative",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Heart,
    title: "Growth-Oriented",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Container */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-square">
              <img 
                src={photo1} 
                alt="Precious Uwadone"
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white relative z-10 transition-all duration-700 grayscale hover:grayscale-0"
              />
              
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-full blur-3xl z-0 opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-full blur-3xl z-0 opacity-50" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
              Final-Year CS Student at <span className="text-blue-600">Pan-Atlantic University</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                I'm a passionate final-year Computer Science student with a deep interest 
                in <strong>cloud computing</strong> and <strong>artificial intelligence</strong>.
              </p>
              <p>
                My journey in tech began with curiosity about how systems scale and evolved 
                into a mission to build technology that improves lives. I believe the best 
                software is built with empathy and technical excellence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className={`text-center p-4 rounded-2xl ${value.bg} border border-transparent hover:border-slate-200 transition-all duration-300`}
                >
                  <value.icon className={`w-6 h-6 ${value.color} mx-auto mb-3`} />
                  <p className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-widest leading-tight">
                    {value.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;