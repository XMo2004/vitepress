<script setup lang="ts">
import { ref, computed, onMounted, provide, inject } from 'vue'

interface QuizRecord {
  id: string
  isAnswered: boolean
  isCorrect: boolean
  selectedAnswer: number | null
  correctAnswer: number
}

interface QuizStats {
  totalQuestions: number
  answeredQuestions: number
  correctAnswers: number
  wrongAnswers: number
}

const quizRecords = ref<Map<string, QuizRecord>>(new Map())
const showWrongOnly = ref(false)

// 从localStorage加载数据
const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem('quiz-statistics')
    if (stored) {
      const data = JSON.parse(stored)
      // 确保数据格式正确
      if (data && typeof data === 'object') {
        quizRecords.value = new Map(Object.entries(data))
        console.log('Quiz statistics loaded:', Object.keys(data).length, 'records')
      }
    } else {
      console.log('No quiz statistics found in localStorage')
    }
  } catch (error) {
    console.error('Failed to load quiz statistics:', error)
    // 如果加载失败，清空localStorage中的损坏数据
    localStorage.removeItem('quiz-statistics')
  }
}

// 保存到localStorage
const saveToStorage = () => {
  try {
    const data = Object.fromEntries(quizRecords.value)
    localStorage.setItem('quiz-statistics', JSON.stringify(data))
    console.log('Quiz statistics saved:', Object.keys(data).length, 'records')
  } catch (error) {
    console.error('Failed to save quiz statistics:', error)
  }
}

// 注册题目
const registerQuiz = (id: string, correctAnswer: number) => {
  if (!quizRecords.value.has(id)) {
    quizRecords.value.set(id, {
      id,
      isAnswered: false,
      isCorrect: false,
      selectedAnswer: null,
      correctAnswer
    })
    // 延迟保存，避免频繁写入
    setTimeout(() => saveToStorage(), 100)
  } else {
    // 如果题目已存在，更新正确答案（防止题目内容变化）
    const record = quizRecords.value.get(id)
    if (record && record.correctAnswer !== correctAnswer) {
      record.correctAnswer = correctAnswer
      // 如果正确答案变了，重新计算是否正确
      if (record.isAnswered) {
        record.isCorrect = record.selectedAnswer === correctAnswer
      }
      setTimeout(() => saveToStorage(), 100)
    }
  }
  // 返回当前题目的记录，用于恢复状态
  return quizRecords.value.get(id)
}

// 更新题目答题状态
const updateQuizRecord = (id: string, selectedAnswer: number, correctAnswer: number) => {
  const record = quizRecords.value.get(id)
  if (record) {
    record.isAnswered = true
    record.selectedAnswer = selectedAnswer
    record.isCorrect = selectedAnswer === correctAnswer
    record.correctAnswer = correctAnswer
    saveToStorage()
  }
}

// 重置题目状态
const resetQuiz = (id: string) => {
  const record = quizRecords.value.get(id)
  if (record) {
    record.isAnswered = false
    record.isCorrect = false
    record.selectedAnswer = null
    saveToStorage()
  }
}

// 获取题目状态
const getQuizRecord = (id: string): QuizRecord | undefined => {
  return quizRecords.value.get(id)
}

// 计算统计数据
const stats = computed<QuizStats>(() => {
  const records = Array.from(quizRecords.value.values())
  const totalQuestions = records.length
  const answeredQuestions = records.filter(r => r.isAnswered).length
  const correctAnswers = records.filter(r => r.isAnswered && r.isCorrect).length
  const wrongAnswers = records.filter(r => r.isAnswered && !r.isCorrect).length
  
  return {
    totalQuestions,
    answeredQuestions,
    correctAnswers,
    wrongAnswers
  }
})

// 获取错题列表
const wrongQuestions = computed(() => {
  return Array.from(quizRecords.value.values())
    .filter(record => record.isAnswered && !record.isCorrect)
})

// 清空所有记录
const clearAllRecords = () => {
  quizRecords.value.clear()
  localStorage.removeItem('quiz-statistics')
}

// 重置所有题目状态
const resetAllQuizzes = () => {
  quizRecords.value.forEach(record => {
    record.isAnswered = false
    record.isCorrect = false
    record.selectedAnswer = null
  })
  saveToStorage()
}

// 立即加载数据
loadFromStorage()

// 提供给子组件的方法
provide('quizStatistics', {
  registerQuiz,
  updateQuizRecord,
  resetQuiz,
  getQuizRecord,
  showWrongOnly
})
</script>

<template>
  <div class="quiz-statistics">
    <div class="stats-header">
      <h3>📊 答题统计</h3>
    </div>
    
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">{{ stats.totalQuestions }}</div>
        <div class="stat-label">总题数</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ stats.answeredQuestions }}</div>
        <div class="stat-label">已答题</div>
      </div>
      <div class="stat-item correct">
        <div class="stat-number">{{ stats.correctAnswers }}</div>
        <div class="stat-label">正确</div>
      </div>
      <div class="stat-item wrong">
        <div class="stat-number">{{ stats.wrongAnswers }}</div>
        <div class="stat-label">错误</div>
      </div>
    </div>
    
    <div class="stats-controls">
      <label class="filter-toggle">
        <input 
          type="checkbox" 
          v-model="showWrongOnly"
          :disabled="wrongQuestions.length === 0"
        >
        <span>只显示错题 ({{ wrongQuestions.length }})</span>
      </label>
      
      <div class="control-buttons">
        <button 
          class="reset-btn" 
          @click="resetAllQuizzes"
          :disabled="stats.answeredQuestions === 0"
        >
          重置答题状态
        </button>
        <button 
          class="clear-btn" 
          @click="clearAllRecords"
          :disabled="stats.totalQuestions === 0"
        >
          清空所有记录
        </button>
      </div>
    </div>
    
    <div class="accuracy-bar" v-if="stats.answeredQuestions > 0">
      <div class="accuracy-label">
        正确率: {{ Math.round((stats.correctAnswers / stats.answeredQuestions) * 100) }}%
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill"
          :style="{ width: (stats.correctAnswers / stats.answeredQuestions) * 100 + '%' }"
        ></div>
      </div>
    </div>
    
    <slot></slot>
  </div>
</template>

<style scoped>
.quiz-statistics {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.stats-header h3 {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.stat-item {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.stat-item.correct .stat-number {
  color: #10b981;
}

.stat-item.wrong .stat-number {
  color: #ef4444;
}

.stats-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.filter-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.filter-toggle input[type="checkbox"] {
  margin: 0;
}

.filter-toggle input[type="checkbox"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-buttons {
  display: flex;
  gap: 8px;
}

.reset-btn,
.clear-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.reset-btn {
  background-color: var(--vp-c-brand-1);
  color: white;
}

.reset-btn:hover:not(:disabled) {
  background-color: var(--vp-c-brand-2);
}

.clear-btn {
  background-color: #ef4444;
  color: white;
}

.clear-btn:hover:not(:disabled) {
  background-color: #dc2626;
}

.reset-btn:disabled,
.clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.accuracy-bar {
  margin-top: 16px;
}

.accuracy-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
  font-weight: 500;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  transition: width 0.5s ease;
  border-radius: 4px;
}

@media (max-width: 640px) {
  .stats-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .control-buttons {
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>