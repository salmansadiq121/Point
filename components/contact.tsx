"use client";
import { M, SectionShell, useStagger } from "./motion-helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Contact() {
  const { container, item } = useStagger(0.05);
  return (
    <SectionShell
      id="contact"
      title="Contact"
      description="We’d love to hear from you."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <M.div
          {...item}
          className="rounded-xl border border-sky-500/70 shadow shadow-sky-500  bg-card p-6"
        >
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd>
                <a
                  className="underline decoration-accent/60 hover:text-accent"
                  href="mailto:contacto@pointechnologiesapp.com"
                >
                  contacto@pointechnologiesapp.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">
                Phone / WhatsApp
              </dt>
              <dd>
                <a
                  className="underline decoration-accent/60 hover:text-accent"
                  href="tel:+58"
                >
                  +58 XXX XXX XXXX
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Address</dt>
              <dd>Maracaibo, Venezuela</dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">FAQ</h3>
            <Accordion type="single" collapsible className="mt-2">
              <AccordionItem value="a1">
                <AccordionTrigger>
                  How fast is the average response?
                </AccordionTrigger>
                <AccordionContent>
                  Most requests are accepted in under 10 minutes, depending on
                  location and time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>Are providers verified?</AccordionTrigger>
                <AccordionContent>
                  Yes. Providers pass identity checks and performance reviews
                  before going live.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>
                  Which payment methods are supported?
                </AccordionTrigger>
                <AccordionContent>
                  We integrate with local bank transfers and cards. Cash is at
                  provider discretion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </M.div>

        <M.form
          {...container}
          action="#"
          aria-describedby="contact-note"
          className="rounded-xl border hover:border-sky-500/70 shadow hover:shadow-sky-500  bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <M.div {...item} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option>General</option>
                  <option>Provider Onboarding</option>
                  <option>Partnerships</option>
                  <option>Support</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <p id="contact-note" className="text-xs text-muted-foreground">
              This form is for demo purposes only.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Send
              </button>
              <a
                href="mailto:support@pointapp.com"
                className="text-xs underline decoration-accent/60 hover:text-accent"
              >
                Or email us directly
              </a>
            </div>
          </M.div>
        </M.form>
      </div>
    </SectionShell>
  );
}
