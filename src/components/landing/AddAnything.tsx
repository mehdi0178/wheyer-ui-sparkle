import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";

const features = [
  {
    title: "Smart Scheduling",
    body: "Set blackout dates, capacity limits, and seasonal pricing rules instantly with our visual calendar.",
  },
  {
    title: "Catalog Management",
    body: "Build itineraries, add-ons and departures once, then publish them everywhere in a single click.",
  },
  {
    title: "Discount Engine",
    body: "Run early-bird, group and coupon offers with automatic guardrails on your margins.",
  },
  {
    title: "Insightful Analytics",
    body: "See conversion, demand and repeat-guest trends across every channel you sell on.",
  },
  {
    title: "Third-party Integrations",
    body: "Connect CRMs, accounting tools and channel managers through native integrations.",
  },
  {
    title: "Back Office Control",
    body: "Manage staff roles, permissions and payouts from one secure operator console.",
  },
];

function CalendarMock() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <div className="w-full max-w-[280px] rounded-2xl bg-card p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-ink">Select Dates</span>
        <span className="rounded-md bg-chart-1/15 px-2 py-0.5 text-[10px] font-semibold text-chart-1">
          Active
        </span>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="font-semibold">
            {d}
          </span>
        ))}
        {days.map((d) => {
          const selected = d >= 9 && d <= 11;
          const blocked = d === 13 || d === 14;
          return (
            <span
              key={d}
              className={[
                "grid aspect-square place-items-center rounded-md font-semibold",
                selected
                  ? "bg-chart-1 text-primary-foreground"
                  : blocked
                    ? "text-destructive line-through"
                    : "text-ink",
              ].join(" ")}
            >
              {d}
            </span>
          );
        })}
      </div>
      <button className="mt-4 w-full rounded-lg bg-chart-1 py-2 text-[11px] font-semibold text-primary-foreground">
        Update Schedule
      </button>
    </div>
  );
}

export function AddAnything() {
  const [open, setOpen] = useState(0);

  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
          Add anything you need
          <br />
          for your{" "}
          <span className="underline decoration-chart-1 decoration-4 underline-offset-8">
            business
          </span>{" "}
          as you go.
        </h2>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {features.map((f, i) => (
              <div key={f.title} className={i === open ? "bg-card shadow-soft rounded-2xl" : ""}>
                <button
                  onClick={() => setOpen(i === open ? -1 : i)}
                  aria-expanded={i === open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`text-sm font-semibold ${i === open ? "text-ink" : "text-muted-foreground"}`}
                  >
                    {f.title}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform ${i === open ? "rotate-180" : ""}`}
                  />
                </button>
                {i === open && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                    <a
                      href="#pricing"
                      className="mt-3 inline-block text-xs font-semibold text-chart-1"
                    >
                      Learn more →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid overflow-hidden rounded-3xl sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-5 bg-mist p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                Availability
              </p>
              <div className="flex items-center gap-3">
                <span className="grid size-14 place-items-center rounded-xl bg-muted">
                  <Clock className="size-6 text-ink-soft" />
                </span>
                <span className="grid size-14 place-items-center rounded-xl bg-card font-display text-lg font-extrabold text-chart-1 shadow-soft">
                  24/7
                </span>
              </div>
            </div>
            <div className="grid place-items-center bg-ink-gradient p-8">
              <CalendarMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
