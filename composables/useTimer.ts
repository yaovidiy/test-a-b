export default function useTimer() {
  const showTimer = ref(true);

  const duration = 1000;
  const currentTime = ref(180000);
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
        showTimer.value = false;
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
        return;
      }

      showTimer.value = false;
      return;
    }

    countDown();
  });

  return {
    showTimer,
    displayTime,
    isFlickering,
    currentWidth,
  }
}