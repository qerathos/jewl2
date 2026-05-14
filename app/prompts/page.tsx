"use client"

import { useState } from "react"
import { promptCategories, type Prompt, type PromptCategory } from "@/lib/prompts-data"
import { PromptCategoryNav } from "@/components/prompts/category-nav"
import { PromptCard } from "@/components/prompts/prompt-card"
import { PromptModal } from "@/components/prompts/prompt-modal"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = activeCategory === "all" 
    ? promptCategories 
    : promptCategories.filter(cat => cat.id === activeCategory)

  const filteredPrompts = filteredCategories.flatMap(cat => 
    cat.prompts.filter(prompt => 
      searchQuery === "" || 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(prompt => ({ ...prompt, category: cat }))
  )

  const totalPrompts = promptCategories.reduce((acc, cat) => acc + cat.prompts.length, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--hero-bg)] text-[var(--hero-fg)] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao curso
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              {totalPrompts} Prompts Prontos
            </h1>
          </div>
          
          <p className="text-lg text-[var(--hero-fg)]/80 max-w-2xl">
            Copia, cola e adapta. Cada prompt inclui um exemplo prático para começares a usar imediatamente.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <input
              type="text"
              placeholder="Pesquisar prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[var(--hero-fg)] placeholder:text-[var(--hero-fg)]/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <PromptCategoryNav 
        categories={promptCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Prompts Grid */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {activeCategory === "all" ? (
          // Show by category
          <div className="space-y-12">
            {filteredCategories.map(category => {
              const categoryPrompts = category.prompts.filter(prompt =>
                searchQuery === "" ||
                prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
              )
              
              if (categoryPrompts.length === 0) return null

              return (
                <section key={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {categoryPrompts.length} prompts
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryPrompts.map(prompt => (
                      <PromptCard 
                        key={prompt.id} 
                        prompt={prompt}
                        onClick={() => setSelectedPrompt(prompt)}
                      />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        ) : (
          // Show flat grid for single category
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrompts.map(prompt => (
              <PromptCard 
                key={prompt.id} 
                prompt={prompt}
                onClick={() => setSelectedPrompt(prompt)}
              />
            ))}
          </div>
        )}

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum prompt encontrado para esta pesquisa.</p>
          </div>
        )}
      </main>

      {/* Modal */}
      <PromptModal 
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
    </div>
  )
}
