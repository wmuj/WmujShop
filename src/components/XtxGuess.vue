<script setup lang="ts">
//获取猜你喜欢数据
import { ref } from 'vue'
import { onMounted } from 'vue'
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global.d'
const guessList = ref<GuessItem[]>([])

const fishall = ref(false)
const getGuessData = async () => {
  //退出判断
  if (fishall.value === true) {
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  //进行数组追加的方法
  guessList.value.push(...res.result.items)
  if (pageParams.page < res.result.pages) {
    //页码的累加
    pageParams.page++
  } else {
    fishall.value = true
  }
}
//组件挂在完毕
onMounted(() => {
  getGuessData()
})
//分页参数
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
//重置方法
const resetData = () => {
  guessList.value = []
  fishall.value = false
  pageParams.page = 1
  getGuessData()
}
//暴漏方法
defineExpose({
  getGuessData,
  resetData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.desc }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">{{ fishall === true ? '到底啦~~' : ' 正在加载...' }} </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
