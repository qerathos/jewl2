export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'kit-ia-renda-extra',
    name: 'Kit IA para Renda Extra',
    description: 'Guia completo para usar ChatGPT e outras IAs para gerar renda passiva online',
    priceInCents: 2700, // 27€
    images: ['https://example.com/kit-ia.jpg'],
  },
]
