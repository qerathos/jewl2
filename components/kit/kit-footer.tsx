export function KitFooter() {
  return (
    <footer className="px-5 py-10 md:px-10 border-t border-[--kit-border]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[--kit-neon]" aria-hidden="true" />
          <span className="text-sm font-semibold text-[--kit-fg]">Kit IA para Renda Extra</span>
        </div>
        <p className="text-xs text-[--kit-fg-subtle] text-center">
          &copy; {new Date().getFullYear()} Kit IA · Produto digital · Todos os direitos reservados
        </p>
        <div className="flex items-center gap-4 text-xs text-[--kit-fg-subtle]">
          <a href="#" className="hover:text-[--kit-fg] transition-colors">Politica de Privacidade</a>
          <a href="#" className="hover:text-[--kit-fg] transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
