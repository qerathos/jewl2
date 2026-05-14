import { BookOpen, Sparkles, Zap } from "lucide-react";

interface EbookCoverProps {
  intro: {
    title: string;
    subtitle: string;
    hook: string;
    stats: { value: string; label: string }[];
  };
}

export function EbookCover({ intro }: EbookCoverProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Decorative badge */}
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-semibold">Ebook Premium 2024</span>
      </div>

      {/* Main title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance max-w-4xl">
        {intro.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
        {intro.subtitle}
      </p>

      {/* Hook quote */}
      <blockquote className="mt-12 max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">
            &ldquo;
          </div>
          <p className="text-lg md:text-xl text-foreground italic leading-relaxed pl-8">
            {intro.hook}
          </p>
        </div>
      </blockquote>

      {/* Stats */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {intro.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Visual element */}
      <div className="mt-16 flex items-center gap-4 text-muted-foreground">
        <div className="w-12 h-px bg-border" />
        <BookOpen className="w-6 h-6" />
        <div className="w-12 h-px bg-border" />
      </div>
    </div>
  );
}
