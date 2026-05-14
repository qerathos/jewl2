'use client'

import { useEffect, useState } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { startCheckoutSession } from '@/app/actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export function CheckoutEmbedded({ productId }: { productId: string }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    startCheckoutSession(productId)
      .then((secret) => {
        setClientSecret(secret)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to start checkout session:', error)
        setLoading(false)
      })
  }, [productId])

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-spin">
          <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full" />
        </div>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="w-full p-4 bg-red-900/20 border border-red-900/30 rounded-lg text-red-400 text-sm">
        Erro ao carregar o formulário de pagamento. Por favor, tente novamente.
      </div>
    )
  }

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
