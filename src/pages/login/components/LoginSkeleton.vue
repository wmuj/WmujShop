<!--
此文件为开发者工具生成，生成时间: 2024/10/29上午9:59:04
使用方法：
在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\login\login.wxml 引入模板

```
<import src="login.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\login\login.wxss 中引入样式
```
@import "./login.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="logo logo">
        <image class="sk-image"></image>
      </view>
      <view class="login login">
        <button
          class="button phone sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="getPhoneNumber"
        >
          <text class="icon icon-phone sk-pseudo sk-pseudo-circle"></text> 手机号快捷登录
        </button>
        <view class="extra extra">
          <view class="caption caption">
            <text class="sk-transparent sk-text-0-0000-938 sk-text">其他登录方式</text>
          </view>
          <view class="options options">
            <button class="sk-button sk-pseudo sk-pseudo-circle">
              <text
                class="icon icon-phone sk-transparent sk-text-30-4348-218 sk-text sk-pseudo sk-pseudo-circle"
                >模拟快捷登录</text
              >
            </button>
          </view>
        </view>
        <view
          class="tips sk-transparent sk-text-14-2857-503 sk-text"
          style="background-position-x: 50%"
          >登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view
        >
      </view>
    </view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2024/10/29上午9:59:04

在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\login\login.wxss 中引入样式
```
@import "./login.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-938 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: absolute !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-30-4348-218 {
  background-image: linear-gradient(
    transparent 30.4348%,
    #eeeeee 0%,
    #eeeeee 69.5652%,
    transparent 0%
  ) !important;
  background-size: 100% 58.9744rpx;
  position: relative !important;
}
.sk-text-14-2857-503 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: absolute !important;
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
