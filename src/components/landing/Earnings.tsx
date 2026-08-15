import { useState } from "react";

const tiers = [
  { id: "premium", label: "Premium", note: "10–12%", rate: 0.1 },
  { id: "pro", label: "Pro", note: "8–10%", rate: 0.08 },
  { id: "starter", label: "Starter", note: "5%", rate: 0.05 },
];

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function Earnings() {
  const [price, setPrice] = useState(10000);
  const [trips, setTrips] = useState(20);
  const [tier, setTier] = useState(tiers[0]!);

  const revenue = price * trips;
  const fee = revenue * tier.rate;
  const net = revenue - fee;

  return (
    <section id="earnings" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            Estimate your earnings on Wheyer
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            See how much your travel business could earn by selling experiences on Wheyer.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-border shadow-lift lg:grid-cols-2">
          {/* inputs */}
          <div className="bg-card p-6 sm:p-8">
            <label htmlFor="price" className="text-xs font-bold text-ink">
              Average price per trip
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-input px-3 focus-within:ring-2 focus-within:ring-ring">
              <span className="text-sm text-muted-foreground">₹</span>
              <input
                id="price"
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                className="w-full bg-transparent py-3 text-sm font-semibold text-ink outline-none"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <label htmlFor="trips" className="text-xs font-bold text-ink">
                Trips sold per month
              </label>
              <span className="rounded-md bg-mist px-2 py-0.5 text-xs font-bold text-ink">
                {trips}
              </span>
            </div>
            <input
              id="trips"
              type="range"
              min={1}
              max={200}
              value={trips}
              onChange={(e) => setTrips(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--ink)]"
            />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>1 trip</span>
              <span>200 trips</span>
            </div>

            <p className="mt-6 text-xs font-bold text-ink">Commission tier</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {tiers.map((t) => {
                const active = t.id === tier.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTier(t)}
                    aria-pressed={active}
                    className={`rounded-xl border px-2 py-3 text-left transition-colors ${
                      active ? "border-ink bg-mist" : "border-input hover:bg-muted"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`size-2.5 rounded-full border ${
                          active ? "border-ink bg-ink" : "border-input"
                        }`}
                      />
                      <span className="text-[11px] font-bold text-ink">{t.label}</span>
                    </span>
                    <span className="mt-1 block text-[10px] text-muted-foreground">{t.note}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* results */}
          <div className="bg-ink-gradient p-6 sm:p-8">
            <p className="eyebrow text-primary-foreground/55">Estimated monthly revenue</p>
            <p className="mt-1 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              {inr(revenue)}
            </p>

            <p className="eyebrow mt-6 text-primary-foreground/55">
              Estimated Wheyer fee ({Math.round(tier.rate * 100)}%)
            </p>
            <p className="mt-1 font-display text-xl font-bold text-chart-2">−{inr(fee)}</p>

            <div className="my-6 h-px bg-primary-foreground/15" />

            <p className="eyebrow text-primary-foreground/55">Your net earnings</p>
            <p className="mt-1 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
              {inr(net)}
            </p>

            <a
              href="#pricing"
              className="mt-7 grid h-12 place-items-center rounded-full bg-signal text-sm font-bold text-signal-foreground transition-transform hover:-translate-y-0.5"
            >
              Start selling on Wheyer
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          *Estimates based on average marketplace performance. Actual earnings may vary.
        </p>
      </div>
    </section>
  );
}
