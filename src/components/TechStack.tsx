const techCategories = [
  {
    title: "Enterprise Architecture & Core",
    skills: ["API Design (RESTful)", "Microservices", "System Modernization", "AuthN/AuthZ (JWT/ACL)", "Agile / Scrum Leadership"],
  },
  {
    title: "Backend & Frontend Stack",
    skills: ["Node.js", "TypeScript", "NestJS", "LoopBack 4", "Next.js", "React.js", "Tailwind CSS"],
  },
  {
    title: "Data, Infrastructure & AI Ecosystem",
    skills: ["PostgreSQL", "Redis Caching", "MySQL", "Docker Containerization", "AWS Services", "LangChain / LangGraph", "pgvector / RAG"],
  },
];

export default function TechStack() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Core Engineering Foundations</h2>
        <p className="text-slate-500 text-sm mt-1">Deep technology stack driven by production-scale application delivery.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techCategories.map((category) => (
          <div 
            key={category.title} 
            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm space-y-4 hover:border-blue-300 transition-colors"
          >
            <h3 className="font-bold text-blue-600 text-sm tracking-wider uppercase">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li 
                  key={skill} 
                  className="px-3 py-1 rounded bg-slate-50 text-slate-700 text-xs border border-slate-200 font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
