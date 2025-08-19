<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: number // 当前值
  max?: number // 最大值
  label?: string // 标签
  showPercentage?: boolean // 是否显示百分比
  color?: string // 进度条颜色
  height?: string // 进度条高度
  animated?: boolean // 是否显示动画
  striped?: boolean // 是否显示条纹
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  label: '',
  showPercentage: true,
  color: 'var(--vp-c-brand)',
  height: '20px',
  animated: false,
  striped: false
})

const percentage = computed(() => {
  const percent = Math.min(Math.max((props.value / props.max) * 100, 0), 100)
  return Math.round(percent)
})

const progressStyle = computed(() => ({
  width: `${percentage.value}%`,
  backgroundColor: props.color,
  height: props.height
}))

const containerStyle = computed(() => ({
  height: props.height
}))
</script>

<template>
  <div class="progress-container">
    <div v-if="props.label" class="progress-label">
      <span>{{ props.label }}</span>
      <span v-if="props.showPercentage" class="progress-percentage">
        {{ percentage }}%
      </span>
    </div>
    <div 
      class="progress-bar" 
      :style="containerStyle"
      :class="{
        'progress-striped': props.striped,
        'progress-animated': props.animated
      }"
    >
      <div 
        class="progress-fill" 
        :style="progressStyle"
        :class="{
          'progress-striped': props.striped,
          'progress-animated': props.animated
        }"
      >
        <span v-if="!props.label && props.showPercentage" class="progress-text">
          {{ percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  margin: 16px 0;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.progress-percentage {
  font-weight: 600;
  color: var(--vp-c-brand);
}

.progress-bar {
  background-color: var(--vp-c-bg-mute);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--vp-c-border);
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.6s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.progress-text {
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}

/* 条纹效果 */
.progress-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
}

/* 动画效果 */
.progress-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 20px 0;
  }
  100% {
    background-position: 0 0;
  }
}

/* 不同颜色主题 */
.progress-container[data-color="success"] .progress-fill {
  background-color: var(--vp-c-green) !important;
}

.progress-container[data-color="warning"] .progress-fill {
  background-color: var(--vp-c-yellow) !important;
}

.progress-container[data-color="danger"] .progress-fill {
  background-color: var(--vp-c-red) !important;
}

.progress-container[data-color="info"] .progress-fill {
  background-color: var(--vp-c-blue) !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .progress-label {
    font-size: 12px;
  }
  
  .progress-text {
    font-size: 10px;
  }
}
</style>