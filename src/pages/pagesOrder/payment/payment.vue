<script setup lang="ts">
import { useGuessList } from '@/composables'

// 获取页面参数
const query = defineProps<{
  id: string
}>()

// 猜你喜欢
const { guessRef, onscrolltolower } = useGuessList()

//获取订单详情看看是不是已取消】
import type { OrderResult } from '@/types/order'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getMemberOrderByIdAPI } from '@/services/order'

import { OrderState, orderStateList } from '@/services/contants'

const pagesOrderDetailList = ref<OrderResult>()
const getPagesOrderDetail = async () => {
  const res = await getMemberOrderByIdAPI(query.id)
  pagesOrderDetailList.value = res.result
  // console.log(pagesOrderDetailList.value)
}
onLoad(() => {
  getPagesOrderDetail()
})
</script>

<template>
  <scroll-view class="viewport" scroll-y @scrolltolower="onscrolltolower">
    <!-- 订单状态 -->
    <view class="overview">
      <view
        class="status icon-checked"
        v-if="pagesOrderDetailList!.orderState === OrderState.YiQuXiao"
        >已取消</view
      >
      <view class="status icon-checked" v-else>支付成功</view>
      <view class="buttons">
        <navigator
          hover-class="none"
          class="button navigator"
          url="/pages/index/index"
          open-type="switchTab"
        >
          返回首页
        </navigator>
        <navigator
          hover-class="none"
          class="button navigator"
          :url="`/pages/pagesOrder/detail/detail?id=${query.id}`"
          open-type="redirect"
        >
          查看订单
        </navigator>
      </view>
    </view>

    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.viewport {
  background-color: #f7f7f8;
}

.overview {
  line-height: 1;
  padding: 50rpx 0;
  color: #fff;
  background-color: #27ba9b;

  .status {
    font-size: 36rpx;
    font-weight: 500;
    text-align: center;
  }

  .status::before {
    display: block;
    font-size: 110rpx;
    margin-bottom: 20rpx;
  }

  .buttons {
    height: 60rpx;
    line-height: 60rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60rpx;
  }

  .button {
    text-align: center;
    margin: 0 10rpx;
    font-size: 28rpx;
    color: #fff;

    &:first-child {
      width: 200rpx;
      border-radius: 64rpx;
      border: 1rpx solid #fff;
    }
  }
}
</style>
