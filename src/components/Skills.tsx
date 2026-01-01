import React from 'react';
import { Code2, Server, Cloud, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
    borderColor: "hover:border-blue-400",
    iconColor: "text-blue-500",
    bgColor: "group-hover:bg-blue-50"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Supabase"],
    borderColor: "hover:border-emerald-400",
    iconColor: "text-emerald-500",
    bgColor: "group-hover:bg-emerald-50"
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["AWS (EC2/S3)", "Azure Fundamentals", "Docker", "Machine Learning"],
    borderColor: "hover:border-purple-400",
    iconColor: "text-purple-500",
    bgColor: "group-hover:bg-purple-50"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Linux/Bash", "Figma", "Postman"],
    borderColor: "hover:border-orange-400",
    iconColor: "text-orange-500",
    bgColor: "group-hover:bg-orange-50"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Tech Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Skills & <span className="text-blue-600">Technologies</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              My technical ecosystem, built on modern frameworks and cloud-native principles.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 ${category.borderColor} hover:-translate-y-2`}
              >
                {/* Category Header */}
                <div className="flex flex-col items-start gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-slate-50 ${category.bgColor} transition-colors duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor} transition-transform group-hover:rotate-12`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-50 text-slate-600 text-[13px] font-bold rounded-xl border border-slate-100 group-hover:border-transparent group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;