import { CheckCircle2, Target } from "lucide-react";

interface EbookIntroSectionProps {
  intro: {
    title: string;
    paragraphs: string[];
  };
}

export function EbookIntroSection({ intro }: EbookIntroSectionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Introducao
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Porque Este Ebook Existe
          </h2>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-6">
        {intro.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key points box */}
      <div className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8">
        <h3 className="font-semibold text-foreground mb-4">
          O que vais encontrar neste ebook:
        </h3>
        <ul className="space-y-3">
          {[
            "30 metodos reais e testados para gerar renda com IA",
            "Ferramentas especificas para cada metodo",
            "Exemplos concretos com valores reais",
            "Nivel de dificuldade e potencial de ganhos",
            "8 erros criticos que deves evitar",
            "Plano de accao de 7 dias para comecar",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Motivational note */}
      <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-medium text-center">
          Nao precisas de ser especialista em tecnologia.
          <br />
          <span className="text-primary">
            So precisas de vontade de aprender e agir.
          </span>
        </p>
      </div>
    </div>
  );
}
