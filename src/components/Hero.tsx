export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Principal Engineer & Integration Architect
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
        Ritesh Kumar Das <br />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          API Architect & Senior Full Stack Engineer
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
        Over **15+ years of comprehensive experience** designing, developing, and modernizing highly scalable web and product applications. 
        Expertise in transforming legacy monolithic structures into decoupled **microservices (Node.js, NestJS, TypeScript)**, 
        optimizing **PostgreSQL database schemas**, managing **Redis distributed caching**, and engineering **Agentic AI/RAG workflows** 
        utilizing LangGraph, LangChain, and pgvector.
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
        <span>📍 Greater Noida, UP, India</span>
        <span>✉️ riteshkdas@gmail.com</span>
        <span>📞 +91-9818445246</span>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <a 
          href="#experience" 
          className="px-6 py-3 bg-slate-900 hover:bg-slate-800 transition-all text-white font-medium rounded-lg text-sm shadow-md"
        >
          View Enterprise Experience
        </a>
      </div>
    </section>
  );
}
