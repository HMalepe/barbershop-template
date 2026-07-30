const services = [
  {
    name: "The Cut",
    detail: "Talk it through, shear it down, wash it off. The house standard.",
    time: "45 min",
    price: "£28",
  },
  {
    name: "Skin Fade",
    detail: "Bald to blend with nothing left to argue about at the edges.",
    time: "50 min",
    price: "£32",
  },
  {
    name: "Beard Trim",
    detail: "Shaped with shears, settled with the razor, sent off oiled.",
    time: "25 min",
    price: "£18",
  },
  {
    name: "Hot Towel Shave",
    detail: "Steam, badger brush, one blade, zero hurry. Close as it gets.",
    time: "40 min",
    price: "£30",
  },
  {
    name: "Cut & Beard",
    detail: "The full reset. Book it before the wedding, not the apology.",
    time: "70 min",
    price: "£42",
  },
  {
    name: "Line-Up",
    detail: "Edges only. In, out, back to looking like week one.",
    time: "15 min",
    price: "£12",
  },
];


export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <h2 className="text-4xl sm:text-5xl">The Menu</h2>
        <p className="label-caps text-muted-foreground">Prices flat, edges sharp</p>

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
