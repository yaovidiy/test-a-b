<template>
  <Button :is-disabled="true" @click="alertMessage('clicked!')">
    <template #default>
      This is green button!
    </template>
  </Button>

  {{ route.query }}
</template>

<script setup lang="ts">
const route = useRoute();
useHead({
  title: 'PlanetLearn'
});
function alertMessage(message: string) {
  alert(message);
}
</script>
