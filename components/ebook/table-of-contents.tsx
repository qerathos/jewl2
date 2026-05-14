import { List, ChevronRight } from "lucide-react";
import { EbookCategory } from "@/lib/ebook-data";
import { Button } from "@/components/ui/button";

interface EbookTableOfContentsProps {
  categories: EbookCategory[];
  onNavigate: () => void;
}

export function EbookTableOfContents({
  categories,
  onNavigate,
}: EbookTableOfContentsProps) {
  let methodNumber = 0;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <List className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Navegacao
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Indice de Conteudos
          </h2>
        </div>
      </div>

      {/* Categories and methods */}
      <div className="space-y-6">
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h3 className="font-semibold text-foreground">{category.name}</h3>
            </div>
            <ul className="divide-y divide-border">
              {category.methods.map((method, methodIndex) => {
                methodNumber++;
                return (
                  <li
                    key={methodIndex}
                    className="px-5 py-3 flex items-center gap-4 hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={onNavigate}
                  >
                    <span className="text-sm font-mono text-primary w-6">
                      {String(methodNumber).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground flex-1">
                      {method.title}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        method.difficulty === "Facil"
                          ? "bg-green-100 text-green-700"
                          : method.difficulty === "Medio"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {method.difficulty}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Button onClick={onNavigate} size="lg" className="gap-2">
          Ver Todos os Metodos
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
