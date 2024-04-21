<template>
  <fieldset class="fieldset border border-grey rounded-lg" :class="classes">
    <legend class="ml-3 rounded-[30px] text-grey-firm text-caption-bold"
      :class="{ 'bg-white': mode !== 'dark', 'bg-[617398]': mode === 'dark', 'text-white': mode === 'dark' }">
      <slot name="legend">Field</slot>
    </legend>

    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
interface IProps {
  classes?: string;
  mode?: 'dark' | 'light';
}

defineProps<IProps>();
</script>