<template>
  <header class="flex md:px-[135px] mb-6 items-center gap-2 px-5 py-2 text-blue">
    <Logo class="logo" :filled="true" />
    <span class="text-heading-2">
      <span>Smart</span>
      <span class="text-white">Study</span>
    </span>
  </header>
  <main class="mx-auto px-5 py-6 md:px-0 md:max-w-[80%] lg:max-w-[65%] md:flex md:gap-6">
    <div
      class="flex justify-center items-center gap-2 bg-[#00000099] md:hidden py-3 px-4 rounded-xl border mb-6 w-full ">
      <div class="flex flex-col gap-2 flex-1" :class="{ 'text-center': !showTimer }">
        <h3 class="text-lg font-extrabold text-light-blue">
          3-day trial for $0.99
        </h3>
        <div v-if="showTimer">
          <p class="text-body">Then $9.99</p>
          <span class="text-black relative after:left-0 opacity-40 line-through">$39.99/week
          </span>
        </div>
        <div v-else class="text-body text-white">
          Then $39.99/week
        </div>
      </div>
      <Timer v-if="showTimer" class="flex-1" @timeout="toggleTimer" />
    </div>

    <div class="md:w-1/2 hidden md:block">
      <div class="flex flex-col mb-8 gap-4">
        <h1 class="text-heading-2 text-white uppercase"><span class="text-blue">Start</span> your learning journey <span
            class="text-blue">now</span></h1>
        <p class="text-heading-2 text-white">Get a <span class="font-bold"><span
              class="text-blue">Smart</span>Study</span>
          plan
          to rock self-learning</p>
      </div>

      <Button :classes="'mb-8 dark'" @click="openModal">
        <template #default>
          <span class="text-body-bold">Get my plan</span>
        </template>
      </Button>
    </div>

    <div
      class="md:w-1/2 p-4 rounded-xl md:backdrop-blur-sm md:border-4 md:border-[#FFFFFF66] md:relative bg-[#00000066] md:px-6 md:py-9">
      <Rocket class="hidden md:block absolute top-1/2 -translate-y-1/2 -right-36 w-[247px] h-[247px]" :filled="true"
        :fontControlled="false" />
      <Ball class="hidden md:block absolute -top-[43px] -left-[60px] -z-10 w-[86px] h-[86px]" :filled="true"
        :fontControlled="false" />
      <div class="hidden items-center gap-3 md:flex py-3 px-4 mb-6 w-full ">
        <div class="flex flex-col gap-2 flex-1">
          <h3 class="text-lg md:text-heading-3 font-extrabold text-blue">
            3-day trial for $0.99
          </h3>
          <div v-if="showTimer">
            <p class="text-body md:text-xl text-white">Then $9.99</p>
            <span class="text-black relative after:left-0 opacity-40 line-through">$39.99/week
            </span>
          </div>
          <p v-else class="text-body text-white">
            Then $39.99/week
          </p>
        </div>
        <Timer v-if="showTimer" class="flex-1" @timeout="toggleTimer" />
      </div>

      <div class="md:w-1/2 md:hidden">
        <div class="flex flex-col mb-8 gap-4">
          <h1 class="text-heading-2 text-white uppercase"><span class="text-blue">Start</span> your learning journey
            <span class="text-blue">now</span></h1>
          <p class="text-heading-2 text-white">Get a <span class="font-bold"><span
                class="text-blue">Smart</span>Study</span>
            plan
            to rock self-learning</p>
        </div>

        <Button :classes="'mb-8 dark'" @click="openModal">
          <template #default>
            <span class="text-body-bold">Get my plan</span>
          </template>
        </Button>
      </div>

      <StaredList :options="STAR_OPTIONS" :star-color="'blue'" class="mb-8 text-white"></StaredList>
      <div
        class="flex gap-1 mb-6 justify-center items-center text-light-blue bg-[#00000033] rounded-xl pt-5 pb-5 w-full">
        <LockClosed class="text-light-blue" />
        <span class="text-body-bold text-light-blue font-semibold">Safe & secure payment</span>
      </div>
      <p class="text-white opacity-50 text-caption">
        $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
        automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
        continuing,
        you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and
        Subscription
        Terms .
      </p>
    </div>
    <Modal :mode="'dark'" :classes="'bg-dark-disabled'" :is-open="isModalOpen" @close="closeModal">
      <template #body>
        <div>
          <Button :classes="'bg-paypal hover:bg-paypal-hover mb-4 max-w-none'">
            <template #icon>
              <PayPal :filled="true" :fontControlled="false" class="w-[50px] h-[32px]" />
            </template>
            <template #default>
              <span class="uppercase text-black text-body-bold">Buy now</span>
            </template>
          </Button>
          <Button :classes="'bg-white max-w-none google-pay border mb-4 border-light-grey hover:bg-black text-black'">
            <template #icon>
              <GooglePay :filled="true" />
            </template>
            <template #default>
              <span class="uppercase text-body-bold">pay</span>
            </template>
          </Button>

          <div class="relative h-[2px] w-full bg-[#FFFFFF33] mb-4">
            <span
              class="absolute flex text-white bg-[#4D5E82] text-caption-bold px-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">or</span>
          </div>
          <Fieldset :mode="'dark'" class="mb-[30px] bg-[#617398] relative">
            <template #legend>Card number</template>
            <template #default>
              <Input type="card-number" class="bg-[#617398]" @input="(text) => cardNumber = text" />
              <MasterCard :filled="true" :fontControlled="false"
                class="absolute w-[32px] h-[22px] right-3 top-1/2 -translate-y-1/2" />
            </template>
          </Fieldset>
          <div class="flex gap-2.5">
            <Fieldset :mode="'dark'" class="w-1/3 bg-[#617398]">
              <template #legend>Month</template>
              <template #default>
                <Select :mode="'dark'" :options="months" @selected="handleMonthSelect"></Select>
              </template>
            </Fieldset>
            <Fieldset :mode="'dark'" class="w-1/3 bg-[#617398]">
              <template #legend?>Year</template>
              <template #default>
                <Select :mode="'dark'" :options="years" class="bg-[#617398]" @selected="handleYearSelect"></Select>
              </template>
            </Fieldset>
            <Fieldset :mode="'dark'" class="w-1/3 bg-[#617398]">
              <template #legend>CVV</template>
              <template #default>
                <Input type="cvv" @input="(text) => CVV = text" class="bg-[#617398]" />
              </template>
            </Fieldset>
          </div>

        </div>
      </template>

      <template #controls>
        <Button :is-disabled="isDisabledSubmit" :classes="'mb-3 dark'">
          <template #default>
            <span class="text-body-bold">Submit</span>
          </template>
        </Button>
        <Button :classes="'bg-none bg-transparent hover:bg-transparent'" @click="closeModal">
          <template #default>
            <span class="text-white text-body-bold">Close</span>
          </template>
        </Button>
      </template>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import LockClosed from '~/public/assets/svg/lock-closed.svg';
