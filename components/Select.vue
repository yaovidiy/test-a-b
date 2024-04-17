<template>
  <div class="flex justify-between items-center gap-5 cursor-pointer">
    <slot>
      <span>Select</span>
    </slot>

    <ChevronDown />
  </div>
</template>

<script lang="ts" setup>
import ChevronDown from '~/public/assets/svg/chevron-down.svg';
interface IProps {
  options: { value: string, [key: string]: any }[]
}

defineProps<IProps>();
</script>