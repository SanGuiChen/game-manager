<template>
  <view class="order">
    <view class="title">
      <view class="title-tag">
        <Tag
          :text="order.type === EOrderType.PUBLIC ? '公共' : '陪练'"
          :type="order.type === EOrderType.PUBLIC ? 'primary' : 'warning'"
        />
      </view>
      <view class="title-content">
        {{ order.title }}
      </view>
    </view>

    <view class="info">
      <text class="info-text"
        >{{ order.gameText }} | {{ order.gameOrigin }}</text
      >
      <text class="info-price">￥{{ order.price }} </text>
    </view>

    <view class="extra">
      <text>保证金：{{ order.securityDeposit }} 元</text>
      <text>时限：{{ order.timeLitmit }} 小时</text>
    </view>

    <view class="extra">
      <text>{{ order.publisher }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { EOrderType, type IOrderItem } from './type';
import Tag from '../tag/index.vue';

const { order } = defineProps({
  order: {
    type: Object,
    default: () =>
      ({
        type: EOrderType.PUBLIC,
        title: '代练单子',
        gameText: '默认游戏',
        gameOrigin: '安卓WX-默认服',
        price: '432.00',
        securityDeposit: '32',
        timeLitmit: '2',
        publisher: '高手 ljf',
      }) as IOrderItem,
  },
});
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  min-height: 100px;
  padding: 10px 10px;
  box-sizing: border-box;

  .title {
    // margin-top: 15px;
    display: flex;

    .title-tag {
      width: 40px;
      flex-shrink: 0;
    }

    .title-content {
      margin-left: 5px;
      font-size: 16px;
    }
  }

  .info {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;

    .info-text {
      color: #808080;
      font-size: 14px;
    }

    .info-price {
      color: #c05a5e;
      font-size: 16px;
    }
  }

  .extra {
    margin-top: 6px;
    color: #808080;
    font-size: 14px;
  }
}
</style>
