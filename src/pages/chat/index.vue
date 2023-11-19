<template>
  <view style="display: flex; justify-content: center">
    <text>聊天室</text>
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
</style>
