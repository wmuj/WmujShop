<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <swiper class="swiper swiper" current="0" autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <scroll-view scroll-y="true" class="orders orders" enable-back-to-top="true">
            <view class="card card">
              <view class="status status">
                <text class="date sk-transparent sk-text-14-2857-307 sk-text"
                  >2023-04-14 13:14:20</text
                >
                <text class="sk-transparent sk-text-14-2857-277 sk-text">待付款</text>
                <text class="icon-delete sk-pseudo sk-pseudo-circle"></text>
              </view>
              <navigator class="goods goods" hover-class="none">
                <view class="cover cover">
                  <image mode="aspectFit" class="sk-image"></image>
                </view>
                <view class="meta meta">
                  <view class="name ellipsis sk-transparent sk-text-14-2857-981 sk-text"
                    >ins风小碎花泡泡袖衬110-160cm</view
                  >
                  <view class="type sk-transparent sk-text-22-2222-876 sk-text">藏青小花 130</view>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <view class="cover cover">
                  <image mode="aspectFit" class="sk-image"></image>
                </view>
                <view class="meta meta">
                  <view class="name ellipsis sk-transparent sk-text-14-2857-536 sk-text"
                    >ins风小碎花泡泡袖衬110-160cm</view
                  >
                  <view class="type sk-transparent sk-text-22-2222-811 sk-text">藏青小花 130</view>
                </view>
              </navigator>
              <view class="payment payment">
                <text
                  class="quantity sk-transparent sk-text-0-0000-255 sk-text"
                  style="background-position-x: 100%"
                  >共5件商品</text
                >
                <text
                  class="sk-transparent sk-text-0-0000-896 sk-text"
                  style="background-position-x: 100%"
                  >实付</text
                >
                <text class="amount sk-transparent"
                  ><text class="symbol sk-transparent sk-opacity">¥</text>99</text
                >
              </view>
              <view class="action action">
                <view class="button primary sk-transparent sk-text-14-2857-87 sk-text">去支付</view>
              </view>
            </view>
            <view class="card card">
              <view class="status status">
                <text class="date sk-transparent sk-text-14-2857-745 sk-text"
                  >2023-04-14 13:14:20</text
                >
                <text class="sk-transparent sk-text-14-2857-502 sk-text">待付款</text>
                <text class="icon-delete sk-pseudo sk-pseudo-circle"></text>
              </view>
              <navigator class="goods goods" hover-class="none">
                <view class="cover cover">
                  <image mode="aspectFit" class="sk-image"></image>
                </view>
                <view class="meta meta">
                  <view class="name ellipsis sk-transparent sk-text-14-2857-538 sk-text"
                    >ins风小碎花泡泡袖衬110-160cm</view
                  >
                  <view class="type sk-transparent sk-text-22-2222-412 sk-text">藏青小花 130</view>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <view class="cover cover">
                  <image mode="aspectFit" class="sk-image"></image>
                </view>
                <view class="meta meta">
                  <view class="name ellipsis sk-transparent sk-text-14-2857-255 sk-text"
                    >ins风小碎花泡泡袖衬110-160cm</view
                  >
                  <view class="type sk-transparent sk-text-22-2222-884 sk-text">藏青小花 130</view>
                </view>
              </navigator>
              <view class="payment payment">
                <text
                  class="quantity sk-transparent sk-text-0-0000-257 sk-text"
                  style="background-position-x: 100%"
                  >共5件商品</text
                >
                <text
                  class="sk-transparent sk-text-0-0000-911 sk-text"
                  style="background-position-x: 100%"
                  >实付</text
                >
                <text class="amount sk-transparent"
                  ><text class="symbol sk-transparent sk-opacity">¥</text>99</text
                >
              </view>
              <view class="action action">
                <view class="button primary sk-transparent sk-text-14-2857-682 sk-text"
                  >去支付</view
                >
              </view>
            </view>
            <view
              class="loading-text sk-transparent sk-text-14-2857-300 sk-text"
              style="padding-bottom: 34px; background-position-x: 50%"
              >没有更多数据~</view
            >
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-27-4194-560 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-27-4194-924 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-523 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-399 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-134 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-307 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-277 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-981 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-876 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-536 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-811 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-0-0000-255 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}
.sk-text-0-0000-896 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-87 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-745 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-502 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-538 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-412 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-255 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-884 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-0-0000-257 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}
.sk-text-0-0000-911 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-14-2857-682 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-300 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
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
