<template>
  <template v-if="isDefaultComponent !== null">
    <component :is="isDefaultComponent ? ATest : BTest"></component>
  </template>
</template>

<script setup lang="ts">
import { ATest, BTest } from '#components';
const route = useRoute();
const isDefaultComponent = ref<boolean | null>(null);

onMounted(() => {
  if (!route.query.abtest) {
    isDefaultComponent.value = true;
    return;
  }

  if (route.query.abtest === 'var1') {
    isDefaultComponent.value = true;
    return;
  }

  if (route.query.abtest === 'var2') {
    isDefaultComponent.value = false;
    return;
  }

  const savedDesignOption = LSget('designOption');

  if (savedDesignOption !== null) {
    isDefaultComponent.value = savedDesignOption;
    return;
  }

  const randomResult = Math.round(Math.random()) > 0;
  LSsset('designOption', randomResult);

  isDefaultComponent.value = randomResult;
});
</script>
<style lang="scss"></style>