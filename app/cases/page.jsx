import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "项目案例",
  description: "PUTOPUTO 项目资产库与精选案例：52TOYS渠道升级、Sunshine水果公仔IP、MOLYNK品牌体系、FUNKO中国市场与文旅新消费。"
};

const cards = [
  ["52TOYS", "把渠道经验变成可运转的增长系统。", "渠道战略 / 客户分级 / 销售日报 / 绩效管理 / Workshop训练", "/assets/biz-52toys.jpg", "52toys"],
  ["阳光国际", "让产品供应链拥有可爱的商业人格。", "角色资产 / 视觉规范 / 表情动作 / 包装应用 / 衍生品系统", "/assets/biz-sunshine.jpg", "sunshine"],
  ["MOLYNK / WANGOODS", "从单一产品堆叠，到系统级品牌增长。", "品牌手册 / 产品矩阵 / 销售政策 / 组织架构 / 预算与展会体系", "/assets/biz-strategy-cases.jpg", "strategy"],
  ["寺院文创 / FUNKO中国", "寻找新消费路径与全球化本土表达。", "市场调研 / 本土化策略 / 渠道诊断 / 合作模式重塑", "/assets/biz-newtracks.jpg", "tracks"]
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="真实项目资产库，正在形成可复制的方法论。"
        english="Selected projects show how creative assets become products, channels, organization tools and market actions."
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="eyebrow">Project assets</p>
            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">近三年，26个主项目沉淀为18个优先包装案例。</h2>
            <p className="mt-7 text-lg leading-8 text-black/55">
              项目覆盖潮玩、IP、文旅与消费品牌。我们把每个项目拆解为：问题判断、机会点、策略建议、执行路径与风险提示。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["26", "主项目"],
                ["18", "优先案例"],
                ["4", "核心行业"],
                ["6", "服务闭环"]
              ].map(([n, label]) => (
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

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-shell">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title mt-7 max-w-4xl">把案例讲成客户能理解的增长路径。</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cards.map(([title, body, tags, img, id]) => (
              <article id={id} key={title} className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
                <Image src={img} width={1376} height={768} alt={title} className="w-full" />
                <div className="p-8">
                  <h3 className="text-3xl font-black">{title}</h3>
                  <p className="mt-4 text-lg font-bold leading-8 text-black/65">{body}</p>
                  <p className="mt-5 leading-7 text-black/50">{tags}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
