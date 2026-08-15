import type { ReactNode } from "react";

function StorefrontMock() {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="mb-3 flex gap-1.5">
        <span className="size-2 rounded-full bg-destructive/60" />
        <span className="size-2 rounded-full bg-signal" />
        <span className="size-2 rounded-full bg-success" />
      </div>
      <div className="flex gap-3">
        <div className="grid h-16 w-24 place-items-center rounded-lg border border-dashed border-ring/60 bg-mist text-[9px] font-semibold text-ink-soft">
          Upload logo
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-7 rounded-md bg-ink" />
          <div className="h-2 w-full rounded-full bg-muted" />
          <div className="h-2 w-2/3 rounded-full bg-muted" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="size-4 rounded-full bg-ink" />
        <span className="size-4 rounded-full bg-chart-1" />
        <span className="size-4 rounded-full bg-chart-5" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="h-12 rounded-lg bg-muted" />
        <div className="h-12 rounded-lg bg-muted" />
      </div>
    </div>
  );
}

function PublishMock() {
  return (
    <div className="rounded-xl bg-ink p-3">
      <div className="rounded-lg bg-card p-3">
        <div className="grid h-20 place-items-center rounded-md bg-muted">
          <div className="size-6 rounded bg-ring/50" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="h-5 w-24 rounded bg-ink" />
          <span className="text-[10px] font-bold text-chart-5">₹799.00</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-muted" />
        <div className="mt-3 grid h-7 place-items-center rounded-md bg-ink text-[9px] font-bold text-primary-foreground">
          Publish Now
        </div>
      </div>
    </div>
  );
}

function CalendarMock() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-ink">October 2026</span>
        <div className="flex gap-1">
          <span className="size-5 rounded-full border border-border" />
          <span className="size-5 rounded-full border border-border" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-muted-foreground">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="py-1 font-semibold">
            {d}
          </span>
        ))}
        {Array.from({ length: 28 }).map((_, i) => {
          const day = i + 1;
          const active = day === 9;
          const booked = [12, 13, 14].includes(day);
          return (
            <span
              key={day}
              className={`grid aspect-square place-items-center rounded-md ${
                active
                  ? "bg-ink font-bold text-primary-foreground"
                  : booked
                    ? "bg-sage font-semibold text-lime-foreground"
                    : "text-ink-soft"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-border p-2">
        <span className="size-6 rounded-full bg-ink" />
        <span className="leading-tight">
          <span className="block text-[10px] font-bold text-ink">New booking</span>
          <span className="block text-[9px] text-muted-foreground">
            Sarah booked Ladakh Safari for 3 guests
          </span>
        </span>
      </div>
    </div>
  );
}

function PayoutMock() {
  return (
    <div className="rounded-xl bg-ink p-4">
      <div className="rounded-lg bg-ink-soft/25 p-3">
        <p className="eyebrow text-primary-foreground/60">Available balance</p>
        <p className="mt-1 font-display text-2xl font-bold text-primary-foreground">₹4,25,000</p>
        <div className="mt-3 grid h-8 place-items-center rounded-md bg-card text-[10px] font-bold text-ink">
          Withdraw funds
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-ink-soft/25 p-2.5">
        <span className="flex items-center gap-2">
          <span className="size-5 rounded-full bg-success/30" />
          <span className="leading-tight">
            <span className="block text-[10px] font-bold text-primary-foreground">
              Escrow released
            </span>
            <span className="block text-[9px] text-primary-foreground/60">Booking #14812</span>
          </span>
        </span>
        <span className="text-[10px] font-bold text-signal">+₹15,000</span>
      </div>
    </div>
  );
}

const steps: {
  step: string;
  tone: string;
  title: string;
  body: string;
  mock: ReactNode;
  frame: string;
}[] = [
  {
    step: "Step 01",
    tone: "bg-mist text-ink",
    title: "Set up your storefront",
    body: "Create a branded home for your travel business. Add your logo, colors, and business details in minutes without writing a single line of code.",
    mock: <StorefrontMock />,
    frame: "bg-mist",
  },
  {
    step: "Step 02",
    tone: "bg-blush text-ink",
    title: "Publish experiences",
    body: "Upload photos, set pricing variations, define itineraries, and manage dates with our block-style drag-and-drop editor.",
    mock: <PublishMock />,
    frame: "bg-blush",
  },
  {
    step: "Step 03",
    tone: "bg-sage text-ink",
    title: "Receive bookings",
    body: "Customers discover you on the marketplace and book instantly. Availability updates automatically across all your channels.",
    mock: <CalendarMock />,
    frame: "bg-sage",
  },
  {
    step: "Step 04",
    tone: "bg-signal text-signal-foreground",
    title: "Get paid securely",
    body: "Payments are held safely in escrow and released automatically to your bank account with zero manual intervention.",
    mock: <PayoutMock />,
    frame: "bg-signal",
  },
];

export function Platform() {
  return (
    <section id="platform" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            One platform.
            <br />
            Infinite possibilities.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            From storefront creation to getting paid — everything is designed to make selling travel
            experiences effortless.
          </p>
        </div>

        <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="grid items-center gap-8 sm:grid-cols-2 sm:gap-14"
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <span className={`eyebrow rounded-full px-2.5 py-1 ${s.tone}`}>{s.step}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </div>
              <div className={`rounded-3xl p-4 sm:p-6 ${s.frame} ${i % 2 === 1 ? "sm:order-1" : ""}`}>
                {s.mock}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
