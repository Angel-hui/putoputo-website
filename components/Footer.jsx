import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/assets/symbol.png" width={364} height={362} alt="" className="h-14 w-14 object-contain" />
            <div>
              <p className="text-xl font-black tracking-tight">PUTOPUTO / 噗通噗通</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-white/45">Creative brand · IP · Business growth</p>
            </div>
          </div>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">让品牌更清晰，让IP更有生命力，让业务更具增长能力。</p>
        </div>
        <div className="text-sm">
          <p className="mb-4 font-bold text-pulse">探索 EXPLORE</p>
          <div className="grid gap-3 text-white/60">
            <Link href="/about">关于我们</Link>
            <Link href="/services">产品服务</Link>
            <Link href="/cases">项目案例</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-4 font-bold text-cyan">联系 CONTACT</p>
          <p className="leading-7 text-white/60">上海 · 中国<br />Shanghai, China</p>
          <Link href="/contact" className="mt-4 inline-block border-b border-white/30 pb-1 text-white">合作咨询 →</Link>
        </div>
      </div>
      <div className="container-shell mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
        © 2026 Putong Putong (Shanghai) Cultural Creativity Co., Ltd.
      </div>
    </footer>
  );
}
