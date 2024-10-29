<!--
此文件为开发者工具生成，生成时间: 2024/10/29下午8:45:18
使用方法：
在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\cart\cart.wxml 引入模板

```
<import src="cart.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\cart\cart.wxss 中引入样式
```
@import "./cart.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/cart/components/CartMain">
      <scroll-view
        scroll-y="true"
        class="scroll-view CartMain--scroll-view"
        enable-back-to-top="true"
      >
        <view class="cart-list CartMain--cart-list">
          <view class="tips CartMain--tips">
            <text class="label CartMain--label sk-transparent sk-text-0-0000-914 sk-text"
              >满减</text
            >
            <text class="desc CartMain--desc sk-transparent sk-text-0-0000-83 sk-text"
              >满1件, 即可享受9折优惠</text
            >
          </view>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action">
            <view>
              <view
                is="node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item"
                class="cart-swipe CartMain--cart-swipe"
              >
                <view class="uni-swipe item--uni-swipe">
                  <view
                    class="uni-swipe_box item--uni-swipe_box"
                    data-disabled="false"
                    data-threshold="20"
                  >
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--left item--button-group--left"
                    ></view>
                    <view class="uni-swipe_text--center item--uni-swipe_text--center">
                      <view class="goods CartMain--goods">
                        <text
                          class="checkbox CartMain--checkbox checked CartMain--checked sk-pseudo sk-pseudo-circle"
                        ></text>
                        <navigator class="navigator CartMain--navigator" hover-class="none">
                          <image
                            class="picture CartMain--picture sk-image"
                            mode="aspectFill"
                          ></image>
                          <view class="meta CartMain--meta">
                            <view
                              class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-232 sk-text"
                              >极光限定 珠光蓝珐琅锅</view
                            >
                            <view
                              class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-242 sk-text"
                              >蓝色， 中国， 10cm</view
                            >
                            <view
                              class="price CartMain--price sk-transparent sk-text-0-0000-773 sk-text sk-pseudo sk-pseudo-circle"
                              >166.00</view
                            >
                          </view>
                        </navigator>
                        <view class="count CartMain--count">
                          <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                            <view
                              class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                            >
                              <view
                                class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-165 sk-text"
                                  style="font-size: 18px"
                                  >－</view
                                >
                              </view>
                              <view
                                class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                                style="
                                  color: #323233;
                                  font-size: 13px;
                                  background: #ffffff;
                                  height: 26px;
                                  width: 41px;
                                "
                                type="number"
                                value="1"
                              ></view>
                              <view
                                class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-887 sk-text"
                                  style="font-size: 18px"
                                  >＋</view
                                >
                              </view>
                            </view>
                          </view>
                        </view>
                      </view>
                    </view>
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--right item--button-group--right"
                    >
                      <view class="cart-swipe-right CartMain--cart-swipe-right">
                        <button
                          class="button CartMain--button delete-button CartMain--delete-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
                        >
                          删除
                        </button>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view
                is="node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item"
                class="cart-swipe CartMain--cart-swipe"
              >
                <view class="uni-swipe item--uni-swipe">
                  <view
                    class="uni-swipe_box item--uni-swipe_box"
                    data-disabled="false"
                    data-threshold="20"
                  >
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--left item--button-group--left"
                    ></view>
                    <view class="uni-swipe_text--center item--uni-swipe_text--center">
                      <view class="goods CartMain--goods">
                        <text
                          class="checkbox CartMain--checkbox checked CartMain--checked sk-pseudo sk-pseudo-circle"
                        ></text>
                        <navigator class="navigator CartMain--navigator" hover-class="none">
                          <image
                            class="picture CartMain--picture sk-image"
                            mode="aspectFill"
                          ></image>
                          <view class="meta CartMain--meta">
                            <view
                              class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-185 sk-text"
                              >智利老牌名庄，梅洛干红750毫升</view
                            >
                            <view
                              class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-428 sk-text"
                              >智利梅洛干红2020750mL</view
                            >
                            <view
                              class="price CartMain--price sk-transparent sk-text-0-0000-103 sk-text sk-pseudo sk-pseudo-circle"
                              >98.00</view
                            >
                          </view>
                        </navigator>
                        <view class="count CartMain--count">
                          <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                            <view
                              class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                            >
                              <view
                                class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-222 sk-text"
                                  style="font-size: 18px"
                                  >－</view
                                >
                              </view>
                              <view
                                class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                                style="
                                  color: #323233;
                                  font-size: 13px;
                                  background: #ffffff;
                                  height: 26px;
                                  width: 41px;
                                "
                                type="number"
                                value="6"
                              ></view>
                              <view
                                class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-773 sk-text"
                                  style="font-size: 18px"
                                  >＋</view
                                >
                              </view>
                            </view>
                          </view>
                        </view>
                      </view>
                    </view>
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--right item--button-group--right"
                    >
                      <view class="cart-swipe-right CartMain--cart-swipe-right">
                        <button
                          class="button CartMain--button delete-button CartMain--delete-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
                        >
                          删除
                        </button>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view
                is="node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item"
                class="cart-swipe CartMain--cart-swipe"
              >
                <view class="uni-swipe item--uni-swipe">
                  <view
                    class="uni-swipe_box item--uni-swipe_box"
                    data-disabled="false"
                    data-threshold="20"
                  >
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--left item--button-group--left"
                    ></view>
                    <view class="uni-swipe_text--center item--uni-swipe_text--center">
                      <view class="goods CartMain--goods">
                        <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
                        <navigator class="navigator CartMain--navigator" hover-class="none">
                          <image
                            class="picture CartMain--picture sk-image"
                            mode="aspectFill"
                          ></image>
                          <view class="meta CartMain--meta">
                            <view
                              class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-919 sk-text"
                              >探险者黑胶防晒防雨遮阳伞户外钓鱼伞</view
                            >
                            <view
                              class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-99 sk-text"
                              >黑胶防晒钓鱼伞（2.6米）+暗月折叠椅</view
                            >
                            <view
                              class="price CartMain--price sk-transparent sk-text-0-0000-573 sk-text sk-pseudo sk-pseudo-circle"
                              >308.00</view
                            >
                          </view>
                        </navigator>
                        <view class="count CartMain--count">
                          <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                            <view
                              class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                            >
                              <view
                                class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-425 sk-text"
                                  style="font-size: 18px"
                                  >－</view
                                >
                              </view>
                              <view
                                class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                                style="
                                  color: #323233;
                                  font-size: 13px;
                                  background: #ffffff;
                                  height: 26px;
                                  width: 41px;
                                "
                                type="number"
                                value="1"
                              ></view>
                              <view
                                class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                                style="
                                  background: #ffffff;
                                  height: 26px;
                                  color: #323233;
                                  font-size: 13px;
                                  min-height: 1.4em;
                                "
                              >
                                <view
                                  class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-15-3846-253 sk-text"
                                  style="font-size: 18px"
                                  >＋</view
                                >
                              </view>
                            </view>
                          </view>
                        </view>
                      </view>
                    </view>
                    <view
                      class="uni-swipe_button-group item--uni-swipe_button-group button-group--right item--button-group--right"
                    >
                      <view class="cart-swipe-right CartMain--cart-swipe-right">
                        <button
                          class="button CartMain--button delete-button CartMain--delete-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
                        >
                          删除
                        </button>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="toolbar CartMain--toolbar">
          <text
            class="all CartMain--all sk-transparent sk-text-14-2857-955 sk-text sk-pseudo sk-pseudo-circle"
            >全选</text
          >
          <text class="text CartMain--text sk-transparent sk-text-14-2857-690 sk-text">合计:</text>
          <text
            class="amount CartMain--amount sk-transparent sk-text-14-2857-489 sk-text sk-pseudo sk-pseudo-circle"
            >754.00</text
          >
          <view class="button-grounp CartMain--button-grounp">
            <view
              class="button CartMain--button payment-button CartMain--payment-button sk-transparent sk-text-32-4324-896 sk-text"
              style="background-position-x: 50%"
            >
              去结算7</view
            >
          </view>
        </view>
        <view is="components/XtxGuess" class="r CartMain--r">
          <view class="caption XtxGuess--caption">
            <text
              class="text XtxGuess--text sk-transparent sk-text-0-0000-81 sk-text sk-pseudo sk-pseudo-circle"
              >猜你喜欢</text
            >
          </view>
          <view class="guess XtxGuess--guess">
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
              <view class="name XtxGuess--name sk-transparent sk-text-14-2857-614 sk-text"
                >强力除油污，萃取橙油精华app</view
              >
            </navigator>
            <navigator class="guess-item XtxGuess--guess-item">
              <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
              <view class="name XtxGuess--name sk-transparent sk-text-14-2857-193 sk-text"
                >哪里不适灸哪里，全身都可灸app</view
              >
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2024/10/29下午8:45:18

在 D:\uniapp-studay\wmujShop\dist\dev\mp-weixin\pages\cart\cart.wxss 中引入样式
```
@import "./cart.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-914 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-83 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-14-2857-232 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-242 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-0-0000-773 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-15-3846-165 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-15-3846-887 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-185 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-428 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-0-0000-103 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-15-3846-222 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-15-3846-773 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-919 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-99 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-0-0000-573 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-15-3846-425 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-15-3846-253 {
  background-image: linear-gradient(
    transparent 15.3846%,
    #eeeeee 0%,
    #eeeeee 84.6154%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-955 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-690 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-489 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.8462rpx;
  position: relative !important;
}
.sk-text-32-4324-896 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-text-0-0000-81 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-text-14-2857-614 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
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
