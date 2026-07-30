import fade from "@/assets/gallery-fade.jpg";
import shave from "@/assets/gallery-shave.jpg";
import tools from "@/assets/gallery-tools.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl sm:text-5xl">The Evidence</h2>
        <p className="label-caps text-muted-foreground">Straight from the chair, no filter</p>

      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12 md:grid-rows-2">
        <img
          src={fade}
          alt="Close-up of a freshly cut skin fade"
          width={900}
          height={1200}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover md:aspect-auto md:col-span-5 md:row-span-2 md:h-[664px]"
        />
        <img
          src={shave}
          alt="Hot towel shave in progress"
          width={1400}
          height={900}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover md:aspect-auto md:col-span-7 md:h-[324px]"
        />
        <img
          src={tools}
          alt="Barber tools laid out on a dark surface"
          width={1000}
          height={1000}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover md:aspect-auto md:col-span-7 md:h-[324px]"
        />
      </div>

    </section>
  );
}
