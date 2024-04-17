<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <Button :is-disabled="false" @click="alertMessage('clicked!')">
      <template #default>
        This is green button!
      </template>
    </Button>
  
    <Timer></Timer>
  </div>

  {{ route.query.abtest }}
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
