---
title: Tailwind CSS 测试页面
description: 测试 Tailwind CSS 是否正常工作
layout: doc
---

# Tailwind CSS 测试页面

## 基础样式测试

<div class="bg-blue-500 text-white p-4 rounded-lg mb-4">
  这是一个使用 Tailwind CSS 样式的测试框
</div>

<div class="flex space-x-4 mb-4">
  <div class="bg-red-500 text-white p-2 rounded">红色</div>
  <div class="bg-green-500 text-white p-2 rounded">绿色</div>
  <div class="bg-yellow-500 text-white p-2 rounded">黄色</div>
</div>

## Carousel 组件测试

<Carousel 
  :items="[
    { title: '测试项目 1', description: '这是第一个测试项目', id: 1, icon: 'pi pi-home' },
    { title: '测试项目 2', description: '这是第二个测试项目', id: 2, icon: 'pi pi-user' },
    { title: '测试项目 3', description: '这是第三个测试项目', id: 3, icon: 'pi pi-cog' }
  ]"
  :baseWidth="400"
  :autoplay="true"
  :autoplayDelay="3000"
  :loop="true"
/>

## 响应式测试

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-purple-500 text-white p-4 rounded-lg">
    <h3 class="text-lg font-bold mb-2">卡片 1</h3>
    <p class="text-sm">这是一个响应式卡片</p>
  </div>
  <div class="bg-indigo-500 text-white p-4 rounded-lg">
    <h3 class="text-lg font-bold mb-2">卡片 2</h3>
    <p class="text-sm">这是另一个响应式卡片</p>
  </div>
  <div class="bg-pink-500 text-white p-4 rounded-lg">
    <h3 class="text-lg font-bold mb-2">卡片 3</h3>
    <p class="text-sm">这是第三个响应式卡片</p>
  </div>
</div>