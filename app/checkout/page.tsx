import { BenefitsSection } from '@/components/checkout/benefits-section'
import { GuaranteeSection } from '@/components/checkout/guarantee-section'
import { SocialProofSection } from '@/components/checkout/social-proof-section'
import { FAQSection } from '@/components/checkout/faq-section'
import { OrderSummary } from '@/components/checkout/order-summary'
import { CheckoutEmbedded } from '@/components/checkout/checkout-embedded'

export const metadata = {
  title: 'Checkout - Kit IA para Renda Extra',
  description: 'Guia completo para usar ChatGPT e gerar renda online',
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">
            Kit IA para Renda Extra
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Tudo que você precisa para começar a ganhar com ChatGPT hoje
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guarantee */}
            <GuaranteeSection />

            {/* Benefits */}
            <BenefitsSection />

            {/* Social Proof */}
            <SocialProofSection />

            {/* FAQ */}
            <FAQSection />

            {/* Divider for mobile */}
            <div className="h-px bg-border lg:hidden my-8" />
          </div>

          {/* Right Column - Checkout */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Summary */}
            <OrderSummary />

            {/* Checkout Form */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">Finalizar compra</h2>
              <CheckoutEmbedded productId="kit-ia-renda-extra" />
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Pagamento 100% seguro
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Suportado por Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
