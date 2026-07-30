import heroCut from "@/assets/hero-cut.jpg";
import { BookButton } from "./BookButton";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1600px] px-5 pt-8 md:px-10 md:pt-12">
      <h1 className="rise-in text-[19vw] leading-[0.8] tracking-[-0.045em] md:text-[15.5vw]">
        IRONHAND
      </h1>

      <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-8">
        <div className="relative overflow-hidden">
          <img
            src={heroCut}
            alt="Barber finishing a fade on a seated client"
            width={912}
            height={1200}
            className="h-full w-full object-cover"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16 font-display text-2xl leading-tight text-bone sm:text-3xl">
            A cut that carries
            <br />
            the whole week
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 md:pl-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl">
            Sharp Work,
            <br />
            No Theatre
          </h2>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-medium">Classic barbering for men who don't fuss.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Clippers, shears and a straight razor. Walk in tired, walk out
                looking like you meant it — thirty-five minutes, no upsell.
              </p>
            </div>
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
}
