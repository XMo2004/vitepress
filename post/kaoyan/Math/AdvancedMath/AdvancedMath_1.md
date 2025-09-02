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

# 1.1 微积分预备知识

<br />

::: details 本章考研「大纲要求」

<br />

**数学一、数学二大纲要求：**<br />
1.理解函数的概念，掌握函数的表示法，会建立应用问题的函数关系。<br />
2.了解函数的有界性、单调性、周期性和奇偶性。<br />
3.理解复合函数及分段函数的概念，了解反函数及隐函数的概念。<br />
4.掌握基本初等函数的性质及其图形，了解初等函数的概念。<br />
5.理解极限的概念，理解函数左极限与右极限的概念以及极限存在与左极限、右极限的关系。<br />
6.掌握极限的性质及四则运算法则。<br />
7.掌握极限存在的两个准则，并会利用其求极限，掌握利用两个重要极限求极限的方法。<br />
8.理解无穷小量、无穷大量概念，掌握无穷小量的比较方法，会用等价无穷小量求极限。<br />
9.掌握用洛必达法则求未定式极限的方法。<br />
10.理解函数连续性的概念（含左连续与右连续），会判别函数间断点的类型。<br />

---

**数学三大纲要求：**<br />
1.理解函数的概念，掌握函数的表示法，会建立应用问题的函数关系。<br />
2.了解函数的有界性、单调性、周期性和奇偶性。<br />
3.理解复合函数及分段函数的概念，了解反函数及隐函数的概念。<br />
4.掌握基本初等函数的性质及其图形，了解初等函数的概念。<br />
5.理解极限的概念，理解函数左极限与右极限的概念以及极限存在与左极限、右极限的关系。<br />
6.了解极限的性质与极限存在的两个准则，掌握极限的四则运算法则，掌握利用两个重要极限求极限的方法。<br />
7.理解无穷小量、无穷大量概念，掌握无穷小量的比较方法，会用等价无穷小量求极限。<br />
8.掌握用洛必达法则求未定式极限的方法。<br />
9.理解函数连续性的概念（含左连续与右连续），会判别函数间断点的类型。<br />

:::


## 一、函数的概念

::: info 定义

设 $\begin{aligned}x\end{aligned}$ 与 $\begin{aligned}y\end{aligned}$ 是两个变量，$\begin{aligned}D\end{aligned}$ 是一个非空的实数集，若存在一个对应法则 $\begin{aligned}f\end{aligned}$，使得对于每一个 $\begin{aligned}x \in D\end{aligned}$，按照这个对应法则，都有唯一确定的实数值 $\begin{aligned}y\end{aligned}$ 与之对应，则称 $\begin{aligned}f\end{aligned}$ 为定义在 $\begin{aligned}D\end{aligned}$ 上的一个**函数**，记为 $\begin{aligned}y=f(x)\end{aligned}$，称 $\begin{aligned}x\end{aligned}$ 为函数的**自变量**，$\begin{aligned}y\end{aligned}$ 为函数的**因变量**，$\begin{aligned}D\end{aligned}$ 为函数的**定义域**，并把相应的函数值的全体 $\begin{aligned}E=\{y \mid y=f(x), x \in D\}\end{aligned}$ 称为函数的**值域**。

:::

<br />

<span class="red-m" style="font-size:1.1em">考点梳理</span>

- 若两个函数为同一函数，当且仅当两个函数的定义域和对应法则完全相同。<br />
> <span class="blue-bold">【例】</span><span class="kaiti">$\begin{aligned}y=f(x)\end{aligned}$ 与 $\begin{aligned}y=f(t)\end{aligned}$ 为同一个函数，说明函数的表示与自变量的字母无关。</span><br />

- 函数定义域是指函数自变量的取值范围，具体问题中务必明确函数自变量是哪个部分。<br />
> <span class="blue-bold">【例】</span><span class="kaiti">函数 $\begin{aligned}f\left(x^{2}+5\right)\end{aligned}$ 与 $\begin{aligned}f(x)\end{aligned}$ 的自变量均为 $\begin{aligned}x\end{aligned}$。</span><br />

- 在同一对应法则下，$\begin{aligned}f(\square)\end{aligned}$ 括号内整体的取值范围是一样的。

<br />

::: info <span class="blue-bold">例 1.1</span>

设 $\begin{aligned}f(x)\end{aligned}$ 的定义域为 $\big[5,10\big]$ ，则 $\begin{aligned}f\left(x^{2}+1\right)\end{aligned}$ 的定义域为 _________ 。

