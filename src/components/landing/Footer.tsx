export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <span className="font-display text-lg font-bold text-ink">
          Wheyer<span className="text-signal">.</span>
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wheyer. Built for travel businesses in India.
        </p>
      </div>
    </footer>
  );
}
