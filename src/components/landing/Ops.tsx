import tajImg from "@/assets/travel-taj.jpg";
import glampImg from "@/assets/travel-glamping.jpg";

const columns = [
  {
    title: "Smooth end-to-end management",
    body: "Everything is managed centrally through one unified dashboard, on desktop or via the Wheyer app — including bookings, availability, payouts and refunds.",
  },
  {
    title: "Booking flows that convert",
    body: "Processing is streamlined for speed with custom calendar views, digital ticketing, automated notifications, and integrations for any need.",
  },
  {
    title: "Ready-to-book experiences on tap",
    body: "Add new itineraries, multi-day tours, or custom packages to your storefront quickly, with seamless connections to global distribution networks.",
  },
];

const bookings = [
  { name: "Samiya Koch", date: "8 Oct 2026 · 2 guests", status: "Pending", amount: "₹24,990.00" },
  { name: "Tara Sherif", date: "9 Oct 2026 · 4 guests", status: "Confirmed", amount: "₹19,180.00" },
  { name: "Munmuki Mishra", date: "12 Oct 2026 · 2 guests", status: "Confirmed", amount: "₹12,625.00" },
  { name: "Kayllan Pankera", date: "14 Oct 2026 · 6 guests", status: "Confirmed", amount: "₹5,980.00" },
  { name: "Ava Bell", date: "19 Oct 2026 · 3 guests", status: "Confirmed", amount: "₹48,905.00" },
];

export function Ops() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <h2 className="font-display text-4xl font-bold leading-[1.02] text-ink sm:text-6xl">
            One stop for
            <br />
            <span className="text-muted-foreground italic">all your ops</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft lg:justify-self-end">
            We've condensed complex travel logistics into a single, fluid interface. High
            performance, less friction.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-base font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-5 rounded-3xl bg-muted/50 p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr]">
          {/* storefront panel */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-display text-sm font-bold text-ink">Wheyer.</span>
              <span className="hidden gap-4 text-[10px] font-semibold text-muted-foreground sm:flex">
                <span>Experiences</span>
                <span>Team</span>
              </span>
              <span className="size-6 rounded-full bg-ink" />
            </div>
            <div className="relative mt-4 overflow-hidden rounded-xl">
              <img
                src={tajImg}
                alt="Featured experience: Discover Agra"
                loading="lazy"
                width={800}
                height={600}
                className="h-44 w-full object-cover sm:h-56"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4">
                <p className="eyebrow text-primary-foreground/70">Featured experience</p>
                <p className="font-display text-xl font-bold text-primary-foreground">
                  Discover Agra
                </p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {["Snow Leopard Trek", "Valley Camping", "Monastery Tour"].map((t, i) => (
                <div key={t}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={glampImg}
                      alt={t}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-16 w-full object-cover sm:h-20"
                    />
                    {i !== 1 && (
                      <span
                        className={`eyebrow absolute left-1.5 top-1.5 rounded px-1.5 py-0.5 text-[8px] ${
                          i === 0 ? "bg-lime text-lime-foreground" : "bg-signal text-signal-foreground"
                        }`}
                      >
                        {i === 0 ? "New" : "Top"}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 truncate text-[10px] font-semibold text-ink">{t}</p>
                  <p className="text-[9px] text-muted-foreground">From ₹12,000</p>
                </div>
              ))}
            </div>
          </div>

          {/* bookings panel */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-start justify-between">
              <span>
                <span className="block font-display text-base font-bold text-ink">
                  Active bookings
                </span>
                <span className="block text-[10px] text-muted-foreground">Management console</span>
              </span>
              <span className="size-6 rounded-md bg-mist" />
            </div>
            <div className="mt-3 flex gap-1 rounded-full bg-muted p-1 text-[10px] font-semibold">
              <span className="rounded-full bg-card px-3 py-1 text-ink shadow-soft">Today</span>
              <span className="px-3 py-1 text-muted-foreground">History</span>
            </div>
            <ul className="mt-3 divide-y divide-border">
              {bookings.map((b) => (
                <li key={b.name} className="flex items-center justify-between gap-2 py-2.5">
                  <span className="min-w-0 leading-tight">
                    <span className="block truncate text-[11px] font-bold text-ink">{b.name}</span>
                    <span className="block truncate text-[9px] text-muted-foreground">
                      {b.date}
                    </span>
                  </span>
                  <span
                    className={`eyebrow shrink-0 rounded px-2 py-1 text-[8px] ${
                      b.status === "Pending"
                        ? "bg-signal text-signal-foreground"
                        : "bg-sage text-lime-foreground"
                    }`}
                  >
                    {b.status}
                  </span>
                  <span className="shrink-0 text-[11px] font-bold text-ink">{b.amount}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid h-10 place-items-center rounded-xl bg-ink text-xs font-semibold text-primary-foreground">
              Access full operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
