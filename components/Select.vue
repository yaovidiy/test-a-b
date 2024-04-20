<template>
  <div class="relative">
    <Button :classes="'flex justify-between items-center gap-5 bg-white hover:bg-white rounded-none select-btn'"
      @click="toggleSelect">
      <template #default>
        <slot>
          <span class="text-dark-grey">{{ selectedOption?.value ?? 'Select' }}</span>
        </slot>

        <ChevronDown class="transition-all chevron text-dark-grey" :class="{ opened: isOpened }" />
      </template>
    </Button>
    <Transition name="slide">
      <ul v-if="isOpened" class="flex flex-col rounded-lg border border-grey overflow-hidden select-list absolute top-full z-10">
        <li v-for="option in options" :key="option.value"
          class="bg-white cursor-pointer pl-4 pr-2 border-b last:border-b-0 border-grey pt-2 pb-2 select-list__option"
          :class="{ 'select-list__option--selected': option.isSelected }" @click="selectItem(option)">
          <button class="flex justify-between items-center gap-5">
            {{ option.value }}

            <CheckmarkSelected v-if="option.isSelected" />
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import ChevronDown from '~/public/assets/svg/chevron-down.svg';
import CheckmarkSelected from '~/public/assets/svg/checkmark-selected.svg';

type OptionItem = { value: string, [key: string]: any, isSelected: boolean }

interface IProps {
  options: OptionItem[];
}
interface IEmit {
  (e: 'selected', args: OptionItem): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const isOpened = ref(false);
const selectedOption = computed<OptionItem | null>(() => {
  const selectedOption = props.options.find(opt => opt.isSelected);

  if (!selectedOption) {
    return null;
  }

  return selectedOption;
});

function toggleSelect() {
  isOpened.value = !isOpened.value;
}

function selectItem(option: OptionItem) {
  emit('selected', option);
  toggleSelect();
}
</script>