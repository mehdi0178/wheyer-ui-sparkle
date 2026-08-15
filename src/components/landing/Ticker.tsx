const rowOne = [
  "INSTANT PAYOUTS",
  "SECURE ESCROW",
  "ZERO FRAUD RISK",
  "100% VERIFIED OPERATORS",
];
const rowTwo = ["₹120 CRORE IN SALES", "GLOBAL REACH", "0% SETUP FEE", "24/7 SUPPORT"];

function Row({
  items,
  tone,
  reverse,
}: {
  items: string[];
  tone: "ink" | "signal";
  reverse?: boolean;
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`overflow-hidden py-3 ${
        tone === "ink" ? "bg-ink text-primary-foreground" : "bg-signal text-signal-foreground"
      }`}
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="eyebrow flex shrink-0 items-center gap-8 px-6">
            {item}
            <span className="size-1.5 rounded-full bg-current opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section aria-hidden className="mt-24 sm:mt-28">
      <div className="-rotate-2 scale-110">
        <Row items={rowOne} tone="ink" />
      </div>
      <div className="-mt-1 rotate-1 scale-110">
        <Row items={rowTwo} tone="signal" reverse />
      </div>
    </section>
  );
}
