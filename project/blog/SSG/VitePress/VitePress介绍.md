---
title: VitePress
titleTemplate: 最推荐的静态文档页面构建工具，基于 Vue 3 和 Vite。 
description: VitePress
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
---

# VitePress 介绍

> 最推荐的静态文档页面构建工具，基于 Vue 3 和 Vite。

> 本站基于 VitePress 构建。

## 简介

VitePress 是一款基于 **Vite** 和 **Vue 3** 的现代化静态站点生成器（SSG），专为构建高性能、以内容为中心的网站（如文档、博客、营销页面）而设计。

简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。因此，非常适合搭建个人博客和个人知识库。

中文官网： <a href="https://vitepress.dev/zh/" target="_blank">vitepress.dev/zh/</a>

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/01.png" width="900" />
VitePress 中文官网
</div>

<br>

::: details 基于 VitePress 构建的网站
[Vite](https://cn.vitejs.dev/) 、[Rollup](https://cn.rollupjs.org/) 、[Vue](https://cn.vuejs.org/) 、[VueUse](https://vueuse.org/)、[Vitest](https://cn.vitest.dev/)、[D3](https://d3js.org/)、[UnoCSS](https://unocss.dev/)、[Iconify](https://iconify.design/) 等。
:::


## 部署流程

这里以 macOS 系统为例，Windows 系统与之类似。

### 安装

首先新建文件夹，这里命名为 `VitePress` ：

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/02.png" width="900" />
</div>

<br>

使用 VS Code 或其他文本编辑器打开该文件夹：

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/03.png" width="900" />
</div>

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/04.png" width="900" />
</div>

<br>

在终端中输入命令 `npm add -D vitepress` 并执行：

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/05.png" width="900" />
</div>

<br>

看到终端的输出信息后，VitePress 就安装完成了。🎉

也可以使用其他方式安装，具体安装命令如下：

::: code-group

```sh [npm]
npm add -D vitepress
```

```sh [pnpm]
pnpm add -D vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [yarn(pnp)]
yarn add -D vitepress vue
```
```sh [bun]
bun add -D vitepress
```

:::

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

### 初始化

在终端中输入命令 `npx vitepress init` 并执行。

执行后会出现交互式命令窗口，需要回答几个问题：

- 选择初始化配置的位置，这里直接回车选择根目录。
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/06.png" width="900" />
</div>

<br>

- 站点标题、站点描述均可以保持默认，后期可更改。
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/07.png" width="900" />
</div>

<br>

- 主题推荐使用第二个：
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/08.png" width="900" />
</div>

<br>

- 后两个配置按需配置即可：
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/09.png" width="900" />
</div>

<br>

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

### 启动项目

在终端中输入命令 `npm run docs:dev` 并执行。

执行后终端会出现以下界面：

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/10.png" width="900" />
</div>

<br>

按住 `command` 键（Win 系统为 `Ctrl` 键）并单击链接，打开如下界面即项目启动成功：

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/11.png" width="900" />
</div>

## 自定义配置

接下来，我们可以对项目的主页、导航栏、侧边栏等进行自定义配置。

### 主页

#### 标题配置

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/12.png" width="900" />
</div>

<br>

在 `./.vitepress/index.md` 的`hero` 中配置：

```ts
hero:
  name: "XMoKC"  // [!code focus]
  text: "一个开发知识库</br>设计·开发"   // [!code focus]
  tagline: 持续学习，持续进步  // [!code focus]
  image:
    src: /img/svg/home/logo.svg
    alt: XMoKC
  actions:
    - theme: brand
      text: 开始浏览
      link: /frontend/HTML/HTML_1
    - theme: alt
      text: 查看目录
      link: /api-examples
```

::: info **【配置说明】**
- `name` ：`text` 上方的字符，带有渐变颜色，尽量简短，一般为产品名称。
- `text` ：hero 部分的主要文字， 被定义为 `h1` 标签
- `tagline` ：hero 部分的次要文字， 被定义为 `p` 标签
:::

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 右侧图片配置

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/13.png" width="900" />
</div>

<br>

在 `./.vitepress/index.md` 的`hero` 中配置：

```ts
hero:
  name: "XMoKC" 
  text: "一个开发知识库</br>设计·开发" 
  tagline: 持续学习，持续进步
  image:  // [!code focus]
    src: /img/svg/home/logo.svg  // [!code focus]
    alt: XMoKC  // [!code focus]
  actions:
    - theme: brand
      text: 开始浏览
      link: /frontend/HTML/HTML_1
    - theme: alt
      text: 查看目录
      link: /api-examples
```
::: info **【配置说明】**
- `image` ：主页右侧部分的图片。
  - `src` ：图片的路径。
  - `alt` ：图片的替代文本。（图片未正确加载时显示）
:::

<div class="xuxianfg"></div>

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 按钮配置

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/14.png" width="900" />
</div>

<br>

在 `./.vitepress/index.md` 的`hero` 中配置：

```ts
hero:
  name: "XMoKC" 
  text: "一个开发知识库</br>设计·开发" 
  tagline: 持续学习，持续进步
  image:  
    src: /img/svg/home/logo.svg  
    alt: XMoKC  
  actions:  // [!code focus]
    - theme: brand  // [!code focus]
      text: 开始浏览  // [!code focus]
      link: /frontend/HTML/HTML_1  // [!code focus]
    - theme: alt  // [!code focus]
      text: 查看目录  // [!code focus]
      link: /api-examples  // [!code focus]
```

::: info **【配置说明】**
- `actions` ：主页中部的按钮。
  - `theme` ：按钮的主题，有 `brand` 和 `alt` 两种。
  - `text` ：按钮上的文字。
  - `link` ：按钮的链接。可以是外部链接，也可以是内部链接。
:::

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 特征描述配置

<br>

<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/project/blog/VitePress/16.png" width="900" />
</div>

<br>

在 `./.vitepress/index.md` 的`feature` 中配置：

```ts
features:
  - icon: 
      dark: /img/svg/home/dark-book.svg
      light: /img/svg/home/neutral-book.svg
    title: 学习文档
    details: XMo在学习过程中的整理的文档，包括但不限于开发文档、学习笔记等
  - icon:
      dark: /img/svg/home/dark-work.svg
      light: /img/svg/home/neutral-work.svg
    title: 工作文档
    details: XMo在工作过程中的整理的文档，包括但不限于工具、框架、库等
  - icon:
      dark: /img/svg/home/dark-project.svg
      light: /img/svg/home/neutral-project.svg
    title: 项目文档
    details: XMo在项目过程中的整理的文档，包括但不限于项目代码、项目文档等
```
::: info **【配置说明】**
- `features` ：主页下部的特征描述部分。
  - `icon` ：特征描述的图标。
    - `dark` ：图标在深色模式下的路径。
    - `light` ：图标在浅色模式下的路径。
  - `title` ：特征描述的标题。
  - `details` ：特征描述的详细内容。
:::

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 导航栏配置

Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 侧边栏配置

<br>

<div style="height:1px;background:repeating-linear-gradient(90deg, #888, #888 4px, transparent 4px, transparent 8px)"></div>

#### 页脚配置

在 `./.vitepress/config.mts` 的 `defineConfig` 中增添 footer 配置：

```json
footer: {
copyright: 'Copyright © 2022-2025 小陌XMo'
}
```


