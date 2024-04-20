<template>
  <fieldset class="fieldset border border-grey rounded-lg">
    <legend class="bg-white ml-3 rounded-[30px] text-grey-firm">
      <slot name="legend">Field</slot>
    </legend>

    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
</script>