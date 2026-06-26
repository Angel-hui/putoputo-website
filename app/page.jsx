import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const painpoints = [
  ["01", "创意资产散落", "IP、视觉、内容、产品彼此割裂，无法持续复用。"],
  ["02", "商业路径模糊", "有好产品，但渠道、价格、合作模式没有被设计清楚。"],
  ["03", "组织能力断层", "增长依赖个人经验，缺少工具、节奏和可训练方法。"]
];

const steps = [
  ["Step 1", "看清资产", "品牌 / IP / 产品 / 素材 / 渠道 / 组织"],
  ["Step 2", "定义价值", "用户价值 / 商业价值 / 品牌价值"],
  ["Step 3", "设计系统", "产品矩阵 / 内容节奏 / 渠道路经"],
  ["Step 4", "推进增长", "招商 / 客户 / 会议 / 培训 / 复盘"]
];

const modules = [
  ["品牌战略", "定位 / 故事 / 架构 / 视觉体系"],
  ["原创IP", "角色 / 世界观 / 内容 / 商业化"],
  ["商品开发", "衍生品 / 包装 / 快闪 / 联名"],
  ["渠道增长", "客户分级 / 经销商 / 销售节奏"],
  ["组织系统", "架构 / 岗位 / KPI / 激励机制"],
  ["全球拓展", "中国 / 东南亚 / 中亚 / 新兴市场"]
];

const stats = [
  ["26", "主项目"],
  ["18", "优先包装案例"],
  ["4", "核心行业"],
  ["6", "服务模块闭环"]
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5 py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">PUTOPUTO / 噗通噗通</p>
            <h1 className="display-title mt-8">让创意<br /><span className="text-pulse">产生价值。</span></h1>
            <p className="mt-7 text-xl font-bold leading-9 text-black/65">
              PUTOPUTO 把创意资产，连接到增长能力。
            </p>
            <p className="mt-6 max-w-xl leading-8 text-black/55">
              原创IP × 品牌增长 × 渠道咨询 × 全球拓展。我们不是只交付灵感，而是把品牌、IP、产品、渠道、组织与市场整理成可以直接使用的增长工具。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-full bg-ink px-7 py-4 font-black text-white transition hover:bg-pulse">查看服务</Link>
              <Link href="/cases" className="rounded-full border border-black/15 bg-white px-7 py-4 font-black transition hover:border-pulse hover:text-pulse">项目案例</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-hero.jpg" width={1376} height={768} priority alt="PUTOPUTO 让创意产生价值" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">The real gap</p>
            <h2 className="section-title mt-7">很多品牌不缺创意，缺的是把创意变成生意的系统。</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {painpoints.map(([n, title, body]) => (
              <article key={n} className="rounded-[1.6rem] border border-black/8 bg-white p-7 shadow-soft">
                <p className="text-sm font-black text-pulse">{n}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-5 leading-7 text-black/55">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/8 bg-white">
            <Image src="/assets/biz-painpoints.jpg" width={1376} height={768} alt="创意增长的三类断点" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Our role</p>
            <h2 className="section-title mt-7">我们不是只做设计，也不是只做咨询。</h2>
            <p className="mt-7 text-lg leading-8 text-black/55">
              PUTOPUTO 是连接创意家与商业家的探险引擎：把创意、IP、产品导入渠道、组织与销售，让好想法进入真实经营。
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-position.jpg" width={1376} height={768} alt="PUTOPUTO 探险家定位" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Growth method</p>
              <h2 className="section-title mt-7 max-w-4xl">从品牌资产到商业结果的四步阶梯。</h2>
            </div>
            <Link href="/services" className="font-black text-pulse">了解服务体系 →</Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([tag, title, body]) => (
              <div key={title} className="rounded-[1.4rem] border border-black/8 bg-white p-6">
                <p className="text-sm font-black text-black/35">{tag}</p>
                <h3 className="mt-7 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-black/55">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-ladder.jpg" width={1376} height={768} alt="增长方法论四步阶梯" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-shell">
          <p className="eyebrow !text-white/55">Six modules</p>
          <h2 className="section-title mt-7 max-w-4xl">六大服务模块，构建全链路商业闭环。</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(([title, body]) => (
              <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-white/55">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image src="/assets/biz-modules.jpg" width={1376} height={768} alt="六大服务模块" className="w-full opacity-95" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Proof of work</p>
            <h2 className="section-title mt-7">真实项目资产库，正在形成可复制的方法论。</h2>
            <p className="mt-7 leading-8 text-black/55">近三年项目覆盖潮玩、IP、文旅与消费品牌，从 52TOYS 渠道升级到阳光国际水果公仔 IP、MOLYNK 品牌体系、FUNKO 中国市场与文旅新消费赛道。</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map(([n, label]) => (
                <div key={label} className="rounded-2xl bg-mist p-6">
                  <p className="text-5xl font-black tracking-[-.05em] text-pulse">{n}</p>
                  <p className="mt-2 font-black">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-assets.jpg" width={1376} height={768} alt="PUTOPUTO项目资产库" className="w-full" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-14">
        <div className="container-shell">
          <p className="text-center text-xs font-black uppercase tracking-[.18em] text-black/35">Long-term focus / 长期关注赛道</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-black text-black/55 sm:gap-x-14">
            {["泡泡玛特", "52TOYS", "TOPTOY", "布鲁可", "Jellycat", "卡游", "FUNKO", "文旅文创"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Selected cases</p>
              <h2 className="section-title mt-7 max-w-4xl">把案例讲成客户能理解的增长路径。</h2>
            </div>
            <Link href="/cases" className="font-black text-pulse">全部案例 →</Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["/cases#52toys", "52TOYS", "把渠道经验变成可运转的增长系统。", "/assets/biz-52toys.jpg"],
              ["/cases#sunshine", "阳光国际", "让产品供应链拥有可爱的商业人格。", "/assets/biz-sunshine.jpg"],
              ["/cases#strategy", "MOLYNK / WANGOODS", "从单一产品堆叠到系统级品牌增长。", "/assets/biz-strategy-cases.jpg"]
            ].map(([href, title, body, img]) => (
              <Link key={title} href={href} className="image-zoom overflow-hidden rounded-[1.7rem] border border-black/8 bg-white shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={img} fill alt={title} className="object-cover" /></div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-black/55">{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
