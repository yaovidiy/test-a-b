<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <Button :is-disabled="false" @click="alertMessage('clicked!')">
      <template #default>
        This is green button!
      </template>
    </Button>
  
    <Timer></Timer>
    <Select :options="options"></Select>
  </div>

  {{ route.query.abtest }}
</template>

<script setup lang="ts">
const route = useRoute();
const options = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '7' },
]
useHead({
  title: 'PlanetLearn'
});
function alertMessage(message: string) {
  alert(message);
}
</script>
