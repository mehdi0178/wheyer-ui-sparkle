import { ArrowRight } from "lucide-react";

function BrowserMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-signal" />
        <span className="size-2.5 rounded-full bg-success" />
        <div className="mx-auto h-4 w-40 rounded-full bg-muted sm:w-64" />
      </div>
      <div className="relative grid place-items-center bg-sage/60 px-6 py-16 sm:py-24">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Trek the Himalayas
          </h3>
          <div className="mx-auto mt-5 h-10 w-40 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sky-fade pb-4 pt-14 sm:pt-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-ink-soft">
            <span className="size-1.5 rounded-full bg-success" />
            Built for Indian travel operators
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] font-bold text-ink sm:text-6xl lg:text-7xl">
            Create a travel
            <br />
            business without limits
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Build your storefront, manage operations, and scale globally. High-converting tools to
            sell everywhere effortlessly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-full border border-ink/15 bg-background px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-muted sm:w-auto"
            >
              Create Account
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Start for free. No credit card required.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
          <BrowserMock />

          {/* floating catalog panel */}
          <div className="absolute -left-2 top-8 hidden w-52 rounded-2xl border border-border bg-card p-3 shadow-lift float-slow lg:block">
            <div className="h-7 rounded-lg bg-muted" />
            <div className="mt-3 space-y-2">
              {[
                "bg-sage",
                "bg-blush",
                "bg-mist",
              ].map((tone, i) => (
                <div
                  key={tone}
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 ${
                    i === 2 ? "bg-mist" : ""
                  }`}
                >
                  <span className={`size-3.5 rounded ${tone}`} />
                  <span
                    className={`h-2 rounded-full ${i === 2 ? "w-16 bg-ink" : "w-20 bg-muted"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* payments pill */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:left-8 sm:translate-x-0">
            <span className="grid size-8 place-items-center rounded-full bg-sage">
              <span className="size-2.5 rounded-full bg-success" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-bold text-ink-soft">Payments</span>
              <span className="block text-sm font-bold text-success">Active</span>
            </span>
          </div>

          {/* phone */}
          <div className="absolute -right-4 top-4 hidden w-40 rounded-[1.75rem] border-[5px] border-ink bg-card p-2 shadow-lift lg:block">
            <div className="h-24 rounded-xl bg-ink" />
            <div className="mt-2 h-2.5 w-20 rounded-full bg-muted" />
            <div className="mt-2 flex gap-2">
              <div className="size-10 rounded-lg bg-muted" />
              <div className="flex-1 space-y-1.5 py-1">
                <div className="h-2 w-full rounded-full bg-muted" />
                <div className="h-2 w-2/3 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
