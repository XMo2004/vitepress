<!-- 

组件名称：ArticleSummary
功能：实现文章摘要功能，根据输入的文本或文本数组，随机选择一个文本进行摘要展示。

使用方法：
<ArticleSummary
  :texts="['文本1', '文本2', '文本3']"  // 文本数组
/> 

-->

<script setup lang="ts">
// 引入Vue的响应式系统
import { computed, ref, onMounted } from 'vue'
// 引入TypeWriter组件
import TypeWriter from './TypeWriter.vue'

// 定义组件的props，用于接收外部传入的参数
interface Props {
  text?: string
  texts?: string[]
  speed?: number
  delay?: number
  iconSrc?: string
  iconWidth?: string
  iconHeight?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  texts: () => [],
  speed: 50,
  delay: 600,
  iconSrc: '',
  iconWidth: '20',
  iconHeight: '20',
  title: 'AI 摘要'
})

// 当前显示的文本
const currentText = ref('')

// 根据主题模式自动选择图标
const currentIcon = computed(() => {
  if (props.iconSrc) {
    return props.iconSrc
  }
  // 默认使用黑色图标，深色模式通过CSS切换
  return '/img/svg/icon/robot.svg'
})

// 随机选择文本内容
const selectRandomText = () => {
  if (props.texts && props.texts.length > 0) {
    const randomIndex = Math.floor(Math.random() * props.texts.length)
    currentText.value = props.texts[randomIndex]
  } else if (props.text) {
    currentText.value = props.text
  } else {
    currentText.value = ''
  }
}

// 组件挂载时选择随机文本
onMounted(() => {
  selectRandomText()
})
</script>

<template>
  <div class="article-summary">
    <br />
    
    <div class="tip custom-block">
      <p class="custom-block-title">
        <img 
          :src="currentIcon" 
          :width="iconWidth" 
          :height="iconHeight" 
          class="icon-robot"
        > 
        {{ title }}
      </p>
      
      <TypeWriter 
        :text="currentText" 
        :speed="speed" 
        :delay="delay" 
      />
    </div>
  </div>
</template>

<style scoped>
.article-summary {
  margin: 1rem 0;
  position: relative;
}

.tip.custom-block {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.1) 0%, 
    rgba(0, 150, 255, 0.08) 50%, 
    rgba(138, 43, 226, 0.1) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 255, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 25px 35px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.tip.custom-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  padding: 2px;
  background: linear-gradient(45deg, 
    #00ffff, 
    #0096ff, 
    #8a2be2, 
    #00ffff);
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  z-index: -1;
}

.custom-block-title {
  padding-bottom: 15px;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  letter-spacing: 0.5px;
}

.custom-block {
  margin: 16px 0;
  border: 1px solid transparent;
  border-radius: 25px;
  padding: 20px;
  line-height: 26px;
  font-size: 15px;
  color: var(--vp-c-text-1);
}

.icon-robot {
  display: inline;
  vertical-align: middle;
  margin-right: 8px;
  margin-bottom: 2px;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
  animation: iconGlow 2s ease-in-out infinite alternate;
}

/* 深色模式下使用白色图标 */
.dark .icon-robot {
  content: url('/img/svg/icon/robot-white.svg');
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.8));
}

/* 动画效果 */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes iconGlow {
  0% {
    filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.9));
  }
}

/* 深色模式下的图标发光效果会通过已有的动画和filter属性自动调整 */

/* 响应式设计 */
@media (max-width: 768px) {
  .tip.custom-block {
    padding: 20px 25px;
    margin: 12px 0;
  }
  
  .custom-block-title {
    font-size: 17px;
  }
}
</style>