<template>
  <div class="flex w-full max-w-40 h-[60px] rounded-xl bg-black relative overflow-hidden transition-all"
    :class="{ 'flickering': isFlickering }">
    <div :class="`h-full ${mode === 'dark' ? 'bg-blue' : 'bg-green'} rounded-xl transition-all`" :style="{ width: `${currentWidth}%` }"></div>
    <span class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ displayTime }}</span>
  </div>
</template>

<script setup lang="ts">
interface IEmit {
  (e: 'timeout'): void;
}

interface IProps {
  mode?: 'dark' | 'light';
}

const emit = defineEmits<IEmit>();
defineProps<IProps>();

const duration = 1000;
const currentTime = ref(180000);
const isTimeout = ref(false);
const displayTime = computed(() => {
  const totalSeconds = Math.floor(currentTime.value / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalMinutes % 60);

  return `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
});
const isFlickering = computed(() => {
  return currentTime.value <= 10000 && currentTime.value !== 0;
});
const currentWidth = computed(() => {
  const initialTime = 180000;

  return Math.floor((currentTime.value / initialTime) * 100);
})

function countDown() {
  const interval = setInterval(() => {
    const newCurrentTime = currentTime.value - duration;

    if (newCurrentTime < 0) {
      clearInterval(interval);
      isTimeout.value = true;
      return;
    }

    currentTime.value = newCurrentTime;
    LSsset('currentTime', newCurrentTime);
  }, duration)
}

onMounted(() => {
  const savedTime = LSget('currentTime');

  if (savedTime !== null) {
    currentTime.value = parseInt(savedTime);

    if (currentTime.value > 0) {
      countDown();
    }

    isTimeout.value = true;
    return;
  }

  countDown();
})

watch(isTimeout, (newValue) => {
  if (newValue) {
    emit('timeout');
  }
})
</script>

<style lang="scss" scoped>
.flickering {
  box-shadow: 0px 0px 6px 0px #FF0000CC;
  border: 2px solid #FF0000;
}
</style>