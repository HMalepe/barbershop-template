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
            className="aspect-[3/4] w-full object-cover md:h-[520px]"
          />

          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16 font-display text-2xl leading-tight text-bone sm:text-3xl">
            A steady hand,
            <br />
            a straight edge
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 md:pl-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl">
            Iron Hand,
            <br />
            Light Touch
          </h2>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-medium">Barbering with the fuss cut out.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Clippers, shears and a razor honed to the point of an argument.
                Sit down heavy, get up handled — thirty-five minutes, no upsell,
                no sermon about sea salt spray.
              </p>
            </div>
            <BookButton />
          </div>
        </div>

      </div>
    </section>
  );
}
