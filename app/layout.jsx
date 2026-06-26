import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "PUTOPUTO 噗通噗通｜创意品牌、原创IP与业务增长",
    template: "%s｜PUTOPUTO 噗通噗通"
  },
  description: "PUTOPUTO 噗通噗通专注品牌规划、原创IP设计与运营、IP衍生品推广，以及潮玩文创企业的业务与组织咨询。",
  keywords: ["品牌设计", "原创IP设计", "潮玩咨询", "IP运营", "品牌咨询", "文创产品设计"],
  icons: {
    icon: "/assets/symbol.png",
    apple: "/assets/symbol.png"
  },
  openGraph: {
    title: "PUTOPUTO 噗通噗通",
    description: "让品牌更清晰，让IP更有生命力，让业务更具增长能力。",
    siteName: "PUTOPUTO 噗通噗通",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <a href="#main-content" className="skip-link">跳至主要内容</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
