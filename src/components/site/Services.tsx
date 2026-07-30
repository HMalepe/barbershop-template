const services = [
  {
    name: "The Cut",
    detail: "Consult, clipper and scissor work, wash and finish.",
    time: "45 min",
    price: "£28",
  },
  {
    name: "Skin Fade",
    detail: "Bald-to-blend gradient with a razored line-up.",
    time: "50 min",
    price: "£32",
  },
  {
    name: "Beard Trim",
    detail: "Shaped with shears, edged with the razor, oiled.",
    time: "25 min",
    price: "£18",
  },
  {
    name: "Hot Towel Shave",
    detail: "Steamed towels, badger brush lather, straight razor.",
    time: "40 min",
    price: "£30",
  },
  {
    name: "Cut & Beard",
    detail: "The full reset. Book it before a wedding, not after.",
    time: "70 min",
    price: "£42",
  },
  {
    name: "Line-Up",
    detail: "Edges only, in and out. For the week two touch-up.",
    time: "15 min",
    price: "£12",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <h2 className="text-4xl sm:text-5xl">Services</h2>
        <p className="label-caps text-muted-foreground">Prices include the tidy-up</p>
      </div>

      <ul>
        {services.map((s) => (
          <li
            key={s.name}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-border py-6 md:grid-cols-[minmax(0,14rem)_1fr_auto_auto] md:gap-x-10"
          >
            <span className="font-display text-xl sm:text-2xl">{s.name}</span>
            <span className="order-3 max-w-xl text-sm text-muted-foreground md:order-none">
              {s.detail}
            </span>
            <span className="label-caps order-4 text-muted-foreground md:order-none md:text-right">
              {s.time}
            </span>
            <span className="font-display text-xl text-accent sm:text-2xl md:min-w-16 md:text-right">
              {s.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
