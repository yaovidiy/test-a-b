<template>
  <input :name="type" autocomplete="off" :type="inputType" :placeholder="placeholder"
    class="w-full min-h-[56px] outline-none pl-4" :class="additionalClasses" @focus="$emit('focus')"
    @blur="$emit('blur')" @input="handleInput" />
</template>

<script lang="ts" setup>
interface IProps {
  type: 'card-number' | 'cvv';
  additionalClasses?: string;
  placeholder?: string;
}

interface IEmit {
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'input', args: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const CARD_NUMBER_PATTERN = /^\d{0,16}$/g;
const CVV_PATTERN = /^\d{0,3}$/g;
const inputOldValue = ref<string>('');
const inputType = computed(() => {
  return props.type === 'card-number' ? 'text' : 'password';
});
const inputPattern = computed(() => {
  return props.type === 'card-number' ? CARD_NUMBER_PATTERN : CVV_PATTERN;
});
let timeout: ReturnType<typeof setTimeout> | null = null;

function handleInput(e: Event) {
  if (timeout) {
    clearTimeout(timeout);
  }

  const target = e.target as HTMLInputElement;
  const value = target.value;
  const unmaskedValue = unmask(value);

  if (!unmaskedValue.match(inputPattern.value)) {
    target.value = inputOldValue.value;
    emit('input', inputOldValue.value);

    return;
  }

  timeout = setTimeout(() => {
    const maskedValue = mask(unmaskedValue);

    inputOldValue.value = maskedValue;

    target.value = maskedValue;

    emit('input', maskedValue);
  }, 200)
}

function mask(cardNumber: string) {
  return cardNumber.split('').map((char, index) => {
    let res = char;
    if (index && (index + 1) % 4 === 0) {
      res += props.type === 'card-number' ? ' ' : '';
    }

    return res;
  }).join('');
}

function unmask(cardNumber: string) {
  return cardNumber.split(' ').join('');
}
</script>