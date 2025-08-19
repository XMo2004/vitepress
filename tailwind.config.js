/**
 * TailwindCSS配置文件
 * 该文件用于配置TailwindCSS的工作方式，包括内容文件路径、主题扩展和插件使用等
 * @type {import('tailwindcss').Config} 表示当前配置对象遵循TailwindCSS的配置接口
 */
export default {
  // 指定TailwindCSS应该扫描的文件路径，以收集CSS类
  content: [
    './index.html',
    './**/*.md',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
  ],

  // 主题配置，用于自定义和扩展TailwindCSS的默认设计系统
  theme: {
    // extend属性用于扩展默认的主题设置
    extend: {},
  },

  // 插件数组，用于添加额外的功能或自定义功能到TailwindCSS中
  plugins: [],
};
