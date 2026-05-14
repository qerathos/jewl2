"use client"

import { type PromptCategory } from "@/lib/prompts-data"

interface CategoryNavProps {
  categories: PromptCategory[]
  activeCategory: string
  onCategoryChange: (id: string) => void
}

export function PromptCategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <div className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onCategoryChange("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
