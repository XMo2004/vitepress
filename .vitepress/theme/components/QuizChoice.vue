<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted, watch, defineProps, withDefaults } from 'vue'
import MarkdownIt from 'markdown-it'
import mathjax3 from 'markdown-it-mathjax3'

const md = MarkdownIt({ 
  html: true,        // 启用HTML标签支持
  breaks: true,      // 启用换行符转换为<br>
  linkify: true,     // 自动识别链接
  typographer: true  // 启用智能引号和其他排版功能
}).use(mathjax3)

interface Props {
  question: string
  options: string[]
  correctAnswer: number // 正确答案的索引（0-based）
  explanation?: string // 解析内容
  image?: string // 题目图片URL
  imageWidth?: string // 图片宽度样式
  explanationImage?: string // 解析图片URL
  explanationImageWidth?: string // 解析图片宽度样式
}

const props = withDefaults(defineProps<Props>(), {
  question: '',
  options: () => [],
  correctAnswer: 0,
  explanation: '',
  imageWidth: '100%',
  explanationImageWidth: '100%'
})

// 生成唯一ID
const quizId = ref(generateQuizId())

// 注入统计功能
const quizStatistics = inject('quizStatistics', null) as any

function generateQuizId() {
  // 基于题目内容生成唯一ID
  const content = props.question + props.options.join('') + props.correctAnswer
  return btoa(encodeURIComponent(content)).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16)
}

const selectedOption = ref<number | null>(null)
const showResult = ref(false)
const showExplanation = ref(false)

// LocalStorage 相关函数
const getStorageKey = () => {
  return `quiz-state-${quizId.value}`
}

const saveQuizState = () => {
  const state = {
    selectedOption: selectedOption.value,
    showResult: showResult.value,
    showExplanation: showExplanation.value,
    timestamp: Date.now()
  }
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(state))
  } catch (error) {
    console.warn('Failed to save quiz state to localStorage:', error)
  }
}

const loadQuizState = () => {
  try {
    const savedState = localStorage.getItem(getStorageKey())
    if (savedState) {
      const state = JSON.parse(savedState)
      // 检查数据是否过期（可选：设置7天过期时间）
      const isExpired = Date.now() - state.timestamp > 7 * 24 * 60 * 60 * 1000
      if (!isExpired) {
        selectedOption.value = state.selectedOption
        showResult.value = state.showResult
        showExplanation.value = state.showExplanation
        return true
      } else {
        // 清除过期数据
        localStorage.removeItem(getStorageKey())
      }
    }
  } catch (error) {
    console.warn('Failed to load quiz state from localStorage:', error)
  }
  return false
}

const clearQuizState = () => {
  try {
    localStorage.removeItem(getStorageKey())
  } catch (error) {
    console.warn('Failed to clear quiz state from localStorage:', error)
  }
}

// 检查是否应该隐藏（错题筛选模式）
const shouldHide = computed(() => {
  if (!quizStatistics?.showWrongOnly?.value) return false
  const record = quizStatistics?.getQuizRecord(quizId.value)
  return record?.isAnswered && record?.isCorrect
})

const isCorrect = computed(() => {
  return selectedOption.value === props.correctAnswer
})

const selectOption = (index: number) => {
  if (showResult.value) return // 已经显示结果后不能再选择
  selectedOption.value = index
  // 直接提交答案
  showResult.value = true
  
  // 保存状态到 LocalStorage
  saveQuizState()
  
  // 更新统计数据
  if (quizStatistics) {
    quizStatistics.updateQuizRecord(quizId.value, index, props.correctAnswer)
  }
  
  // 延迟显示解析
  setTimeout(() => {
    showExplanation.value = true
    // 解析显示后再次保存状态
    saveQuizState()
  }, 500)
}

const resetQuiz = () => {
  selectedOption.value = null
  showResult.value = false
  showExplanation.value = false
  
  // 清除 LocalStorage 中的状态
  clearQuizState()
  
  // 重置统计数据
  if (quizStatistics) {
    quizStatistics.resetQuiz(quizId.value)
  }
}

