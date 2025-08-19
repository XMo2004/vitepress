<script setup lang="ts">
interface Props {
    url: string
    title: string
    description: string
    logo: string
}

const props = withDefaults(defineProps<Props>(), {
    url: '',
    title: '',
    description: '',
    logo: '',
})
</script>

<template>
    <div class="linkcard">
        <a :href="props.url" target="_blank">
            <p class="description">{{ props.title }}<br><span>{{ props.description }}</span></p>
            <div class="logo">
                <img alt="logo" width="70px" height="70px" :src="props.logo" />
            </div>
        </a>
    </div>
</template>

<style>
/* 卡片背景 */
.linkcard {
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    padding: 8px 16px 8px 8px;
    transition: color 0.5s, background-color 0.5s;
    margin-top: 15px;
    border-radius: 25px;
}

/* 卡片鼠标悬停 */
.linkcard:hover {
    background-color: var(--vp-c-yellow-soft);
    transition: background-color 0.5s ease;
}

/* 链接样式 */
.linkcard a {
    display: flex;
    align-items: center;
}

/* 描述链接文字 */
.linkcard .description {
    flex: 1; /* 占满剩余空间 */
    font-weight: 500; /* 加粗 */
    font-size: 16px; /* 字体大小 */
    line-height: 25px; /* 行高 */
    color: var(--vp-c-text-1); /* 字体颜色 */
    margin: 0 0 0 16px; /* 外边距 */
    transition: color 0.5s; /* 字体颜色过渡 */
}

/* 描述链接文字2 */
.linkcard .description span {
    font-size: 14px;
}

/* logo图片 */
.linkcard .logo img {
    height: 60px;
    object-fit: contain;
}

/* 链接下划线去除 */
.vp-doc a {
    text-decoration: none;
}


</style>