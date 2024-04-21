<template>
  <component :is="isDefaultComponent ? ATest : BTest"></component>
</template>

<script setup lang="ts">
import { ATest, BTest } from '#components';
const route = useRoute();

const isDefaultComponent = computed(() => {
  if (!route.query.abtest) {
    return true;
  }

  if (route.query.abtest === 'var1') {
    return true;
  }

  if (route.query.abtest === 'var2') {
    return false;
  }

  return Math.random() === 1;
});
</script>
<style lang="scss"></style>