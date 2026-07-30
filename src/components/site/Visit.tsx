import { BookButton } from "./BookButton";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday – Friday", "09:00 — 19:00"],
  ["Saturday", "08:00 — 18:00"],
  ["Sunday", "10:00 — 16:00"],
];

export function Visit() {
  return (
    <section id="visit" className="bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem]">Come in</h2>
            <p className="mt-6 max-w-sm text-sm text-bone/70">
              Walk-ins take the first free chair. Booking by phone keeps your
              barber, your time and your usual number two.
            </p>
            <div className="mt-8 space-y-1">
              <p className="label-caps text-bone/50">Address</p>
              <p className="text-sm">42 Colvin Street, Shoreditch, London E2 7QD</p>
            </div>
            <div className="mt-6 space-y-1">
              <p className="label-caps text-bone/50">Phone</p>
              <a href="tel:+442075559043" className="text-sm text-accent">
                +44 20 7555 9043
              </a>
            </div>
            <BookButton
              href="tel:+442075559043"
              label="Call to book"
              className="mt-10 bg-bone text-ink hover:bg-accent hover:text-accent-foreground"
            />
          </div>

          <dl className="divide-y divide-bone/15 border-y border-bone/15">
            {hours.map(([day, time]) => (
              <div key={day} className="flex items-baseline justify-between py-4">
                <dt className="label-caps text-bone/60">{day}</dt>
                <dd className="font-display text-lg">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-bone/15 pt-8">
          <p className="font-display text-2xl">IRONHAND BARBERS</p>
          <div className="flex gap-6">
            <a href="https://instagram.com" className="label-caps text-bone/60 hover:text-accent">
              Instagram
            </a>
            <a href="https://maps.google.com" className="label-caps text-bone/60 hover:text-accent">
              Directions
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
