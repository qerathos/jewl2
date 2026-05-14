"use client";

import { ChevronDown, ChevronRight, Lightbulb, Wrench, Euro, TrendingUp } from "lucide-react";
import { EbookCategory, EbookMethod } from "@/lib/ebook-data";

interface EbookMethodSectionProps {
  categories: EbookCategory[];
  expandedCategory: number | null;
  setExpandedCategory: (index: number | null) => void;
}

export function EbookMethodSection({
  categories,
  expandedCategory,
  setExpandedCategory,
}: EbookMethodSectionProps) {
  let globalMethodNumber = 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            O Conteudo Principal
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            30 Formas de Ganhar Dinheiro com IA
          </h2>
        </div>
      </div>

      {/* Categories accordion */}
      <div className="space-y-4">
        {categories.map((category, catIndex) => {
          const startNumber = globalMethodNumber + 1;
          const endNumber = globalMethodNumber + category.methods.length;
          globalMethodNumber = endNumber;

          return (
            <div
              key={catIndex}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Category header */}
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === catIndex ? null : catIndex
                  )
                }
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-primary">
                    {String(startNumber).padStart(2, "0")}-
                    {String(endNumber).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-foreground text-left">
                    {category.name}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {category.methods.length} metodos
                  </span>
                </div>
                {expandedCategory === catIndex ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {/* Category content */}
              {expandedCategory === catIndex && (
                <div className="border-t border-border divide-y divide-border">
                  {category.methods.map((method, methodIndex) => (
                    <MethodCard
                      key={methodIndex}
                      method={method}
                      number={startNumber + methodIndex}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary note */}
      <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
        <p className="text-foreground">
          <span className="font-semibold">Lembra-te:</span> Nao precisas de fazer
          todos os 30. Escolhe 1, domina-o, e depois expande.
        </p>
      </div>
    </div>
  );
}

function MethodCard({ method, number }: { method: EbookMethod; number: number }) {
  return (
    <div className="p-5 md:p-6">
      {/* Method header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary font-mono">
            {String(number).padStart(2, "0")}
          </span>
          <h4 className="text-lg font-semibold text-foreground">{method.title}</h4>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              method.difficulty === "Facil"
                ? "bg-green-100 text-green-700"
                : method.difficulty === "Medio"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {method.difficulty}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-4">
        {method.description}
      </p>

      {/* Info grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Tools */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Wrench className="w-4 h-4 text-primary" />
            Ferramentas
          </div>
          <div className="flex flex-wrap gap-2">
            {method.tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs bg-card border border-border px-2 py-1 rounded-md text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Earnings */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Euro className="w-4 h-4 text-primary" />
            Potencial de Ganhos
          </div>
          <span className="text-lg font-semibold text-primary">
            {method.potentialEarnings}
          </span>
        </div>
      </div>

      {/* Example */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Lightbulb className="w-4 h-4 text-accent" />
          Exemplo Real
        </div>
        <p className="text-sm text-muted-foreground italic">{method.example}</p>
      </div>
    </div>
  );
}
