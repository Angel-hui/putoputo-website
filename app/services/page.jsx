import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "产品服务",
  description: "PUTOPUTO 六大服务模块：品牌战略、原创IP、商品开发、渠道增长、组织系统与全球拓展。"
};

const modules = [
  ["品牌战略", "Brand Strategy", "定位、故事、架构、视觉体系"],
  ["原创IP", "Original IP", "角色、世界观、内容、商业化"],
  ["商品开发", "Product Development", "衍生品、包装、快闪、联名"],
  ["渠道增长", "Channel Growth", "客户分级、经销商、销售节奏"],
  ["组织系统", "Organization System", "架构、岗位、KPI、激励机制"],
  ["全球拓展", "Global Expansion", "中国、东南亚、中亚、新兴市场"]
];

const deliverables = [
  "招商PPT与合作方案",
  "渠道政策与客户分级",
  "KPI与组织机制",
  "培训课件与讲师稿",
  "产品矩阵与内容节奏",
  "复盘报告与持续优化"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="六大服务模块，构建全链路商业闭环。"
        english="From brand assets to business results, PUTOPUTO delivers tools that can be used directly in real operations."
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Growth-grade delivery</p>
            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">交付的不是“灵感”，而是可以直接使用的增长工具。</h2>
            <p className="mt-7 text-lg leading-8 text-black/55">
              传统创意交付常停留在品牌故事、IP角色、产品方向。PUTOPUTO 的增长级交付会进一步沉淀渠道政策、客户分级、KPI机制与训练体系。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {deliverables.map((item) => (
                <span key={item} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-black/65">{item}</span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-tools.webp" width={1376} height={768} alt="PUTOPUTO 增长级交付工具" className="w-full" />
          </div>
        </div>
      </section>

      <section id="modules" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28">
        <div className="container-shell">
          <p className="eyebrow !text-white/55">Service modules</p>
          <h2 className="section-title mt-7 max-w-4xl">从品牌战略到全球拓展，让创意进入完整商业链路。</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(([title, en, body], index) => (
              <article key={title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-black text-pulse">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-2 text-xs font-black uppercase tracking-wider text-white/35">{en}</p>
                <p className="mt-6 leading-7 text-white/60">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image src="/assets/biz-modules.webp" width={1376} height={768} alt="PUTOPUTO六大服务模块" className="w-full opacity-95" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <p className="eyebrow">Method</p>
          <h2 className="section-title mt-7 max-w-4xl">判断优先级：用户价值 → 商业价值 → 品牌价值 → 执行效率 → 长期增长。</h2>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/biz-ladder.webp" width={1376} height={768} alt="PUTOPUTO 增长方法论四步阶梯" className="w-full" />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
