import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OrderSummary() {
  const price = 27
  const originalPrice = 47
  const discount = originalPrice - price

  return (
    <Card className="sticky top-24 h-fit border-accent/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Seu investimento</span>
          {discount > 0 && (
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-semibold">
              -€{discount.toFixed(2)}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Kit IA para Renda Extra</span>
            <span className="text-foreground font-medium">€{price.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center text-sm pt-3 border-t border-border">
              <span className="text-muted-foreground">
                <span className="line-through">€{originalPrice.toFixed(2)}</span> desconto
              </span>
              <span className="text-accent font-semibold">Economiza €{discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-foreground font-medium">Total</span>
            <div className="text-right">
              <span className="text-3xl font-bold text-accent">€{(price - discount + discount).toFixed(2)}</span>
              {discount > 0 && (
                <p className="text-xs text-accent/70 mt-1">
                  ~€{(price * 12).toFixed(2)}/ano
                </p>
              )}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center pt-2">
            Pagamento único. Sem cobranças recorrentes.
          </p>
        </div>

        <div className="space-y-2.5 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-4 w-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Acesso vitalício
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-4 w-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Atualizações gratuitas
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-4 w-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Suporte por email
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-4 w-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Garantia de 30 dias
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
