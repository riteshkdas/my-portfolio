const experiences = [
  {
    role: "Senior Tech. Consultant – Engineering",
    company: "ICS",
    period: "Jun 2025 — Jul 2026",
    coreTech: ["Node.js", "TypeScript", "NextJS", "ReactJS", "LoopBack 4", "PostgreSQL", "LangGraph", "pgvector"],
    description: "Led the technical design and execution of enterprise backend microservices and API-driven architectures. Designed reusable components, secure API contracts, and robust service boundaries. Optimized database schemas, execution tuning, and implemented complex ACL structures. Architected cutting-edge Generative AI and Agentic applications using RAG frameworks, LangChain, LangGraph, and hybrid cloud/local LLM strategy routing.",
  },
  {
    role: "Senior Associate Engineer",
    company: "TC Global",
    period: "May 2015 — May 2025",
    coreTech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "React.js", "Next.js", "PHP"],
    description: "Served a transformative 10-year tenure driving application development and navigating technical evolution from traditional monoliths to high-performance cloud microservices. Engineered robust REST APIs and event-driven workflows leveraging Redis for distributed caching and load optimization. Standardized workflows with Docker and customized automated CI/CD pipelines.",
  },
  {
    role: "SSE – Lead Developer",
    company: "Rapidsoft Systems, Inc.",
    period: "Jun 2010 — Apr 2015",
    coreTech: ["PHP", "CakePHP", "MySQL", "JavaScript", "REST APIs"],
    description: "Led development operations for high-traffic web and mobile-backend architectures. Designed scalable database models, handled comprehensive requirement analyses, system blueprints, and critical production monitoring.",
  },
  {
    role: "Sr. Software Engineer",
    company: "E-Soft Solutions Inc.",
    period: "Sep 2009 — Jun 2010",
    coreTech: ["PHP", "MySQL", "MVC", "JavaScript", "HTML"],
    description: "Developed PHP/MySQL web platforms and core components using MVC frameworks. Handled high-level performance upgrades, complex database integrations, and systemic debugging cycles.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Professional Engineering Record</h2>
        <p className="text-slate-500 text-sm mt-1">15+ years of driving system modernization, API stability, and cutting-edge innovations.</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row justify-between gap-6 md:gap-12 hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div className="md:w-1/3 space-y-2">
              <h3 className="font-bold text-lg text-slate-900 leading-snug">{exp.role}</h3>
              <p className="text-blue-600 text-sm font-semibold">{exp.company}</p>
              <p className="text-slate-400 text-xs font-medium">{exp.period}</p>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.coreTech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-semibold rounded border border-slate-200/60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-normal">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
