import { useState } from "react";
import { toast } from "sonner";

export function FinalCta() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gradient-to-b from-secondary via-background to-mist py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
          Your vision.
          <br />
          Your travel business.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Start selling everywhere, today. Set up your fully customizable, highly converting travel
          storefront in minutes.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim()) return;
            toast.success("You're on the list — check your inbox to get started.");
            setEmail("");
          }}
          className="mx-auto mt-10 flex w-full max-w-xl items-center gap-2 rounded-full bg-card p-2 shadow-soft"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-ink outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}
