const items = [
  {
    stat: "3x",
    statLabel: "Increase in direct bookings",
    quote:
      "Wheyer completely transformed how we run our tours. We went from managing bookings on WhatsApp to a fully automated storefront overnight.",
    name: "Rajesh Kumar",
    company: "Himalayan Trails",
  },
  {
    stat: "15%",
    statLabel: "Higher checkout conversion",
    quote:
      "The escrow system gives our customers peace of mind, and the centralised dashboard means I finally have my weekends back.",
    name: "Priya Singh",
    company: "Goa Water Sports",
  },
  {
    stat: "50+",
    statLabel: "Hours saved monthly",
    quote:
      "We save hours every week on admin. Setting up the store was as easy as adding a few photos and typing out our itineraries.",
    name: "Amit Patel",
    company: "Desert Safaris",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-5xl">
            Thriving with
            <br />
            <span className="italic underline decoration-signal underline-offset-8">Wheyer</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/65 lg:justify-self-end">
            Join a global community of operators building high-performance travel brands.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-card p-6">
              <p className="font-display text-3xl font-bold text-chart-1">{t.stat}</p>
              <p className="eyebrow mt-1 text-muted-foreground">{t.statLabel}</p>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-mist font-display text-xs font-bold text-ink">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-bold text-ink">{t.name}</span>
                  <span className="eyebrow block text-muted-foreground">{t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
