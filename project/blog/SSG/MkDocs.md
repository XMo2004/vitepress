---
title: MkDocs
titleTemplate: 静态文档页面构建工具
description: MkDocs
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
---

# MkDocs

## 一、MkDocs 简介

MkDocs 是一个**快速、简单、优雅的静态网站生成器**，专门为创建**项目文档**而设计。它的核心思想是：让你能够专注于编写内容（使用 Markdown），而它负责将内容构建成一个美观、可浏览的静态网站。

官方网址：www.mkdocs.org

![[22.png]]

## 二、部署流程

1. **安装：** `pip install mkdocs` (需要 Python 环境)
2. **创建新项目：** `mkdocs new my-docs-site`
3. **进入项目目录：** `cd my-docs-site`
4. **编辑内容：** 在 `docs/` 目录下编写 Markdown (`.md`) 文件。
5. **配置导航：** 编辑 `mkdocs.yml` 文件，定义 `site_name` 和 `nav` 结构。
6. **本地预览：** 运行 `mkdocs serve`，然后在浏览器中访问 `http://localhost:8000`。
7. **构建站点：** 运行 `mkdocs build` (输出到 `site/` 目录)。
8. **部署：** 将 `site/` 目录的内容上传到你的托管平台。


