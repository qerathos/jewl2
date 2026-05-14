"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Download,
  Lightbulb,
  Star,
  Target,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ebookIntro,
  ebookCategories,
  mistakesToAvoid,
  sevenDayPlan,
  bonusTips,
} from "@/lib/ebook-data";
import { EbookCover } from "@/components/ebook/cover";
import { EbookIntroSection } from "@/components/ebook/intro-section";
import { EbookMethodSection } from "@/components/ebook/method-section";
import { EbookMistakesSection } from "@/components/ebook/mistakes-section";
import { EbookPlanSection } from "@/components/ebook/plan-section";
import { EbookBonusSection } from "@/components/ebook/bonus-section";
import { EbookTableOfContents } from "@/components/ebook/table-of-contents";

type Section =
  | "cover"
  | "intro"
  | "toc"
  | "methods"
  | "mistakes"
  | "plan"
  | "bonus";

const sections: { id: Section; label: string }[] = [
  { id: "cover", label: "Capa" },
  { id: "intro", label: "Introducao" },
  { id: "toc", label: "Indice" },
  { id: "methods", label: "30 Metodos" },
  { id: "mistakes", label: "Erros a Evitar" },
  { id: "plan", label: "Plano 7 Dias" },
  { id: "bonus", label: "Bonus" },
];

export default function EbookPage() {
  const [currentSection, setCurrentSection] = useState<Section>("cover");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const currentIndex = sections.findIndex((s) => s.id === currentSection);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < sections.length - 1;

  const goToSection = (section: Section) => setCurrentSection(section);
  const goPrev = () => canGoPrev && setCurrentSection(sections[currentIndex - 1].id);
  const goNext = () => canGoNext && setCurrentSection(sections[currentIndex + 1].id);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar ao Curso</span>
          </Link>

          <div className="flex items-center gap-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(section.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSection === section.id
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                title={section.label}
              />
            ))}
          </div>

          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
        </div>
      </header>

      {/* Section Navigation Pills */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => goToSection(section.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                currentSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {currentSection === "cover" && <EbookCover intro={ebookIntro} />}
        {currentSection === "intro" && <EbookIntroSection intro={ebookIntro} />}
        {currentSection === "toc" && (
          <EbookTableOfContents
            categories={ebookCategories}
            onNavigate={() => goToSection("methods")}
          />
        )}
        {currentSection === "methods" && (
          <EbookMethodSection
            categories={ebookCategories}
            expandedCategory={expandedCategory}
            setExpandedCategory={setExpandedCategory}
          />
        )}
        {currentSection === "mistakes" && (
          <EbookMistakesSection mistakes={mistakesToAvoid} />
        )}
        {currentSection === "plan" && <EbookPlanSection plan={sevenDayPlan} />}
        {currentSection === "bonus" && <EbookBonusSection tips={bonusTips} />}
      </main>

      {/* Bottom Navigation */}
      <footer className="sticky bottom-0 bg-background/95 backdrop-blur border-t border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </Button>

          <span className="text-sm text-muted-foreground">
            {sections[currentIndex].label}
          </span>

          <Button
            variant="ghost"
            onClick={goNext}
            disabled={!canGoNext}
            className="gap-2"
          >
            <span className="hidden sm:inline">Proximo</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
