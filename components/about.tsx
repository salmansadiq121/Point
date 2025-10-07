"use client"
import { M, SectionShell, useFadeUp, useStagger } from "./motion-helpers"

export function About() {
  const fade = useFadeUp(0.05)
  const { container, item } = useStagger(0.08)

  return (
    <SectionShell
      id="about"
      title="Who We Are"
      description="Built in Venezuela to connect users with trusted providers."
    >
      <M.div {...fade} className="prose prose-invert max-w-none">
        <p>
          POINT is a platform created to unify everyday services in a single, reliable experience. Our mission is
          simple: connect people with verified providers and enable secure, transparent transactions.
        </p>
      </M.div>

      {/* Metrics */}
      <M.ul {...container} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { k: "Avg. Response", v: "7 min" },
          { k: "Provider Pass Rate", v: "92%" },
          { k: "Uptime (12m)", v: "99.9%" },
          { k: "Cities", v: "15+" },
        ].map((m, i) => (
          <M.li
            key={m.k}
            {...item}
            className={`rounded-xl border border-border/60 p-4 ${
              i % 2 ? "bg-card-gradient-alt card-sheen" : "bg-card-gradient card-sheen"
            }`}
          >
            <p className="text-2xl font-semibold text-foreground">{m.v}</p>
            <p className="mt-1 text-xs text-foreground/90">{m.k}</p>
          </M.li>
        ))}
      </M.ul>

      {/* Timeline */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Our Journey</h3>
        <ol className="mt-4 space-y-4">
          <M.li {...item} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-sm">
              <strong>2023</strong> — Ideation and first pilots in Maracaibo.
            </p>
          </M.li>
          <M.li {...item} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-sm">
              <strong>2024</strong> — Provider network expansion and payments hardening.
            </p>
          </M.li>
          <M.li {...item} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="text-sm">
              <strong>2025</strong> — Launching nationwide with multi‑city coverage.
            </p>
          </M.li>
        </ol>
      </div>

      {/* Values */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Our Values</h3>
        <M.ul {...container} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { t: "Trust & Safety", d: "Rigorous verification and continuous performance checks." },
            { t: "Speed", d: "Smart routing to the closest available provider." },
            { t: "Transparency", d: "Clear pricing and status updates from start to finish." },
          ].map((v) => (
            <M.li key={v.t} {...item} className="rounded-xl border border-border/60 bg-card p-4">
              <h4 className="font-medium">{v.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </M.li>
          ))}
        </M.ul>
      </div>
    </SectionShell>
  )
}
