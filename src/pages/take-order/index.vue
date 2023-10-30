<template>
  <view class="take-container">
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="2000"
      :duration="1000"
    >
      <swiper-item class="swiper" v-for="(url, index) in swiperItems">
        <img class="swiper-img" :src="url" alt="swiper" :key="index" />
      </swiper-item>
    </swiper>

    <view class="selector">
      <view v-for="(item, index) in rangeItems" class="selector-range">
        <uni-data-select
          v-model="item.value"
          :clear="false"
          :localdata="item.data"
          :key="index"
        />
      </view>
      <button size="mini" class="selector-btn">找队友</button>
    </view>

    <view class="tag">
      <uni-data-checkbox
        mode="button"
        multiple
        v-model="tagVal"
        :localdata="[{ text: '优选订单', value: 0 }]"
      />
      <button size="mini" class="tag-btn">全胜订单</button>
      <button size="mini" class="tag-btn">发单者推荐</button>
      <button size="mini" class="tag-btn">已被抢</button>
    </view>

    <Order v-for="(order, index) in orders" :order="order" :key="index" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ISelectorRangeItem } from './type';
import Order from './components/order/index.vue';
import { EOrderType, type IOrderItem } from './components/order/type';

/**
 * swiper
 */
const swiperItems = ref<string[]>([
  '/static/image/swiper/1.jpg',
  '/static/image/swiper/2.jpg',
  '/static/image/swiper/3.jpg',
  '/static/image/swiper/4.jpg',
]);

/**
 * selector
 */
const platforms: ISelectorRangeItem[] = ['安卓', 'ios'].map((text, index) => ({
  value: index,
  text,
}));
const sorts: ISelectorRangeItem[] = ['从早到晚', '从高到低'].map(
  (text, index) => ({ value: index, text }),
);
const platformVal = ref(0);
const sortVal = ref(0);

const rangeItems = ref([
  { value: platformVal, data: platforms },
  { value: sortVal, data: sorts },
]);

/**
 * tag
 */
const tagVal = ref(0);

/**
 * order
 */
const orders = ref<IOrderItem[]>([
  {
    type: EOrderType.PUBLIC,
    title: '代练单子',
    gameText: '默认游戏',
    gameOrigin: '安卓WX-默认服',
    price: '432.00',
    securityDeposit: '32',
    timeLitmit: '2',
    publisher: '高手 ljf',
  },
  {
    type: EOrderType.PARTNER_TRANING,
    title: '代练单子ljfljf',
    gameText: '默认游戏',
    gameOrigin: '安卓WX-默认服',
    price: '452.00',
    securityDeposit: '12',
    timeLitmit: '1',
    publisher: '高手 ljf',
  },
  {
    type: EOrderType.PUBLIC,
    title: '代练单子',
    gameText: '默认游戏',
    gameOrigin: '安卓WX-默认服',
    price: '432.00',
    securityDeposit: '32',
    timeLitmit: '2',
    publisher: '高手 ljf',
  },
  {
    type: EOrderType.PUBLIC,
    title: '代练单子',
    gameText: '默认游戏',
    gameOrigin: '安卓WX-默认服',
    price: '432.00',
    securityDeposit: '32',
    timeLitmit: '2',
    publisher: '高手 ljf',
  },
]);
</script>

<style lang="scss" scoped>
.take-container {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  .swiper {
    margin-top: 10px;
    height: 200px;
    .swiper-img {
      width: 100%;
    }
  }

  .selector {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin-top: 15px;

    .selector-range {
      width: 25%;
      margin-right: 15px;
    }

    .selector-btn {
      background: linear-gradient(to right, #72e4fc, #4187f9);
      border-radius: 5%;
      width: 80px;
      height: 30px;
      color: white;
      font-weight: 600;
    }
  }

  .tag {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .tag-btn {
      height: 30px;
      color: gray;
    }
  }
}

::v-deep .uni-select {
  border: 0;
}
</style>
