<template>
  <header class="flex mb-6 items-center gap-2 px-5 py-2 text-primary">
    <Logo class="logo" :filled="true" />
    <span class="text-heading-2">
      <span>Planet</span>
      <span class="text-black">Learn</span>
    </span>
  </header>
  <main class="mx-auto px-5 py-6">
    <div class="flex items-center gap-3 bg-white lg:hidden py-3 px-4 rounded-xl border mb-6 border-light-grey w-full ">
      <div class="flex flex-col gap-2 flex-1">
        <h3 class="text-lg font-extrabold">
          3-day trial for <span class="text-primary">$0.99</span>
        </h3>
        <div class="flex flex-col">
          <p class="text-body">Then $9.99</p>
          <span class="text-black relative after:left-0 opacity-40 line-through">$39.99/week
          </span>
        </div>
      </div>
      <Timer class="flex-1" />
    </div>

    <div class="flex flex-col mb-8 gap-4">
      <h1 class="text-heading-2">Start your learning journey now</h1>
      <p class="text-heading-2">Get a <span class="font-bold"><span class="text-primary">Planet</span>Learn</span> plan
        to rock self-learning</p>
    </div>

    <Button :classes="'mb-8'">
      <template #default>
        <span class="text-body-bold">Get my plan</span>
      </template>
    </Button>
    <StaredList :options="STAR_OPTIONS" class="mb-8"></StaredList>
    <div class="flex gap-1 mb-6 justify-center items-center text-green border border-g rey rounded-xl pt-5 pb-5 w-full">
      <LockClosed />
      <span class="text-body-bold text-green font-semibold">Safe & secure payment</span>
    </div>
    <p class="text-black opacity-50 text-caption">
      $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
      automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
      continuing,
      you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription
      Terms .
    </p>
  </main>
  {{ route.query.abtest }}
</template>

<script setup lang="ts">
import LockClosed from '~/public/assets/svg/lock-closed.svg';
import Logo from '~/public/assets/svg/logo.svg';
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
const STAR_OPTIONS = [
  'Exclusive access to <b class="text-primary text-body-bold">350+</b> learning programs',
  'Personalized course plan',
  'Comfy learning schedule made by you',
  '<b class="text-primary text-body-bold">24/7</b> tutor support in a secure chat',
  'Lifetime access to materials',
]
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

<style lang="scss" scoped>
.logo.nuxt-icon {
  width: 40px;
  height: 40px;

  path {
    fill: #000;
  }
}
</style>
