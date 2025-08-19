---
title: HTML 初体验
titleTemplate: 前端基础 
description: HTML 初体验
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
tags: ["HTML", "初体验", "标签", "前端"]
---

# HTML 初体验

<ArticleSummary :texts="[
  '本文介绍了 HTML 的基本概念和初体验，包括 HTML 的定义、如何查看网页源代码、HTML 的基本骨架结构，以及推荐的开发工具。通过学习这些内容，你将对 HTML 有一个初步的认识和理解。',
  'HTML 是超文本标记语言，是构建网页的核心语言。本文将带你了解 HTML 的基本概念，学习如何查看网页源代码，掌握 HTML 的骨架结构，并推荐适合的开发工具，为你的 HTML 学习之路打下基础。',
  '想要开始学习 HTML？本文从最基础的概念开始，介绍什么是 HTML、如何查看网页的源代码、HTML 的基本结构，以及选择合适的开发工具。这些基础知识将帮助你快速入门 HTML 开发。',
  '从零开始学习 HTML！本文详细介绍了 HTML 的基本概念、网页源代码的查看方法、HTML 骨架结构的组成，以及开发工具的选择。掌握这些基础知识，让你轻松踏入前端开发的大门。'
]" />

## HTML 的概念

HTML（HyperText Markup Language），即<span class="marker-evy"><b>超文本标记语言</b></span>。

<span class="blue-b">语言</span>意味着它是一种 <span class="blue-m">计算机语言</span> （区别于严格意义上的编程语言）。

<span class="blue-b">标记语言</span> 是指它使用 `<html>` `<head>` `<body>` `<title>` `<h1>` `<p>` 等不同的 <span class="blue-m">标签</span> （tag）来标记和描述不同的结构和内容（标题、段落、图片等）。

<span class="blue-b">超文本</span> 意味着它可以包含 <span class="blue-m">超链接</span> ，可以将不同的网页连接起来，形成一个 <span class="blue-m">超文本</span> 网络。


::: details 查看网页的「源代码」

<br />

在浏览器的任意网页中右键，选择「显示页面源代码」。

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/frontend/HTML/13.png" alt="HTML 初体验" width="150px" style="border-radius: 25px;">
</div>

在弹出的页面中，就能够看到当前页面的源代码，实际上就是该网页的 HTML 代码。

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/frontend/HTML/14.png" alt="HTML 初体验" width="600px" style="border-radius: 25px;">
</div>

:::

::: info 示例

下面的代码展示了一个简单的 HTML 网页，包含一个标题和一个段落：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>这是一个标题</h1>
    <p>这是一个段落</p>
</body>
</html>
```
<br />

运行效果如图：
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/frontend/HTML/9.png" alt="HTML 初体验" width="300px" style="border-radius: 25px;">
</div>

<br />

:::

<div class="xuxianfg"></div>

## HTML 骨架结构

如同文章具有固定的结构（如开头、正文、落款），网页也包含其固有的组成部分（如整体框架、头部信息、标题和主体内容）。在网页中，这些固定结构需要通过特定的 HTML 标签来构建和表达。

```html
<html>
<!-- 网页的头部 -->
  <head>
    <title>网页的标题</title>
  </head>

  <!-- 网页的主体 -->
  <body>
    <h1>一级标题</h1>
    <p>段落</p>
  </body>

</html>
```

<div class="xuxianfg"></div>

## 开发工具的使用

虽然使用基本的文本编辑器（如记事本）也能编写前端代码，但其开发效率相对较低。

在实际开发中，为了追求更高的效率和便捷性，我们通常会选用专业的开发工具。

推荐使用 VS Code ：

<Linkcard url="https://code.visualstudio.com/" title="VS Code" description="一款免费的、开源的、跨平台的代码编辑器，支持多种编程语言。" logo="/img/png/frontend/HTML/10.png"/>

或者在 AI 时代，使用一款 AI [IDE](https://baike.baidu.com/item/%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/298524) 也是一个不错的选择，比如 Trae ：

<Linkcard url="https://trae.cn/" title="Trae" description="一款 AI 的代码编辑器，支持多种大模型和 MCP。" logo="/img/png/frontend/HTML/11.png"/>

打开开发工具后，新建一个后缀名为 `.html` 的文件，即可开始编写 HTML 代码。

输入一个英文 `!` 或 `html:5` ，然后按下 `Enter` 键，即可自动生成最基本的 HTML 结构。

