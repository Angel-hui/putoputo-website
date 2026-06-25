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
            <h2 className="mt-7 text-4xl font-black leading-tight">专项咨询 · 项目全案 · 年度顾问 · 工作坊训练 · IP联合共创 · 商业拓展合作</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                ["渠道增长咨询包", "客户分级、经销商政策、销售看板与区域动作"],
                ["品牌IP升级包", "角色资产、视觉规范、应用系统与衍生品"],
                ["组织能力训练营", "管理层共创、渠道经理训练、讲师稿与复盘"],
                ["全球拓展顾问", "市场进入、合作伙伴、出海提案与本土化表达"]
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
