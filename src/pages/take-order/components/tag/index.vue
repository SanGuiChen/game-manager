<template>
  <uni-tag :text="text" :custom-style="customStyle" size="mini"> </uni-tag>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const bgConstants: Record<string, string> = {
  primary: '#D7E4FD',
  warning: '#F6E6C1',
};

const textConstants: Record<string, string> = {
  primary: '#6083CA',
  warning: '#E59C81',
};

const { text, type } = defineProps({
  text: { type: String, default: 'primary' },
  type: { type: String, default: 'primary' },
});

const customStyle = ref<string>(
  `background-color: ${bgConstants[type]}; border-color: ${bgConstants[type]}; color: ${textConstants[type]};`,
);
</script>

<style scoped></style>
