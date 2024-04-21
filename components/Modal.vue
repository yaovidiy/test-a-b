<template>
  <Teleport :to="'body'">
    <template v-if="isOpen">
      <div class="w-screen fixed top-0 left-0 h-screen bg-black opacity-20 z-10" @click="$emit('close')"></div>
      <div
        class="fixed max-w-[90vw] w-[400px] z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-6 px-4 rounded-xl"
        :class="mainClasses">
        <div class="text-xl max-w text-center font-extrabold mb-6">
          <slot name="title">
            <h2>Payment method</h2>
          </slot>
        </div>

        <div class="mb-10">
          <slot name="body">
          </slot>
        </div>

        <div class="max-w-[300px] mx-auto">
          <slot name="controls">
            <Button :is-disabled="true" :classes="'mb-3'">
              <template #default>
                <span class="text-body-bold">Submit</span>
              </template>
            </Button>
            <Button :classes="'bg-none bg-transparent hover:bg-transparent'" @click="$emit('close')">
              <template #default>
                <span class="text-black text-body-bold opacity-40">Close</span>
              </template>
            </Button>
          </slot>
        </div>
      </div>
    </template>

  </Teleport>
</template>

<script lang="ts" setup>
interface IProps {
  isOpen: boolean;
  mode?: 'dark' | 'light';
}
interface IEmit {
  (e: 'close'): void;
}


const props = defineProps<IProps>();
defineEmits<IEmit>();
const mainClasses = computed(() => {
  return {
    ['bg-white']: props.mode === 'light',
    ['bg-[#4D5E82]']: props.mode === 'dark',
    ['text-white']: props.mode === 'dark',
  }
});
</script>