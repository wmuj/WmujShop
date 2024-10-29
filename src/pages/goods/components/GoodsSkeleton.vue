<template name="skeleton">
  <view class="sk-container">
    <scroll-view scroll-y="true" class="viewport viewport" enable-back-to-top="true">
      <view class="goods goods">
        <view class="preview preview">
          <swiper circular="true" autoplay="false" interval="3000" current="0"></swiper>
          <view class="indicator indicator">
            <text class="current sk-transparent sk-opacity">2</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta">
          <view class="price price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-421 sk-text">79.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-196 sk-text"
            >给衣柜减减肥，真空防潮压缩袋</view
          >
          <view class="desc sk-transparent sk-text-0-0000-205 sk-text">手动压缩，节省空间app</view>
        </view>
        <view class="action action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-667 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-60 sk-text">
              请选择商品规格
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-938 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-8 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-591 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-421 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view class="detail detail panel panel">
        <view class="title title">
          <text class="sk-transparent sk-text-0-0000-199 sk-text">详情</text>
        </view>
        <view class="content content">
          <view class="properties properties">
            <view class="item item">
              <text class="label sk-transparent sk-text-25-0000-74 sk-text">材质</text>
              <text class="value sk-transparent sk-text-25-0000-36 sk-text">塑料</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-421 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-196 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-0-0000-205 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-667 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-60 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-938 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-8 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-591 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-0-0000-199 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-25-0000-74 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-25-0000-36 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-32-4324-746 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-text-32-4324-842 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
