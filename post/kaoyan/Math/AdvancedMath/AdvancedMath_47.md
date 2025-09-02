---
title: 题型整理
titleTemplate: 高等数学
description: 题型整理
layout: doc
navbar: true
sidebar: true
aside: true
outline: 2
lastUpdated: true
prev: false
next: false
---

# 第一章 题型梳理与强化

## 1 函数的基本性质及常见函数

<div class="center">

### <span class="blue-bold">题型1 函数与原函数间奇偶性、周期性关系</span>

</div>

::: info <span></span>

<span class="bold">1. 导函数的奇偶性、周期性性质</span>

（1）若函数 $f(x)$ 为可导的奇函数，则 $f^{\prime}(x)$ 为偶函数；

（2）若函数 $f(x)$ 为可导的偶函数，则 $f^{\prime}(x)$ 为奇函数；

（3）若函数 $f(x)$ 是以 $T$ 为周期的可导函数，则 $f^{\prime}(x)$ 也是以 $T$ 为周期的周期函数。

<span class="red-bold">【注】</span><span class="kaiti">连续的奇函数的所有原函数都是偶函数；但是，连续的偶函数的原函数中仅有一个原函数是奇函数。</span>

---

<span class="bold">2. 变上限函数与原函数之间的关系</span>

若 $f(x)$ 连续，则 $F(x) = \begin{aligned}\int_{a}^{x} f(t)  \mathrm{d} t\end{aligned}$ 可导，且 $F^{\prime}(x) = f(x)$；

<span class="red-bold">【注】</span><span class="kaiti">若 $f(x)$ 连续，则 $F(x) = \begin{aligned}\int_{a}^{x} f(t)  \mathrm{d} t\end{aligned}$ 是 $f(x)$ 的一个原函数。</span>

---

<span class="bold">3. 变上限函数的奇偶性、周期性性质</span>

设 $f(x)$ 连续，对于 $F(x) = \begin{aligned}\int_{0}^{x} f(t)  \mathrm{d} t\end{aligned}$ 有：

（1）若 $f(x)$ 为奇函数，则 $F(x) = \begin{aligned}\int_{0}^{x} f(t)  \mathrm{d} t\end{aligned}$ 为偶函数；

（2）若 $f(x)$ 为偶函数，则 $F(x) = \begin{aligned}\int_{0}^{x} f(t)  \mathrm{d} t\end{aligned}$ 为奇函数；

（3）若 $f(x)$ 是以 $T$ 为周期的周期函数，且 $\begin{aligned}\int_{0}^{T} f(t)  \mathrm{d} t = 0\end{aligned}$，则 $F(x) = \begin{aligned}\int_{0}^{x} f(t)  \mathrm{d} t\end{aligned}$ 也是以 $T$ 为周期的周期函数。

<span class="red-bold">【注】</span><span class="kaiti">上面我们提到过，连续的偶函数 $f(x)$ 的原函数中仅有一个原函数是奇函数，这个原函数就是 $F(x) = \begin{aligned}\int_{0}^{x} f(t)  \mathrm{d} t\end{aligned}$。</span>

:::

## 2 无穷小量及其比阶

<div class="center">

### <span class="blue-bold">题型1 无穷小比阶问题</span>

</div>

::: info <span></span>

<span class="bold">方法一：利用定义法比阶</span>

---

<span class="bold">方法二：通过确定无穷小量的等价无穷小来定阶</span>

当 $x \rightarrow 0$，若 $f(x) \sim A x^{k}(A \neq 0, k>0)$ ，则 $f(x)$ 为 $x \rightarrow 0$ 时 $x$ 的 $k$ 阶无穷小。

---

<span class="red-bold">【注】</span>等价无穷小替换准则总结：

（1）乘除法因式可替换。

（2）不同阶的无穷小量相加减时，可直接替换，取最低阶的那一项。（和取低阶原则）。

（3）同阶的无穷小量相加减，且每一个无穷小量均等价至最简形式（即 $a x^{k}$ 型，其中 $\left.a \neq 0, k>0\right)$ 不可抵消时，每一项可直接使用等价无穷小替换。

（4）同阶的无穷小量相加减，且每一个无穷小量均等价至最简形式（即 $a x^{k}$ 型，其中 $\left.a \neq 0, k>0\right)$ 可抵消时，此时需要借助泰勒公式展开。

---

<span class="bold">方法三：利用泰勒公式定阶</span>

---

<span class="bold">方法四：利用导数定阶法</span>

设 $f(x)$ 为 $x \rightarrow 0$ 时的无穷小量，即 $\begin{aligned}\lim _{x \rightarrow 0} f(x)=0\end{aligned}$ ，有：

