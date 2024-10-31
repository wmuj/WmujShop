<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

//接受父组件传递过来的数据
const props = defineProps<{
  orderState: number
}>()
//请求参数
import type { OrderListParams } from '@/types/list'
// 请求参数
const queryParams: Required<OrderListParams> = {
  page: 1,
  pageSize: 5,
  orderState: props.orderState,
}
//定义接受订单列表数据
import { ref } from 'vue'
import type { OrderItem } from '@/types/list'
const orderList = ref<OrderItem[]>([])
//获取订单列表啊
import { getMemberOrderAPI } from '@/services/list'

//分页方法
const fishall = ref(false)

const getMemberOrderData = async () => {
  if (fishall.value === true) {
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  const res = await getMemberOrderAPI(queryParams)
  orderList.value.push(...res.result.items)
  if (queryParams.page < res.result.pages) {
    //页码的累加
    queryParams.page++
  } else {
    fishall.value = true
  }
}

//onMounted 页面加载完成调用
import { onMounted } from 'vue'
onMounted(async () => {
  isFinish.value = false
  await getMemberOrderData()
  isFinish.value = true
})
//定义订单状态文字
import { OrderState, orderStateList } from '@/services/contants'
//导入骨架屏
import ListSkeleton from './ListSkeleton.vue'
//骨架屏是否显示
const isFinish = ref(false)

//去支付
import { getPayMockAPI, getPayWxPayMiniPayAPI } from '@/services/pay'
const onOrderPay = (id: number) => {
  uni.redirectTo({ url: `/pages/pagesOrder/payment/payment?id=${id}` })
}
//确认收货
import { putMemberOrderReceiptByIdAPI } from '@/services/pay'
const onOrderConfirm = (id: string) => {
  //二次确认弹窗
  uni.showModal({
    title: '确认收货',
    content: '请确认您已收到货物',
    success: async (res) => {
      if (res.confirm) {
        //确认收货
        const res = await putMemberOrderReceiptByIdAPI(id)
        uni.showToast({ title: '确认收货成功', icon: 'success' })
        getMemberOrderData()
      }
    },
  })
}

//删除订单
import { deleteMemberOrderAPI } from '@/services/pay'
const onOrderDelete = async (id: string) => {
  uni.showModal({
    title: '删除订单',
    content: '确定要删除该订单吗？',
    success: async (res) => {
      if (res.confirm) {
        //删除订单
        await deleteMemberOrderAPI({ ids: [id] })
        //提示一下，删除成功
        uni.showToast({
          title: '删除成功',
          icon: 'success',
        })
        //关闭当前页，再跳转订单列表页
        uni.redirectTo({ url: '/pages/pagesOrder/list/list' })
      }
    },
  })
}

//下拉刷新
const refreshertriggered = ref(false)
const resetData = async () => {
  refreshertriggered.value = true
  queryParams.page = 1
  orderList.value = []
  await getMemberOrderData()
  //提示一下刷新结束
  uni.showToast({
    title: '刷新成功',
    icon: 'success',
  })
  refreshertriggered.value = false
}
const onscrolltolower = () => {
  getMemberOrderData()
}
</script>

<template>
  <!-- 订单列表 -->
  <scroll-view
    scroll-y
    class="orders"
    v-if="isFinish"
    @scrolltolower="onscrolltolower"
    refresher-enabled
    refresher-background="#fffef9"
    @refresherrefresh="resetData"
    :refresher-triggered="refreshertriggered"
  >
    <view class="card" v-for="item in orderList" :key="item.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ item.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[item.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text
          @tap="onOrderDelete(item.id)"
          class="icon-delete"
          v-if="item.orderState >= orderList.DaiPingJia"
          >删除订单</text
        >
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="sku in item.skus"
        :key="sku.id"
        class="goods"
        :url="`/pages/pagesOrder/detail/detail?id=${item.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image mode="aspectFit" :src="sku.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ sku.name }}</view>
          <view class="type">{{ sku.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ item.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ item.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="item.orderState === OrderState.DaiFuKuan">
          <view class="button primary" @tap="onOrderPay(item.id)">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pages/pagesOrder/create/create?orderId=${item.id}`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            @tap="onOrderConfirm(item.id)"
            v-if="item.orderState === OrderState.DaiShouHuo"
            class="button primary"
            >确认收货</view
          >
        </template>
      </view>
    </view>
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ fishall === true ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
  <ListSkeleton v-else></ListSkeleton>
</template>

<style lang="scss">
.orders {
  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;

    &:last-child {
      padding-bottom: 40rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #999;
    margin-bottom: 15rpx;

    .date {
      color: #666;
      flex: 1;
    }

    .primary {
      color: #ff9240;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }

  .goods {
    display: flex;
    margin-bottom: 20rpx;

    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #333;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid #eee;

    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }

    .amount {
      color: #444;
      margin-left: 6rpx;
    }

    .symbol {
      font-size: 20rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20rpx;

    .button {
      width: 180rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid #ccc;
      font-size: 26rpx;
      color: #444;
    }

    .secondary {
      color: #27ba9b;
      border-color: #27ba9b;
    }

    .primary {
      color: #fff;
      background-color: #27ba9b;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
