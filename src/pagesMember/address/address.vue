<script setup lang="ts">
//
import { getMemberAddressAPI } from '@/services/address'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { onShow } from '@dcloudio/uni-app'
import type { AddressItem } from '@/types/address'
const addressList = ref<AddressItem[]>()
const getAddressData = async () => {
  //获取收货地址数据
  const res = await getMemberAddressAPI()
  addressList.value = res.result
  // console.log(addressList.value)
}
onLoad(() => {
  getAddressData()
})
onShow(() => {
  getAddressData()
})

//删除地址 需要二次确认
import { deleteMemberAddressByIdAPI } from '@/services/address'
const onDeleteAddress = (id: string) => {
  //二次确认
  uni.showModal({
    content: '确定删除该地址吗？',
    success: async (success) => {
      if (success.confirm) {
        // console.log('确定')
        await deleteMemberAddressByIdAPI(id)
        //重新渲染
        getAddressData()
      }
    },
  })
}

//订单使用store来修改地址 此处接受
//修改收货地址
import { userAddressesStore } from '@/stores/modules/address'
const onChangeAddress = (item: AddressItem) => {
  // 修改地址  返回上一页
  const { selectedAddress, ChangeselectedAddress } = userAddressesStore()
  ChangeselectedAddress(item)

  uni.navigateBack()
}
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addressList" class="address">
        <uni-swipe-action class="address-list">
          <!-- //收货地址项 -->
          <uni-swipe-action-item v-for="(item, index) in addressList" :key="item.id">
            <view class="item-content" @tap="onChangeAddress(item)">
              <view class="user">
                {{ item.receiver }}
                <text class="contact">{{ item.contact }}</text>
                <text v-if="item.isDefault" class="badge">默认</text>
              </view>
              <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
              <navigator
                class="edit"
                hover-class="none"
                :url="`/pagesMember/address-form/address-form?id=${item.id}`"
                @tap.stop="() => {}"
              >
                修改
              </navigator>
            </view>
            <!-- 插槽 -->
            <template #right>
              <button @tap="onDeleteAddress(item.id)" class="delete-button">删除</button>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
        <view>
          <!-- 收货地址项 -->
          <view class="item"> </view>
        </view>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/address-form/address-form">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #cf4444;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;

    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
