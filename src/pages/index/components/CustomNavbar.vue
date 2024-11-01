<script setup lang="ts">
//定义每个设备不同的安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// console.log(safeAreaInsets)
//引入搜索框组件
// 引入Vue的响应式数据和方法
import { ref } from 'vue'

// 获取系统信息

// 定义用于绑定搜索输入内容的响应式变量
const searchQuery = ref('')

// 处理输入变化
const onInputChange = (inputValue: string) => {
  searchQuery.value = inputValue
}

// 处理确认搜索事件
const onTriggerConfirm = () => {
  // 这里可以调用搜索的逻辑函数
  performSearch(searchQuery.value)
}

// 聚焦事件处理
const onFocus = () => {}

// 失焦事件处理
const onBlur = () => {}

// 执行搜索的函数，可以根据实际逻辑调用接口或本地搜索
const performSearch = (query: string) => {
  // 搜索逻辑实现，如调用API接口获取数据等
}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">帅气 · 美丽 · 时尚</text>
    </view>
    <!-- 搜索条 -->
    <mehaotian-search-revision
      class="search"
      @input="onInputChange"
      @confirm="onTriggerConfirm"
      @focus="onFocus"
      @blur="onBlur"
    ></mehaotian-search-revision>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
}
</style>
