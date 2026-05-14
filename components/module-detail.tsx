"use client";

import { useState } from "react";
import type { Module } from "@/lib/course-data";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
}

export function ModuleDetail({ module, onBack }: ModuleDetailProps) {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(module.checklist.length).fill(false)
  );

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;
  const progress = Math.round((completedCount / module.checklist.length) * 100);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Voltar aos Módulos
      </button>

      {/* Header */}
      <div
        className="rounded-2xl p-8 md:p-10 mb-8 text-white"
        style={{ background: "var(--hero-bg)" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">
            Módulo {module.id} de 5
          </span>
        </div>
        <div className="text-5xl mb-4">{module.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
          {module.title}
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">{module.tagline}</p>
      </div>

      {/* Explanation */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
            i
          </span>
          O que vais aprender
        </h2>
        <p className="text-foreground leading-relaxed">{module.explanation}</p>
      </section>

      {/* Steps */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-5">
          📋 Passos Práticos
        </h2>
        <ol className="space-y-4">
          {module.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <p className="text-foreground leading-relaxed flex-1 pt-1">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Exercise */}
      <section
        className="rounded-2xl p-6 md:p-8 mb-6 border"
        style={{
          background: "oklch(0.96 0.025 75)",
          borderColor: "oklch(0.85 0.08 75)",
        }}
      >
        <h2 className="text-lg font-bold text-foreground mb-3">
          ✏️ Exercício Rápido
        </h2>
        <p className="text-foreground leading-relaxed">{module.exercise}</p>
      </section>

      {/* Checklist */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-foreground">
            ✅ Checklist do Módulo
          </h2>
          <span className="text-sm font-semibold text-primary">
            {completedCount}/{module.checklist.length} concluídos
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-secondary rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="space-y-3">
          {module.checklist.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-3 text-left group"
                aria-checked={checked[i]}
                role="checkbox"
              >
                <span className="flex-shrink-0 mt-0.5">
                  {checked[i] ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </span>
                <span
                  className={`leading-relaxed transition-colors ${
                    checked[i]
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {progress === 100 && (
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <p className="font-bold text-primary text-lg">
              Módulo {module.id} concluído!
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Excelente trabalho! Continua para o próximo módulo.
            </p>
          </div>
        )}
      </section>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar aos Módulos
        </button>
        {progress === 100 && (
          <button
            onClick={onBack}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Ver Próximo Módulo →
          </button>
        )}
      </div>
    </div>
  );
}
