"use client"

import { type Prompt } from "@/lib/prompts-data"
import { Copy, ChevronRight } from "lucide-react"
import { useState } from "react"

interface PromptCardProps {
  prompt: Prompt
  onClick: () => void
}

export function PromptCard({ prompt, onClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
      className="group bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {prompt.title}
        </h3>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full shrink-0">
          #{prompt.id}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
        {prompt.prompt}
      </p>

      <div className="flex items-center justify-between">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Copy className="w-3.5 h-3.5" />
          {copied ? "Copiado!" : "Copiar prompt"}
        </button>
        
        <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
          Ver exemplo
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  )
}
