import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-pulse py-20 text-white">
      <div className="container-shell flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-white/65">Work with us</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">
            让一个好想法，成为可持续增长的商业资产。
          </h2>
        </div>
        <Link href="/contact" className="shrink-0 rounded-full bg-white px-8 py-4 font-black text-ink transition hover:-translate-y-1">
          开始合作 →
        </Link>
      </div>
    </section>
  );
}
