<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 复用机制 :key="$route.fullPath"-->
    <RouterView :key="$route.fullPath" />
    <LayoutFooter />
  </div>
</template>

<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '../../stores/category.js'
import { onMounted } from 'vue'
const CategoryStore = useCategoryStore()
onMounted(() => { CategoryStore.getCategory() })
</script>