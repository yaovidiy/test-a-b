<template>
  <button
    class="btn w-full max-w-80 min-h-14 flex gap-2 items-center justify-center bg-black rounded-xl px-10 py-4 hover:bg-green text-white transition-all"
    :class="classes" :disabled="isDisabled">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  classes?: string;
  isDisabled?: boolean;
};

defineProps<IProps>();
</script>
