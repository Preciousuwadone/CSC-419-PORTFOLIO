import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Code2, Rocket, Target, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const projectData = {
  aura: {
    title: "AURA - The AI HR Operating System",
    fullDescription: "AURA is a modular AI platform designed to manage company policies, people, and performance. It features a unique 'AI Governance-as-a-Service' module that audits automated decisions for ethical compliance and bias reduction.",
    problem: "Traditional HR software is reactive. Enterprises need proactive, intelligent tools that can automate admin while ensuring legal and ethical AI governance.",
    solution: "I designed a modular AI co-pilot using NLP for employee engagement and a proprietary Governance Layer that audits the AI's logic to ensure fairness in every automated decision.",
    features: [
      "Conversational HR Chat Assistant (NLP)",
      "Sentiment & Burnout Detection Analytics",
      "AI Governance-as-a-Service Auditing Module",
      "Automated Workflow Engine for Compliance"
    ],
    learning: "This project deepened my knowledge of AI Ethics and 'Fairness-by-Design.' I mastered bridging Python-based NLP services with a production-ready React frontend.",
    tech: ["Node.js", "Python", "React", "PostgreSQL", "Ethical AI Frameworks"]
  },
  "privacy-simulator": {
    title: "Digital Privacy Risk Simulator",
    fullDescription: "A full-stack Cloud + AI application that evaluates online privacy exposure through an interactive survey. It classifies users as Low, Medium, or High risk based on behavior patterns.",
    problem: "There is a massive awareness gap regarding digital footprints. Users need a way to visualize how specific online habits expose them to identity theft.",
    solution: "I designed a rule-based AI logic engine implemented with Flask and React. It evaluates behaviors through an adaptive survey and scores risk levels in real-time.",
    features: [
      "Rule-based AI Logic Engine",
      "Adaptive Survey UI with State Management",
      "Real-time Risk Classification (Low/Med/High)",
      "Cloud-ready Backend with Firebase Integration"
    ],
    learning: "I mastered the integration of a logic engine into a cloud architecture and improved my data visualization skills using React and technical scoring algorithms.",
    tech: ["React", "Flask", "Firebase", "TypeScript", "Tailwind CSS"]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const project = projectData[id as keyof typeof projectData];
  if (!project) return <div className="p-20 text-center"><Link to="/" className="text-blue-600 underline">Project Not Found</Link></div>;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tech.map(t => (
              <span key={t} className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">{t}</span>
            ))}
          </div>

          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-16">{project.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <section className="p-8 bg-rose-50 rounded-[2.5rem] border border-rose-100">
              <div className="flex items-center gap-3 mb-4"><Target className="w-5 h-5 text-rose-500" /><h2 className="text-xl font-bold text-rose-900">The Challenge</h2></div>
              <p className="text-slate-700 leading-relaxed">{project.problem}</p>
            </section>
            <section className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100">
              <div className="flex items-center gap-3 mb-4"><Rocket className="w-5 h-5 text-emerald-500" /><h2 className="text-xl font-bold text-emerald-900">The Solution</h2></div>
              <p className="text-slate-700 leading-relaxed">{project.solution}</p>
            </section>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Core Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-700 font-bold">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
            <Brain className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3"><Code2 className="text-blue-400" />What I Learned</h2>
              <p className="text-slate-300 text-lg leading-relaxed">{project.learning}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;