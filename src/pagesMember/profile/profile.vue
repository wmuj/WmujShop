<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//获取信息
import { getMemberProfileAPI } from '@/services/profile'
import { ref } from 'vue'
import type { Gender, ProfileDetail } from '@/types/member'
//store
import { useMemberStore } from '@/stores/modules/member'
const memberStore = useMemberStore()
//获取个人信息 保存到memberProfile 提供初始化数据
const memberProfile = ref({} as ProfileDetail)
const getMemberProfileData = async () => {
  const res = await getMemberProfileAPI()
  memberProfile.value = res.result
  // console.log(memberProfile.value)
}
//页面一加载就获取数据
import { onLoad } from '@dcloudio/uni-app'
onLoad(() => {
  getMemberProfileData()
  // console.log(123)
})

//修改头像
const onAvatarChange = () => {
  //调用拍照/从相册选
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    sizeType: ['compressed'],
    success: (res) => {
      // console.log(res)
      const { tempFilePath } = res.tempFiles[0]
      //文件上传
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (res) => {
          if (res.statusCode === 200) {
            //重新获取数据
            const avatar = JSON.parse(res.data).result.avatar
            memberProfile.value!.avatar = avatar
            uni.showToast({
              title: '头像修改成功',
              icon: 'success',
              mask: true,
            })
          } else {
            uni.showToast({
              title: '头像修改失败',
              icon: 'error',
              mask: true,
            })
          }
        },
      })
    },
  })
}

//修改个人信息
import { putMemberProfileAPI } from '@/services/profile'
const onSubmit = async () => {
  const { nickname, gender, birthday, profession } = memberProfile.value
  // console.log(nickname, gender, birthday, profession)
  const res = await putMemberProfileAPI({
    nickname,
    gender,
    birthday,
    profession,
    provinceCode: fullLocationCode[0] || undefined,
    cityCode: fullLocationCode[1] || undefined,
    countyCode: fullLocationCode[2] || undefined,
  })
  memberStore.profile!.nickname = res.result.nickname
  uni.showToast({
    title: '保存成功',
    icon: 'success',
    mask: true,
  })
  //返回上一级
  setTimeout(() => {
    uni.navigateBack()
  }, 200)
}
//修改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  memberProfile.value.gender = ev.detail.value as Gender
}
//修改生日
const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  memberProfile.value.birthday = ev.detail.value
}
//修改城市
let fullLocationCode: [string | undefined, string | undefined, string | undefined] = ['', '', '']
const onFullLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  memberProfile.value.fullLocation = ev.detail.value.join(' ')
  fullLocationCode = ev.detail.code!
}
</script>
<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <image class="image" :src="memberProfile.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ memberProfile.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请填写昵称"
            v-model="memberProfile.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="memberProfile.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="memberProfile.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="memberProfile.birthday"
            @change="onBirthdayChange"
          >
            <view v-if="memberProfile.birthday">{{ memberProfile.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            @change="onFullLocationChange"
            mode="region"
            :value="memberProfile.fullLocation?.split(' ')"
          >
            <view v-if="memberProfile.fullLocation">{{ memberProfile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            class="input"
            type="text"
            placeholder="请填写职业"
            v-model="memberProfile.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>
<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
