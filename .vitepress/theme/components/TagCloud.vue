<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'

interface Tag {
  name: string
  count: number
  color?: string
  url?: string
  description?: string
}

interface Props {
  layout?: 'cloud' | 'grid' | 'list'
  maxSize?: number
  minSize?: number
  colorful?: boolean
  clickable?: boolean
  filterPath?: string
}

const props = withDefaults(defineProps<Props>(), {
  maxSize: 24,
  minSize: 12,
  colorful: true,
  clickable: true,
  layout: 'cloud',
  filterPath: ''
})

const { site } = useData()
const allTags = ref<Tag[]>([])

// 模拟从已知文档中收集标签数据
const collectTags = () => {
  const tagMap = new Map<string, number>()
  
  // 基于已添加标签的HTML文档进行统计
  const htmlTags = [
    ["HTML", "基础概念", "网页", "前端"],
    ["HTML", "初体验", "标签", "前端"],
    ["HTML", "语法规范", "标签", "前端"],
    ["HTML", "标签学习", "元素", "前端"],
    ["HTML", "列表标签", "ul", "ol", "li", "前端"],
    ["HTML", "表格标签", "table", "tr", "td", "前端"],
    ["HTML", "表单标签", "form", "input", "交互", "前端"],
    ["HTML", "语义化标签", "header", "footer", "nav", "section", "前端"],
    ["HTML", "字符实体", "特殊字符", "编码", "前端"]
  ]
  
  // 根据filterPath过滤
  let tagsToProcess = htmlTags
  if (props.filterPath) {
    if (props.filterPath.includes('HTML')) {
      tagsToProcess = htmlTags
    } else if (props.filterPath.includes('JavaScript')) {
      // 如果过滤JavaScript，返回空数组（因为还没有添加JS标签）
      tagsToProcess = []
    } else {
      tagsToProcess = htmlTags
    }
  }
  
  // 统计标签出现次数
  tagsToProcess.forEach(docTags => {
    docTags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    count,
    color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
    url: `/?tag=${encodeURIComponent(name)}`,
    description: `${count} 篇文章`
  }))
}

// 在组件挂载时收集标签
onMounted(() => {
  allTags.value = collectTags()
})

// 使用收集到的标签
const finalTags = computed(() => allTags.value)

const emit = defineEmits(['tagClick'])

const getTagSize = (tag: Tag) => {
  if (!tag.count || finalTags.value.length === 0) return props.minSize
  
  const counts = finalTags.value.map(t => t.count)
  const maxCount = Math.max(...counts)
  const minCount = Math.min(...counts)
  
  if (maxCount === minCount) return props.minSize
  
  const ratio = (tag.count - minCount) / (maxCount - minCount)
  return Math.round(props.minSize + ratio * (props.maxSize - props.minSize))
}

const getTagColor = (tag: Tag, index: number) => {
  if (tag.color) return tag.color
  if (!props.colorful) return 'var(--vp-c-brand)'
  
  const colors = [
    'var(--vp-c-brand)',
    'var(--vp-c-green)',
    'var(--vp-c-blue)',
    'var(--vp-c-yellow)',
    'var(--vp-c-red)',
    'var(--vp-c-purple)',
  ]
  
  return colors[index % colors.length]
}

const handleTagClick = (tag: Tag) => {
  if (!props.clickable) return
  
  if (tag.url) {
    window.open(tag.url, '_blank')
  } else {
    emit('tagClick', tag)
  }
}

const getTagStyle = (tag: Tag, index: number) => ({
  fontSize: `${getTagSize(tag)}px`,
  color: getTagColor(tag, index),
  borderColor: getTagColor(tag, index)
})
</script>

<template>
  <div class="tag-cloud" :class="`tag-cloud-${props.layout}`">
    <div v-if="finalTags.length === 0" class="no-tags">
      暂无标签
    </div>
    <div
      v-for="(tag, index) in finalTags"
      :key="tag.name"
      class="tag-item"
      :class="{
        'tag-clickable': props.clickable,
        'tag-with-count': tag.count
      }"
      :style="getTagStyle(tag, index)"
      :title="tag.description || tag.name"
      @click="handleTagClick(tag)"
    >
      <span class="tag-name">{{ tag.name }}</span>
      <span v-if="tag.count" class="tag-count">({{ tag.count }})</span>
    </div>
  </div>
</template>

<style scoped>
.tag-cloud {
  margin: 20px 0;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
}

/* 云状布局 */
.tag-cloud-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

/* 网格布局 */
.tag-cloud-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

/* 列表布局 */
.tag-cloud-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.no-tags {
  text-align: center;
  color: var(--vp-c-text-2);
  font-style: italic;
  padding: 20px;
}

.tag-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border: 1px solid currentColor;
  border-radius: 20px;
  background: transparent;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
}

.tag-clickable {
  cursor: pointer;
}

.tag-clickable:hover {
  background: currentColor;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tag-name {
  font-size: inherit;
}

.tag-count {
  font-size: 0.8em;
  opacity: 0.7;
}

/* 列表布局特殊样式 */
.tag-cloud-list .tag-item {
  justify-content: space-between;
  border-radius: 6px;
  padding: 8px 16px;
}

.tag-cloud-list .tag-item:hover {
  transform: translateX(4px);
}

/* 网格布局特殊样式 */
.tag-cloud-grid .tag-item {
  justify-content: center;
  padding: 12px 8px;
  border-radius: 8px;
  text-align: center;
  flex-direction: column;
  gap: 2px;
}

.tag-cloud-grid .tag-item:hover {
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .tag-cloud {
    padding: 12px;
  }
  
  .tag-cloud-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 8px;
  }
  
  .tag-item {
    padding: 3px 8px;
    font-size: 0.9em !important;
  }
  
  .tag-cloud-grid .tag-item {
    padding: 8px 6px;
  }
}

/* 暗色主题适配 */
@media (prefers-color-scheme: dark) {
  .tag-item:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }
}
</style>