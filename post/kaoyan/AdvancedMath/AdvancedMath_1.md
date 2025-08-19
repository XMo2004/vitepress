---
title: 微积分预备知识
titleTemplate: 高等数学
description: 微积分预备知识
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
tags: ["高等数学","微积分","预备知识","基础概念"]
---

# 微积分预备知识

<ArticleSummary :texts="[
  '本文详细介绍了微积分预备知识的基本概念、重要性质和计算方法。通过系统的理论阐述和典型例题分析，帮助读者深入理解第一章 函数、极限与连续中的核心内容，掌握解题技巧和应用方法。',
  '微积分预备知识是第一章 函数、极限与连续的重要组成部分。本文从基础概念出发，逐步深入到具体的计算技巧和实际应用，通过丰富的例题和详细的解析过程，帮助读者全面掌握相关知识点。',
  '想要掌握第一章 函数、极限与连续？微积分预备知识是关键环节！本文通过清晰的逻辑结构和详细的推导过程，带你深入理解相关理论，掌握解题方法，提升数学分析和计算能力。',
  '微积分预备知识在高等数学体系中具有重要地位。本文将为你详细解析相关概念的内涵和外延，探讨计算方法的原理和技巧，帮助你建立完整的知识框架和解题思路。'
]" />

<br />

::: details 本章考研「大纲要求」

<br />

**数学一、数学二大纲要求：**<br />
&nbsp;&nbsp;1.理解函数的概念，掌握函数的表示法，会建立应用问题的函数关系。<br />
&nbsp;&nbsp;2.了解函数的有界性、单调性、周期性和奇偶性。<br />
&nbsp;&nbsp;3.理解复合函数及分段函数的概念，了解反函数及隐函数的概念。<br />
&nbsp;&nbsp;4.掌握基本初等函数的性质及其图形，了解初等函数的概念。<br />
&nbsp;&nbsp;5.理解极限的概念，理解函数左极限与右极限的概念以及极限存在与左极限、右极限的关系。<br />
&nbsp;&nbsp;6.掌握极限的性质及四则运算法则。<br />
&nbsp;&nbsp;7.掌握极限存在的两个准则，并会利用其求极限，掌握利用两个重要极限求极限的方法。<br />
&nbsp;&nbsp;8.理解无穷小量、无穷大量概念，掌握无穷小量的比较方法，会用等价无穷小量求极限。<br />
&nbsp;&nbsp;9.掌握用洛必达法则求未定式极限的方法。<br />
&nbsp;&nbsp;10.理解函数连续性的概念（含左连续与右连续），会判别函数间断点的类型。<br />

<div class="xuxianfg"></div>

**数学三大纲要求：**<br />
&nbsp;&nbsp;1.理解函数的概念，掌握函数的表示法，会建立应用问题的函数关系。<br />
&nbsp;&nbsp;2.了解函数的有界性、单调性、周期性和奇偶性。<br />
&nbsp;&nbsp;3.理解复合函数及分段函数的概念，了解反函数及隐函数的概念。<br />
&nbsp;&nbsp;4.掌握基本初等函数的性质及其图形，了解初等函数的概念。<br />
&nbsp;&nbsp;5.理解极限的概念，理解函数左极限与右极限的概念以及极限存在与左极限、右极限的关系。<br />
&nbsp;&nbsp;6.了解极限的性质与极限存在的两个准则，掌握极限的四则运算法则，掌握利用两个重要极限求极限的方法。<br />
&nbsp;&nbsp;7.理解无穷小量、无穷大量概念，掌握无穷小量的比较方法，会用等价无穷小量求极限。<br />
&nbsp;&nbsp;8.掌握用洛必达法则求未定式极限的方法。<br />
&nbsp;&nbsp;9.理解函数连续性的概念（含左连续与右连续），会判别函数间断点的类型。<br />

:::

<br />

**本章重难点**  

<badge type="danger">极限的定义和性质</badge>  <badge type="danger">无穷小量比阶</badge>  <badge type="danger">函数极限计算</badge>  <badge type="danger">数列极限计算</badge>

