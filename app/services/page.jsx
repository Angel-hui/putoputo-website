import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "产品服务",
  description: "品牌规划、原创IP设计与运营、衍生品推广、业务体系搭建、组织能力辅导及海内外市场拓展。"
};

const brand = [
  ["品牌规划", "Brand Planning", "品牌诊断、市场与用户洞察、定位与价值主张、品牌架构及年度传播规划。"],
  ["原创IP设计与运营", "Original IP Design & Operations", "IP定位、世界观与角色设定、故事线、视觉体系、图库、内容与授权运营。"],
  ["衍生品设计与推广", "Derivatives & Activation", "产品矩阵、创意设计、打样与供应链协同、零售、快闪、市集、电商与社交传播。"]
];
const consulting = [
  ["业务体系搭建", "Business System Building", "商业模式、产品结构、价格策略、渠道布局、业务流程与支持体系。"],
  ["组织系统服务", "Organization Services", "团队能力评估、岗位与协作机制诊断、专业辅导、项目复盘与关键人才培养。"],
  ["中国潮玩业务拓展", "China Toy Market Expansion", "市场判断、产品适配、渠道策略、资源对接与项目落地。"],
  ["全球业务拓展", "Global Business Expansion", "品牌出海、IP授权、海外渠道、区域伙伴与本地化运营。"]
];

function ServiceGrid({ items, dark = false }) {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map(([title, en, body], i) => (
        <article key={title} className={`rounded-[1.7rem] border p-8 ${dark ? "border-white/10 bg-white/5" : "border-black/8 bg-white"}`}>
          <p className={`text-sm font-black ${i % 2 ? "text-cyan" : "text-pulse"}`}>0{i + 1}</p>
          <h3 className="mt-8 text-2xl font-black">{title}</h3>
          <p className={`mt-2 text-xs font-black uppercase tracking-wider ${dark ? "text-white/35" : "text-black/35"}`}>{en}</p>
          <p className={`mt-7 leading-8 ${dark ? "text-white/60" : "text-black/60"}`}>{body}</p>
        </article>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="从创意资产到增长能力，我们提供一套完整的方法。" english="An integrated service system for brand clarity, IP vitality and sustainable business growth." />
      <section id="brand" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-shell">
          <p className="eyebrow">Brand services</p>
          <h2 className="section-title mt-7 max-w-4xl">让品牌与IP不止“被看见”，更能持续运营。</h2>
          <ServiceGrid items={brand} />
        </div>
      </section>
      <section id="consulting" className="scroll-mt-24 bg-ink py-24 text-white sm:py-32">
        <div className="container-shell">
          <p className="eyebrow !text-white/50">Business consulting</p>
          <h2 className="section-title mt-7 max-w-4xl">增长不只依靠好创意，更需要业务与组织系统。</h2>
          <ServiceGrid items={consulting} dark />
        </div>
      </section>
      <CTA />
    </>
  );
}