const getOptionLabel = (index: number) => {
  return String.fromCharCode(65 + index) // A, B, C, D...
}

const renderMarkdown = (content: string) => {
  return md.render(content)
}

// 初始化和恢复状态
const initializeQuiz = () => {
  // 首先尝试从 LocalStorage 恢复状态
  const hasLocalState = loadQuizState()
  
  // 如果没有本地状态，再尝试从统计功能恢复
  if (!hasLocalState && quizStatistics) {
    // 注册题目并获取记录
    const record = quizStatistics.registerQuiz(quizId.value, props.correctAnswer)
    
    // 恢复已答状态
    if (record?.isAnswered) {
      selectedOption.value = record.selectedAnswer
      showResult.value = true
      showExplanation.value = true
      // 将统计功能的状态同步到 LocalStorage
      saveQuizState()
    }
  } else if (hasLocalState && quizStatistics) {
    // 如果有本地状态，同步到统计功能
    if (selectedOption.value !== null) {
      quizStatistics.updateQuizRecord(quizId.value, selectedOption.value, props.correctAnswer)
    }
  }
}

// 监听错题筛选状态变化
watch(() => quizStatistics?.showWrongOnly?.value, () => {
  // 当筛选状态改变时，可以添加一些动画效果
}, { immediate: true })

// 事件处理函数
const handleShowAllAnswers = () => {
  if (!showResult.value && selectedOption.value === null) {
    selectedOption.value = props.correctAnswer
    showResult.value = true
    showExplanation.value = true
    saveQuizState()
    
    // 更新统计数据
    if (quizStatistics) {
      quizStatistics.updateQuizRecord(quizId.value, props.correctAnswer, props.correctAnswer)
    }
  }
}

const handleHideAllAnswers = () => {
  if (showResult.value) {
    resetQuiz()
  }
}

onMounted(() => {
  initializeQuiz()
  
  // 添加事件监听器
  document.addEventListener('quiz-show-all-answers', handleShowAllAnswers)
  document.addEventListener('quiz-hide-all-answers', handleHideAllAnswers)
})

onUnmounted(() => {
  // 清理事件监听器
  document.removeEventListener('quiz-show-all-answers', handleShowAllAnswers)
  document.removeEventListener('quiz-hide-all-answers', handleHideAllAnswers)
})
</script>

<template>
  <div class="quiz-choice" v-show="!shouldHide">
    <!-- 题目 -->
    <div class="question" v-html="renderMarkdown(props.question)"></div>
    
    <!-- 题目图片 -->
    <div class="question-image" v-if="props.image" style="display: flex; justify-content: center;">
      <img :src="props.image" alt="题目图片" :style="`max-width: ${props.imageWidth}; border-radius: 8px; margin: 10px 0;`">
    </div>
    
    <!-- 选项 -->
    <div class="options">
      <div 
        v-for="(option, index) in props.options" 
        :key="index"
        class="option"
        :class="{
          'selected': selectedOption === index,
          'correct': showResult && index === props.correctAnswer,
          'incorrect': showResult && selectedOption === index && index !== props.correctAnswer,
          'disabled': showResult
        }"
        @click="selectOption(index)"
      >
        <span class="option-label">{{ getOptionLabel(index) }}.</span>
        <span class="option-text" v-html="renderMarkdown(option)"></span>
      </div>
    </div>
    
    <!-- 结果反馈 -->
    <div class="result" v-if="showResult">
      <div class="feedback" :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }">
        <span class="icon">{{ isCorrect ? '✓' : '✗' }}</span>
        <span class="text">{{ isCorrect ? '回答正确！' : '回答错误！' }}</span>
      </div>
      
      <button class="reset-btn" @click="resetQuiz">重新答题</button>
    </div>
    
    <!-- 解析 -->
    <div class="explanation" v-if="showExplanation && props.explanation">
      <div class="explanation-header">
        <span class="blue-bold">【解析】</span>
      </div>
      <div class="explanation-content" v-html="renderMarkdown(props.explanation)"></div>
      <!-- 解析图片 -->
      <div class="explanation-image" v-if="props.explanationImage" style="display: flex; justify-content: center;">
        <img :src="props.explanationImage" alt="解析图片" :style="`max-width: ${props.explanationImageWidth}; border-radius: 8px; margin: 10px 0;`">
      </div>
    </div>
  </div>