## 函数的概念

::: info 定义

设 $\begin{aligned}x\end{aligned}$ 与 $\begin{aligned}y\end{aligned}$ 是两个变量，$\begin{aligned}D\end{aligned}$ 是一个非空的实数集，若存在一个对应法则 $\begin{aligned}f\end{aligned}$，使得对于每一个 $\begin{aligned}x \in D\end{aligned}$，按照这个对应法则，都有唯一确定的实数值 $\begin{aligned}y\end{aligned}$ 与之对应，则称 $\begin{aligned}f\end{aligned}$ 为定义在 $\begin{aligned}D\end{aligned}$ 上的一个**函数**，记为 $\begin{aligned}y=f(x)\end{aligned}$，称 $\begin{aligned}x\end{aligned}$ 为函数的**自变量**，$\begin{aligned}y\end{aligned}$ 为函数的**因变量**，$\begin{aligned}D\end{aligned}$ 为函数的**定义域**，并把相应的函数值的全体 $\begin{aligned}E=\{y \mid y=f(x), x \in D\}\end{aligned}$称为函数的**值域**。

:::

<br />

关于函数的定义，有几点需要注意：

- 若两个函数为同一函数，当且仅当两个函数的定义域和对应法则完全相同。<br />
例如：$\begin{aligned}y=f(x)\end{aligned}$ 与 $\begin{aligned}y=f(t)\end{aligned}$ 为同一个函数，也说明函数的表示与自变量用什么字母无关。

- 函数定义域是指函数自变量的取值范围，具体问题中务必明确函数自变量是哪个部分。<br />
例如：函数 $\begin{aligned}f\left(x^{2}+5\right)\end{aligned}$ 与 $\begin{aligned}f(x)\end{aligned}$ 的自变量均为 $\begin{aligned}x\end{aligned}$。

- 在同一对应法则下，$\begin{aligned}f(\square)\end{aligned}$ 括号内整体的取值范围是一样的。


<br />

::: info 例 1.1

设 $\begin{aligned}f(x)\end{aligned}$ 的定义域为 $\begin{aligned}[5,10]\end{aligned}$ ，则 $\begin{aligned}f\left(x^{2}+1\right)\end{aligned}$ 的定义域为 _________ 。

A．$[-3,-2]$

B．$[2,3]$

C．$[-2,2]$

D．$[-3,-2] \cup[2,3]$

:::

::: details 解析

:::

<br />

::: info 例 1.2

设函数 $\begin{aligned}f(x-1)\end{aligned}$ 的定义域为 $\begin{aligned}\left[0, \frac{1}{2}\right]\end{aligned}$ ，则函数 $\begin{aligned}f(\sin x)\end{aligned}$ 的定义域为 _________ 。<br />

A．$\begin{aligned}\left[0, \frac{\pi}{6}\right]\end{aligned}$

B．$\begin{aligned}\left[2 k \pi, 2 k \pi+\frac{\pi}{6}\right], k \in \mathbf{Z}\end{aligned}$

C．$\begin{aligned}\left[-\frac{\pi}{6}, 0\right]\end{aligned}$

D．$\begin{aligned}\left[2 k \pi-\frac{5 \pi}{6}, 2 k \pi-\frac{\pi}{6}\right], k \in \mathbf{Z}\end{aligned}$

:::

::: details 解析

:::

<div class="xuxianfg"></div>

## 函数的四种特性

### 奇偶性

::: info <span></span>

设 $f(x)$ 的定义域 $D$ 关于原点对称，若对 $\forall x \in D$ ，恒有 $f(-x)=f(x)$ ，则称 $f(x)$ 为**偶函数**；若对 $\forall x \in D$ ，恒有 $f(-x)=-f(x)$ ，则称 $f(x)$ 为**奇函数**。

:::

<br />

- 若 $f(x)$ 为偶函数，则 $f(x)$ 关于 $y$ 轴对称。

