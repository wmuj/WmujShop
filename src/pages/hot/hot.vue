// /src/pages/hot/hot.vue
<script setup lang="ts">
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// 接收参数
const query = defineProps<{
  type: string
}>()
// console.log(query)
// 获取当前热门推荐页的标题和url
const curenthot = hotMap.find((item) => item.type === query.type)
//动态设置标题
uni.setNavigationBarTitle({ title: curenthot!.title })

//获取热门推荐数据函数
import { getHotRecommendAPI } from '@/services/hot'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { SubTypeItem } from '@/types/hot'
// 定义顶部的大图片
const bannerPicture = ref('')
// 定义子类型
const subtypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
const getHotRecommendData = async () => {
  const res = await getHotRecommendAPI(curenthot!.url, {
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  // console.log(res)
  bannerPicture.value = res.result.bannerPicture
  subtypes.value = res.result.subTypes
}

//高亮下标
const activeIndex = ref(0)

//滚动到底部
const onscrolltolower = async () => {
  // console.log('到底了')
  //获取当前选中的子类型
  const currentTypes = subtypes.value[activeIndex.value]
  if (currentTypes.goodsItems.page < currentTypes.goodsItems.pages) {
    //当前页面累加
    currentTypes.goodsItems.page++
    const res = await getHotRecommendAPI(curenthot!.url, {
      page: currentTypes.goodsItems.page,
      pageSize: currentTypes.goodsItems.pageSize,
      subType: currentTypes.id,
    })
    //新的列表选项
    const newSubtypes = res.result.subTypes[activeIndex.value]
    //数组追加
    currentTypes.goodsItems.items.push(...newSubtypes.goodsItems.items)
  } else {
    //标记已结束
    currentTypes.finish = true
    //退出并且轻提示
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
}
//页面加载时获取数据
onLoad(() => {
  getHotRecommendData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        :class="{ active: index === activeIndex }"
        class="text"
        v-for="(item, index) in subtypes"
        :key="index"
        @tap="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      @scrolltolower="onscrolltolower"
      scroll-y
      class="scroll-view"
      v-for="(item, index) in subtypes"
      :key="index"
      v-show="activeIndex === index"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '到底啦~' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
