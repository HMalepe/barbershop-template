import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookButton } from "./BookButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Barbers", href: "#barbers" },
  { label: "Visit", href: "#visit" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-caps text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <a href="#top" className="label-caps text-foreground">
          Ironhand <span className="text-accent">Barbers</span>
        </a>

        <div className="flex items-center gap-6">
          <span className="label-caps hidden text-muted-foreground lg:inline">
            Tue–Sun · 9–19
          </span>
          <BookButton className="hidden md:inline-flex" />
          <a href="#visit" className="label-caps text-accent md:hidden">
            Book
          </a>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label-caps text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
