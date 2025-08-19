---
title: 安装
titleTemplate: GSAP 中文文档
description: GSAP 基础
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
tags: ["GSAP", "安装", "动画库", "JavaScript"]
---

# 安装

GSAP 是“框架无关的”，这意味着它可以在 React、Webflow、Wordpress 或任何其他 JS/网页框架中使用。GSAP 核心文件和所有插件都只是 **JavaScript 文件**。

本文介绍了加载文件的最常见方法。具体来说，就是通过 [NPM](https://www.npmjs.com/)、[Yarn](https://yarnpkg.com/) 以及使用简单的 `<script>` 标签。选择你自己的方式，或者查看左侧子菜单中的安装指南，获取针对特定框架或工具的指导。


## 获取文件

[GSAP（点击下载）](https://gsap.com/community/files/file/20-gsap-public-files/?do=download&csrfKey=45cdfd82adb89f6e6f54634d1ae01807)

<details>
  <summary> <b>下载的压缩文件里有什么？</b> </summary>

  <hr/>

  该压缩文件包含以下目录：

  <span class="blue-m">/minified/</span> 通过<b>脚本标签</b>加载到网页中，具有普遍兼容性，经过高度压缩以实现最快加载速度。

  <span class="blue-m">/UMD/</span> 压缩文件的<b>未压缩版本</b>，采用 UMD 格式。通常用于较旧的构建工具或调试。

  <span class="blue-m">/ESM/</span> <b>ES 模块文件</b>，经过转译以兼容现代构建工具（不包含复杂的 ES6 内容）。

  <span class="blue-m">/src/</span> <b>原始源代码文件</b>，这些文件是现代 ES6 模块。
</details>

## 安装


