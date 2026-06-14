import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "项目案例",
  description: "PUTOPUTO 原创IP全链路、52TOYS渠道经营升级及传统文化年轻化案例。"
};

export default function CasesPage() {
  return (
    <>
      <PageHero eyebrow="Selected cases" title="每个案例，都从真实问题出发，最终回到可运营的资产与系统。" english="Selected work across original IP, product experiences and business transformation." />

      <section id="putoputo" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow">Case 01 · Original IP</p>
              <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">原创IP从情绪定位，延伸到产品与场景。</h2>
              <p className="mt-7 leading-8 text-black/55">IP定位与视觉体系、角色与故事线、衍生品设计、快闪空间与商业合作方向。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:row-span-2"><Image src="/assets/putoputo-popup.webp" fill alt="PUTOPUTO快闪空间" className="object-cover" /></div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem]"><Image src="/assets/putoputo-product.webp" fill alt="PUTOPUTO产品" className="object-cover" /></div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem]"><Image src="/assets/putoputo-scenes.webp" fill alt="PUTOPUTO场景" className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="52toys" className="scroll-mt-24 bg-ink py-24 text-white sm:py-32">
        <div className="container-shell">
          <p className="eyebrow !text-white/50">Case 02 · 52TOYS</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">从“卖货网络”到“IP生意网络”的渠道经营升级。</h2>
              <p className="mt-7 text-lg leading-8 text-white/55">面向总经理与核心管理层的专项咨询，聚焦渠道战略重构、组织能力升级、管理系统与关键人才建设。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "战略清晰化", "渠道结构、区域打法与IP协同逻辑"],
                ["02", "组织结构化", "能力评估、人才梯队与协作机制"],
                ["03", "管理系统化", "绩效工具与数据化经营决策"]
              ].map(([n, title, body]) => (
                <div key={n} className="rounded-[1.6rem] bg-white p-7 text-ink">
                  <p className="font-black text-spark">{n}</p>
                  <h3 className="mt-10 text-2xl font-black">{title}</h3>
                  <p className="mt-6 leading-7 text-black/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-14 aspect-[16/7] min-h-[300px] overflow-hidden rounded-[2rem]">
            <Image src="/assets/consulting-building.webp" fill alt="52TOYS业务咨询项目场景" className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent" />
            <div className="absolute inset-0 flex max-w-2xl flex-col justify-end p-8 sm:p-12">
              <p className="text-xs font-black uppercase tracking-[.18em] text-spark">Consulting approach</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">诊断、共创、辅导与复盘同步推进。</h3>
              <p className="mt-5 leading-8 text-white/65">项目不止交付策略建议，更通过管理层访谈、业务诊断、专题工作坊和关键岗位辅导，推动方案进入实际经营动作。</p>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {["渠道增长战略", "IP × 渠道协同", "组织与人才", "绩效与数据工具"].map((item, i) => (
              <div key={item} className="rounded-2xl border border-white/10 p-6"><span className="text-xs font-black text-pulse">WORKSTREAM 0{i + 1}</span><p className="mt-4 text-xl font-black">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell">
          <p className="eyebrow">Creative IP system</p>
          <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:items-center">
            <Image src="/assets/lion-system.webp" width={1800} height={1005} alt="醒狮文创系统" className="rounded-[2rem]" />
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">从文化母题到年轻化产品系统。</h2>
              <p className="mt-7 text-lg leading-8 text-black/55">通过角色设计、视觉资产、产品矩阵与场景传播，让传统文化成为可感知、可消费、可持续运营的年轻内容。</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
