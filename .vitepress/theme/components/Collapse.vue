<script setup lang="ts">
import { ref } from 'vue'

interface CollapseItem {
  key: string
  title: string
  content?: string
  disabled?: boolean
  icon?: string
}

interface Props {
  items?: CollapseItem[]
  accordion?: boolean
  defaultActiveKey?: string | string[]
  bordered?: boolean
  ghost?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  accordion: false,
  defaultActiveKey: () => [],
  bordered: true,
  ghost: false
})

const emit = defineEmits(['change'])

const activeKeys = ref<string[]>(
  Array.isArray(props.defaultActiveKey) 
    ? props.defaultActiveKey 
    : props.defaultActiveKey 
      ? [props.defaultActiveKey] 
      : []
)

const togglePanel = (key: string) => {
  const item = props.items.find(item => item.key === key)
  if (item?.disabled) return
  
  if (props.accordion) {
    if (activeKeys.value.includes(key)) {
      activeKeys.value = []
    } else {
      activeKeys.value = [key]
    }
  } else {
    const index = activeKeys.value.indexOf(key)
    if (index > -1) {
      activeKeys.value.splice(index, 1)
    } else {
      activeKeys.value.push(key)
    }
  }
  
  emit('change', [...activeKeys.value])
}

const isActive = (key: string) => {
  return activeKeys.value.includes(key)
}

const getArrowRotation = (key: string) => {
  return isActive(key) ? 'rotate(90deg)' : 'rotate(0deg)'
}
</script>

<template>
  <div 
    class="collapse"
    :class="{
      'collapse-bordered': props.bordered,
      'collapse-ghost': props.ghost
    }"
  >
    <!-- 使用 items 属性 -->
    <div 
      v-for="(item, index) in props.items"
      :key="item.key"
      class="collapse-item"
      :class="{
        'collapse-item-active': isActive(item.key),
        'collapse-item-disabled': item.disabled,
        'collapse-item-last': index === props.items.length - 1
      }"
    >
      <div 
        class="collapse-header"
        @click="togglePanel(item.key)"
        :aria-expanded="isActive(item.key)"
        role="button"
        tabindex="0"
        @keydown.enter="togglePanel(item.key)"
        @keydown.space.prevent="togglePanel(item.key)"
      >
        <div class="collapse-header-content">
          <span v-if="item.icon" class="collapse-icon">{{ item.icon }}</span>
          <span class="collapse-title">{{ item.title }}</span>
        </div>
        <div 
          class="collapse-arrow"
          :style="{ transform: getArrowRotation(item.key) }"
        >
          ▶
        </div>
      </div>
      
      <Transition name="collapse">
        <div v-if="isActive(item.key)" class="collapse-content">
          <div class="collapse-content-inner">
            <div v-if="item.content" v-html="item.content"></div>
            <slot v-else :name="item.key" :item="item"></slot>
          </div>
        </div>
      </Transition>
    </div>
    
    <!-- 使用插槽 -->
    <slot v-if="props.items.length === 0"></slot>
  </div>
</template>

<style scoped>
.collapse {
  margin: 16px 0;
}

.collapse-bordered {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
}

.collapse-ghost {
  background: transparent;
}

.collapse-item {
  border-bottom: 1px solid var(--vp-c-border);
}

.collapse-item-last {
  border-bottom: none;
}

.collapse-ghost .collapse-item {
  border-bottom: 1px solid var(--vp-c-border-soft);
  margin-bottom: 8px;
  border-radius: 6px;
  overflow: hidden;
}

.collapse-ghost .collapse-item-last {
  margin-bottom: 0;
}

.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.collapse-header:hover {
  background: var(--vp-c-bg-mute);
}

.collapse-header:focus {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: -2px;
}

.collapse-item-active .collapse-header {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-darker);
}

.collapse-item-disabled .collapse-header {
  cursor: not-allowed;
  opacity: 0.6;
  background: var(--vp-c-bg-mute);
}

.collapse-item-disabled .collapse-header:hover {
  background: var(--vp-c-bg-mute);
}

.collapse-header-content {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.collapse-icon {
  font-size: 16px;
}

.collapse-title {
  font-weight: 500;
  font-size: 15px;
}

.collapse-arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
  color: var(--vp-c-text-2);
}

.collapse-item-active .collapse-arrow {
  color: var(--vp-c-brand);
}

.collapse-content {
  background: var(--vp-c-bg);
  overflow: hidden;
}

.collapse-content-inner {
  padding: 16px;
  border-top: 1px solid var(--vp-c-border-soft);
}

.collapse-ghost .collapse-content {
  background: var(--vp-c-bg-soft);
}

/* 折叠动画 */
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .collapse-header {
    padding: 12px;
  }
  
  .collapse-content-inner {
    padding: 12px;
  }
  
  .collapse-title {
    font-size: 14px;
  }
  
  .collapse-icon {
    font-size: 14px;
  }
}

/* 深色主题适配 */
@media (prefers-color-scheme: dark) {
  .collapse-header:focus {
    outline-color: var(--vp-c-brand-light);
  }
}
</style>