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
      <PageHero eyebrow="About putoputo" title="我们让文化洞察、创意表达与商业逻辑，在同一套系统中发生。" english="Creativity, original IP and business growth — built as one system." />

      <section className="py-24 sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-mist p-5">
            <Image src="/assets/hero.webp" width={1672} height={941} alt="PUTOPUTO创意增长主视觉" className="w-full rounded-[1.4rem]" />
          </div>
          <div>
            <p className="eyebrow">Idea → Asset → Growth</p>
            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">一声“噗通”，让创意产生增长的连锁反应。</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div><p className="font-black text-pulse">涟漪 / RIPPLE</p><p className="mt-4 leading-8 text-black/60">从一个洞察出发，形成清晰的品牌主张与创意核心。</p></div>
              <div><p className="font-black text-cyan">连接 / CONNECTION</p><p className="mt-4 leading-8 text-black/60">连接品牌、IP、产品、场景、渠道与组织能力。</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="container-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-[2rem] bg-white/5">
            <Image src="/assets/founder.webp" fill alt="创始人 Angel Yang" className="object-contain object-bottom" />
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