（1）若 $f^{\prime}(x) \sim x^{k}$（ $k$ 为大于 0 的常数），则 $f(x) \sim \begin{aligned}\frac{1}{k+1} x^{k+1}\end{aligned}$

（2）若 $\begin{aligned}\lim _{x \rightarrow 0} f^{\prime}(x)=C \neq 0\end{aligned}$ ，则 $f(x) \sim C x$ 。

:::

<div class="center">

### <span class="blue-bold">题型2 乘法中泰勒展开阶数的确定方法</span>

</div>

::: info <span></span>

切勿缺项，展开技巧为"头看尾、尾看头"，可参考下列例题。

:::

## 3 函数极限计算

<div class="center">

### <span class="blue-bold">题型1 七种未定式的极限计算</span>

</div>

::: info <span></span>

函数极限计算是每年考研中的重点，求解的基本思路是：定型-化简-定法，即先判定函数极限的类型，再对函数进行相应的化简，最后再确定极限计算的方法．

---

<span class="bold">1. 常见的极限化简方法</span>

（1）非零因子淡化（乘除法中非零项先算出）

（2）加减法中极限存在项可拆出计算

（3）遇到根式想有理化

（4）遇到幂指函数想幂指转换化

---

<span class="bold">2．重要的极限求解方法</span>

方法一：等价无穷小替换

方法二：泰勒公式

方法三：洛必达法则

方法四：极限四则运算

方法五：连续的定义

方法六：拉格朗日中值定理

方法七：凑导数定义

方法八：积分中值定理

---

<span class="bold">3. 七种未定式极限的常见求解方法</span>

（1）＂$\begin{aligned}\frac{0}{0}\end{aligned}$＂型：等价无穷小，泰勒公式，洛必达，四则运算，拉格朗日中值定理

（2）＂$\begin{aligned}\frac{\infty}{\infty}\end{aligned}$＂型：抓大头，洛必达法则，上下同除最大项

（3）＂$0 \cdot \infty$＂型：转化为＂$\begin{aligned}\frac{0}{0}\end{aligned}$＂型或＂$\begin{aligned}\frac{\infty}{\infty}\end{aligned}$＂型

（4）＂$\infty-\infty$＂型：通分，倒代换，提出最大项

（5）＂$1^{\infty}$＂型：$\begin{aligned}\lim _{x \rightarrow \square} u^{v}=\mathrm{e}^{\lim _{x \rightarrow \square} v \cdot(u-1)}\end{aligned}$

（6）＂$\infty^{0}$＂型 与 ＂$0^{0}$＂型：$\begin{aligned}\lim _{x \rightarrow \square} u^{v}=\mathrm{e}^{\lim _{x \rightarrow \square} v \cdot \ln u}\end{aligned}$

:::


<div class="center">

### <span class="blue-bold">题型2 涉及变限函数的极限计算</span>

</div>

::: info <span></span>

<span class="bold">1. 必备基础：变限函数的求导法则</span>

若函数 $f(x)$ 连续，且 $\alpha(x)$, $\beta(x)$ 可导，则：
$$
\begin{aligned}
\left[\int_{\alpha(x)}^{\beta(x)} f(t) \mathrm{d} t\right]_{x}^{\prime}=f[\beta(x)] \beta^{\prime}(x)-f[\alpha(x)] \alpha^{\prime}(x)
\end{aligned}
$$

<span class="red-bold">【注】</span>若变限函数的自变量 $x$ 出现在被积分函数中，即非标准型情形时，应先将自变量 $x$ 设法分离出被积分函数，常用方式有：提出自变量，利用第二类换元法。

---

<span class="bold">2. 求解方法</span>

（1）方法一：洛必达法则（首选）

（2）方法二：积分中值定理

若函数 $f(x)$ 在 $[a, b]$ 连续，则存在 $\xi \in(a, b)$ ，使得 $\begin{aligned}\int_{a}^{b} f(x) \mathrm{d} x=f(\xi)(b-a)\end{aligned}$ 。

:::


<div class="center">

### <span class="blue-bold">题型3 已知极限求其中的待定参数</span>

</div>

::: info <span></span>

已知极限结果求其中待定参数的问题，本质还是求函数极限的问题，求解思路仍然是：先定型，再化简，后定法。

---

<span class="red-bold">【注】</span>常用的几个重要结论：

（1）若 $\lim f(x) g(x)=A$（存在），且 $\lim f(x)=\infty$ ，则 $\lim g(x)=0$ ；

（2）若 $\lim \begin{aligned}\frac{f(x)}{g(x)}\end{aligned}=A$ ，且 $\lim g(x)=0$ ，则 $\lim f(x)=0$ ；

（3）若 $\lim \begin{aligned}\frac{f(x)}{g(x)}\end{aligned}=A \neq 0$ ，且 $\lim f(x)=0$ ，则 $\lim g(x)=0$ 。

