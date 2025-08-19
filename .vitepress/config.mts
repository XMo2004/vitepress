import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/', 
  lang: 'zh-CN', 
  title: "XMoKC",
  description: "一个开发知识库",
  lastUpdated: true,
  //fav图标
  head: [
    ['link',{ rel: 'icon', href: 'https://vitepress.yiov.top/logo.png'}],
  ],
  // 配置 markdown 解析器
  markdown: {
    math: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    lineNumbers: true
    },
  themeConfig: {
    logo: {
      light: '/img/svg/home/light-code-logo.svg',
      dark: '/img/svg/home/dark-code-logo.svg',
      alt: 'XMoKC Logo'
    },
    nav: [
      { text: '前端开发',
        items: [
          {
            text: '基础',
            items: [
              { text: 'HTML', link: '/post/frontend/basic/HTML/HTML_1' },
              { text: 'CSS', link: '/post/frontend/basic/CSS/CSS_1' },
              { text: 'JavaScript', link: '/post/frontend/basic/JavaScript/JS_1' }
            ]
          },
          {
            text: '开发框架',
            items: [
              { text: 'Vue', link: '...' },
              { text: 'React', link: '...' },
            ]
          }
        ]
      },
      { text: '后端开发',
        items: [
          {
            text: '数据库',
            items: [
              { text: 'MySQL', link: '...' },
              { text: 'MongoDB', link: '...' },
            ]
          }
        ]
      },
      { text: '编程语言',
        items: [
          { text: 'C', link: '/post/language/C' },
          { text: 'C++', link: '/post/language/C++' },
          { text: 'Python', link: '/post/language/Python' },
          { text: 'Java', link: '/post/language/Java' },
          { text: 'Go', link: '/post/language/Go' },
          { text: 'TypeScript', link: '/post/language/TypeScript' },
          { text: 'Swift', link: '/post/language/Swift' }
        ]
      },
      { text: '408笔记',
        items: [
          { text: '数据结构', link: '/408_DS/01/408_DS_0' },
          { text: '计算机组成原理', link: '/408_CP/01/408_CP_0' },
          { text: '操作系统', link: '/408_OS/01/408_OS_0' },
          { text: '计算机网络', link: '/408_CN/01/408_CN_0' },
        ]
      },
      {
        text: '考研笔记',
        items: [
          { text: '考研数学', link: '/post/AdvancedMath/AdvancedMath_1' },
          { text: '考研英语', link: '···' },
          { text: '考研政治', link: '···' },
        ]
      },
      { text: '我的项目',
        items: [
          { text: '我的博客', link: '...' },
          { text: '我的相册', link: '...' },
          { text: '中文文档', link: '/post/project/DocsTranslate/DocsTranslate' },
          { text: '组件使用示例', link: '/components-demo' },
        ]
      },
      { text: '关于',
        items: [
          { text: '关于我', link: '/about/me.md' },
          { text: '关于本站', link: '/about/site.md' },
        ]
      }
    ],
    sidebar: {
      '/post/frontend/basic/': [
        {
          text: 'HTML',
          collapsed: true,
          items:[
            {
              text: 'HTML 初识',
              collapsed: true,
              items: [
                { text: '01 基本概念', link: '/post/frontend/basic/HTML/HTML_1' },
                { text: '02 初体验', link: '/post/frontend/basic/HTML/HTML_2' },
                { text: '03 语法规范', link: '/post/frontend/basic/HTML/HTML_3' },
                { text: '04 标签学习', link: '/post/frontend/basic/HTML/HTML_4' }
              ]
            },
            {
              text: 'HTML 基础',
              collapsed: true,
              items: [
                { text: '01 列表标签', link: '/post/frontend/basic/HTML/HTML_5' },
                { text: '02 表格标签', link: '/post/frontend/basic/HTML/HTML_6' },
                { text: '03 表单标签', link: '/post/frontend/basic/HTML/HTML_7' },
                { text: '04 语义化标签', link: '/post/frontend/basic/HTML/HTML_8' },
                { text: '05 字符实体', link: '/post/frontend/basic/HTML/HTML_9' },
              ]
            } 
          ]
        },
        {
          text: 'CSS',
          collapsed: true,
          items: [
            {
              text: 'CSS 基础',
              collapsed: true,
              items: [
                { text: '01 基础认知', link: '/post/frontend/basic/CSS/CSS_1' },
                { text: '02 基础选择器', link: '/post/frontend/basic/CSS/CSS_2' },
                { text: '03 字体和文本样式', link: '/post/frontend/basic/CSS/CSS_3' },
                { text: '04 其他', link: '/post/frontend/basic/CSS/CSS_4' }
              ]
            },
            {
              text: 'CSS 进阶',
              collapsed: true,
              items: [
                { text: '01 选择器进阶', link: '/post/frontend/basic/CSS/CSS_5' },
                { text: '02 背景相关属性', link: '/post/frontend/basic/CSS/CSS_6' },
                { text: '03 元素显示模式', link: '/post/frontend/basic/CSS/CSS_7' },
                { text: '04 CSS 特性', link: '/post/frontend/basic/CSS/CSS_8' }
              ]
            },
            {
              text: 'CSS 盒子模型',
              collapsed: true,
              items: [
                { text: '01 盒子模型介绍', link: '/post/frontend/basic/CSS/CSS_9' },
                { text: '02 内容区域的宽度和高度', link: '/post/frontend/basic/CSS/CSS_10' },
                { text: '03 边框（border）', link: '/post/frontend/basic/CSS/CSS_11' },
                { text: '04 内边距（padding）', link: '/post/frontend/basic/CSS/CSS_12' },
                { text: '05 外边距（margin）', link: '/post/frontend/basic/CSS/CSS_13' }
              ]
            },
            {
              text: 'CSS 浮动',
              collapsed: true,
              items: [
                { text: '01 结构伪类选择器', link: '/post/frontend/basic/CSS/CSS_14' },
                { text: '02 伪元素', link: '/post/frontend/basic/CSS/CSS_15' },
                { text: '03 标准流', link: '/post/frontend/basic/CSS/CSS_16' },
                { text: '04 浮动', link: '/post/frontend/basic/CSS/CSS_17' },
                { text: '05 清除浮动', link: '/post/frontend/basic/CSS/CSS_18' }
              ]
            },
            {
              text: 'CSS 定位和装饰',
              collapsed: true,
              items: [
                { text: '01 定位', link: '/post/frontend/basic/CSS/CSS_19' },
                { text: '02 装饰', link: '/post/frontend/basic/CSS/CSS_20' },
              ]
            }
          ]
        },
        {
          text: 'JavaScript', 
          collapsed: true,
          items: [
            {
              text: 'JavaScript 基础',
              collapsed: true,
              items: [
                { text: '初识',
                  collapsed: true,
                  items: [
                    { text: '01 前端的三大核心', link: '/post/frontend/basic/JavaScript/JS_1' },
                    { text: '02 编程语言', link: '/post/frontend/basic/JavaScript/JS_2' },
                    { text: '03 初识JavaScript', link: '/post/frontend/basic/JavaScript/JS_3' }
                  ]
                },
                {
                  text: '基本语法',
                  collapsed: true,
                  items: [
                    { text: '01 基本语法', link: '/post/frontend/basic/JavaScript/JS_4' },
                    { text: '02 变量', link: '/post/frontend/basic/JavaScript/JS_5' },
                    { text: '03 数据类型', link: '/post/frontend/basic/JavaScript/JS_6' }
                  ]
                },
                {
                  text: '流程控制',
                  collapsed: true,
                  items: [
                    { text: '01 运算符', link: '/post/frontend/basic/JavaScript/JS_7' },
                    { text: '02 程序控制结构', link: '/post/frontend/basic/JavaScript/JS_8' },
                    { text: '03 分支结构', link: '/post/frontend/basic/JavaScript/JS_9' },
                    { text: '04 循环结构', link: '/post/frontend/basic/JavaScript/JS_10' }
                  ]
                },
                {
                  text: '函数',
                  collapsed: true,
                  items: [
                    { text: '01 初识函数', link: '/post/frontend/basic/JavaScript/JS_11' },
                    { text: '02 函数的声明和调用', link: '/post/frontend/basic/JavaScript/JS_12' },
                    { text: '03 函数的递归调用', link: '/post/frontend/basic/JavaScript/JS_13' },
                    { text: '04 全局变量和局部变量', link: '/post/frontend/basic/JavaScript/JS_14' },
                    { text: '05 函数表达式', link: '/post/frontend/basic/JavaScript/JS_15' },
                    { text: '06 函数是头等公民', link: '/post/frontend/basic/JavaScript/JS_16' },
                    { text: '07 立即执行函数', link: '/post/frontend/basic/JavaScript/JS_17' }
                  ]
                },
                {
                  text: '面向对象',
                  collapsed: true,
                  items: [
                    { text: '01 对象类型的使用', link: '/post/frontend/basic/JavaScript/JS_18' },
                    { text: '02 值类型和引用类型', link: '/post/frontend/basic/JavaScript/JS_19' },
                    { text: '03 函数的this指向', link: '/post/frontend/basic/JavaScript/JS_20' },
                    { text: '04 类和对象', link: '/post/frontend/basic/JavaScript/JS_21' }
                  ]
                },
                {
                  text: '内置类',
                  collapsed: true,
                  items: [
                    { text: '01 自动装箱和拆箱', link: '/post/frontend/basic/JavaScript/JS_22' },
                    { text: '02 数字类型 Number', link: '/post/frontend/basic/JavaScript/JS_23' },
                    { text: '03 数学对象 Math', link: '/post/frontend/basic/JavaScript/JS_24' },
                    { text: '04 字符串对象 String', link: '/post/frontend/basic/JavaScript/JS_25' },
                    { text: '05 日期对象 Date', link: '/post/frontend/basic/JavaScript/JS_26' },
                  ]
                },
                {
                  text: '数组',
                  collapsed: true,
                  items: [
                    { text: '01 认识数组', link: '/post/frontend/basic/JavaScript/JS_27' },
                    { text: '02 数组的基本操作', link: '/post/frontend/basic/JavaScript/JS_28' },
                    { text: '03 数组中元素的添加和删除', link: '/post/frontend/basic/JavaScript/JS_29' },
                    { text: '04 数组的常规操作', link: '/post/frontend/basic/JavaScript/JS_30' },
                    { text: '05 数组中的常用方法', link: '/post/frontend/basic/JavaScript/JS_31' },
                  ]
                },
                {
                  text: 'DOM操作（一）',
                  collapsed: true,
                  items: [
                    { text: '01 扫清概念', link: '/post/frontend/basic/JavaScript/JS_32' },
                    { text: '02 导航', link: '/post/frontend/basic/JavaScript/JS_33' },
                    { text: '03 获取任意元素', link: '/post/frontend/basic/JavaScript/JS_34' },
                    { text: '04 Node 节点常见的属性 ', link: '/post/frontend/basic/JavaScript/JS_35' },
                  ]
                },
                {
                  text: 'DOM操作（二）',
                  collapsed: true,
                  items: [
                    { text: '01 元素的属性', link: '/post/frontend/basic/JavaScript/JS_36' },
                    { text: '02 对象的属性', link: '/post/frontend/basic/JavaScript/JS_37' },
                    { text: '03 data-* 自定义属性', link: '/post/frontend/basic/JavaScript/JS_38' },
                    { text: '04 动态修改样式', link: '/post/frontend/basic/JavaScript/JS_39' },
                    { text: '05 手动操作DOM', link: '/post/frontend/basic/JavaScript/JS_40' },
                    { text: '06 元素的大小和滚动', link: '/post/frontend/basic/JavaScript/JS_41' },
                    { text: '07 window 的大小和滚动', link: '/post/frontend/basic/JavaScript/JS_42' },
                  ]
                },
                {
                  text: '事件处理',
                  collapsed: true,
                  items: [
                    { text: '01 认识事件处理', link: '/post/frontend/basic/JavaScript/JS_43' },
                    { text: '02 事件冒泡和事件获取', link: '/post/frontend/basic/JavaScript/JS_44' },
                    { text: '03 事件对象 event', link: '/post/frontend/basic/JavaScript/JS_45' },
                    { text: '04 EventTarget 的使用', link: '/post/frontend/basic/JavaScript/JS_46' },
                    { text: '05 事件委托模式', link: '/post/frontend/basic/JavaScript/JS_47' },
                    { text: '06 常见事件类型', link: '/post/frontend/basic/JavaScript/JS_48' },
                    { text: '07 定时器', link: '/post/frontend/basic/JavaScript/JS_49' },
                  ]
                },
                {
                  text: 'BOM 操作',
                  collapsed: true,
                  items: [
                    { text: '01 认识 BOM', link: '/frontend/JavaScript/JS_50' },
                    { text: '02 window 对象', link: '/frontend/JavaScript/JS_51' },
                    { text: '03 location 对象', link: '/frontend/JavaScript/JS_52' },
                    { text: '04 history 对象', link: '/frontend/JavaScript/JS_53' },
                    { text: '05 navigator 对象和 screen 对象', link: '/frontend/JavaScript/JS_54' },
                    { text: '06 JSON', link: '/frontend/JavaScript/JS_55' },
                    { text: '07 客户端存储数据的机制', link: '/frontend/JavaScript/JS_56' },
                  ]
                }
              ]
            },
            {
              text: 'JavaScript 高级',
              collapsed: true,
              items: [
                {
                  text: 'this 指向',
                  collapsed: true,
                  items: [
                    { text: '01 this 指向的问题', link: '/frontend/JavaScript/JS_57' },
                    { text: '02 this 绑定的规则', link: '/frontend/JavaScript/JS_58' },
                    { text: '03 箭头函数（arrow function）', link: '/frontend/JavaScript/JS_59' },
                  ]
                },
                {
                  text: '浏览器运行原理',
                  collapsed: true,
                  items: [
                    { text: '01 网页的解析过程', link: '/frontend/JavaScript/JS_60' },
                    { text: '02 浏览器渲染流程', link: '/frontend/JavaScript/JS_61' },
                    { text: '03 回流和重绘解析', link: '/frontend/JavaScript/JS_62' },
                    { text: '04 合成和性能优化', link: '/frontend/JavaScript/JS_63' },
                    { text: '05 defer 和 sync 属性', link: '/frontend/JavaScript/JS_64' },
                  ]
                },
                {
                  text: 'JS 运行原理',
                  collapsed: true,
                  items: [
                    { text: '01 深入 V8 引擎', link: '/frontend/JavaScript/JS_65' },
                    { text: '02 执行上下文', link: '/frontend/JavaScript/JS_66' },
                    { text: '03 作用域和作用域链', link: '/frontend/JavaScript/JS_67' },
                  ]
                },
                {
                  text: '内存管理和闭包',
                  collapsed: true,
                  items: [
                    { text: '01 内存管理', link: '/frontend/JavaScript/JS_68' },
                    { text: '02 闭包', link: '/frontend/JavaScript/JS_69' },
                  ]
                },
                {
                  text: '函数和对象的增强',
                  collapsed: true,
                  items: [
                    { text: '01 函数属性和 arguments', link: '/frontend/JavaScript/JS_70' },
                    { text: '02 纯函数', link: '/frontend/JavaScript/JS_71' },
                    { text: '03 柯里化函数', link: '/frontend/JavaScript/JS_72' },
                    { text: '04 组合函数', link: '/frontend/JavaScript/JS_73' },
                    { text: '05 严格模式的使用', link: '/frontend/JavaScript/JS_74' },
                    { text: '06 Object.defineProperty', link: '/frontend/JavaScript/JS_75' },
                  ]
                },
                {
                  text: 'ES5 中实现继承',
                  collapsed: true,
                  items: [
                    { text: '01 对象和函数的原型', link: '/frontend/JavaScript/JS_76' },
                    { text: '02 new、constructor', link: '/frontend/JavaScript/JS_77' },
                    { text: '03 原型链的查找顺序', link: '/frontend/JavaScript/JS_78' },
                    { text: '04 原型链实现继承', link: '/frontend/JavaScript/JS_79' },
                    { text: '05 借用构造函数继承', link: '/frontend/JavaScript/JS_80' },
                    { text: '06 寄生组合实现继承', link: '/frontend/JavaScript/JS_81' },
                    { text: '07 对象的方法补充', link: '/frontend/JavaScript/JS_82' },
                    { text: '08 原型继承关系总结', link: '/frontend/JavaScript/JS_83' },
                  ]
                },
                {
                  text: 'ES6 中实现继承',
                  collapsed: true,
                  items: [
                    { text: '01 构造函数中的类属性和类方法', link: '/frontend/JavaScript/JS_84' },
                    { text: '02 ES6 中的类', link: '/frontend/JavaScript/JS_85' },
                    { text: '03 补充知识', link: '/frontend/JavaScript/JS_86' },
                  ]
                },
                {
                  text: 'ES6+ （一）',
                  collapsed: true,
                  items: [
                    { text: '01 ECMA 概念新描述', link: '/frontend/JavaScript/JS_87' },
                    { text: '02 let 和 const 的使用', link: '/frontend/JavaScript/JS_88' },
                    { text: '03 模板字符串的使用', link: '/frontend/JavaScript/JS_89' },
                    { text: '04 函数的默认参数', link: '/frontend/JavaScript/JS_90' },
                    { text: '05 函数的剩余参数', link: '/frontend/JavaScript/JS_91' },
                    { text: '06 箭头函数补充', link: '/frontend/JavaScript/JS_92' },
                    { text: '07 展开运算符', link: '/frontend/JavaScript/JS_93' },
                    { text: '08 数值的表示', link: '/frontend/JavaScript/JS_94' },
                    { text: '09 Symbol', link: '/frontend/JavaScript/JS_95' },
                    { text: '10 Set 和 Map 集合', link: '/frontend/JavaScript/JS_96' },
                  ]
                },
                {
                  text: 'ES6+ （二）',
                  collapsed: true,
                  items: [
                    { text: '01 对象的相关方法', link: '/frontend/JavaScript/JS_97' },
                    { text: '02 字符串相关方法', link: '/frontend/JavaScript/JS_98' },
                    { text: '03 数组相关方法', link: '/frontend/JavaScript/JS_99' },
                    { text: '04 可选链', link: '/frontend/JavaScript/JS_100' },
                    { text: '05 类中的新成员', link: '/frontend/JavaScript/JS_101' },
                  ]
                },
                {
                  text: 'Proxy 和 Reflect',
                  collapsed: true,
                  items: [
                    { text: '01 Proxy 类', link: '/frontend/JavaScript/JS_102' },
                    { text: '02 Reflect', link: '/frontend/JavaScript/JS_103' },
                  ]
                },
                {
                  text: 'Promise',
                  collapsed: true,
                  items: [
                    { text: '01 准备', link: '/frontend/JavaScript/JS_104' },
                    { text: '02 异步代码的问题', link: '/frontend/JavaScript/JS_105' },
                    { text: '03 Promise', link: '/frontend/JavaScript/JS_106' },
                  ]
                },
                {
                  text: '迭代器和生成器',
                  collapsed: true,
                  items: [
                    { text: '01 迭代器', link: '/frontend/JavaScript/JS_107' },
                    { text: '02 生成器', link: '/frontend/JavaScript/JS_108' },
                  ]
                }
              ]
            },
          ]
        }
      ],
      '/language_C/': [
        {
          text: 'HTML',
          items:[
            {
              text: 'HTML 初识',
              collapsed: true,
              items: [
                { text: '01 基本概念', link: '/frontend/HTML/HTML_1' },
                { text: '02 初体验', link: '/frontend/HTML/HTML_2' },
                { text: '03 语法规范', link: '/frontend/HTML/HTML_3' },
                { text: '04 标签学习', link: '/frontend/HTML/HTML_4' }
              ]
            },
            {
              text: 'HTML 基础',
              collapsed: true,
              items: [
                { text: '01 列表标签', link: '/frontend/HTML/HTML_5' },
                { text: '02 表格标签', link: '/frontend/HTML/HTML_6' },
                { text: '03 表单标签', link: '/frontend/HTML/HTML_7' },
                { text: '04 语义化标签', link: '/frontend/HTML/HTML_8' },
                { text: '05 字符实体', link: '/frontend/HTML/HTML_9' },
              ]
            } 
          ]
        }
      ],
      '/408_DS/': [
        {
          text: '第一章 绪论',
          collapsed: true,
          items:[
            {
              text: '数据结构的基本概念',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/01/408_DS_0' },
                { text: '01 基本概念和术语', link: '/408_DS/01/408_DS_1' },
                { text: '02 数据结构三要素', link: '/408_DS/01/408_DS_2' },
                { text: '习题', link: '/408_DS/01/408_DS_3' },
              ]
            },
            {
              text: '算法和算法评价',
              collapsed: true,
              items: [
                { text: '01 算法的基本概念', link: '/408_DS/01/408_DS_4' },
                { text: '02 算法效率的度量', link: '/408_DS/01/408_DS_5' },
                { text: '习题', link: '/408_DS/01/408_DS_6' },
              ]
            } 
          ]
        },
        {
          text: '第二章 线性表',
          collapsed: true,
          items: [
            {
              text: '线性表定义和基本操作',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/02/408_DS_1' },
                { text: '01 线性表的定义', link: '/408_DS/02/408_DS_2' },
                { text: '02 线性表的基本操作', link: '/408_DS/02/408_DS_3' },
                { text: '习题', link: '/408_DS/02/408_DS_4' },
              ]
            },
            {
              text: '线性表的顺序表示',
              collapsed: true,
              items: [
                { text: '01 顺序表的定义', link: '/408_DS/02/408_DS_5' },
                { text: '02 基本操作的实现', link: '/408_DS/02/408_DS_6' },
                { text: '习题', link: '/408_DS/02/408_DS_7' },
              ]
            },
            {
              text: '线性表的链式表示',
              collapsed: true,
              items: [
                { text: '01 单链表的定义', link: '/408_DS/02/408_DS_8' },
                { text: '02 单链表的基本操作', link: '/408_DS/02/408_DS_9' },
                { text: '03 双链表', link: '/408_DS/02/408_DS_10' },
                { text: '04 循环链表', link: '/408_DS/02/408_DS_11' },
                { text: '05 静态链表', link: '/408_DS/02/408_DS_12' },
                { text: '06 顺序表和链表的比较', link: '/408_DS/02/408_DS_13' },
                { text: '习题', link: '/408_DS/02/408_DS_14' },
              ]
            }
          ]
        },
        {
          text: '第三章 栈、队列和数组',
          collapsed: true,
          items: [
            {
              text: '栈',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/03/408_DS_1' },
                { text: '01 栈的基本概念', link: '/408_DS/03/408_DS_2' },
                { text: '02 栈的顺序存储结构', link: '/408_DS/03/408_DS_3' },
                { text: '03 栈的链式存储结构', link: '/408_DS/03/408_DS_4' },
                { text: '习题', link: '/408_DS/03/408_DS_5' },
              ]
            },
            {
              text: '队列',
              collapsed: true,
              items: [
                { text: '01 队列的基本概念', link: '/408_DS/03/408_DS_6' },
                { text: '02 队列的顺序存储结构', link: '/408_DS/03/408_DS_7' },
                { text: '03 队列的链式存储结构', link: '/408_DS/03/408_DS_8' },
                { text: '04 双端队列', link: '/408_DS/03/408_DS_9' },
                { text: '习题', link: '/408_DS/03/408_DS_10' },
              ]
             },
             {
              text: '栈和队列的应用',
              collapsed: true,
              items: [
                { text: '01 栈在括号匹配中的应用', link: '/408_DS/03/408_DS_11' },
                { text: '02 栈在表达式求值中的应用', link: '/408_DS/03/408_DS_12' },
                { text: '03 栈在递归中的应用', link: '/408_DS/03/408_DS_13' },
                { text: '04 队列在层次遍历中的应用', link: '/408_DS/03/408_DS_14' },
                { text: '05 队列在计算机系统中的应用', link: '/408_DS/03/408_DS_15' },
                { text: '习题', link: '/408_DS/03/408_DS_16' },
              ]
             },
             {
              text: '数组和特殊矩阵',
              collapsed: true,
              items: [
                { text: '01 数组的定义', link: '/408_DS/03/408_DS_17' },
                { text: '02 数组的存储结构', link: '/408_DS/03/408_DS_18' },
                { text: '03 特殊矩阵的压缩存储', link: '/408_DS/03/408_DS_19' },
                { text: '04 稀疏矩阵', link: '/408_DS/03/408_DS_20' },
                { text: '习题', link: '/408_DS/03/408_DS_21' },
              ]
             }
          ]
        },
        {
          text: '第四章 串',
          collapsed: true,
          items: [
            {
              text: '串的定义和实现',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/04/408_DS_1' },
                { text: '01 串的定义', link: '/408_DS/04/408_DS_2' },
                { text: '02 串的基本操作', link: '/408_DS/04/408_DS_3' },
                { text: '03 串的存储结构', link: '/408_DS/04/408_DS_4' },
              ]
            },
            {
              text: '串的模式匹配',
              collapsed: true,
              items: [
                { text: '01 简单的模式匹配算法', link: '/408_DS/04/408_DS_5' },
                { text: '02 KMP算法', link: '/408_DS/04/408_DS_6' },
                { text: '03 改进的KMP算法', link: '/408_DS/04/408_DS_7' },
                { text: '习题', link: '/408_DS/04/408_DS_8' },
              ]
            }
          ]
        },
        {
          text: '第五章 树与二叉树',
          collapsed: true,
          items: [
            { text: '树的基本概念', 
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/05/408_DS_1' },
                { text: '01 树的定义', link: '/408_DS/05/408_DS_2' },
                { text: '02 基本术语', link: '/408_DS/05/408_DS_3' },
                { text: '03 树的性质', link: '/408_DS/05/408_DS_4' },
                { text: '习题', link: '/408_DS/05/408_DS_5' },
              ]
            },
            { text: '二叉树的概念', 
              collapsed: true,
              items: [
                { text: '01 二叉树的定义及其主要特征', link: '/408_DS/05/408_DS_6' },
                { text: '02 二叉树的存储结构', link: '/408_DS/05/408_DS_7' },
                { text: '习题', link: '/408_DS/05/408_DS_8' },
              ]
            },
            { text: '二叉树的遍历和线索二叉树', 
              collapsed: true,
              items: [
                { text: '01 二叉树的遍历', link: '/408_DS/05/408_DS_9' },
                { text: '02 线索二叉树', link: '/408_DS/05/408_DS_10' },
                { text: '习题', link: '/408_DS/05/408_DS_11' },
              ]
            },
            {
              text: '树、森林',
              collapsed: true,
              items: [
                { text: '01 树的存储结构', link: '/408_DS/05/408_DS_12' },
                { text: '02 树、森林与二叉树的转换', link: '/408_DS/05/408_DS_13' },
                { text: '03 树和森林的遍历', link: '/408_DS/05/408_DS_14' },
                { text: '习题', link: '/408_DS/05/408_DS_15' },
              ]
            },
            {
              text: '树与二叉树的应用',
              collapsed: true,
              items: [
                { text: '01 哈夫曼树和哈夫曼编码', link: '/408_DS/05/408_DS_16' },
                { text: '02 并查集', link: '/408_DS/05/408_DS_17' },
                { text: '习题', link: '/408_DS/05/408_DS_18' },
              ]
            }
          ]
        },
        {
          text: '第六章 图',
          collapsed: true,
          items: [
            {
              text: '图的基本概念',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/06/408_DS_1' },
                { text: '01 图的定义', link: '/408_DS/06/408_DS_2' },
                { text: '习题', link: '/408_DS/06/408_DS_3' },
              ]
            },
            {
              text: '图的存储及基本操作',
              collapsed: true,
              items: [
                { text: '01 邻接矩阵法', link: '/408_DS/06/408_DS_4' },
                { text: '02 邻接表法', link: '/408_DS/06/408_DS_5' },
                { text: '03 十字链表', link: '/408_DS/06/408_DS_6' },
                { text: '04 临接多重表', link: '/408_DS/06/408_DS_7' },
                { text: '05 图的基本操作', link: '/408_DS/06/408_DS_8' },
                { text: '习题', link: '/408_DS/06/408_DS_9' },
              ]
            },
            {
              text: '图的遍历',
              collapsed: true,
              items: [
                { text: '01 广度优先搜索', link: '/408_DS/06/408_DS_10' },
                { text: '02 深度优先搜索', link: '/408_DS/06/408_DS_11' },
                { text: '03 图的遍历与图的连通性', link: '/408_DS/06/408_DS_12' },
                { text: '习题', link: '/408_DS/06/408_DS_13' },
              ]
            },
            {
              text: '图的应用',
              collapsed: true,
              items: [
                { text: '01 最小生成树', link: '/408_DS/06/408_DS_14' },
                { text: '02 最短路径', link: '/408_DS/06/408_DS_15' },
                { text: '03 有向无环图描述表达式', link: '/408_DS/06/408_DS_16' },
                { text: '04 拓扑排序', link: '/408_DS/06/408_DS_17' },
                { text: '05 关键路径', link: '/408_DS/06/408_DS_18' },
                { text: '习题', link: '/408_DS/06/408_DS_19' },
              ]
            }
          ]
        },
        {
          text: '第七章 查找',
          collapsed: true,
          items: [
            {
              text: '查找的基本概念',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/07/408_DS_1' },
                { text: '01 查找表的基本概念', link: '/408_DS/07/408_DS_2' },
              ]
            },
            {
              text: '顺序查找和折半查找',
              collapsed: true,
              items: [
                { text: '01 顺序查找', link: '/408_DS/07/408_DS_3' },
                { text: '02 折半查找', link: '/408_DS/07/408_DS_4' },
                { text: '03 分块查找', link: '/408_DS/07/408_DS_5' },
                { text: '习题', link: '/408_DS/07/408_DS_6' },
              ]
            },
            {
              text: '树形查找',
              collapsed: true,
              items: [
                { text: '01 二叉排序树（BST）', link: '/408_DS/07/408_DS_7' },
                { text: '02 平衡二叉树', link: '/408_DS/07/408_DS_8' },
                { text: '03 红黑树', link: '/408_DS/07/408_DS_9' },
                { text: '习题', link: '/408_DS/07/408_DS_10' },
              ]
            },
            {
              text: 'B树和B+树',
              collapsed: true,
              items: [
                { text: '01 B树及其基本操作', link: '/408_DS/07/408_DS_11' },
                { text: '02 B+树的基本概念', link: '/408_DS/07/408_DS_12' },
                { text: '习题', link: '/408_DS/07/408_DS_13' },
              ]
            },
            {
              text: '散列（Hash）表',
              collapsed: true,
              items: [
                { text: '01 散列表的基本概念', link: '/408_DS/07/408_DS_14' },
                { text: '02 散列函数的构造方法', link: '/408_DS/07/408_DS_15' },
                { text: '03 冲突的处理方法', link: '/408_DS/07/408_DS_16' },
                { text: '04 散列查找及性能分析的应用', link: '/408_DS/07/408_DS_17' },
                { text: '习题', link: '/408_DS/07/408_DS_18' },
              ]
            }
          ]
        },
        {
          text: '第八章 排序',
          collapsed: true,
          items: [
            {
              text: '排序的基本概念',
              collapsed: true,
              items: [
                { text: '00 综述', link: '/408_DS/08/408_DS_1' },
                { text: '01 排序的定义', link: '/408_DS/08/408_DS_2' },
                { text: '习题', link: '/408_DS/08/408_DS_3' },
              ]
            },
            {
              text: '插入排序',
              collapsed: true,
              items: [
                { text: '01 直接插入排序', link: '/408_DS/08/408_DS_4' },
                { text: '02 折半插入排序', link: '/408_DS/08/408_DS_5' },
                { text: '03 希尔排序', link: '/408_DS/08/408_DS_6' },
                { text: '习题', link: '/408_DS/08/408_DS_7' },
              ]
            },
            {
              text: '交换排序',
              collapsed: true,
              items: [
                { text: '01 冒泡排序', link: '/408_DS/08/408_DS_8' },
                { text: '02 快速排序', link: '/408_DS/08/408_DS_9' },
                { text: '习题', link: '/408_DS/08/408_DS_10' },
              ]
            },
            {
              text: '选择排序',
              collapsed: true,
              items: [
                { text: '01 简单选择排序', link: '/408_DS/08/408_DS_11' },
                { text: '02 堆排序', link: '/408_DS/08/408_DS_12' },
                { text: '习题', link: '/408_DS/08/408_DS_13' },
              ]
            },
            {
              text: '其他排序',
              collapsed: true,
              items: [
                { text: '01 归并排序', link: '/408_DS/08/408_DS_14' },
                { text: '02 基数排序', link: '/408_DS/08/408_DS_15' },
                { text: '03 计数排序', link: '/408_DS/08/408_DS_16' },
                { text: '习题', link: '/408_DS/08/408_DS_17' },
              ]
            },
            {
              text: '各种内部排序算法的比较及应用',
              collapsed: true,
              items: [
                { text: '01 内部排序算法的比较', link: '/408_DS/08/408_DS_18' },
                { text: '02 内部排序算法的应用', link: '/408_DS/08/408_DS_19' },
                { text: '习题', link: '/408_DS/08/408_DS_20' },
              ]
            },
            {
              text: '外部排序',
              collapsed: true,
              items: [
                { text: '01 外部排序的基本概念', link: '/408_DS/08/408_DS_21' },
                { text: '02 外部排序的方法', link: '/408_DS/08/408_DS_22' },
                { text: '03 多路平衡归并与败者树', link: '/408_DS/08/408_DS_23' },
                { text: '04 置换-选择排序（生成初始归并段）', link: '/408_DS/08/408_DS_24' },
                { text: '05 最佳归并树', link: '/408_DS/08/408_DS_25' },
                { text: '习题', link: '/408_DS/08/408_DS_26' },
              ]
            }
          ]
        },
      ],
      '/408_CP/': [
        {
          text: 'I 栈和队列',
          items: [
            {
              text: '01 栈的定义和基本操作',
              collapsed: true,
              items: [
                { text: '01 栈的定义', link: '/408_DS/12/408_DS_12' },
                { text: '02 栈的基本操作', link: '/408_DS/12/408_DS_13' },
                { text: '习题', link: '/408_DS/12/408_DS_14' },
              ]
            },
          ]
        }
      ],
      '/408_OS/': [
        {
          text: '01 队列的定义和基本操作',
          collapsed: true,
          items: [
            { text: '01 队列的定义', link: '/408_DS/13/408_DS_15' },
            { text: '02 队列的基本操作', link: '/408_DS/13/408_DS_16' },
            { text: '习题', link: '/408_DS/13/408_DS_17' },
          ]
        }
      ],
      '/408_CN/': [
        {
          text: '01 网络基础',
          collapsed: true,
          items: [
            { text: '01 网络基础', link: '/408_DS/14/408_DS_18' },
            { text: '02 网络协议', link: '/408_DS/14/408_DS_19' },
            { text: '习题', link: '/408_DS/14/408_DS_20' },
          ]
        }
      ],
      '/AdvancedMath/': [
        {
          text: '第一章 函数、极限与连续',
          collapsed: true,
          items: [
            { text: '01 微积分预备知识', link: '/AdvancedMath/AdvancedMath_1' },
            { text: '02 函数极限定义及性质', link: '/AdvancedMath/AdvancedMath_2' },
            { text: '03 无穷小量及无穷大量', link: '/AdvancedMath/AdvancedMath_3' },
            { text: '04 泰勒公式', link: '/AdvancedMath/AdvancedMath_4' },
            { text: '05 极限四则运算', link: '/AdvancedMath/AdvancedMath_5' },
            { text: '06 函数极限运算', link: '/AdvancedMath/AdvancedMath_6' },
            { text: '07 数列极限', link: '/AdvancedMath/AdvancedMath_7' },
            { text: '08 连续与间断', link: '/AdvancedMath/AdvancedMath_8' },
          ]
        },
        {
          text: '第二章 一元函数微分学',
          collapsed: true,
          items: [
            { text: '01 导数定义', link: '/AdvancedMath/AdvancedMath_9' },
            { text: '02 导数计算', link: '/AdvancedMath/AdvancedMath_10' },
            { text: '03 导数几何意义', link: '/AdvancedMath/AdvancedMath_11' },
            { text: '04 微分的计算及几何意义', link: '/AdvancedMath/AdvancedMath_12' },
            { text: '05 导数的微分学应用', link: '/AdvancedMath/AdvancedMath_13' },
          ]
        },
        {
          text: '第三章 不定积分',
          collapsed: true,
          items: [
            { text: '01 不定积分定义与性质', link: '/AdvancedMath/AdvancedMath_14' },
            { text: '02 不定积分的计算', link: '/AdvancedMath/AdvancedMath_15' },
          ]
        },
        {
          text: '第四章 定积分及其应用',
          collapsed: true,
          items: [
            { text: '01 定积分的定义及性质', link: '/AdvancedMath/AdvancedMath_16' },
            { text: '02 定积分计算', link: '/AdvancedMath/AdvancedMath_17' },
            { text: '03 变限积分函数', link: '/AdvancedMath/AdvancedMath_18' },
            { text: '04 反常积分', link: '/AdvancedMath/AdvancedMath_19' },
            { text: '05 定积分的应用', link: '/AdvancedMath/AdvancedMath_20' },
          ]
        },
        {
          text: '第五章 常微分方程',
          collapsed: true,
          items: [
            { text: '01 微分方程基本概念', link: '/AdvancedMath/AdvancedMath_21' },
            { text: '02 一阶微分方程及其解法', link: '/AdvancedMath/AdvancedMath_22' },
            { text: '03 高阶微分方程', link: '/AdvancedMath/AdvancedMath_23' },
          ]
        },
        {
          text: '第六章 中值定理',
          collapsed: true,
          items: [
            { text: '01 闭区间连续函数的性质', link: '/AdvancedMath/AdvancedMath_24' },
            { text: '02 积分中值定理', link: '/AdvancedMath/AdvancedMath_25' },
            { text: '03 微分中值定理', link: '/AdvancedMath/AdvancedMath_26' },
          ]
        },
        {
          text: '第七章 多元函数微分学',
          collapsed: true,
          items: [
            { text: '01 多元函数的基本概念', link: '/AdvancedMath/AdvancedMath_27' },
            { text: '02 偏导数定义及计算', link: '/AdvancedMath/AdvancedMath_28' },
            { text: '03 全微分', link: '/AdvancedMath/AdvancedMath_29' },
            { text: '04 多元函数微分法', link: '/AdvancedMath/AdvancedMath_30' },
            { text: '05 多元函数的极值与最值', link: '/AdvancedMath/AdvancedMath_31' },
          ]
        },
        {
          text: '第八章 二重积分',
          collapsed: true,
          items: [
            { text: '01 二重积分的概念与性质', link: '/AdvancedMath/AdvancedMath_32' },
            { text: '02 二重积分的计算法', link: '/AdvancedMath/AdvancedMath_33' },
          ]
        },
        {
          text: '第九章 无穷级数',
          collapsed: true,
          items: [
            { text: '01 数项级数概念与性质', link: '/AdvancedMath/AdvancedMath_34' },
            { text: '02 数项级数审敛法', link: '/AdvancedMath/AdvancedMath_35' },
            { text: '03 幂级数', link: '/AdvancedMath/AdvancedMath_36' },
          ]
        },
        {
          text: '第十章 数学一专题',
          collapsed: true,
          items: [
            { text: '01 空间代数与解析几何', link: '/AdvancedMath/AdvancedMath_37' },
            { text: '02 三重积分', link: '/AdvancedMath/AdvancedMath_38' },
            { text: '03 多元函数微分几何应用', link: '/AdvancedMath/AdvancedMath_39' },
            { text: '04 重积分几何和物理应用', link: '/AdvancedMath/AdvancedMath_40' },
            { text: '05 对弧长的曲线积分', link: '/AdvancedMath/AdvancedMath_41' },
            { text: '06 对坐标的曲线积分', link: '/AdvancedMath/AdvancedMath_42' },
            { text: '07 对面积的曲面积分', link: '/AdvancedMath/AdvancedMath_43' },
            { text: '08 对坐标的曲面积分', link: '/AdvancedMath/AdvancedMath_44' },
            { text: '09 傅立叶级数', link: '/AdvancedMath/AdvancedMath_45' },
          ]
        },
        {
          text: '附 考研中常见曲线及图形',
          collapsed: true,
          items: [
            { text: '01 向量的定义与性质', link: '/AdvancedMath/AdvancedMath_46' },
          ]
        },
      ],
      '/standard/': [
        {
          text: '文章格式标准',
          collapsed: true,
          items: [
            { text: '01 文章格式标准', link: '/standard/standard_1' },
            { text: '02 408文章格式标准', link: '/standard/standard_3' },
          ]
        },
        {
          text: '笔记格式标准',
          collapsed: true,
          items: [
            { text: '01 408笔记格式标准', link: '/standard/standard_2' },
          ]
        },
        {
          text: '',
          collapsed: true,
          items: [
            { text: '01 408格式标准', link: '/standard/standard_4' },
          ]
        },
      ],
      '/post/project/DocsTranslate/GSAP': [
        {
          text: '快速开始',
          collapsed: true,
          items: [
            { text: '安装', link: '/post/project/DocsTranslate/GSAP/GSAP_2' },
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XMo2004' },
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    footer: {
      message: '本站源代码可在 <a href="https://github.com/XMo2004?tab=repositories">Github</a> 查看与贡献。',
      copyright: '&copy; 2022-2025 小陌XMo 内容基于 <a href="https://mit-license.org/">MIT</a> 许可证发布。'
    }
  }
})
