import interior from "@/assets/interior.jpg";

export function Craft() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:px-10 md:py-28">
        <div>
          <p className="label-caps text-accent">Sharp since 2011</p>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem]">
            Cut to hold its edge,
            <br />
            not just to hold a pose
          </h2>
          <p className="mt-6 max-w-md text-sm text-bone/70">
            Three chairs, one room, and music you can talk over. We cut for day
            nine as much as day one — for the mornings nobody is photographing,
            when you have four minutes and a door to get out of.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/15 pt-6">
            <div>
              <dt className="label-caps text-bone/50">Years on the floor</dt>
              <dd className="mt-1 font-display text-3xl">14</dd>
            </div>
            <div>
              <dt className="label-caps text-bone/50">Chairs</dt>
              <dd className="mt-1 font-display text-3xl">3</dd>
            </div>
            <div>
              <dt className="label-caps text-bone/50">Heads a week</dt>
              <dd className="mt-1 font-display text-3xl">210</dd>
            </div>
          </dl>

        </div>

        <img
          src={interior}
          alt="Interior of the barbershop with three vintage chairs"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