</template>

<style scoped>

.quiz-choice {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 30px 40px 20px 40px;
  margin: 25px 0 25px 0;
  border: 1px solid rgba(209, 200, 200, 0.67);
}

.question {
  font-size: 17px;
  font-weight: 450;
  margin-bottom: 16px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  margin-top: 2px;
}

/* 支持题目内容中的段落和列表样式 */
.question :deep(p) {
  margin: 8px 0;
}

.question :deep(p:first-child) {
  margin-top: 0;
}

.question :deep(p:last-child) {
  margin-bottom: 0;
}

.question :deep(ul),
.question :deep(ol) {
  margin: 8px 0;
  padding-left: 20px;
}

.question :deep(li) {
  margin: 4px 0;
}

.question :deep(strong) {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.question :deep(em) {
  font-style: italic;
}

.question :deep(code) {
  background-color: var(--vp-c-bg-soft);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: var(--vp-font-family-mono);
  font-size: 1.05em;
}

.question :deep(pre) {
  background-color: var(--vp-c-bg-soft);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0;
}

.question :deep(blockquote) {
  border-left: 4px solid var(--vp-c-divider);
  padding-left: 12px;
  margin: 8px 0;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.options {
  margin-bottom: 16px;
}

.option {
  display: flex;
  align-items: baseline;
  width: auto;
  padding: 6px 16px;
  margin-bottom: 4px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--vp-c-bg);
}

.option:hover:not(.disabled) {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.option.selected {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.option.correct {
  border-color: #10b981;
  background-color: #ecfdf5;
}

.option.incorrect {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.option.disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

.option-label {
  font-weight: 600;
  margin-right: 8px;
  color: var(--vp-c-text-1);
  min-width: 20px;
}

.option-text {
  flex: 1;
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.feedback {
  display: flex;
  align-items: center;
  font-weight: 500;
}

.feedback.correct {
  color: #10b981;
}

.feedback.incorrect {
  color: #ef4444;
}

.feedback .icon {
  font-size: 18px;
  margin-right: 8px;
}

.reset-btn {
  background-color: var(--vp-c-gray-3);
  color: var(--vp-c-text-1);
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-btn:hover {
  background-color: var(--vp-c-gray-2);
}

.explanation {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 16px;
  animation: slideDown 0.5s ease-out;
}

.explanation-header {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.explanation-content {
  line-height: 1.6;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  padding: 5px 0 0 10px;
  border-radius: 6px;
}

/* 支持解析内容中的段落和列表样式 */
.explanation-content :deep(p) {
  margin: 8px 0;
}

.explanation-content :deep(p:first-child) {
  margin-top: 0;
}

.explanation-content :deep(p:last-child) {
  margin-bottom: 0;
}

.explanation-content :deep(ul),
.explanation-content :deep(ol) {
  margin: 8px 0;
  padding-left: 20px;
}

.explanation-content :deep(li) {
  margin: 4px 0;
}

.explanation-content :deep(strong) {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.explanation-content :deep(em) {
  font-style: italic;
}

.explanation-content :deep(code) {
  background-color: var(--vp-c-bg-soft);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: var(--vp-font-family-mono);
  font-size: 1.05em;
}

.explanation-content :deep(pre) {
  background-color: var(--vp-c-bg-soft);
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 8px 0;
}

.explanation-content :deep(blockquote) {
  border-left: 4px solid var(--vp-c-divider);
  padding-left: 12px;
  margin: 8px 0;
  color: var(--vp-c-text-2);
  font-style: italic;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 暗色主题适配 */
.dark .option.correct {
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.dark .option.incorrect {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}
</style>