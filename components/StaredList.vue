<template>
  <ul class="flex flex-col gap-4">
    <li v-for="option in sanitizedOptions" class="flex text-body items-center gap-3">
      <Star class="h-6 w-6" :filled="true" :fontControlled="false" />

      <span class="" v-html="option"></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Star from '~/public/assets/svg/star.svg';

interface IProps {
  options: string[];
}

const props = defineProps<IProps>();
const sanitizedOptions = computed(() => {
  return props.options.map(option => sanitize(option))
});
</script>