import React from 'react';
import { Briefcase, Award, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  date: string;
  location?: string;
  points?: string[];
}

const workExperience: ExperienceItem[] = [
 
  {
    title: "Project Management (Agile Scrum)",
    organization: "MTN Nigeria",
    date: "July 2024 - Oct 2024",
    location: "Lagos, Nigeria",
    points: ["Facilitated sprint planning", "Business analysis & requirements gathering", "User story development & prioritization"]
  }, 
  {
    title: "Software Tester",
    organization: "MTN Nigeria",
    date: "Sept 2024 - Oct 2024",
    location: "Lagos, Nigeria",
    points: ["Functional testing for user stories", "Comprehensive test case scripting", "Agile Scrum collaboration"]
  },
  {
    title: "Frontend Developer",
    organization: "Cognifyz Technologies",
    date: "Dec 2024 - Jan 2025",
    points: ["Responsive design implementation", "JavaScript interactive elements", "API Integration", "Web form validation"]
  },
  
  {
    title: "Software Development Intern",
    organization: "Infoverse Digital-Ed",
    date: "July 2025 - October 2025",
    points: ["Full-Stack REST API Development", "Security & Authentication", "Scalability & Performance", "Core Feature Delivery", "Deployment Readiness"]
  }
];

const certifications = [
  { title: "MTN Certification of Achievement", org: "MTN Nigeria", date: "11/2024", icon: "🏆" },
  { title: "Azure Data Fundamentals", org: "Microsoft", date: "10/2024", icon: "📊" },
  { title: "Azure Fundamentals", org: "Microsoft", date: "09/2024", icon: "☁️" },
  { title: "Dell GenAI Foundations", org: "Dell Technologies", date: "09/2024", icon: "🤖" },
  { title: "Azure AI Fundamentals", org: "Microsoft", date: "09/2024", icon: "🧠" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience & Certifications</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience - Wider Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Work History</h3>
              </div>

              <div className="space-y-10 border-l-2 border-slate-100 ml-4">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-500" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">{exp.title}</h4>
                        <p className="text-blue-600 font-semibold">{exp.organization}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {exp.points?.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications - Narrower Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Certifications</h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{cert.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm truncate">{cert.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{cert.org}</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;