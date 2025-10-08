"use client";

import { M, SectionShell, useFadeUp } from "./motion-helpers";

export function Payments() {
  const fade = useFadeUp(0.05);

  const features = [
    { t: "Encryption", d: "TLS 1.2+ in transit and AES-256 at rest." },
    {
      t: "Fraud Signals",
      d: "Velocity checks, device fingerprinting, anomaly flags.",
    },
    { t: "Disputes", d: "Clear documentation and response workflows." },
    { t: "Reconciliation", d: "Daily payout reports and CSV exports." },
  ];

  const tags = ["PCI-aware design", "3-D Secure ready", "Audit logs"];

  return (
    <SectionShell
      id="payments"
      title="Digital Payments"
      description="Fast, secure, and auditable transactions."
    >
      {/* Animated Card */}
      <M.div
        {...fade}
        className="rounded-xl border border-border/60 bg-card p-6 md:p-8 shadow-sm transition hover:shadow-md"
      >
        <p className="text-pretty text-base/7 text-muted-foreground">
          POINT integrates with bank APIs and leading payment partners to
          deliver safe, traceable transactions. We support instant
          confirmations, refunds, and exportable receipts for your records.
        </p>

        {/* Features Grid */}
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {features.map((f, i) => (
            <li
              key={f.t}
              className={`rounded-lg border border-border/60 p-4 shadow-sm transition hover:shadow-md ${
                i % 2
                  ? "bg-card-gradient-alt card-sheen"
                  : "bg-card-gradient card-sheen"
              }`}
            >
              <p className="font-medium text-foreground">{f.t}</p>
              <p className="mt-1 text-xs text-foreground/90">{f.d}</p>
            </li>
          ))}
        </ul>

        {/* Tags / Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/60 px-2 py-1 bg-background/50 hover:bg-background/80 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </M.div>
    </SectionShell>
  );
}
