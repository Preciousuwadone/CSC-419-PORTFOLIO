import React from 'react';
import { Github, Lightbulb, Target, Code2, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "aura",
    title: "AURA - The AI HR Operating System",
    description: "Built a full-stack HR co-pilot that automates operations and ensures ethical governance using an 'Auditable AI' framework.",
    problem: "Enterprises lack intelligent, proactive HR tools that are both automated and ethically compliant.",
    solution: "A modular AI platform combining workforce management with AI Governance-as-a-Service to ensure fair, unbiased decisions.",
    techStack: ["Node.js", "Python", "React", "PostgreSQL"],
    githubUrl: "https://github.com/AURA-HR-AI/AURAVersion1.git",
  },
  {
    id: "privacy-simulator",
    title: "Digital Privacy Risk Simulator",
    description: "Full-stack Cloud + AI app that assesses digital privacy risk using a rule-based logic engine to classify exposure levels.",
    problem: "Users are unaware of how small digital habits like public Wi-Fi use expose them to major cyber threats.",
    solution: "A rule-based AI engine that evaluates behaviors through an adaptive survey, scoring exposure in real-time.",
    techStack: ["React", "Flask", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/Preciousuwadone/digital_privacy-simulator-ng.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Technical solutions developed to address industry challenges in AI Governance, Cloud Infrastructure, and Data Privacy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <article key={project.id} className="group bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{project.description}</p>
                </div>

                <div className="space-y-5 mb-10 flex-grow">
                  <div className="p-6 bg-rose-50/50 rounded-3xl border border-rose-100/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-4 h-4 text-rose-600" />
                      <span className="text-xs font-black uppercase text-rose-600">The Challenge</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-black uppercase text-emerald-600">The Solution</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/project/${project.id}`} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-700 transition-all">
                    <Github className="w-6 h-6" />
                  </a>
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