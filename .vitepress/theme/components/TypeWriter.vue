<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  text: string
  speed?: number
  delay?: number
  cursor?: boolean
  cursorChar?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  speed: 100,
  delay: 0,
  cursor: true,
  cursorChar: '|'
})

const displayText = ref('')
const showCursor = ref(true)
const isTyping = ref(false)

let typeTimer: NodeJS.Timeout | null = null
let cursorTimer: NodeJS.Timeout | null = null

const startTyping = () => {
  if (!props.text) return
  
  displayText.value = ''
  isTyping.value = true
  
  let index = 0
  
  const getRandomDelay = () => {
    // 基础速度 + 随机变化，模拟真实打字的不规律性
    const baseSpeed = props.speed
    const randomFactor = Math.random() * 0.8 + 0.6 // 0.6-1.4倍速度变化
    const pauseChance = Math.random()
    
    // 10%概率出现短暂停顿（标点符号或思考）
    if (pauseChance < 0.1) {
      return baseSpeed * (2 + Math.random() * 2) // 2-4倍的停顿
    }
    
    // 5%概率出现快速连击（熟练段落）
    if (pauseChance < 0.15) {
      return baseSpeed * (0.3 + Math.random() * 0.3) // 0.3-0.6倍的快速
    }
    
    return baseSpeed * randomFactor
  }
  
  const type = () => {
    if (index < props.text.length) {
      displayText.value += props.text.charAt(index)
      index++
      
      // 在标点符号后增加额外停顿
      const currentChar = props.text.charAt(index - 1)
      const isPunctuation = /[，。！？；：、]/.test(currentChar)
      const extraDelay = isPunctuation ? props.speed * (0.5 + Math.random() * 1) : 0
      
      typeTimer = setTimeout(type, getRandomDelay() + extraDelay)
    } else {
      isTyping.value = false
      if (props.cursor) {
        startCursorBlink()
      }
    }
  }
  
  setTimeout(() => {
    type()
  }, props.delay)
}

const startCursorBlink = () => {
  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}

const stopCursorBlink = () => {
  if (cursorTimer) {
    clearInterval(cursorTimer)
    cursorTimer = null
  }
  showCursor.value = true
}

watch(() => props.text, () => {
  if (typeTimer) {
    clearTimeout(typeTimer)
    typeTimer = null
  }
  stopCursorBlink()
  startTyping()
}, { immediate: false })

onMounted(() => {
  startTyping()
})

// 组件卸载时清理定时器
const cleanup = () => {
  if (typeTimer) {
    clearTimeout(typeTimer)
    typeTimer = null
  }
  stopCursorBlink()
}

// Vue 3 的 onBeforeUnmount
import { onBeforeUnmount } from 'vue'
onBeforeUnmount(() => {
  cleanup()
})
</script>

<template>
  <span class="typewriter">
    {{ displayText }}
    <span 
      v-if="cursor && (isTyping || showCursor)" 
      class="typewriter-cursor"
      :class="{ 'blinking': !isTyping }"
    >
      {{ cursorChar }}
    </span>
  </span>
</template>

<style scoped>
.typewriter {
  display: inline;
}

.typewriter-cursor {
  display: inline;
  opacity: 1;
}

.typewriter-cursor.blinking {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>