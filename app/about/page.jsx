import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "关于我们",
  description: "了解 PUTOPUTO 噗通噗通的品牌理念、创意方法与创始团队。"
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About putoputo" title="我们不是只做设计，也不是只做咨询。" english="PUTOPUTO works as an engine between creative makers and business builders." />

      <section className="py-24 sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-mist p-5">
            <Image src="/assets/biz-position.jpg" width={1376} height={768} alt="PUTOPUTO 探险家定位" className="w-full rounded-[1.4rem]" />
          </div>
          <div>
            <p className="eyebrow">Idea → Asset → Growth</p>
            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">我们扮演“探险家”：把创意、IP、产品接入渠道、组织与销售。</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div><p className="font-black text-pulse">创意资产化</p><p className="mt-4 leading-8 text-black/60">把IP、视觉、内容、产品从散落素材整理为可复用资产。</p></div>
              <div><p className="font-black text-cyan">增长系统化</p><p className="mt-4 leading-8 text-black/60">把渠道、组织、销售与培训转化为可执行的业务动作。</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="section-title mt-7">合作不是交一个文件，而是一起把增长路径做清楚。</h2>
            <p className="mt-7 text-lg leading-8 text-black/55">每个项目都会形成现状分析、问题诊断、机会点、策略建议、执行路径与风险提示，确保成果能进入客户的真实经营节奏。</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <Image src="/assets/method-path.jpg" width={1376} height={768} alt="PUTOPUTO 诊断策略设计落地复盘合作路径" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-[2rem] bg-white/5">
            <Image src="/assets/founder.png" fill alt="创始人 Angel Yang" className="object-contain object-bottom" />
          </div>
          <div>
            <p className="eyebrow !text-white/50">Founder introduction</p>
            <h2 className="mt-7 text-5xl font-black">Angel Yang</h2>
            <p className="mt-3 text-xl font-bold text-pulse">Founder & GM</p>
            <p className="mt-8 text-xl font-bold leading-9">潮玩与文创行业的实践派领军人物，拥有跨品类、跨区域的市场与运营经验，擅长原创IP孵化与全链路商业化。</p>
            <div className="mt-10 grid gap-4 text-sm leading-7 text-white/60 sm:grid-cols-2">
              <p>同济大学装潢艺术设计专业<br />曾任顶新国际集团、欧普照明全国总监</p>
              <p>曾任外联国际集团全球副总裁<br />卡游动漫营销中心高级副总裁</p>
              <p>陌凛文创与噗通噗通创始人</p>
              <p>上海电影艺术学院等客座教授</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
