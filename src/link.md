---
title: 书签收藏
icon: heart
cover: /assets/images/cover3.jpg
sidebar: false
breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

tools:
  - name: AI工具集
    desc: 在线工具
    url: https://ai.nancheng.fun/
    preview: /assets/image/preview/nancheng.jpg

  - name: Regexper
    desc: 正则表达式可视化
    url: https://regexper.com/
    preview: /assets/image/preview/regexper.jpg

  - name: Regexr
    desc: 学习，构建，测试正则表达式
    url: https://regexr.com/
    preview: /assets/image/preview/regexr.jpg

  - name: Photopea
    desc: 在线Photoshop
    url: https://www.photopea.com/
    preview: /assets/image/preview/photopea.jpg

  - name: Squoosh
    desc: 图片压缩对比工具
    url: https://squoosh.app/
    preview: /assets/image/preview/squoosh.jpg

  - name: 67tool
    desc: 在线工具
    url: https://www.67tool.com/
    preview: /assets/image/preview/67tool.jpg
---

## 工具

<SiteInfo
  v-for="item in $frontmatter.tools"
  :key="item.link"
  v-bind="item"
/>

