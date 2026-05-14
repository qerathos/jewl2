import type { Module } from "@/lib/course-data";
import { ChevronRight } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring"
    >
      <div className="flex items-start gap-5">
        {/* Module number & emoji */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:scale-105 transition-all duration-200">
            {module.emoji}
          </div>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Módulo {module.id}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {module.tagline}
          </p>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-3 py-1">
              📋 {module.steps.length} passos
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-3 py-1">
              ✏️ Exercício prático
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-3 py-1">
              ✅ Checklist
            </span>
          </div>
        </div>

        {/* Arrow */}
        <ChevronRight className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 mt-1" />
      </div>
    </button>
  );
}
