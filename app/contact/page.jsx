import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "联系我们",
  description: "联系 PUTOPUTO 噗通噗通，沟通品牌、原创IP、潮玩文创业务咨询与市场拓展合作。"
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="聊聊你的品牌、IP或下一条增长曲线。" english="Let’s turn the next idea into a recognizable, operable and scalable asset." />
      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-12">
            <p className="text-sm font-black text-pulse">合作方式 / ENGAGEMENTS</p>
            <h2 className="mt-7 text-4xl font-black leading-tight">专项咨询 · 项目全案 · 年度顾问 · IP联合共创 · 商业拓展合作</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["品牌清晰", "从定位到长期资产"],
                ["IP生命力", "从形象到内容、产品与运营"],
                ["业务增长", "从策略到渠道、组织与全球市场"]
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl bg-white/7 p-5">
                  <p className="font-black text-pulse">{title}</p>
                  <p className="mt-4 text-sm leading-6 text-white/50">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-white/60">
              <p className="font-bold text-white">噗通噗通（上海）文化创意有限公司</p>
              <p className="mt-2">Putong Putong (Shanghai) Cultural Creativity Co., Ltd.</p>
              <p className="mt-5">Shanghai, China</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-soft sm:p-12">
            <p className="eyebrow">WeChat</p>
            <h2 className="mt-7 text-3xl font-black">扫描二维码，开启合作对话。</h2>
            <div className="mt-8 flex justify-center rounded-3xl bg-mist p-7">
              <Image src="/assets/wechat-qr.webp" width={646} height={667} alt="PUTOPUTO 微信二维码" className="w-full max-w-[310px]" />
            </div>
            <p className="mt-7 text-center text-sm leading-7 text-black/45">请在添加时备注公司、项目类型与合作需求。</p>
          </div>
        </div>
      </section>
    </>
  );
}
