"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, Circle, Target } from "lucide-react";
import { DayPlan } from "@/lib/ebook-data";

interface EbookPlanSectionProps {
  plan: DayPlan[];
}

export function EbookPlanSection({ plan }: EbookPlanSectionProps) {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (dayIndex: number, taskIndex: number) => {
    const key = `${dayIndex}-${taskIndex}`;
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(key)) {
      newCompleted.delete(key);
    } else {
      newCompleted.add(key);
    }
    setCompletedTasks(newCompleted);
  };

  const totalTasks = plan.reduce((acc, day) => acc + day.tasks.length, 0);
  const completedCount = completedTasks.size;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Accao Imediata
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Plano de 7 Dias para Comecar
          </h2>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-card border border-border rounded-xl p-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">
            O teu progresso
          </span>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{totalTasks} tarefas
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <p className="text-sm text-primary font-medium mt-3 text-center">
            Parabens! Completaste o plano de 7 dias!
          </p>
        )}
      </div>

      {/* Days timeline */}
      <div className="space-y-6">
        {plan.map((day, dayIndex) => {
          const dayCompleted = day.tasks.every((_, taskIndex) =>
            completedTasks.has(`${dayIndex}-${taskIndex}`)
          );

          return (
            <div
              key={dayIndex}
              className={`bg-card border rounded-xl overflow-hidden transition-all ${
                dayCompleted ? "border-primary/50 bg-primary/5" : "border-border"
              }`}
            >
              {/* Day header */}
              <div className="bg-muted/50 border-b border-border px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      dayCompleted
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {day.day}
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Dia {day.day}</span>
                    <h3 className="font-semibold text-foreground">{day.title}</h3>
                  </div>
                </div>
                {dayCompleted && (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                )}
              </div>

              {/* Tasks */}
              <div className="p-5">
                <ul className="space-y-3">
                  {day.tasks.map((task, taskIndex) => {
                    const isCompleted = completedTasks.has(
                      `${dayIndex}-${taskIndex}`
                    );
                    return (
                      <li key={taskIndex}>
                        <button
                          onClick={() => toggleTask(dayIndex, taskIndex)}
                          className="w-full flex items-start gap-3 text-left group"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                          )}
                          <span
                            className={`transition-all ${
                              isCompleted
                                ? "text-muted-foreground line-through"
                                : "text-foreground"
                            }`}
                          >
                            {task}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Day goal */}
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Objetivo:</span>{" "}
                    {day.goal}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
