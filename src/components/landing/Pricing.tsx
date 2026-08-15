import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    blurb: "Everything you need to easily sell online and in person.",
    monthly: 0,
    commission: "12% commission",
    cta: "Get Starter",
    features: [
      "Unlimited experiences",
      "Basic storefront",
      "Escrow payment system",
      "Standard email support",
    ],
  },
  {
    name: "Pro",
    blurb: "Level up your business with professional reporting and lower fees.",
    monthly: 1999,
    commission: "8% commission",
    cta: "Get Pro",
    highlight: true,
    features: [
      "Everything in Starter",
      "Lower 8% commission rate",
      "Advanced analytics dashboard",
      "Priority support",
      "Custom domain integration",
    ],
  },
  {
    name: "Premium",
    blurb: "Get the best of Wheyer with custom reporting and our lowest transaction fees.",
    monthly: 5999,
    commission: "5% commission",
    cta: "Get Premium",
    features: [
      "Everything in Pro",
      "Lowest 5% commission rate",
      "Dedicated account manager",
      "API access for sync",
      "White-glove onboarding",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = (m: number) => (yearly ? Math.round(m * 0.75) : m);

  return (
    <section id="pricing" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            Pick a plan that fits
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Try us for free, no credit card required. Upgrade anytime as your travel business grows.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-border p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 transition-colors ${
                !yearly ? "bg-ink text-primary-foreground" : "text-ink-soft"
              }`}
            >
              Pay monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 transition-colors ${
                yearly ? "bg-ink text-primary-foreground" : "text-ink-soft"
              }`}
            >
              Pay yearly (save 25%)
            </button>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-3xl border p-6 sm:p-7 ${
                p.highlight
                  ? "border-transparent bg-ink text-primary-foreground shadow-lift md:-mt-6 md:pb-10"
                  : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <span className="eyebrow absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-chart-1 px-3 py-1 text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3
                className={`font-display text-lg font-bold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {p.blurb}
              </p>

              <p
                className={`mt-6 font-display text-4xl font-bold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}
              >
                ₹{price(p.monthly).toLocaleString("en-IN")}
              </p>
              <p
                className={`text-xs ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                per month
              </p>

              <p
                className={`eyebrow mt-5 grid h-9 place-items-center rounded-lg ${
                  p.highlight ? "bg-primary-foreground/10 text-primary-foreground" : "bg-muted text-ink"
                }`}
              >
                {p.commission}
              </p>

              <button
                type="button"
                className={`mt-4 h-11 w-full rounded-full text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-signal text-signal-foreground"
                    : p.name === "Premium"
                      ? "bg-ink text-primary-foreground"
                      : "border border-ink text-ink"
                }`}
              >
                {p.cta}
              </button>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-xs ${
                      p.highlight ? "text-primary-foreground/85" : "text-ink-soft"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 size-3.5 shrink-0 ${p.highlight ? "text-signal" : "text-success"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
