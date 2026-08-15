import { Check } from "lucide-react";
import tajImg from "@/assets/travel-taj.jpg";

function ReachMock() {
  return (
    <div className="rounded-xl bg-card p-3 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-ink">Get 20% off</span>
        <span className="size-4 rounded bg-chart-1/20" />
      </div>
      <p className="text-[9px] text-muted-foreground">Recover your order</p>
      <div className="mt-2 grid h-6 place-items-center rounded-md border border-border text-[9px] font-semibold text-ink">
        Complete booking
      </div>
      <img
        src={tajImg}
        alt="Featured travel package"
        loading="lazy"
        width={800}
        height={600}
        className="mt-2 h-16 w-full rounded-md object-cover"
      />
    </div>
  );
}

function TrustMock() {
  return (
    <div className="rounded-xl bg-card p-3 shadow-soft">
      <p className="text-[10px] font-bold text-ink">Premium packages</p>
      <div className="mt-2 flex gap-2">
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-12 rounded-full bg-muted" />
          <div className="h-6 rounded-md border border-chart-1/40 bg-mist" />
          <div className="h-2 w-16 rounded-full bg-muted" />
          <div className="h-2 w-10 rounded-full bg-muted" />
        </div>
        <img
          src={tajImg}
          alt="Package preview"
          loading="lazy"
          width={800}
          height={600}
          className="size-16 rounded-md object-cover"
        />
      </div>
    </div>
  );
}

function AnalyticsMock() {
  return (
    <div className="rounded-xl bg-card p-3 shadow-soft">
      <div className="flex justify-between text-[9px]">
        <span>
          <span className="block font-semibold text-muted-foreground">Gross volume</span>
          <span className="font-display text-sm font-bold text-ink">₹1.5M</span>
        </span>
        <span className="text-right">
          <span className="block font-semibold text-muted-foreground">Net volume</span>
          <span className="font-display text-sm font-bold text-ink">₹28k</span>
        </span>
      </div>
      <svg viewBox="0 0 200 70" className="mt-2 h-20 w-full" role="img" aria-label="Sales trend">
        <polyline
          fill="none"
          stroke="var(--color-chart-1)"
          strokeWidth="3"
          strokeLinecap="round"
          points="0,55 25,48 50,52 75,30 100,38 125,18 150,26 175,10 200,16"
        />
        <polyline
          fill="none"
          stroke="var(--color-chart-2)"
          strokeWidth="3"
          strokeLinecap="round"
          points="0,64 25,60 50,58 75,50 100,54 125,40 150,44 175,32 200,30"
        />
      </svg>
    </div>
  );
}

const cards = [
  {
    title: "Expand your reach & sales",
    tone: "bg-lime",
    text: "text-lime-foreground",
    points: ["Reach new travellers across India", "Full control over packages"],
    mock: <ReachMock />,
  },
  {
    title: "Trusted, transparent platform",
    tone: "bg-mist",
    text: "text-ink",
    points: ["Secure escrow payments", "Transparent commission"],
    mock: <TrustMock />,
  },
  {
    title: "Leverage data for smarter selling",
    tone: "bg-sage",
    text: "text-ink",
    points: ["Vendor-first marketplace", "Powerful analytics dashboard"],
    mock: <AnalyticsMock />,
  },
];

export function WhyWheyer() {
  return (
    <section className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-md font-display text-3xl font-bold text-ink sm:text-5xl">
            Why travel businesses choose Wheyer
          </h2>
          <a
            href="#pricing"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start creating
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`flex flex-col rounded-3xl p-6 ${c.tone} ${c.text}`}
            >
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs font-medium opacity-90">
                    <Check className="mt-0.5 size-3.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">{c.mock}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
