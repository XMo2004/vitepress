declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    [key: string]: any
  }
}

// 修复Vue API导入问题
declare module 'vue' {
  export function ref<T>(value: T): { value: T }
  export function computed<T>(getter: () => T): { value: T }
  export function reactive<T extends object>(target: T): T
  export function watch<T>(source: T, callback: (newVal: T, oldVal: T) => void): void
  export function onMounted(callback: () => void): void
  export function onUnmounted(callback: () => void): void
  export function defineProps<T>(): T
  export function withDefaults<T, D>(props: T, defaults: D): T & D
  export function defineEmits<T>(): T
  export function nextTick(callback?: () => void): Promise<void>
}

// 为Vue组件提供更好的类型支持
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  
  // 全局类型声明
  interface Window {
    [key: string]: any
  }
}