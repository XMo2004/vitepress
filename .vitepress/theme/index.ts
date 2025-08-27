/* 导入 VitePress 的默认主题 */
import DefaultTheme from 'vitepress/theme'
/* 导入 VitePress 类型定义 */
import type { EnhanceAppContext } from 'vitepress'

/* 导入自定义组件 */
import ArticleSummary from "./components/ArticleSummary.vue"
import Collapse from "./components/Collapse.vue"
import LightRays from "./components/LightRays.vue"
import Linkcard from "./components/Linkcard.vue"
import ProgressBar from "./components/ProgressBar.vue"
import QuizChoice from "./components/QuizChoice.vue"
import QuizStatistics from "./components/QuizStatistics.vue"
import Timeline from "./components/Timeline.vue"
import TagCloud from "./components/TagCloud.vue"
import TypeWriter from "./components/TypeWriter.vue"
import MagicBento from './components/MagicBento.vue'


/* 导入自定义样式 */
import './style/index.css'

/* 定义自定义主题 */
export default {
  /* 继承默认主题 */
  extends: DefaultTheme,
  /* 自定义增强应用 */
  enhanceApp({ app }: EnhanceAppContext) {
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('QuizChoice' , QuizChoice)
    app.component('QuizStatistics' , QuizStatistics)
    app.component('Timeline' , Timeline)
    app.component('ProgressBar' , ProgressBar)
    app.component('TagCloud' , TagCloud)
    app.component('Collapse' , Collapse)
    app.component('TypeWriter' , TypeWriter)
    app.component('ArticleSummary' , ArticleSummary)
    app.component('LightRays' , LightRays)
    app.component('MagicBento' , MagicBento)
    }
}