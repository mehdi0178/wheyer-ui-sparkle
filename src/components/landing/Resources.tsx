import glampingImg from "@/assets/travel-glamping.jpg";
import lakeImg from "@/assets/travel-lake.jpg";
import tajImg from "@/assets/travel-taj.jpg";

const cards = [
  {
    img: glampingImg,
    title: "Join the Community",
    body: "Network with thousands of successful travel operators worldwide.",
  },
  {
    img: lakeImg,
    title: "Live Webinars",
    body: "Learn from industry experts every single week to grow your sales.",
  },
  {
    img: tajImg,
    title: "Growth Playbooks",
    body: "Step-by-step guides to scale your digital presence effortlessly.",
  },
];

const links = [
  "How to Sell Tours Online",
  "Travel Marketplace Guide",
  "How Wheyer Escrow Works",
  "Vendor Earnings Calculator",
];

export function Resources() {
  return (
    <section id="resources" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold text-ink sm:text-5xl">
          Seller Resources
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-lime p-6 sm:p-8">
            <h3 className="font-display text-xl font-extrabold text-lime-foreground sm:text-2xl">
              Operator Resources
            </h3>
            <div className="mt-5 space-y-3">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href="#faq"
                  className="flex gap-4 rounded-2xl bg-lime-foreground/5 p-3 transition-colors hover:bg-lime-foreground/10"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-16 w-24 shrink-0 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-lime-foreground">{c.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-lime-foreground/75">{c.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-mist p-6 sm:p-8">
            <ul className="divide-y divide-ink/10">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#faq"
                    className="block py-4 text-lg text-ink transition-colors hover:text-chart-1 sm:text-xl"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#faq"
              className="mt-6 inline-flex w-fit rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
