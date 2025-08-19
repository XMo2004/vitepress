<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  question: string
  options: string[]
  correctAnswer: number // 正确答案的索引（0-based）
  explanation?: string // 解析内容
}

const props = withDefaults(defineProps<Props>(), {
  question: '',
  options: () => [],
  correctAnswer: 0,
  explanation: ''
})

const selectedOption = ref<number | null>(null)
const showResult = ref(false)
const showExplanation = ref(false)

const isCorrect = computed(() => {
  return selectedOption.value === props.correctAnswer
})

const selectOption = (index: number) => {
  if (showResult.value) return // 已经显示结果后不能再选择
  selectedOption.value = index
  // 直接提交答案
  showResult.value = true
  // 延迟显示解析
  setTimeout(() => {
    showExplanation.value = true
  }, 500)
}

const resetQuiz = () => {
  selectedOption.value = null
  showResult.value = false
  showExplanation.value = false
}

const getOptionLabel = (index: number) => {
  return String.fromCharCode(65 + index) // A, B, C, D...
}
</script>

<template>
  <div class="quiz-choice">
    <!-- 题目 -->
    <div class="question" v-html="props.question"></div>
    
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
        <span class="option-text" v-html="option"></span>
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
        <span class="icon">💡</span>
        <span class="title">解析</span>
      </div>
      <div class="explanation-content" v-html="props.explanation"></div>
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.question {
  font-size: 17px;
  font-weight: 450;
  margin-bottom: 16px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

.options {
  margin-bottom: 16px;
}

.option {
  display: flex;
  align-items: flex-start;
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
  line-height: 1.5;
  color: var(--vp-c-text-1);
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
  margin-bottom: 12px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.explanation-header .icon {
  margin-right: 8px;
  font-size: 16px;
}

.explanation-content {
  line-height: 1.6;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid var(--vp-c-brand-1);
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