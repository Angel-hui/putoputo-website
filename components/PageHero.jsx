export default function PageHero({ eyebrow, title, english, children }) {
  return (
    <section className="overflow-hidden border-b border-black/5 py-20 sm:py-28">
      <div className="container-shell relative">
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[44px] border-pulse/10" />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-8 max-w-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/50">{english}</p>
        {children}
      </div>
    </section>
  );
}
