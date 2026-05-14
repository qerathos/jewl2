import { ShieldCheck } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <div className="border-2 border-accent/30 rounded-lg p-6 bg-gradient-to-br from-accent/8 to-accent/5 space-y-4">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-accent/20">
          <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground mb-2 text-lg">Garantia de 30 dias</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se não estiver 100% satisfeito, devolvemos seu dinheiro integralmente. 
            <span className="block mt-1 font-semibold text-foreground">Sem perguntas. Sem complicações.</span>
          </p>
        </div>
      </div>
      <div className="pt-3 border-t border-accent/20">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Nossa garantia demonstra total confiança na qualidade do conteúdo. Você tem 30 dias para explorar tudo e decidir.
        </p>
      </div>
    </div>
  )
}