import Logo from '~/public/assets/svg/logo-var2.svg';
import PayPal from '~/public/assets/svg/paypal.svg';
import GooglePay from '~/public/assets/svg/googlepay.svg';
import MasterCard from '~/public/assets/svg/mastercard.svg';
import Rocket from '~/public/assets/svg/rocket.svg';
import Ball from '~/public/assets/svg/Ball.svg';

type OptionItem = { value: string, [key: string]: any, isSelected: boolean }

const showTimer = ref(true);
const isModalOpen = ref(false);
const years = reactive([
  { value: '2030', isSelected: false },
  { value: '2029', isSelected: false },
  { value: '2028', isSelected: false },
  { value: '2027', isSelected: false },
  { value: '2026', isSelected: false },
  { value: '2025', isSelected: false },
  { value: '2024', isSelected: false },
])
const months = reactive([
  { value: 'January', isSelected: false },
  { value: 'February', isSelected: false },
  { value: 'March', isSelected: false },
  { value: 'April', isSelected: false },
  { value: 'May', isSelected: false },
  { value: 'June', isSelected: false },
  { value: 'July', isSelected: false },
  { value: 'August', isSelected: false },
  { value: 'September', isSelected: false },
  { value: 'October', isSelected: false },
  { value: 'November', isSelected: false },
  { value: 'December', isSelected: false },
]);
const selectedMonth = computed(() => {
  return months.find(month => month.isSelected);
})
const selectedYear = computed(() => {
  return years.find(year => year.isSelected);
})
const isDisabledSubmit = computed(() => {
  if (!selectedMonth.value || !selectedYear.value || !cardNumber.value || !CVV.value) {
    return true;
  }

  if (cardNumber.value.length !== 20) {
    return true;
  }

  if (CVV.value.length !== 3) {
    return true;
  }

  return false;
});
const cardNumber = ref('');
const CVV = ref('');
const STAR_OPTIONS = [
  '<span class="text-blue">Exclusive access to <b class="text-body-bold">350+</b> learning programs</span>',
  'Personalized course plan',
  'Comfy learning schedule made by you',
  '<span class="text-blue"><b class="text-body-bold">24/7</b> tutor support in a secure chat</span>',
  'Lifetime access to materials',
]
useHead({
  title: 'SmartStudy',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/images/logo_dark.png'
    }
  ],
  bodyAttrs: {
    class: 'dark',
  },
});

function toggleTimer() {
  showTimer.value = !showTimer.value;
}
function openModal() {
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}
function handleYearSelect(option: OptionItem) {
  years.forEach((_, index, array) => {
    array[index].isSelected = false;
  });

  const optionIndex = years.findIndex(opt => opt.value === option.value);

  if (optionIndex !== -1) {
    years[optionIndex].isSelected = !years[optionIndex].isSelected;
  }
}

function handleMonthSelect(option: OptionItem) {
  months.forEach((_, index, array) => {
    array[index].isSelected = false;
  });

  const optionIndex = months.findIndex(opt => opt.value === option.value);

  if (optionIndex !== -1) {
    months[optionIndex].isSelected = !months[optionIndex].isSelected;
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