:::


<div class="center">

### <span class="blue-bold">题型4 需要分左右求函数极限</span>

</div>

::: info <span></span>

<span class="bold">1. 基本内容</span>

（1） $\begin{aligned}\lim _{x \rightarrow x_{0}} f(x)=a \Leftrightarrow \lim _{x \rightarrow x_{0}^{+}} f(x)=\lim _{x \rightarrow x_{0}^{-}} f(x)=a\end{aligned}$ 。

（2） $\begin{aligned}\lim _{x \rightarrow \infty} f(x)=a \Leftrightarrow \lim _{x \rightarrow+\infty} f(x)=\lim _{x \rightarrow-\infty} f(x)=a\end{aligned}$ 。

---

<span class="bold">2. 常见的需要分左右极限的情形</span>

（1） **$\mathrm{e}^{\infty}$ 型**

> 当 $x \rightarrow 0$ 时， $\begin{aligned}\lim _{x \rightarrow 0^{+}} \mathrm{e}^{\frac{1}{x}}=+\infty\end{aligned}$, $\begin{aligned}\lim _{x \rightarrow 0^{-}} \mathrm{e}^{\frac{1}{x}}=0\end{aligned}$ 。

（2） **$\arctan \infty$ 型**

> 当 $x \rightarrow 0$ 时， $\begin{aligned}\lim _{x \rightarrow 0^{+}} \arctan \frac{1}{x}=\frac{\pi}{2}\end{aligned}$, $\begin{aligned}\lim _{x \rightarrow 0^{-}} \arctan \frac{1}{x}=-\frac{\pi}{2}\end{aligned}$ 。

（3）**$|f(x)|$ 型，其中 $f(x) \rightarrow 0$ 或 $f(x) \rightarrow \infty$**

> 当 $x \rightarrow 0^{+}$ 时，$|x|=x$ ；当 $x \rightarrow 0^{-}$ 时，$|x|=-x$ 。

（4）**取整函数 $[x]$ 在整数点处的极限**

> 当 $x \rightarrow 0^{+}$ 时，$[x]=0$ ；当 $x \rightarrow 0^{-}$ 时，$[x]=-1$ 。

（5）**求分段函数在分段点处的极限，且分段函数在分段点两侧的函数表达式不同**。

:::

## 4 函数极限的定义与性质

<div class="center">

### <span class="blue-bold">题型1 函数极限定义的理解</span>

</div>

::: info <span></span>

<span class="red-bold">【考】</span>函数极限定义的理解

$$\lim_{x \rightarrow x_{0}} f(x)=A \Leftrightarrow \forall \ \varepsilon>0, \exists\ \delta>0，当\ 0<\left|x-x_{0}\right|<\delta\ 时，有\ |f(x)-A|<\varepsilon$$

---

<span class="red-bold">【注1】</span>极限 $\begin{aligned}\lim_{x \rightarrow x_{0}}\end{aligned} f(x)$ 与 $f(x)$ 在 $x_{0}$ 处的函数值无关。

<br />
<div style="display: flex; flex-direction: column; align-items: center;">
<img src="/img/png/Math/01.png" alt="函数极限定义的理解" width="550px" style="border-radius: 10px;">
</div>
<br />

如图所示，三幅图中极限 $\begin{aligned}\lim_{x \rightarrow x_{0}}\end{aligned} f(x)$ 均等于 $A$ ，但是函数值 $f\left(x_{0}\right)$ 却可以不存在，也可以存在，且存在时 $f\left(x_{0}\right)$ 可以等于 $A$ ，也可以不等于 $A$ ，所以极限 $\begin{aligned}\lim_{x \rightarrow x_{0}}\end{aligned} f(x)$ 结果与该点函数值没有任何关系。

假如 $\begin{aligned}\lim_{x \rightarrow x_{0}} f(x)=f\left(x_{0}\right)\end{aligned}$ 时（最右），函数 $f(x)$ 在 $x_{0}$ 处连续。

---

<span class="red-bold">【注2】</span>若极限 $\begin{aligned}\lim_{x\rightarrow x_{0}}f(x)\end{aligned}$ 存在，则函数 $f(x)$ 在 $x=x_{0}$ 的某去心邻域内处处有定义。

---

<span class="red-bold">【注3】</span>若极限 $\begin{aligned}\lim_{x \rightarrow x_{0}} f(x)\end{aligned}$ 存在，则极限 $\begin{aligned} \lim _{x \rightarrow x_{0}} f(x) \end{aligned}$ 是一个数。

---

<span class="red-bold">【注4】</span>存在的函数极限与无穷小量之间的关系定理

<span class="suojin">

