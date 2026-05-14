import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OrderSummary() {
  const price = 27
  const discount = 0

  return (
    <Card className="sticky top-8 h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Resumo da compra</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Kit IA para Renda Extra</span>
            <span className="text-foreground font-medium">€{price.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center text-sm border-t border-border pt-3">
              <span className="text-accent font-medium">Desconto</span>
              <span className="text-accent font-medium">-€{discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-foreground font-semibold">Total</span>
            <span className="text-2xl font-bold text-accent">€{(price - discount).toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">Pagamento seguro com Stripe</p>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Acesso vitalício
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Atualizações gratuitas
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Suporte por email
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Garantia de 30 dias
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
