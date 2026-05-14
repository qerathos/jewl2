"use client"

import { type Prompt } from "@/lib/prompts-data"
import { X, Copy, Lightbulb, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

interface PromptModalProps {
  prompt: Prompt | null
  onClose: () => void
}

export function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false)
  const [copiedExample, setCopiedExample] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (prompt) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [prompt, onClose])

  if (!prompt) return null

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2000)
  }

  const handleCopyExample = () => {
    navigator.clipboard.writeText(prompt.example)
    setCopiedExample(true)
    setTimeout(() => setCopiedExample(false), 2000)
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
              Prompt #{prompt.id}
            </span>
            <h2 className="text-xl font-bold text-foreground mt-2">{prompt.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors shrink-0"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Prompt */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Prompt</h3>
            </div>
            <div className="bg-muted rounded-xl p-4 relative group">
              <p className="text-foreground pr-10 whitespace-pre-wrap">{prompt.prompt}</p>
              <button
                onClick={handleCopyPrompt}
                className="absolute top-3 right-3 p-2 bg-card rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                title="Copiar prompt"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleCopyPrompt}
              className="mt-3 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copiedPrompt ? "Copiado!" : "Copiar prompt"}
            </button>
          </div>

          {/* Example */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Exemplo de Uso</h3>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 relative group">
              <p className="text-foreground pr-10 whitespace-pre-wrap">{prompt.example}</p>
              <button
                onClick={handleCopyExample}
                className="absolute top-3 right-3 p-2 bg-card rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-accent-foreground"
                title="Copiar exemplo"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleCopyExample}
              className="mt-3 flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copiedExample ? "Copiado!" : "Copiar exemplo"}
            </button>
          </div>

          {/* Tips */}
          <div className="bg-secondary rounded-xl p-4">
            <p className="text-sm text-secondary-foreground">
              <strong>Dica:</strong> Substitui os textos entre [COLCHETES] pelas tuas informações específicas. 
              Quanto mais detalhes deres, melhores resultados terás!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
