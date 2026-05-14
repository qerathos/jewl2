import { Gift, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EbookBonusSectionProps {
  tips: string[];
}

export function EbookBonusSection({ tips }: EbookBonusSectionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-accent/20 p-3 rounded-xl">
          <Gift className="w-6 h-6 text-accent" />
        </div>
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Extra
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Bonus: Conselhos Finais
          </h2>
        </div>
      </div>

      {/* Tips list */}
      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="bg-primary/10 p-2 rounded-lg shrink-0">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-2xl p-8 md:p-10 text-center">
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Agora E Contigo
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Tens as ferramentas. Tens os metodos. Tens o plano. A unica coisa que
          falta e a tua accao. Escolhe 1 metodo e comeca hoje.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/prompts">
            <Button size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Ver 100+ Prompts Prontos
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Voltar ao Curso
            </Button>
          </Link>
        </div>
      </div>

      {/* Signature */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-card border border-border rounded-xl px-8 py-6">
          <p className="text-muted-foreground text-sm">
            Obrigado por leres ate ao fim.
          </p>
          <p className="text-foreground font-semibold mt-2">
            O teu sucesso com IA comeca agora.
          </p>
        </div>
      </div>
    </div>
  );
}
