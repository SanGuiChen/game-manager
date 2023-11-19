<template>
  <view style="display: flex; justify-content: center; width: 100%">
    <view class="top-content">
      <view style="width: 18px; height: 18px"></view>
      <text class="top-message-text">消息</text>
      <image
        style="width: 18px; height: 18px"
        src="../../static/image/setting.png"
        mode="scaleToFill"
      />
    </view>
  </view>

  <view style="display: flex; justify-content: center; width: 100%">
    <view class="message-icons">
      <view class="message-image-text">
        <image
          class="message-image-item"
          src="../../static/image/order_state.png"
          mode="scaleToFill"
        />
        <text class="message-text-item">订单状态</text>
      </view>

      <view class="message-image-text">
        <image
          class="message-image-item"
          src="../../static/image/system_message.png"
          mode="scaleToFill"
        />
        <text class="message-text-item">系统消息</text>
      </view>

      <view class="message-image-text">
        <image
          class="message-image-item"
          src="../../static/image/activity_center.png"
          mode="scaleToFill"
        />
        <text class="message-text-item">活动中心</text>
      </view>
    </view>
  </view>
</template>

<script scoped>
import { ref } from 'vue';

export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.top-content {
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 8px;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.top-message-text {
  font-size: 18px;
  font-weight: 550;
}

.message-icons {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 16px;
}
.message-images {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 16px;
}

.message-texts {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.message-image-item {
  width: 50px;
  height: 50px;
}
.message-text-item {
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
}
.message-image-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
