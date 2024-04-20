<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <Button :is-disabled="false" @click="alertMessage('clicked!')">
      <template #default>
        This is green button!
      </template>
    </Button>

    <Timer></Timer>
    <Select :options="options" @selected="handleSelect"></Select>
    <Fieldset>
      <template #legend>Year</template>
      <template #default>
        <Select :options="options" @selected="handleSelect"></Select>
      </template>
    </Fieldset>
  </div>

  {{ route.query.abtest }}
</template>

<script setup lang="ts">
type OptionItem = { value: string, [key: string]: any, isSelected: boolean }

const route = useRoute();
const options = reactive([
  { value: '1', isSelected: false },
  { value: '2', isSelected: false },
  { value: '3', isSelected: false },
  { value: '4', isSelected: false },
  { value: '5', isSelected: false },
  { value: '6', isSelected: false },
  { value: '7', isSelected: false },
])
useHead({
  title: 'PlanetLearn'
});
function alertMessage(message: string) {
  alert(message);
}
function handleSelect(option: OptionItem) {
  options.forEach((_, index, array) => {
    array[index].isSelected = false;
  });

  const optionIndex = options.findIndex(opt => opt.value === option.value);

  if (optionIndex !== -1) {
    options[optionIndex].isSelected = !options[optionIndex].isSelected;
  }
}
</script>