A．$\big[-3,-2\big]$

B．$\big[2,3\big]$

C．$\big[-2,2\big]$

D．$\big[-3,-2\big] \cup \big[2,3\big]$

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">D</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  由题意可知：
  
  函数 $\begin{aligned}f(x)\end{aligned}$ 的定义域为 $\big[5,10\big]$ ，则 $x \in \big[5,10\big]$ 。

  因此函数 $\begin{aligned}f(x^{2}+1)\end{aligned}$ 的括号内的取值范围是 $\big[5,10\big]$ ，即 $x^2+1 \in \big[5,10\big]$ 。

  解得： $x \in \big[-3,-2\big] \cup \big[2,3\big]$ 。
  </div>
</details>

:::

<br />

::: info <span class="blue-bold">例 1.2</span>

设函数 $\begin{aligned}f(x-1)\end{aligned}$ 的定义域为 $\begin{aligned}\left[0, \frac{1}{2}\right]\end{aligned}$ ，则函数 $\begin{aligned}f\big(\sin x\big)\end{aligned}$ 的定义域为 _________ 。<br />

A．$\begin{aligned}\left[0, \frac{\pi}{6}\right]\end{aligned}$

B．$\begin{aligned}\left[2 k \pi, 2 k \pi+\frac{\pi}{6}\right], k \in \mathbf{Z}\end{aligned}$

C．$\begin{aligned}\left[-\frac{\pi}{6}, 0\right]\end{aligned}$

D．$\begin{aligned}\left[2 k \pi-\frac{5 \pi}{6}, 2 k \pi-\frac{\pi}{6}\right], k \in \mathbf{Z}\end{aligned}$

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">D</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

## 二、函数的四种特性

### 1. 奇偶性

::: info <span></span>

设 $f(x)$ 的定义域 $D$ 关于原点对称，若对 $\forall x \in D$ ，恒有 $f(-x)=f(x)$ ，则称 $f(x)$ 为**偶函数**；若对 $\forall x \in D$ ，恒有 $f(-x)=-f(x)$ ，则称 $f(x)$ 为**奇函数**。

:::

<br />

<span class="red-m" style="font-size:1.1em">考点梳理</span>

- 若 $f(x)$ 为偶函数，则 $f(x)$ 关于 $y$ 轴对称。

- 若 $f(x)$ 为奇函数，则 $f(x)$ 关于原点对称，且当 $f(x)$ 在 $x=0$ 存在时，$f(0)=0$ 。

- 设 $f(x)$ 在区间 $(-l,l)$ 内有定义，则 ：
  - $F(x)=f(x)+f(-x)$ 为偶函数
  - $G(x)=f(x)-f(-x)$ 为奇函数 

- 奇 $\times$ 奇 $=$ 偶； 奇 $\times$ 偶 $=$ 奇； 偶 $\times$ 偶 $=$ 偶。

- 奇 $\pm$ 奇 $=$ 奇； 偶 $\pm$ 偶 $=$ 偶； 奇 $\pm$ 偶 无法确定。

<br />

::: info <span class="blue-bold">例 1.3</span>

以下四个函数：

（1）$\begin{aligned} f_{1}(x)=\frac{\mathrm{e}^{x}+\mathrm{e}^{-x}}{2} \end{aligned}$ ；

（2）$\begin{aligned} f_{2}(x)=\frac{\mathrm{e}^{x}-\mathrm{e}^{-x}}{2} \end{aligned}$ ；

（3）$\begin{aligned} f_{3}(x)=\ln \frac{1-x}{1+x} \end{aligned}$ ；

（4）$\begin{aligned} f_{4}(x)=\ln \left(x+\sqrt{x^{2}+1}\right) \end{aligned}$ 

其中是奇函数的个数是 _________ 。

A．1　　　　B．2　　　　C．3　　　　D．4

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">C</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

### 2. 周期性

::: info <span></span>
设函数 $f(x)$ 的定义域为 $D$，若存在一个正数 $T$，使得对于任意 $x \in D$，都有 $x+T \in D$，且 $f(x+T)=f(x)$，则称 $f(x)$ 为周期函数，且正数 $T$ 为 $f(x)$ 的周期．通常我们说周期函数的周期是指最小正周期。
:::

<br />

需掌握几个常见周期函数的最小正周期 $T$ ：

- $\begin{aligned} y=\sin \omega x, \ \ y=\cos \omega x\end{aligned}$ 的周期为 $\begin{aligned}T=\frac{2 \pi}{|\omega|}\end{aligned}$

