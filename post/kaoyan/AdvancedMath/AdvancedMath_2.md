---
title: 函数极限定义及性质
titleTemplate: 高等数学
description: 函数极限定义及性质
layout: doc
navbar: true
sidebar: true
aside: true
outline: deep
lastUpdated: true
prev: false
next: false
tags: ["高等数学","函数极限","极限定义","基本性质"]
---

# 函数极限定义及基本性质

## 一、函数极限的定义

<span class="bold">定义 1：自变量趋向于定点 $x_{0}$ 时函数的极限。</span>

<br />

$\begin{aligned}\lim _{x \rightarrow x_{0}}\ \end{aligned} f(x)=A \Leftrightarrow$ 对于 $\forall \ \varepsilon>0，\exists\  \delta>0$ ，当 $0<\big|x-x_{0}\big|<\delta$ 时, 有 $\big|f(x)-A\big|<\varepsilon$ 。

<br />

<br />

<span class="red-m" style="font-size:1.1em">考点梳理</span>

- 定义中"$x \rightarrow x_{0}$"表示"$x_{0}$ 的某去心邻域"。若利用数学语言表达，即：

<span style="text-align:center">

$\begin{aligned}\exists\  \delta>0\end{aligned}$, 当 $0<\big|x-x_{0}\big|<\delta$ 时。

</span>

- 极限 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)$ 与 $f(x)$ 在 $x_{0}$ 处的函数值无关。

- **极限存在的必要条件**：

  <br />
  
  若极限 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)$ 存在，则函数 $f(x)$ 在 $x=x_{0}$ 的某去心邻域内处处有定义。

<br />

::: info <span class="blue-bold">例 1.10</span>

给出以下四个命题：

（1）若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=A$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=\big|A\big|$

（2）若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=\big|A\big|$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=A$

（3）若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=0$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=0$

（4）若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=0$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=0$

其中真命题的个数是 __________ 。

A． 1

B． 2

C． 3

D． 4

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin"></span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

本题结论：

- 若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=A$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=\big|A\big|$ ，但反之却不一定成立；

- 若 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ f(x)=0$ ，则 $\begin{aligned}\lim _{x \rightarrow x_{0}}\end{aligned}\ \big|f(x)\big|=0$ ，反之也成立。

<span class="bold">定义2：自变量趋向于定点 $x_{0}$ 时函数的左右极限</span>
（1）右极限

$\begin{aligned}\lim _{x \rightarrow x_{0}^{+}} f(x)=A \Leftrightarrow \forall \varepsilon>0, \exists \delta>0\end{aligned}$ ，当 $0<x-x_{0}<\delta$ 时，有 $|f(x)-A|<\varepsilon$。

（2）左极限

$\begin{aligned}\lim _{x \rightarrow x_{0}^{-}} f(x)=A \Leftrightarrow \forall \varepsilon>0, \exists \delta>0\end{aligned}$ ，当 $-\delta<x-x_{0}<0$ 时，有 $|f(x)-A|<\varepsilon$。

【注】 $\begin{aligned}\lim _{x \rightarrow x_{0}} f(x)=A \Leftrightarrow \lim _{x \rightarrow x_{0}^{+}} f(x)=\lim _{x \rightarrow x_{0}^{-}} f(x)=A\end{aligned}$。


## 极限性质 1 ：唯一性

## 极限性质 2 ：局部保号性

## 极限性质 3 ：局部有界性