- 若 $f(x)$ 为奇函数，则 $f(x)$ 关于原点对称，且当 $f(x)$ 在 $x=0$ 存在时，$f(0)=0$ 。

- 设 $f(x)$ 在区间 $(-l,l)$ 内有定义，则 ：
  - <span style="background-color:rgba(239, 68, 68, 0.2);"> $F(x)=f(x)+f(-x)$ 为偶函数 </span>
  - <span style="background-color:rgba(239, 68, 68, 0.2);"> $G(x)=f(x)-f(-x)$ 为奇函数 </span>

- 奇函数 $\times$ 奇函数 $=$ 偶函数；奇函数 $\times$ 偶函数 $=$ 奇函数$;$偶函数 $\times$ 偶函数 $=$ 偶函数。

- 奇函数 $\pm$ 奇函数 $=$ 奇函数；偶函数 $\pm$ 偶函数 $=$ 偶函数$;$奇函数 $\pm$ 偶函数无法确定。

::: info 例 1.3

以下四个函数：

（1）$\begin{aligned} f_{1}(x)=\frac{\mathrm{e}^{x}+\mathrm{e}^{-x}}{2} \end{aligned}$ ；

（2）$\begin{aligned} f_{2}(x)=\frac{\mathrm{e}^{x}-\mathrm{e}^{-x}}{2} \end{aligned}$ ；

（3）$\begin{aligned} f_{3}(x)=\ln \frac{1-x}{1+x} \end{aligned}$ ；

（4）$\begin{aligned} f_{4}(x)=\ln \left(x+\sqrt{x^{2}+1}\right) \end{aligned}$ 

其中是奇函数的个数是 _________ 。

A．1　　　　B．2　　　　C．3　　　　D．4

:::

::: details 解析

:::

<div class="xuxianfg"></div>

### 周期性

::: info <span></span>
设函数 $f(x)$ 的定义域为 $D$，若存在一个正数 $T$，使得对于任意 $x \in D$，都有 $x+T \in D$，且 $f(x+T)=f(x)$，则称 $f(x)$ 为周期函数，且正数 $T$ 为 $f(x)$ 的周期．通常我们说周期函数的周期是指最小正周期。
:::

<br />

需掌握几个常见周期函数的最小正周期 $T$ ：

- <span style="background-color:rgba(239, 68, 68, 0.2);">$\begin{aligned} y=\sin \omega x, \ \ y=\cos \omega x\end{aligned}$</span> 的周期为 <span style="color:rgba(239, 68, 68, 1.0);">$\begin{aligned}T=\frac{2 \pi}{|\omega|}\end{aligned}$</span>

- <span style="background-color:rgba(239, 68, 68, 0.2);">$\begin{aligned} y=\tan \omega x, \ \ y=\cot \omega x\end{aligned}$</span> 的周期为 <span style="color:rgba(239, 68, 68, 1.0);">$\begin{aligned}T=\frac{\pi}{|\omega|}\end{aligned}$</span>

- <span style="background-color:rgba(239, 68, 68, 0.2);">$\begin{aligned} y=|\sin x|, \ \ y=|\cos x|\end{aligned}$</span> 的周期为 <span style="color:rgba(239, 68, 68, 1.0);">$\begin{aligned}T=\pi\end{aligned}$</span>

<div class="xuxianfg"></div>

### 单调性

::: info <span></span>
设 $f(x)$ 在区间 $I$ 上有定义，若对区间 $I$ 上任意两点 $x_{1}, x_{2}$，当 $x_{1}<x_{2}$ 时，恒有 $f\left(x_{1}\right)<f\left(x_{2}\right)$ 成立，则称 $f(x)$ 在区间 $I$ 上**单调递增**。

若对区间 $I$ 中任意两点 $x_{1}, x_{2}$，当 $x_{1}<x_{2}$ 时，恒有 $f\left(x_{1}\right)>f\left(x_{2}\right)$ 成立，则称 $f(x)$ 在区间 $I$ 上**单调递减**。
:::


## 基本初等函数

## 分段函数

## 初等函数

## 复合函数

## 反函数