- $\begin{aligned} y=\tan \omega x, \ \ y=\cot \omega x\end{aligned}$ 的周期为 $\begin{aligned}T=\frac{\pi}{|\omega|}\end{aligned}$

- $\begin{aligned} y=|\sin x|, \ \ y=|\cos x|\end{aligned}$ 的周期为 $\begin{aligned}T=\pi\end{aligned}$

### 3. 单调性

::: info <span></span>

设 $f(x)$ 在区间 $I$ 上有定义，若对区间 $I$ 上任意两点 $x_{1}, x_{2}$：

- 单调递增：当 $x_{1}<x_{2}$ 时，$f\left(x_{1}\right)<f\left(x_{2}\right)$ 恒成立。

- 单调递减：当 $x_{1}<x_{2}$ 时，$f\left(x_{1}\right)>f\left(x_{2}\right)$ 恒成立。
:::

### 4. 有界性

::: info <span></span>

设函数 $f(x)$ 的定义域为 $D$ ，且区间 $I \subset D$ ：

若存在常数 $M>0$ ，使得对于任意 $x \in I$ 均有 $|f(x)| \leqslant M$ ，则称 $f(x)$ 在 $I$ 上有界，否则，则称 $f(x)$ 在 $I$ 上无界。

:::

<br />

<span class="red-m" style="font-size:1.1em">考点梳理</span>

- 函数 $f(x)$ 在区间 $I$ 上有界的充分必要条件是：既有上界，也有下界。
- 常见的有界函数有：
  - $\begin{aligned}-1 \leqslant \sin x \leqslant 1,\ -1 \leqslant \cos x \leqslant 1,\ -1 \leqslant \sin \frac{1}{x} \leqslant 1,\ -1 \leqslant \cos \frac{1}{x} \leqslant 1\end{aligned}$
  - $\begin{aligned}-\frac{\pi}{2} \leqslant \arcsin x \leqslant \frac{\pi}{2},\ 0 \leqslant \arccos x \leqslant \pi; \ -\frac{\pi}{2}<\arctan x<\frac{\pi}{2},\  0<\operatorname{arccot} x<\pi\end{aligned}$

## 三、基本初等函数

基本初等函数包括：反三角函数、对数函数、幂函数、三角函数、指数函数。

### 1. 三角函数

### 2. 反三角函数

### 3. 指数函数

### 4. 对数函数

### 5. 幂函数

## 四、分段函数

在自变量的不同变化范围内用不同表达式表示的函数称为<span class="bold">分段函数</span>。

