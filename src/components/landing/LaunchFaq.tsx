import { useState } from "react";
import { ArrowRight, Building2, FileCheck2, Rocket, Minus, Plus } from "lucide-react";

const steps = [
  {
    icon: Building2,
    title: "Register your business",
    body: "Start your 14-day free trial. Registration takes less than 2 minutes.",
  },
  {
    icon: FileCheck2,
    title: "Complete KYC",
    body: "Upload business documents for instant automated verification.",
  },
  {
    icon: Rocket,
    title: "Go live in minutes",
    body: "Add your first travel package and start accepting bookings immediately.",
  },
];

const faqs = [
  {
    q: "Do I need a registered travel company to sell on Wheyer?",
    a: "Yes. All vendors must provide valid business registration and ID verification during our automated KYC process.",
  },
  {
    q: "How does the escrow payment system work?",
    a: "Guest payments are held securely in escrow and released to your account within 24 hours of trip commencement.",
  },
  {
    q: "Can I manage my own availability and blackout dates?",
    a: "Absolutely. The scheduling calendar lets you set capacity, seasonal pricing and blackout dates per package.",
  },
  {
    q: "What commission does Wheyer charge?",
    a: "Commission starts at 12% on marketplace orders and drops to 6% on your own storefront traffic as volume grows.",
  },
  {
    q: "Can I use my own branding on the storefront?",
    a: "Yes — custom domain, logo, colours and fonts are supported on Pro and Premium plans.",
  },
];

export function LaunchFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Launch your store
              <br />
              faster than ever
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Getting started on Wheyer is designed to remove friction. Go from registration to your
              first sale without waiting weeks for manual approval.
            </p>
            <a
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Create your account <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="space-y-6">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-mist">
                  <s.icon className="size-4 text-chart-1" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{s.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-16">
          <h2 className="max-w-xl font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Everything you need to know about selling on the Wheyer marketplace.
          </p>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(i === open ? -1 : i)}
                  aria-expanded={i === open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`text-sm font-semibold sm:text-base ${i === open ? "text-chart-1" : "text-ink"}`}
                  >
                    {f.q}
                  </span>
                  {i === open ? (
                    <Minus className="size-4 shrink-0 text-chart-1" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {i === open && (
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
