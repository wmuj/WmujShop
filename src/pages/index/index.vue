<script setup lang="ts">
//轮播图数据
import type { BannerItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
//分类面板数据
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeCategoryAPI } from '@/services/home'
import type { CategoryItem } from '@/types/home'
//热门推荐
import HotPanel from './components/HotPanel.vue'
//轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//骨架屏组件
import PageSkeleton from './components/PageSkeleton.vue'
//分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  // console.log(categoryList.value)
}

//热门推荐
const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  // console.log(hotList.value)
}

//页面加载时获取数据
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotData()])
  isLoading.value = false
})

//猜你喜欢
import { useGuessList } from '../../composables/index'
const { guessRef, onscrolltolower } = useGuessList()

//重置猜你喜欢
const refreshertriggered = ref(false)
const resetData = async () => {
  refreshertriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotData()])
  refreshertriggered.value = false
}
</script>

<template>
  <!-- //自定义导航栏 -->
  <CustomNavbar />
  <!-- 轮动容器 -->
  <scroll-view
    scroll-y
    @scrolltolower="onscrolltolower"
    refresher-enabled
    refresher-background="#fffef9"
    @refresherrefresh="resetData"
    :refresher-triggered="refreshertriggered"
  >
    <!-- 骨架屏 数据没有加载出来显示 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <!-- //轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- //分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- //热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