> <span class="blue-bold">【例】</span> $\begin{aligned}f(x)=\left\{\begin{array}{ll}\sin x, & x>0, \\ \mathrm{e}^{x}-1, & x \leqslant 0 .\end{array}\right. \end{aligned}$

## 五、初等函数

由常数和基本初等函数经过有限次的四则运算和复合所构成的用一个表达式表示的函数称为<span class="bold">初等函数</span>。一般地，不能用一个数学式子表达的函数称为<span class="bold">非初等函数</span>。

> <span class="blue-bold">【例】</span> 
> 
> <div class="suojin">
> 
> 分段函数 $\begin{aligned}f(x)=\left\{\begin{array}{ll}\sin x, & x>0, \\ \mathrm{e}^{x}-1, & x \leqslant 0,\end{array}\right.\ \ \ \ \end{aligned}$ 
> 符号函数 $\begin{aligned}\operatorname{sgn} x=\left\{\begin{array}{ll}1, & x>0, \\ 0, & x=0, \\ -1, & x<0\end{array}\right.\end{aligned}$ 
> 
> 均为非初等函数。
> </div>

<span class="red-bold">【注】</span>
<span class="kaiti">
绝对值函数 $y=|x|$ 与幂指函数 $y=f(x)^{g(x)}\ \Big(f(x)>0\Big)$ 也都是初等函数。
</span>

## 六、复合函数

设函数 $f(u)$ 的定义域为 $U$ ，函数 $u=g(x)$ 的定义域为 $D$ ，值域为 $Z$ 。

若 $Z \subseteq U$ ，则称 $y=f\Big[g(x)\Big]$ 是定义在 $D$ 上的复合函数。

此外，$y=f(u)$ 称为外层函数，$u=g(x)$ 称为内层函数。

<br />

::: info <span class="blue-bold">例 1.4</span>

设 $g(x)=\begin{aligned}\left\{\begin{array}{ll}2-x, & x \leqslant 0, \\ x+2, & x>0,\end{array}\right.\ \ \end{aligned}$ $f(x)=\begin{aligned}\left\{\begin{array}{ll}x^{2}, & x<0, \\ -x, & x \geqslant 0,\end{array}\right.\end{aligned}$ 则 $g\Big[f(x)\Big]$ 为 __________ 。

<br />

A．$\begin{aligned}\left\{\begin{array}{ll}2+x^{2}, & x<0 \\ 2-x, & x \geqslant 0\end{array}\right.\ \ \ \ \ \ \ \ \ \ \end{aligned}$
B．$\begin{aligned}\left\{\begin{array}{ll}2-x^{2}, & x<0 \\ 2+x, & x \geqslant 0\end{array}\right.\end{aligned}$

<br />

C．$\begin{aligned}\left\{\begin{array}{ll}2-x^{2}, & x<0 \\ 2-x, & x \geqslant 0\end{array}\right.\ \ \ \ \ \ \ \ \ \ \end{aligned}$
D．$\begin{aligned}\left\{\begin{array}{ll}2+x^{2}, & x<0 \\ 2+x, & x \geqslant 0\end{array}\right.\end{aligned}$

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">D</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

<br />

::: info <span class="blue-bold">例 1.5</span>

设 $f(x)=\begin{aligned}\left\{\begin{array}{l}1,|x| \leqslant 1, \\ 0,|x|>1,\end{array}\right.\ \ \end{aligned}$ 则 $f\bigg\{f\Big[f(x)\Big]\bigg\}=$ __________ 。

<br />

A． $\begin{aligned}0\ \ \ \ \ \end{aligned}$
B． $\begin{aligned}1\ \ \ \ \ \end{aligned}$
C． $\begin{aligned}-1\ \ \ \ \ \end{aligned}$
D． $\begin{aligned}\left\{\begin{array}{l}0,|x| \leqslant 1 \\ 1,|x|>1\end{array}\right.\end{aligned}$

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">B</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

<br />

::: info <span class="blue-bold">例 1.6</span>

设函数 $\begin{aligned}f\left(\sin \frac{x}{2}\right)=\cos x+1\end{aligned}$ ，则 $\begin{aligned}f\left(\sin \frac{x}{2}\right)+f\left(\cos \frac{x}{2}\right)=\end{aligned}$ __________ 。

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">B</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

<br />

::: info <span class="blue-bold">例 1.7</span>

设函数 $\begin{aligned} f\left(x+\frac{1}{x}\right)=\frac{x+x^{3}}{x^{4}+1} \end{aligned}$ ，则 $\begin{aligned} \lim _{x \rightarrow 2^{+}} f(x) \end{aligned} =$ __________ 。

<br />

<details>
  <summary><span class="red-bold">【答案】</span></summary>
  <span class="bold suojin">B</span>
</details>

<details>
  <summary><span class="green-bold">【解析】</span></summary>
  <div class="kaiti suojin">
  略
  </div>
</details>

:::

## 七、反函数

设函数 $f(x)$ 的定义域为 $D$ ，值域为 $R_{y}$ 。若对于任意的 $y \in R_{y}$ ，有唯一确定的 $x \in D$ ，使得 $y=f(x)$ ，则由此可以确定一个 $y$ 关于 $x$ 的新函数，记为 $x=f^{-1}(y)$ ，并称其为 $y=f(x)$ 的反函数。

<br />

<span class="red-m" style="font-size:1.1em">考点梳理</span>

- 单调的函数一定具有反函数。
- 函数 $y=f(x)$ 与其反函数 $y=f^{-1}(x)$ 关于 $y=x$ 对称。
- 函数 $y=f(x)$ 与其反函数 $y=f^{-1}(x)$ 定义域与值域互相调换。
- 若函数 $y=f^{-1}(x)$ 是函数 $y=f(x)$ 的反函数，则有：
  $$\begin{aligned}f^{-1}\Big[f(x)\Big]=x,\ \ \ \  f\Big[f^{-1}(x)\Big]=x\end{aligned}$$ 

<br />

::: info <span class="blue-bold">例 1.8</span>

求反双曲正弦函数 $y=\ln \left(x+\sqrt{x^{2}+1}\right)$ 的反函数。

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

<br />

::: info <span class="blue-bold">例 1.9</span>

求函数 $f(x)=\arcsin \big(\sin x\big)$ 与 $g(x)=\sin \big(\arcsin x\big)$ 的具体表达式。

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