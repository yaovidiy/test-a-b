<template>
  <div class="flex w-full max-w-40 h-[60px] rounded-xl bg-black relative overflow-hidden transition-all"
    :class="{ 'flickering': isFlickering }">
    <div :class="`h-full ${mode === 'dark' ? 'bg-blue' : 'bg-green'} rounded-xl transition-all`"
      :style="{ width: `${currentWidth}%` }"></div>
    <span class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ displayTime }}</span>
  </div>
</template>

<script setup lang="ts">
interface IEmit {
  (e: 'timeout'): void;
}

interface IProps {
  mode?: 'dark' | 'light';
  displayTime: string;
  isFlickering: boolean;
  currentWidth: number;
}

const emit = defineEmits<IEmit>();
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.flickering {
  box-shadow: 0px 0px 6px 0px #FF0000CC;
  border: 2px solid #FF0000;
}
</style>