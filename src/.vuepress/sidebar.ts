import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": [
    {
      text: "如何使用",
      icon: "laptop-code",
      link: "demo/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/posts/": [
    {
      text: "文章",
      icon: "book",
      children: "structure",
    },
  ],
  "/project/": [
    {
      text: "项目",
      icon: "book",
      children: "structure",
    },
  ],
});
