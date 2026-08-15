import { ArrowRight, MapPin, Star, BadgeCheck } from "lucide-react";
import lakeImg from "@/assets/travel-lake.jpg";
import glampImg from "@/assets/travel-glamping.jpg";

const services = [
  "Trekking",
  "Cultural tours",
  "Honeymoon",
  "Adventure",
  "Solo trips",
  "Photography",
];

export function Marketplace() {
  return (
    <section id="marketplace" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="font-display text-4xl font-bold leading-[1.02] text-ink sm:text-5xl">
            New leads
            <br />
            straight to your
            <br />
            inbox
          </h2>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-ink-soft">
              With Wheyer Marketplace, you can list your travel services, set your seasonal rates
              and seamlessly get matched with high-intent travellers around the country.
            </p>
            <a
              href="#pricing"
              className="mt-4 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold text-ink"
            >
              Learn more
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-5 shadow-lift sm:grid-cols-[minmax(0,240px)_1fr] sm:p-7">
            {/* vendor card */}
            <div>
              <div className="size-14 overflow-hidden rounded-full border-2 border-card shadow-soft">
                <img
                  src={glampImg}
                  alt="Luxe Travels India"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">Luxe Travels India</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="flex text-signal">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </span>
                4.9 (422)
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Contact vendor
              </button>
              <p className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <MapPin className="size-3.5" /> Manali, Himachal Pradesh
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <BadgeCheck className="size-3.5 text-success" /> Verified operator
              </p>
            </div>

            {/* detail panel */}
            <div>
              <div className="flex gap-5 border-b border-border pb-2 text-xs font-semibold text-muted-foreground">
                <span>About</span>
                <span className="border-b-2 border-ink pb-2 text-ink">Featured packages</span>
                <span className="hidden sm:inline">Services &amp; rates</span>
                <span className="hidden sm:inline">Reviews</span>
              </div>

              <p className="eyebrow mt-4 text-muted-foreground">Offering services</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="eyebrow mt-5 text-muted-foreground">Featured packages (14)</p>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[lakeImg, glampImg, lakeImg].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Featured package"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-24 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* inbox card */}
          <div className="mx-auto -mt-6 w-56 rounded-2xl border border-border bg-card p-3 shadow-lift sm:absolute sm:-bottom-8 sm:right-6 sm:mt-0">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <span className="size-5 rounded-full bg-ink" />
              <span className="text-[11px] font-bold text-ink">Luxe Travels</span>
            </div>
            <p className="eyebrow mt-2 text-muted-foreground">New leads (2)</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 rounded-lg bg-mist p-2">
                <span className="size-4 rounded bg-chart-1/40" />
                <span className="text-[10px] font-semibold text-ink">Advance enquiry</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-blush p-2">
                <span className="size-4 rounded bg-chart-5/40" />
                <span className="text-[10px] font-semibold text-ink">Group expedition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
