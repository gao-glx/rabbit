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
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const CategoryStore = useCategoryStore()
onMounted(() => { CategoryStore.getCategory() })
</script>