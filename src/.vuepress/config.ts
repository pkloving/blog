import { defineUserConfig } from "vuepress";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "随心记",
  description: "许先生的博客",

  theme,
  plugins: [
    autoCatalogPlugin,
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page:any) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page:any) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
