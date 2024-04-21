<template>
  <ul class="flex flex-col gap-4">
    <li v-for="option in sanitizedOptions" class="flex text-body items-center gap-3">
      <Star class="h-6 w-6" :class="starColorClasses" :fontControlled="false" />

      <span class="" v-html="option"></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Star from '~/public/assets/svg/star.svg';

interface IProps {
  options: string[];
  starColor?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  starColor: 'primary'
});
const sanitizedOptions = computed(() => {
  return props.options.map(option => sanitize(option))
});
const starColorClasses = computed(() => {
  return {
    [`text-${props.starColor}`]: props.starColor
  }
});
</script>