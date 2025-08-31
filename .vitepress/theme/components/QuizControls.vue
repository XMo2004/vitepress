<script setup lang="ts">
import { ref, computed, inject, onMounted, withDefaults, defineProps } from 'vue'

interface Props {
  showAnswerButton?: boolean
  showRetryButton?: boolean
  showNextButton?: boolean
  showWrongOnlyButton?: boolean
  nextQuizUrl?: string
  customButtons?: Array<{
    text: string
    icon?: string
    action: () => void
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
  }>
}

const props = withDefaults(defineProps<Props>(), {
  showAnswerButton: true,
  showRetryButton: true,
  showNextButton: false,
  showWrongOnlyButton: true,
  nextQuizUrl: '',
  customButtons: () => []
})

// 注入统计功能
const quizStatistics = inject('quizStatistics', null) as any

// 控制状态
const showAnswers = ref(false)
const showWrongOnly = ref(false)

// 计算属性
const hasWrongAnswers = computed(() => {
  if (!quizStatistics) return false
  return quizStatistics.getWrongAnswersCount() > 0
})

const totalQuizzes = computed(() => {
  if (!quizStatistics) return 0
  return quizStatistics.getTotalQuizzes()
})

const correctAnswers = computed(() => {
  if (!quizStatistics) return 0
  return quizStatistics.getCorrectAnswersCount()
})

const wrongAnswers = computed(() => {
  if (!quizStatistics) return 0
  return quizStatistics.getWrongAnswersCount()
})

const accuracy = computed(() => {
  if (!quizStatistics || totalQuizzes.value === 0) return 0
  return Math.round((correctAnswers.value / totalQuizzes.value) * 100)
})

// 方法
const toggleAnswers = () => {
  showAnswers.value = !showAnswers.value
  // 触发显示所有答案的事件
  if (showAnswers.value) {
    document.dispatchEvent(new CustomEvent('quiz-show-all-answers'))
  } else {
    document.dispatchEvent(new CustomEvent('quiz-hide-all-answers'))
  }
}

const retryWrongAnswers = () => {
  if (!quizStatistics) return
  
  // 重置所有错题
  quizStatistics.resetWrongAnswers()
  
  // 刷新页面或滚动到第一题
  const firstQuiz = document.querySelector('.quiz-choice')
  if (firstQuiz) {
    firstQuiz.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const toggleWrongOnly = () => {
  showWrongOnly.value = !showWrongOnly.value
  if (quizStatistics) {
    quizStatistics.setShowWrongOnly(showWrongOnly.value)
  }
}

const goToNext = () => {
  if (props.nextQuizUrl) {
    window.location.href = props.nextQuizUrl
  }
}

const resetAllQuizzes = () => {
  if (!quizStatistics) return
  
  if (confirm('确定要重置所有答题记录吗？此操作不可撤销。')) {
    quizStatistics.resetAll()
    // 刷新页面
    window.location.reload()
  }
}

// 初始化
onMounted(() => {
  if (quizStatistics) {
    showWrongOnly.value = quizStatistics.showWrongOnly?.value || false
  }
})
</script>

<template>
<!-- 控制按钮 -->
<div class="control-buttons">
  <!-- 显示答案按钮 -->
  <button 
    v-if="showAnswerButton"
    class="control-btn"
    :class="{ 'active': showAnswers }"
    @click="toggleAnswers"
    :title="showAnswers ? '隐藏所有答案' : '显示所有答案'"
  >
    <span class="btn-text">{{ showAnswers ? '隐藏答案' : '显示答案' }}</span>
  </button>
</div>
</template>

<style scoped>
.quiz-controls {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin: 25px 0;
  border: 1px solid rgba(209, 200, 200, 0.67);
}

.quiz-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.stats-label {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.stats-value {
  color: var(--vp-c-text-1);
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
}

.stats-value.correct {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.stats-value.incorrect {
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}

.stats-value.high-accuracy {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.stats-value.medium-accuracy {
  color: #f59e0b;
  background-color: rgba(245, 158, 11, 0.1);
}

.stats-value.low-accuracy {
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.control-btn:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.control-btn.active {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-1);
  color: white;
}

.control-btn.retry-btn:hover {
  border-color: #f59e0b;
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.control-btn.next-btn:hover {
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.control-btn.reset-btn:hover {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.control-btn.custom-btn-primary:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-1);
  color: white;
}

.control-btn.custom-btn-success:hover {
  border-color: #10b981;
  background-color: #10b981;
  color: white;
}

.control-btn.custom-btn-danger:hover {
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;
}

.btn-icon {
  font-size: 16px;
  line-height: 1;
}

.btn-text {
  font-family: "LXGW WenKai", "霞鹜文楷", serif;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quiz-controls {
    padding: 16px;
    margin: 20px 0;
  }
  
  .quiz-stats {
    gap: 12px;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
  
  .stats-item {
    font-size: 13px;
  }
  
  .control-buttons {
    gap: 8px;
  }
  
  .control-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .btn-icon {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .quiz-stats {
    flex-direction: column;
    gap: 8px;
  }
  
  .control-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .control-btn {
    justify-content: center;
    width: 100%;
  }
}

/* 暗色主题适配 */
.dark .quiz-controls {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .stats-value.correct {
  background-color: rgba(16, 185, 129, 0.2);
}

.dark .stats-value.incorrect {
  background-color: rgba(239, 68, 68, 0.2);
}

.dark .stats-value.high-accuracy {
  background-color: rgba(16, 185, 129, 0.2);
}

.dark .stats-value.medium-accuracy {
  background-color: rgba(245, 158, 11, 0.2);
}

.dark .stats-value.low-accuracy {
  background-color: rgba(239, 68, 68, 0.2);
}
</style>