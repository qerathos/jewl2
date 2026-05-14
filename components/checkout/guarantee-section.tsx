import { ShieldCheck } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 space-y-3">
      <div className="flex items-start gap-3">
        <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">Garantia de 30 dias</h3>
          <p className="text-sm text-muted-foreground">
            Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas. Sem complicações.
          </p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground pl-9">
        Essa é a nossa promessa de qualidade. Queremos que você tenha 100% de confiança.
      </p>
    </div>
  )
}
