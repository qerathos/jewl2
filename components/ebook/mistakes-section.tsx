import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { MistakeToAvoid } from "@/lib/ebook-data";

interface EbookMistakesSectionProps {
  mistakes: MistakeToAvoid[];
}

export function EbookMistakesSection({ mistakes }: EbookMistakesSectionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-destructive/10 p-3 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <div>
          <span className="text-xs font-semibold text-destructive uppercase tracking-wider">
            Atencao
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            8 Erros Criticos a Evitar
          </h2>
        </div>
      </div>

      {/* Intro text */}
      <p className="text-lg text-muted-foreground mb-8">
        Aprender com os erros dos outros e mais rapido e menos doloroso. Estes
        sao os erros mais comuns que vejo em quem esta a comecar a ganhar
        dinheiro com IA.
      </p>

      {/* Mistakes list */}
      <div className="space-y-6">
        {mistakes.map((mistake, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            {/* Mistake header */}
            <div className="bg-destructive/5 border-b border-border px-5 py-4 flex items-start gap-3">
              <div className="bg-destructive/10 p-2 rounded-lg shrink-0">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <span className="text-xs text-destructive font-semibold">
                  Erro #{index + 1}
                </span>
                <h3 className="font-semibold text-foreground">{mistake.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <p className="text-muted-foreground">{mistake.description}</p>

              {/* Solution */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-primary font-semibold uppercase">
                    Solucao
                  </span>
                  <p className="text-foreground text-sm mt-1">
                    {mistake.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 bg-muted/50 border border-border rounded-xl p-6 text-center">
        <p className="text-foreground">
          <span className="font-semibold">Resumo:</span> Sê honesto, aprende
          continuamente, especializa-te, e trata cada cliente como ouro.
        </p>
      </div>
    </div>
  );
}
