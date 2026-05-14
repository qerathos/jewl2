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
    <div className="min-h-screen bg-background">
      {/* Premium Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-wider">Oferta limitada</p>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Kit IA para Renda Extra</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl sm:text-3xl font-bold text-accent">€27</p>
              <p className="text-xs text-muted-foreground">Acesso vitalício</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
              Comece a gerar renda hoje
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Tudo que você precisa para monetizar com ChatGPT está aqui. Sem complicações.
            </p>
          </div>
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
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pagamento 100% seguro com Stripe
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Seus dados são protegidos
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Garantia de 30 dias
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
