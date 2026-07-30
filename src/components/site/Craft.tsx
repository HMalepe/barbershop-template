import interior from "@/assets/interior.jpg";

export function Craft() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:px-10 md:py-28">
        <div>
          <p className="label-caps text-accent">Since 2011</p>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem]">
            Built for daily wear,
            <br />
            not just good photos
          </h2>
          <p className="mt-6 max-w-md text-sm text-bone/70">
            Three chairs, one room, no music you have to shout over. We cut hair
            so it still sits right on day nine, when nobody is watching and
            you're out the door in four minutes.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/15 pt-6">
            <div>
              <dt className="label-caps text-bone/50">Years open</dt>
              <dd className="mt-1 font-display text-3xl">14</dd>
            </div>
            <div>
              <dt className="label-caps text-bone/50">Chairs</dt>
              <dd className="mt-1 font-display text-3xl">3</dd>
            </div>
            <div>
              <dt className="label-caps text-bone/50">Cuts a week</dt>
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
