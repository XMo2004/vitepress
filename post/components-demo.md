---
title: 组件使用示例
titleTemplate: 组件使用示例
description: 组件使用示例
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
---

# Markdown 语法 & 组件使用示例

<br />

<Badge type="warning" text="持续更新ing" />

这篇文章详细记录了小编在搭建 VitePress 项目时所使用到的 Markdown 所有用法，还有官方提供的组件以及小编自己写的自定义组件（vue 组件）的使用方法。

如果你还不了解 Markdown ，请点击下方链接查看 Markdown 的简单用法：

<Linkcard url="https://yiov.top/computer/markdown" title="Markdown 简介" description="Markdown 是一种轻量级标记语言，用于格式化文本。" logo="https://vitepress.yiov.top/markdown.png"/>

## 基础功能

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为解析器，并使用 [Shiki](https://shiki.matsu.io/) 来突出显示语言语法

<div class="xuxianfg"></div>

### 基本配置

在 `/.vitepress/config.mts` 中，你可以在 `markdown` 配置 markdown-it 解析器的选项。

```typescript
export default defineConfig({
  markdown:{
      //这里填配置项
  },
})
```

<div class="xuxianfg"></div>

### 标题锚点

标题锚点是用来跳转到页面中的指定标题位置的。

```markdown
[文字说明](#要跳转的标题)
```

::: tip 说明
无论几级标题，都是一个 `#` ，后面跟着标题内容。

**示例：**[跳转到基础功能](#基础功能)
:::

::: details 应对「中文无法正确跳转」的问题
可自定义锚点，先在标题后添加英文锚点。

```markdown
### 标题锚 {#title-anchor}
```

:::


<div class="xuxianfg"></div>

### 图片引用

关于图片引用，有两种方式：<br />
- **相对路径**：相对于当前文件的路径，以 `./` 开头。<br />
- **绝对路径**：相对于项目根目录的路径，以 `/` 开头。

::: info 建议
对于指向内部 Markdown 文件的链接，尽可能使用相对路径，而不是绝对路径
:::

**示例：**

```markdown
![图片描述](./相对路径.jpg)
![图片描述](/绝对路径.jpg)
```

::: details 关于「 VitePress 中 public 文件夹的特殊性」

<br />

<b>1. 根路径映射</b>

在 VitePress 中， `public` 文件夹中的所有文件都会被<b>直接映射到网站的根路径</b>。

这意味着：
- `public/logo.png` → 可以通过 `/logo.png` 访问
- `public/img/icon.svg` → 可以通过 `/img/icon.svg` 访问

<div class="xuxianfg"></div>

<b>2. 无需构建处理</b>

`public` 文件夹中的资源有以下特点：

- 原样复制 ：文件会被原样复制到输出目录的根目录
- 保持文件名 ：不会被重命名或添加哈希值
- 无需导入 ：可以直接通过绝对路径引用

<div class="xuxianfg"></div>

<b>3. 适用场景</b>

public 文件夹特别适合存放：

- `robots.txt` 、 `favicon.ico` 等根目录文件
- PWA图标
- 需要保持原始文件名的资源
- 不需要被构建工具处理的静态资源

<div class="xuxianfg"></div>

<b>4. 引用方式</b>

引用 `public` 文件夹中的资源时，必须使用根绝对路径（以 / 开头），而不是相对路径。

```
![LOGO](/logo.png)  <!-- 正确：使用根绝对路径 -->
```

<div class="xuxianfg"></div>

<b>5. 与 base 配置的兼容性</b>

如果你的网站部署在子路径下（比如 https://example.com/docs/ ），VitePress会自动处理public资源的路径，确保它们能正确访问。

<div class="xuxianfg"></div>

<b>6. 与其他资源处理方式的区别</b>

- 相对路径引用 ：会被Vite处理，添加哈希值，适合经常变化的资源
- public文件夹 ：不被处理，保持原样，适合稳定的静态资源

:::

<div class="xuxianfg"></div>

### 图片懒加载

图片懒加载是指只有当图片滚动到可视区域时，才会开始加载图片。

开启后可以提升我们的访问体验，非常推荐开启。配置方法如下：


```ts
export default defineConfig({
  //markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
})
```

<div class="xuxianfg"></div>

### 链接

内部链接引用：

```markdown
[跳转到前端的基础概念](/frontend/HTML/HTML_1.md#基础概念) 
[文字描述](./xx文章.md#xx标题)
```

外部链接引用：

```markdown
[vuejs.org](https://vuejs.org/)
[文字描述][网址]
```

<div class="xuxianfg"></div>

### frontmatter

[YAML 格式的 frontmatter](https://jekyllrb.com/docs/front-matter/) 是一种在 Markdown 文件的**顶部添加元数据**的方式，用于配置页面的布局、标题、日期等信息。

::: danger 注意
frontmatter 是页面级别的配置文件，因此可以覆盖站点级别或主题级别的配置选项，从而实现页面的个性化配置。
:::

详细的配置参数如下：

- `title` ：页面的标题。
- `titleTemplate` ：标题的后缀。
- `description` ：页面的描述。
-  `head` ：指定要为当前页面注入的额外 `<head>` 标签。将附加在站点级配置注入的头部标签之后。用于页面级别的 SEO 优化、元数据设置等。

示例用法：

```markdown
---
title: Docs with VitePress
titleTemplate: SSG
description: This is a VitePress documentation example.
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

::: details 仅「默认主题」的 frontmatter 配置

- `layout` ：指定页面的布局。
  - `doc` —— 将默认文档样式应用于 markdown 内容。
  - `home` —— “主页”的特殊布局。可配置额外选项，例如 `hero` 和 `features` 。
  - `page` —— 表现类似于 `doc` ，但无任何样式。可以创建一个完全自定义的页面。

<div class="xuxianfg"></div>  

- `hero` ：指定页面的 Hero 区域配置。 <Badge type="danger" text="仅支持 home 页面" />

> 具体配置方法请参考[VitePress官方文档](https://vitepress.dev/zh/reference/default-theme-home-page)。

<div class="xuxianfg"></div>

- `features` ：指定页面的 Features 区域配置。 <Badge type="danger" text="仅支持 home 页面" />

> 具体配置方法请参考[VitePress官方文档](https://vitepress.dev/zh/reference/default-theme-home-page)。

<div class="xuxianfg"></div>

- `navbar` ：是否显示导航栏。
  - `true` —— 显示
  - `false` —— 不显示

<div class="xuxianfg"></div>

- `sidebar` ：是否显示侧边栏。
  - `true` —— 显示
  - `false` —— 不显示

<div class="xuxianfg"></div>

- `aside` ：定义页面导航栏在 `doc` 布局中的位置。
  - `false` —— 禁用导航栏容器。
  - `true` —— 将导航栏渲染到右侧。
  - `left` —— 将导航栏渲染到左侧。

<div class="xuxianfg"></div>

- `outline` ：指定页面的 Outline 区域配置。

<div class="xuxianfg"></div>

- `lastUpdated` ：指定页面的 LastUpdated 区域配置。

<div class="xuxianfg"></div>

- `editLink` ：指定页面的 EditLink 区域配置。

<div class="xuxianfg"></div>

- `footer` ：指定页面的 Footer 区域配置。

<div class="xuxianfg"></div>

- `pageClass` ：指定页面的 Class 名称。

<div class="xuxianfg"></div>

- `footer` ：指定页面的 Footer 区域配置。

<div class="xuxianfg"></div>

- `pageClass` ：指定页面的 Class 名称。

:::



<div class="xuxianfg"></div>

### 视频

视频用HTML5自带的 `<video>` 标签即可。

```html
<video src="/video/1.mp4" controls="controls"></video>
```

::: details 「`<video>`」的常用属性

<br />

- `src` ：视频文件的路径
- `width` ：视频宽度
- `height` ：视频高度
- `poster` ：视频封面图片，在视频加载前显示

<div class="xuxianfg"></div>

- `controls` ：显示播放控件（布尔属性）

  - `true` / `controls` ：显示
  - `false` ：不显示（一般直接移除整个 `controls` 属性即可）

:::

<div class="xuxianfg"></div>

### 表格

<div class="xuxianfg"></div>

### Emoji

<div class="xuxianfg"></div>

### 目录

<div class="xuxianfg"></div>

### 折叠

<div class="xuxianfg"></div>

## 官方组件

### Algolia DocSearch

这个组件通常作为搜索框集成到 VitePress 文档站点的导航栏中，提供全文搜索功能，并可选支持 AI 问答功能。

> 暂时用不到，以后再配置。

### Badge

这是一个徽章组件，主要用于在文档或 UI 中显示状态标签。

默认支持 4 种类型：<Badge type="info" text="info" /> <Badge type="warning" text="warning" /> <Badge type="danger" text="danger" /> <Badge type="tip" text="tip" />，后续可自行拓展其他颜色样式。

```md
<!-- 徽章 -->
<Badge type="info" text="标签内文字" />
<Badge type="warning" text="标签内文字" />
<Badge type="danger" text="标签内文字" />
<Badge type="tip" text="标签内文字" />  

<!-- 小型徽章 -->
<Badge class="small" type="info" text="标签内文字" />
<Badge class="small" type="warning" text="标签内文字" />
<Badge class="small" type="danger" text="标签内文字" />
<Badge class="small" type="tip" text="标签内文字" />  

```

