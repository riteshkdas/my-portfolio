import { cacheLife } from "next/cache";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";

// Cache stable annotations like the copyright year for maximum static performance
async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Home() {
  const currentYear = await getCurrentYear();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
      <Hero />
      <TechStack />
      <Experience />
      <footer className="text-center text-slate-500 text-sm border-t border-slate-900 pt-8">
        © {currentYear} Built with Next.js & TypeScript. Ready to scale.
      </footer>
    </main>
  );
}
