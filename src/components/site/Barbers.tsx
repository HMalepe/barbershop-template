import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const barbers = [
  { name: "Ray Mulvaney", role: "Owner · Scissor work & beards", img: barber1 },
  { name: "Sol Adeyemi", role: "Fades & line-ups", img: barber2 },
  { name: "Nina Kovač", role: "Texture cuts & razor detail", img: barber3 },
];

export function Barbers() {
  return (
    <section id="barbers" className="mx-auto max-w-[1600px] px-5 pb-20 md:px-10 md:pb-28">
      <h2 className="border-b border-border pb-6 text-4xl sm:text-5xl">Behind the Chairs</h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {barbers.map((b) => (
          <figure key={b.name}>
            <img
              src={b.img}
              alt={`Portrait of ${b.name}`}
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-display text-lg">{b.name}</p>
              <p className="label-caps mt-1 text-muted-foreground">{b.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
