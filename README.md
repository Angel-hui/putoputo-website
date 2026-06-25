# PUTOPUTO 噗通噗通官网

基于 Next.js 与 Tailwind CSS 构建的中英文品牌官网，内容来自 PUTOPUTO 公司简介及 52TOYS 业务咨询案例资料。

## 页面

- 首页
- 关于我们
- 产品服务
- 案例
- 联系我们

## 本地运行

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:3000`。

## 生成与预览静态网站

```bash
npm run build
npm run preview
```

静态文件会生成在 `out` 目录，可部署到任意静态网站托管平台。

## 发布到 Vercel

```bash
vercel login
vercel --prod
```

首次发布时按提示选择当前目录为项目根目录。项目已配置 `output: "export"`，Vercel 构建后会生成静态站点。

## 内容与图片

网站图片统一存放在 `public/assets`。联系方式与二维码可在 `app/contact/page.jsx` 中更新。
