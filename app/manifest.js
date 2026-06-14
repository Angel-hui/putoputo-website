export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "PUTOPUTO 噗通噗通",
    short_name: "PUTOPUTO",
    description: "创意品牌、原创IP与业务增长服务",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFEFC",
    theme_color: "#F04F9A",
    icons: [
      {
        src: "/assets/symbol.webp",
        sizes: "any",
        type: "image/webp"
      }
    ]
  };
}
