<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
//获取code登录凭证

let code = ''
onLoad(async () => {
  const res = await wx.login()
  code = res.code
  isFinish.value = true
})

//获取用户手机号 (企业中的写法)
import { postLoginWxMin, postLoginWxMinSimpleAPI } from '@/services/login'
const ongetphonenumber: UniHelper.ButtonOnGetphonenumber = async (e) => {
  const encryptedData = e.detail!.encryptedData!
  const iv = e.detail!.iv!
  const res = await postLoginWxMin({ code, encryptedData, iv })
  //阻止

  // 成功提示
  uni.showToast({ icon: 'none', title: '登录成功' })
}

// 模拟登录
const testLogin = async () => {
  const telephone = '17624587852'
  const res = await postLoginWxMinSimpleAPI(telephone)
  loginSuccess(res.result)
}

//储存信息
import type { LoginResult } from '@/types/member'
import { useMemberStore } from '../../stores/modules/member'
const loginSuccess = (profile: LoginResult) => {
  const memberStore = useMemberStore()
  memberStore.setProfile(profile)
  uni.showToast({ icon: 'none', title: '登录成功' })
  //跳转首页 加一个定时器效果更好
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 200)
}
//骨架屏
import LoginSkeleton from './components/LoginSkeleton.vue'
import { ref } from 'vue'
const isFinish = ref(false)
</script>

<template>
  <view class="viewport" v-if="isFinish">
    <view class="logo">
      <image src="../../static/images/logo_icon.png" style="width: 400rpx; height: 400rpx"></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <!-- #ifdef H5 -->
      <input class="input" type="text" placeholder="请输入用户名/手机号码" />
      <input class="input" type="text" password placeholder="请输入密码" />
      <button class="button phone">登录</button>
      <!-- #endif -->

      <!-- 小程序端授权登录 -->
      <!-- #ifdef MP-WEIXIN -->
      <button class="button phone" open-type="getPhoneNumber" @getphonenumber="ongetphonenumber">
        <text class="icon icon-phone"></text>
        手机号快捷登录
      </button>
      <!-- #endif -->

      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button @tap="testLogin">
            <text class="icon icon-phone">模拟快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips">登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view>
    </view>
  </view>

  <LoginSkeleton v-else></LoginSkeleton>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    width: 220rpx;
    height: 220rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #28bb9c;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      button {
        padding: 0;
        background-color: transparent;
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
}
</style>
