export function KitNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 md:px-10 border-b border-[--kit-border] bg-[--kit-bg]/90 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[--kit-neon] shadow-[0_0_8px_var(--kit-neon)]" />
        <span className="text-sm font-semibold tracking-tight text-[--kit-fg]">Kit IA</span>
      </div>
      <a
        href="#comprar"
        className="kit-btn-primary text-xs px-4 py-2 rounded-lg"
      >
        Comprar Agora
      </a>
    </nav>
  );
}
