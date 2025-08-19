---
title: 基本概念
titleTemplate: 前端基础 
description: 基本概念
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
tags: ["HTML", "基础概念", "网页", "前端"]
---

# 基本概念

<ArticleSummary :texts="[
  '本文介绍了 HTML 的基本概念，包括网页的组成要素、常见浏览器及其渲染引擎的特点，以及 Web 标准的重要性和构成。通过学习这些基础知识，可以帮助理解前端开发的核心原理和标准化开发的重要性。',
  'HTML 是构建网页的基础语言。本文将带你了解网页的基本构成元素，探索不同浏览器的渲染机制，并深入理解 Web 标准化的重要意义。掌握这些核心概念，为你的前端开发之路奠定坚实基础。',
  '想要成为前端开发者？从 HTML 开始！本文详细讲解网页的组成要素、主流浏览器的工作原理，以及为什么 Web 标准如此重要。这些基础知识将帮助你建立正确的前端开发思维。',
  '网页是如何工作的？浏览器如何渲染页面？Web 标准又是什么？本文将为你揭开这些谜团，介绍 HTML 的基本概念和前端开发的核心原理，让你对网页开发有一个全面的认识。'
]" />

## 认识网页

网页是由<span class="marker-evy">文字、图片、视频、音频、超链接</span>等组成，为用户提供信息的交互界面。网页的本质就是前端程序员写的代码，然后通过浏览器进行解析和渲染，最后转换成用户的眼中的页面。

<br />



<div class="xuxianfg"></div>

## 浏览器和渲染引擎

### 浏览器

浏览器是网页显示、运行的平台 ，是前端开发必备的工具。

常见的浏览器有：<s>IE 浏览器（Internet Explorer）</s>、[Safari 浏览器](https://www.apple.com.cn/safari/)、[谷歌浏览器](https://www.google.cn/chrome/index.html)（Chrome）、[欧朋浏览器](https://www.opera.com/zh-cn)（Opera）、火狐浏览器（Firefox）

<br />

  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;">
    <img src="/img/png/frontend/HTML/4.png" width="100" height="100" style="object-fit: contain; border-radius: 10px;" />
    <img src="/img/png/frontend/HTML/5.png" width="85" height="85" style="object-fit: contain; border-radius: 10px;" />
    <img src="/img/png/frontend/HTML/6.png" width="100" height="100" style="object-fit: contain; border-radius: 10px;" />
    <img src="/img/png/frontend/HTML/7.png" width="85" height="85" style="object-fit: contain; border-radius: 10px;" />
    <img src="/img/png/frontend/HTML/8.png" width="100" height="100" style="object-fit: contain; border-radius: 10px;" />
  </div>
  <p style="color: gray; font-size: 0.9em; margin-top: 10px;text-align: center;">常见的浏览器</p>

::: tip 提示
截至 2022 年 6 月 15 日，微软已宣布对 Internet Explorer 停止维护。（详细信息可参考[微软官方公告](https://learn.microsoft.com/zh-cn/lifecycle/announcements/internet-explorer-11-end-of-support-windows-10)）
:::

### 渲染引擎

渲染引擎，即浏览器内核，是浏览器中专门对代码进行解析渲染的部分。浏览器出品的公司不同，内在的渲染引擎也有所不同：

<div style="display: flex; justify-content: center;">

|      浏览器       |   内核    |           备注           |
| :------------: | :-----: | :--------------------: |
|       IE       | Trident | IE、猎豹安全、360极速浏览器、百度浏览器 |
|    FireFox     |  Gecko  |        火狐浏览器内核         |
|     Safari     | Webkit  |        苹果浏览器内核         |
| Chrome / Opera |  Blink  |   Blink 其实是 Webkit 的分支    |

</div>

渲染引擎不同，导致解析相同代码时的速度、性能、效果也不同的。目前而言，谷歌浏览器的渲染引擎速度快、性能高、效果好，所以更吸引用户的喜爱（推荐）。

<div class="xuxianfg"></div>

## Web 标准

### 为什么需要 Web 标准？

不同的浏览器的渲染引擎不同，对于相同代码解析的效果会存在差异；换言之，如果用户想看一个网页，用不同浏览器打开效果不同，就会导致用户体验极差。此时，WEB 标准应运而生。

<b>WEB 标准</b>：让不同的浏览器按照相同的标准显示结果，让展示的效果统一！

### Web 标准的构成

WEB 标准分为三个组成部分：

<div style="display: flex; justify-content: center;">

|      组成       |   语言    |               说明                 |
| :------------: | :-----: | :---------------------------------: |
|    结构     |    HTML     |            页面元素和内容             |
|    样式     |     CSS     |      网页元素的外观和位置等页面样式      |
|    行为     | JavaScript  |        网页模型的定义和页面交互         |

</div>

WEB 标准要求页面实现：结构、表现、行为三者分离。

