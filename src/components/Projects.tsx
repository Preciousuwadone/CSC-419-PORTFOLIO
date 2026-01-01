import React from 'react';
import { Github, Lightbulb, Target, ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string; 
}

const projects: Project[] = [
  {
    title: "AURA - Employee Attrition Predictor",
    description: "AI-powered system to predict and prevent employee turnover in African SMEs",
    problem: "73% of African SMEs fail due to poor workforce planning and unexpected employee departures.",
    solution: "Built a Node.js backend with ML models to predict employee attrition risk and provide actionable retention strategies.",
    techStack: ["Node.js", "Python", "TensorFlow", "PostgreSQL", "React"],
    githubUrl: "https://github.com/AURA-HR-AI/AURAVersion1.git",
    liveUrl: "#"
  },
  {
    title: "Digital Privacy Risk Simulator",
    description: "Educational platform helping users understand their digital footprint and privacy risks",
    problem: "Most users don't understand how their online behavior exposes them to privacy risks.",
    solution: "Created an interactive simulator that analyzes user behavior patterns and provides personalized privacy recommendations.",
    techStack: ["React", "TypeScript", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/Preciousuwadone/digital_privacy-simulator-ng.git",
    liveUrl: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Technical solutions developed to address specific industry challenges in AI, Cloud, and Data Privacy.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <article 
                key={project.title} 
                className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-200/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Decorative Icon */}
                <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code2 className="w-16 h-16 text-slate-900" />
                </div>

                {/* Header */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Problem/Solution Blocks */}
                <div className="space-y-5 mb-10 flex-grow">
                  <div className="p-6 bg-rose-50/50 rounded-3xl border border-rose-100/50 group-hover:bg-rose-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-rose-500 rounded-lg">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-rose-600">The Challenge</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100/50 group-hover:bg-emerald-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-emerald-600">The Solution</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-bold bg-slate-100 text-slate-600 rounded-full border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;