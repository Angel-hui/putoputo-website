import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const steps = [
[
    "01",
    "品牌战略",
    "品牌定位、用户研究、商业模式设计"
  ],
  [
    "02",
    "IP孵化",
    "角色设定、视觉开发、内容体系搭建"
  ],
  [
    "03",
    "商业落地",
    "产品开发、渠道运营、市场推广"
  ],
  [
    "04",
    "全球增长",
    "海外市场拓展、资源整合与持续增长"
  ]
];
export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
          <Image src="/assets/hero.webp" fill priority alt="PUTOPUTO 创意增长主视觉" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/15 to-transparent" />
        </div>
        <div className="container-shell relative flex min-h-[calc(100vh-78px)] items-center pt-28 pb-20">
          <div className="max-w-[720px]">
            <p className="eyebrow">PUTOPUTO / 噗通噗通</p>
            <h1 className="display-title mt-9">让IP成为<br /><span className="text-pulse">商业增长引擎</span></h1>
            <p className="mt-10 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
              IP STRATEGY · BRAND GROWTH · GLOBAL BUSINESS
            </p>
            <p className="mt-10 max-w-xl text-base leading-8 text-black/60 sm:text-lg">
              原创IP孵化 · 品牌战略咨询 · 潮玩渠道运营 · 文旅IP开发 · 海外拓展
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-full bg-ink px-7 py-4 font-black text-white transition hover:bg-pulse">了解服务 →</Link>
              <Link href="/cases" className="rounded-full border border-black/15 bg-white/70 px-7 py-4 font-black transition hover:border-pulse hover:text-pulse">成功案例</Link>
            </div>
            <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[2rem] lg:hidden">
              <Image src="/assets/hero.webp" fill priority alt="PUTOPUTO 创意增长主视觉" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title mt-7 max-w-5xl">IP成品牌 <br />品牌成增长</h2>
          </div>
          <div className="border-l border-black/10 pl-7 sm:pl-12">
            <p className="text-xl font-bold leading-9">我们帮助企业与品牌完成从创意构想到商业落地的全过程，涵盖原创IP孵化、品牌升级、渠道增长与全球化拓展。</p>
            <p className="mt-5 leading-7 text-black/50">Ideas into Brands. Brands into Business.</p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell">
          <p className="eyebrow">Two engines</p>
          <h2 className="section-title mt-7 max-w-4xl">从创意资产到商业价值的完整链路</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link href="/services#brand" className="group rounded-[2rem] bg-pulse p-9 text-white transition hover:-translate-y-2 sm:p-12">
              <p className="text-sm font-black opacity-70">01 · BRAND SERVICES</p>
              <h3 className="mt-12 text-4xl font-black">原创IP孵化</h3>
              <p className="mt-8 max-w-md text-lg leading-9 text-white/80">原创IP定位、角色设定、视觉体系、衍生品开发与商业化运营</p>
              <p className="mt-12 font-black">了解更多 ↗</p>
            </Link>
            <Link href="/services#consulting" className="group rounded-[2rem] bg-ink p-9 text-white transition hover:-translate-y-2 sm:p-12">
              <p className="text-sm font-black text-pulse">02 · BUSINESS CONSULTING</p>
              <h3 className="mt-12 text-4xl font-black">品牌增长咨询</h3>
              <p className="mt-8 max-w-md text-lg leading-9 text-white/65">潮玩渠道运营、品牌增长策略、组织升级与东南亚市场拓展</p>
              <p className="mt-12 font-black text-cyan">了解更多 ↗</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">End-to-end</p>
              <h2 className="section-title mt-7 max-w-4xl">从创意到品牌<br />从品牌到增长</h2>
            </div>
            <p className="max-w-sm text-black/55">我们以原创IP、品牌策略、产品开发与渠道运营为核心，帮助创意从概念走向市场，形成可持续增长的商业资产。</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([n, title, en, body], i) => (
              <div key={n} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7">
                <span className={`absolute left-0 top-0 h-2 w-full ${i === 0 ? "bg-pulse" : i === 1 ? "bg-pulse/55" : i === 2 ? "bg-cyan" : "bg-spark"}`} />
                <p className="text-xl font-black text-pulse">{n}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-2 text-xs font-black uppercase tracking-wider text-black/35">{en}</p>
                <p className="mt-8 leading-7 text-black/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-16">
        <div className="container-shell">
          <p className="text-center text-xs font-black uppercase tracking-[.18em] text-black/35">Selected clients & partners / 部分合作企业与机构</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-lg font-black text-black/55 sm:gap-x-14">
            {["52TOYS", "卡游动漫", "王的网络", "SOUTH VALLEY", "MOLYNK", "古茶部落"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="container-shell">
          <p className="eyebrow !text-white/55">Selected cases</p>
          <div className="mt-8 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h2 className="section-title max-w-4xl">创意设计与系统咨询，最终都要落到真实的业务场景。</h2>
            <Link href="/cases" className="font-black text-pulse">全部案例 →</Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link href="/cases#putoputo" className="image-zoom group overflow-hidden rounded-[2rem] bg-white text-ink">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src="/assets/putoputo-popup.webp" fill alt="袜袜兔原创IP孵化项目" className="object-cover" /></div>
              <div className="p-8"><p className="text-xs font-black text-pulse">ORIGINAL IP</p><h3 className="mt-3 text-3xl font-black">PUTOPUTO 原创IP全链路</h3></div>
            </Link>
            <Link href="/cases#52toys" className="image-zoom group overflow-hidden rounded-[2rem] bg-[#16151a]">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src="/assets/consulting-building.webp" fill alt="业务咨询" className="object-cover opacity-70" /></div>
              <div className="p-8"><p className="text-xs font-black text-spark">BUSINESS CONSULTING</p><h3 className="mt-3 text-3xl font-black">52TOYS渠道事业部组织升级</h3></div>
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
