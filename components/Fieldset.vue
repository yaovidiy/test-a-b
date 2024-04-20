<template>
  <fieldset class="fieldset border border-grey rounded-lg" :class="classes">
    <legend class="bg-white ml-3 rounded-[30px] text-grey-firm text-caption-bold">
      <slot name="legend">Field</slot>
    </legend>

    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
interface IProps {
  classes?: string;
}

defineProps<IProps>();
</script>