若 $\begin{aligned} \lim _{x \rightarrow x_{0}} f(x)=A \end{aligned}$ ，则 $f(x)=A+\alpha(x)$ ，其中 $\begin{aligned} \lim _{x \rightarrow x_{0}} \alpha(x)=0 \end{aligned}$

</span>

:::

<div class="center">

### <span class="blue-bold">题型2 函数极限的局部保号性</span>

</div>

::: info <span></span>

<span class="bold">1. 已知函数极限的正负性，欲知被求极限函数的正负性，立即想到“保号性”，这一问题在极值与拐点问题中应用较多。</span>

---

<span class="bold">2. 比较两函数在某一个趋向下的大小，立即想到“保号性”。</span>

（1）若 $\begin{aligned} \lim _{x \rightarrow x_{0}} f(x)>\lim _{x \rightarrow x_{0}} g(x) \end{aligned}$ ，则在 $x_{0}$ 的某去心邻域内 $f(x)>g(x)$

（2）若 $\begin{aligned} \lim _{x \rightarrow x_{0}} f(x)<\lim _{x \rightarrow x_{0}} g(x) \end{aligned}$ ，则在 $x_{0}$ 的某去心邻域内 $f(x)<g(x)$

:::

<div class="center">

### <span class="blue-bold">题型3 函数的有界性</span>

</div>

::: info <span></span>

<span class="bold">1. 利用有界性的定义</span>

---

<span class="bold">2. 利用连续函数的有界定理</span>

（1）若 $f(x)$ 在闭区间 $[a, b]$ 上连续，则 $f(x)$ 在 $[a, b]$ 上有界。

（2）若 $f(x)$ 在开区间 $(a, b)$ 上连续，且极限 $\begin{aligned}\lim _{x \rightarrow a^{+}} f(x)\end{aligned}$ 与 $\begin{aligned}\lim _{x \rightarrow b^{-}} f(x)\end{aligned}$ 都存在，则 $f(x)$ 在 $(a, b)$ 上有界。

（3）若 $f(x)$ 在 $[a, b)$ 上连续，且极限 $\begin{aligned}\lim _{x \rightarrow a^{+}} f(x)\end{aligned}$ 存在，则 $f(x)$ 在 $[a, b)$ 上有界。

（4）若 $f(x)$ 在 $(-\infty,+\infty)$ 上连续，且极限 $\begin{aligned}\lim _{x \rightarrow-\infty} f(x)\end{aligned}$ 与 $\begin{aligned}\lim _{x \rightarrow+\infty} f(x)\end{aligned}$ 都存在，则 $f(x)$ 在 $(-\infty,+\infty)$ 上有界。

---

<span class="bold">3. 初等函数有界区间的求解步骤</span>

步骤 1：求初等函数的无定义点，确定定义区间。根据初等函数在其定义区间上处处连续，确定出函数的连续区间。

步骤 2：利用连续函数的有界定理，确定有界区间。

<span class="red-bold">【注】</span>需要注意的是，当 $\begin{aligned}\lim _{x \rightarrow \square} f(x)\end{aligned}$ 不存在（且不为 $\infty$）时，$f(x)$ 在 $x \rightarrow \square$ 时可能有界，也可能无界，例如：$y = \begin{aligned}\sin \frac{1}{x}\end{aligned}$ 在 $x \rightarrow 0$ 时有界，$y = \begin{aligned}\frac{1}{x} \sin \frac{1}{x}\end{aligned}$ 在 $x \rightarrow 0$ 时无界。

:::

## 5 数列极限的定义与性质

<div class="center">

### <span class="blue-bold">题型1 数列极限的定义与性质</span>

</div>

<div class="center">

### <span class="blue-bold">题型2 复合型数列 $\{f(x_n)\}$ 与 数列 $\{x_n\}$ 之间的敛散性关系</span>

</div>

## 6 数列极限计算

<div class="center">

### <span class="blue-bold">题型1 数列极限的通项已知，且为未定式极限</span>

</div>

<div class="center">

### <span class="blue-bold">题型2 $n$ 项和式数列极限</span>

</div>

<div class="center">

### <span class="blue-bold">题型3 $n$ 项积式数列极限</span>

</div>

<div class="center">

### <span class="blue-bold">题型4 利用夹逼准则求数列极限</span>

</div>

<div class="center">

### <span class="blue-bold">题型5 利用单调有界准则求数列极限</span>

</div>

## 7 连续与间断


<div class="center">

### <span class="blue-bold">题型1 函数的连续与间断的断定</span>

</div>

<div class="center">

### <span class="blue-bold">题型2 涉及极限式函数的问题</span>

</div>

<div class="center">

### <span class="blue-bold">题型3 连续函数的性质</span>

</div>

