<script setup lang="ts">
interface TimelineItem {
  title: string
  date: string
  description?: string
  status?: 'completed' | 'current' | 'pending'
  icon?: string
}

interface Props {
  items: TimelineItem[]
  direction?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  direction: 'vertical'
})

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return '✅'
    case 'current': return '🔄'
    case 'pending': return '⏳'
    default: return '📍'
  }
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'completed': return 'completed'
    case 'current': return 'current'
    case 'pending': return 'pending'
    default: return 'default'
  }
}
</script>

<template>
  <div class="timeline" :class="`timeline-${props.direction}`">
    <div 
      v-for="(item, index) in props.items" 
      :key="index" 
      class="timeline-item"
      :class="getStatusClass(item.status || 'default')"
    >
      <div class="timeline-marker">
        <span class="timeline-icon">
          {{ item.icon || getStatusIcon(item.status || 'default') }}
        </span>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3 class="timeline-title">{{ item.title }}</h3>
          <span class="timeline-date">{{ item.date }}</span>
        </div>
        <p v-if="item.description" class="timeline-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 20px 0;
}

.timeline-vertical {
  padding-left: 20px;
}

.timeline-vertical::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--vp-c-border);
}

.timeline-horizontal {
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
}

.timeline-horizontal .timeline-item {
  flex: 0 0 auto;
  margin-right: 40px;
  position: relative;
}

.timeline-horizontal::before {
  content: '';
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--vp-c-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-vertical .timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -25px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-horizontal .timeline-marker {
  position: relative;
  left: 0;
  margin: 0 auto 10px;
}

.timeline-icon {
  font-size: 10px;
}

.timeline-content {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.timeline-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.timeline-date {
  font-size: 12px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.timeline-description {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* 状态样式 */
.timeline-item.completed .timeline-marker {
  background: var(--vp-c-green-soft);
  border-color: var(--vp-c-green);
}

.timeline-item.current .timeline-marker {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  animation: pulse 2s infinite;
}

.timeline-item.pending .timeline-marker {
  background: var(--vp-c-yellow-soft);
  border-color: var(--vp-c-yellow);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--vp-c-brand);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--vp-c-brand), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--vp-c-brand), 0);
  }
}

@media (max-width: 768px) {
  .timeline-horizontal {
    flex-direction: column;
  }
  
  .timeline-horizontal .timeline-item {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .timeline-horizontal::before {
    display: none;
  }
}
</style>