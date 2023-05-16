<template>
  <div class="container">
    <HomeBanner />
    <HomeCategory />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>

<script setup>
import HomeHot from '@/views/Home/HomeHot.vue'
import HomeNew from '@/views/Home/HomeNew.vue'
import HomeBanner from '@/views/Home/HomeBanner.vue'
import HomeCategory from '@/views/Home/HomeCategory.vue'
import HomeProduct from '@/views/Home/HomeProduct.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const CategoryStore = useCategoryStore()
onMounted(() => { CategoryStore.getCategory() })
</script>