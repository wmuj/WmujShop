<template name="skeleton">
  <view class="sk-container">
    <scroll-view enable-back-to-top="true" scroll-y="true" class="viewport sk-image">
      <view class="profile profile" style="padding-top: 47px">
        <view class="overview overview">
          <navigator hover-class="none">
            <image class="avatar gray sk-image" mode="aspectFill"></image>
          </navigator>
          <view class="meta meta">
            <navigator
              class="nickname sk-transparent sk-text-0-0000-740 sk-text"
              hover-class="none"
            >
              未登录
            </navigator>
            <view class="extra extra">
              <text class="tips sk-transparent sk-text-13-3333-226 sk-text">点击登录账号</text>
            </view>
          </view>
        </view>
        <navigator class="settings sk-transparent sk-text-14-2857-912 sk-text" hover-class="none">
          设置
        </navigator>
      </view>
      <view class="orders orders">
        <view class="title sk-transparent">
          我的订单
          <navigator class="navigator sk-transparent" hover-class="none">
            查看全部订单
            <text class="icon-right sk-pseudo sk-pseudo-circle"></text>
          </navigator>
        </view>
        <view class="section section">
          <navigator
            class="icon-currency navigator sk-transparent sk-text-14-2857-718 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待付款</navigator
          >
          <navigator
            class="icon-gift navigator sk-transparent sk-text-14-2857-824 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待发货</navigator
          >
          <navigator
            class="icon-check navigator sk-transparent sk-text-14-2857-258 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待收货</navigator
          >
          <navigator
            class="icon-comment navigator sk-transparent sk-text-14-2857-705 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待评价</navigator
          >
          <button
            class="contact icon-handset sk-transparent sk-button sk-pseudo sk-pseudo-circle"
            open-type="contact"
          >
            售后
          </button>
        </view>
      </view>
      <view class="guess guess">
        <view is="components/XtxGuess" class="r r">
          <view class="caption XtxGuess--caption">
            <text
              class="text XtxGuess--text sk-transparent sk-text-0-0000-791 sk-text sk-pseudo sk-pseudo-circle"
              >猜你喜欢</text
            >
          </view>
          <view class="guess XtxGuess--guess">
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
              <view class="name XtxGuess--name sk-transparent sk-text-14-2857-193 sk-text"
                >强力除油污，萃取橙油精华app</view
              >
              <view class="price XtxGuess--price">
                <text class="small XtxGuess--small sk-transparent sk-opacity">¥</text>
                <text class="sk-transparent sk-text-0-0000-854 sk-text">67.50</text>
              </view>
            </navigator>
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
              <view class="name XtxGuess--name sk-transparent sk-text-14-2857-26 sk-text"
                >哪里不适灸哪里，全身都可灸app</view
              >
              <view class="price XtxGuess--price">
                <text class="small XtxGuess--small sk-transparent sk-opacity">¥</text>
                <text class="sk-transparent sk-text-0-0000-860 sk-text">99.00</text>
              </view>
            </navigator>
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
            </navigator>
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
.sk-text-0-0000-740 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-13-3333-226 {
  background-image: linear-gradient(
    transparent 13.3333%,
    #eeeeee 0%,
    #eeeeee 86.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-14-2857-912 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: absolute !important;
}
.sk-text-14-2857-718 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-824 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-258 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-705 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-791 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-text-14-2857-193 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-854 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-14-2857-26 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-0-0000-860 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
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
