"use client"
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-sm">
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-accent underline decoration-accent/60">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent underline decoration-accent/60">
                  Services
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-accent underline decoration-accent/60">
                  Payments
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Support</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href="#contact" className="hover:text-accent underline decoration-accent/60">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Follow</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent underline decoration-accent/60">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted-foreground">
          <p>© 2025 POINT Technologies C.A. – All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
