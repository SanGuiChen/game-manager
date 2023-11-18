<template>
  <view class="top-container">
    <text class="dailiantong-text"> 代练通 </text>

    <button
      class="top-button"
      open-type=""
      hover-class="button-hover"
      @click=""
    >
      <image
        class="top-button-image"
        src="../../static/image/add.png"
        mode="scaleToFill"
      />
      <text class="top-button-text">发布订单</text>
    </button>
  </view>

  <view>
    <text class="server-people-num">昨日累计服务99999人</text>
  </view>

  <view class="uni-margin-wrap">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="url in background">
        <view class="swiper-item-container">
          <image class="swiper-item-image" :src="url" mode="scaleToFill" />
        </view>
      </swiper-item>
    </swiper>
  </view>

  <view class="fuli-image-container">
    <image
      class="fuli-image"
      src="../../static/image/fuli.png"
      mode="scaleToFill"
    />
  </view>

  <view class="marquee_box">
    <image
      style="width: 20px; height: 20px; margin-top: 4px; margin-left: 15px"
      src="../../static/image/laba.png"
      mode="scaleToFill"
    />
    <view class="marquee-list" :class="{ 'marquee-top': animate }">
      <text
        class="marquee-list-item marquee-top"
        v-for="(item, index) in marqueeList"
        :key="index"
        >{{ marqueeList[index] }}</text
      >
    </view>
  </view>

  <view
    style="
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <text
      style="font-size: 16px; font-weight: bold; color: rgba(0, 102, 255, 0.89)"
      >托管发单 · 平台帮代练免沟通</text
    >
  </view>

  <view
    style="
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <text
      style="font-size: 14px; font-weight: bold; color: rgba(53, 57, 63, 0.577)"
      >—— 请您选择游戏 ——</text
    >
  </view>

  <view>
    <uni-section title="无边框带角标(4列)" type="line" padding>
      <uni-grid
        :column="4"
        :show-border="false"
        :square="false"
        @change="change"
      >
        <uni-grid-item
          v-for="(item, index) in list"
          :index="index"
          :key="index"
        >
          <view class="grid-item-box">
            <image
              v-if="index < 11"
              class="image"
              :src="item.url"
              mode="aspectFill"
            />
            <text v-if="index < 11" class="text">{{ item.text }}</text>
            <image
              v-if="index == 11"
              class="image"
              src="../../static/image/grid/more.png"
              mode="aspectFill"
            />
            <text v-if="index == 11" class="text">更多</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-section>
  </view>
</template>

<script>
import { ref } from 'vue';

import uniGrid from '@/pages/dispatch-order/component/uni-grid_1.4.0/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/pages/dispatch-order/component/uni-grid_1.4.0/components/uni-grid-item/uni-grid-item.vue';

export default {
  data() {
    return {
      dynamicList: [],
      list: [
        {
          url: '../../static/image/grid/c1.png',
          text: 'Grid 1',
        },
        {
          url: '../../static/image/grid/c2.png',
          text: 'Grid 2',
        },
        {
          url: '../../static/image/grid/c3.png',
          text: 'Grid 3',
        },
        {
          url: '../../static/image/grid/c4.png',
          text: 'Grid 4',
        },
        {
          url: '../../static/image/grid/c5.png',
          text: 'Grid 5',
        },
        {
          url: '../../static/image/grid/c6.png',
          text: 'Grid 6',
        },
        {
          url: '../../static/image/grid/c7.png',
          text: 'Grid 7',
        },
        {
          url: '../../static/image/grid/c8.png',
          text: 'Grid 8',
        },
        {
          url: '../../static/image/grid/c9.png',
          text: 'Grid 9',
        },
        {
          url: '../../static/image/grid/c1.png',
          text: 'Grid 10',
        },
        {
          url: '../../static/image/grid/c2.png',
          text: 'Grid 11',
        },
        {
          url: '../../static/image/grid/c3.png',
          text: 'Grid 12',
        },
        {
          url: '../../static/image/grid/more.png',
          text: '更多',
        },
      ],
      background: [
        '../../static/image/swiper/1.jpg',
        '../../static/image/swiper/2.jpg',
        '../../static/image/swiper/3.jpg',
      ],
      marqueeList: [
        '实例公告1实例公告1实例公告1实例公告1实例公告1实例公告1',
        '实例公告2实例公告2实例公告2实例公告2实例公告2实例公告2',
        '实例公告3实例公告3实例公告3实例公告3实例公告3实例公告3',
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  mounted() {
    setInterval(() => {
      // 开始执行动画，500ms后关闭动画，停留（5s - 500ms）的时间，再执行下一次的动画（animate这个变量控制动画执行还是不执行）
      this.animate = true;
      setTimeout(() => {
        // 动画开始执行同时，需要处理公告数组中的数据，将执行完动画的元素将其从数组的第一位放到最后一位，实现公告的循环轮播。
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);
    }, 5000); // 停留一段时间后来执行这个动画
  },
  methods: {
    change(e) {
      let { index } = e.detail;
      this.list[index].badge && this.list[index].badge++;

      uni.showToast({
        title: `点击第${index + 1}个宫格`,
        icon: 'none',
      });
    },
  },
  components: {
    uniGrid,
    uniGridItem,
  },
};
</script>

<style scoped>
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}
.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}
.info {
  position: absolute;
  right: 20rpx;
}
.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.swiper-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.swiper-item-image {
  width: 95%;
  height: 100%;
  border-radius: 5%;
}

.dailiantong-text {
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
}
.top-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.top-button {
  width: 125px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-top: 5px;
  background-color: rgba(0, 42, 255, 0.632);
}
.server-people-num {
  font-size: 14px;
  color: #212155;
  margin: 5px;
}
.top-button-text {
  font-size: 16px;
  color: azure;
}
.top-button-image {
  width: 20px;
  height: 20px;
  padding-top: 12px;
  padding-right: 5px;
}
.fuli-image-container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}
.fuli-image {
  width: 90%;
  height: 100%;
}
.marquee_box {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 27px;
  background: rgba(255, 254, 245, 0.6);
  border-radius: 27px;
}
.marquee-list {
  position: absolute;
  top: 0;
  left: 38px;
}
.marquee-list-item {
  height: 30px;
  line-height: 27px;
  font-size: 13px;
  color: #ee4f00;
  width: 275px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.marquee-top {
  transition: all 0.5s;
  margin-top: -30px;
}
</style>

<style lang="scss">
.image {
  width: 25px;
  height: 25px;
}

.text {
  font-size: 14px;
  margin-top: 5px;
}

.grid-item-box {
  flex: 1;
  // position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.grid-dot {
  position: absolute;
  top: 5px;
  right: 15px;
}

/* #ifdef H5 */
@media screen and (min-width: 768px) and (max-width: 1425px) {
  .swiper {
    height: 630px;
  }
}

@media screen and (min-width: 1425px) {
  .swiper {
    height: 830px;
  }
}

/* #endif */
</style>
