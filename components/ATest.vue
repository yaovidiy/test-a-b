<template>
  <header class="flex md:px-[135px] mb-6 items-center gap-2 px-5 py-2 text-primary">
    <Logo class="logo" :filled="true" />
    <span class="text-heading-2">
      <span>Planet</span>
      <span class="text-black">Learn</span>
    </span>
  </header>
  <main class="mx-auto px-5 py-6 md:px-0 md:max-w-[80%] lg:max-w-[65%] md:flex md:gap-6">
    <div
      class="flex justify-center items-center gap-2 bg-white md:hidden py-3 px-4 rounded-xl border mb-6 border-light-grey w-full ">
      <div class="flex flex-col gap-2 flex-1" :class="{ 'text-center': !showTimer }">
        <h3 class="text-lg font-extrabold">
          3-day trial for <span class="text-primary">$0.99</span>
        </h3>
        <div v-if="showTimer">
          <p class="text-body">Then $9.99</p>
          <span class="text-black relative after:left-0 opacity-40 line-through">$39.99/week
          </span>
        </div>
        <div v-else class="text-body">
          Then $39.99/week
        </div>
      </div>
      <Timer v-if="showTimer" class="flex-1" @timeout="toggleTimer" />
    </div>

    <div class="md:w-1/2">
      <div class="flex flex-col mb-8 gap-4">
        <h1 class="text-heading-2">Start your learning journey now</h1>
        <p class="text-heading-2">Get a <span class="font-bold"><span class="text-primary">Planet</span>Learn</span>
          plan
          to rock self-learning</p>
      </div>

      <Button :classes="'mb-8'" @click="openModal">
        <template #default>
          <span class="text-body-bold">Get my plan</span>
        </template>
      </Button>
    </div>

    <div class="md:w-1/2 md:rounded-xl md:border md:border-light-grey md:relative md:bg-white md:px-6 md:py-9">
      <Asteroid :filled="true" :fontControlled="false"
        class="w-[202px] h-20 absolute -top-[50px] right-6 hidden md:block" />
      <div class="hidden items-center gap-3 md:flex py-3 px-4 mb-6 w-full ">
        <div class="flex flex-col gap-2 flex-1">
          <h3 class="text-lg md:text-heading-3 font-extrabold">
            3-day trial for <span class="text-primary">$0.99</span>
          </h3>
          <div v-if="showTimer">
            <p class="text-body md:text-xl">Then $9.99</p>
            <span class="text-black relative after:left-0 opacity-40 line-through">$39.99/week
            </span>
          </div>
          <p v-else class="text-body">
            Then $39.99/week
          </p>
        </div>
        <Timer v-if="showTimer" class="flex-1" @timeout="toggleTimer" />
      </div>

      <StaredList :options="STAR_OPTIONS" class="mb-8"></StaredList>
      <div
        class="flex gap-1 mb-6 justify-center items-center text-green border border-g rey rounded-xl pt-5 pb-5 w-full">
        <LockClosed />
        <span class="text-body-bold text-green font-semibold">Safe & secure payment</span>
      </div>
      <p class="text-black opacity-50 text-caption">
        $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
        automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
        continuing,
        you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and
        Subscription
        Terms .
      </p>
    </div>
    <Modal :mode="'light'" :is-open="isModalOpen" @close="closeModal">
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

          <div class="relative h-[2px] w-full bg-black opacity-10 mb-4">
            <span
              class="absolute flex bg-white text-caption-bold px-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">or</span>
          </div>
          <Fieldset class="mb-[30px] relative">
            <template #legend>Card number</template>
            <template #default>
              <Input type="card-number" @input="(text) => cardNumber = text" />
              <MasterCard :filled="true" :fontControlled="false"
                class="absolute w-[32px] h-[22px] right-3 top-1/2 -translate-y-1/2" />
            </template>
          </Fieldset>
          <div class="flex gap-2.5">
            <Fieldset class="w-1/3">
              <template #legend>Month</template>
              <template #default>
                <Select :mode="'light'" :options="months" @selected="handleMonthSelect"></Select>
              </template>
            </Fieldset>
            <Fieldset class="w-1/3">
              <template #legend?>Year</template>
              <template #default>
                <Select :mode="'light'" :options="years" @selected="handleYearSelect"></Select>
              </template>
            </Fieldset>
            <Fieldset class="w-1/3">
              <template #legend>CVV</template>
              <template #default>
                <Input type="cvv" @input="(text) => CVV = text" />
              </template>
            </Fieldset>
          </div>

        </div>
      </template>

      <template #controls>
        <Button :is-disabled="isDisabledSubmit" :classes="'mb-3'">
          <template #default>
            <span class="text-body-bold">Submit</span>
          </template>
        </Button>
        <Button :classes="'bg-none bg-transparent hover:bg-transparent'" @click="closeModal">
          <template #default>
            <span class="text-black text-body-bold opacity-40">Close</span>
          </template>
        </Button>
      </template>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import LockClosed from '~/public/assets/svg/lock-closed.svg';
import Logo from '~/public/assets/svg/logo.svg';
import Asteroid from '~/public/assets/svg/asteroid.svg';
import PayPal from '~/public/assets/svg/paypal.svg';
import GooglePay from '~/public/assets/svg/googlepay.svg';
import MasterCard from '~/public/assets/svg/mastercard.svg';


const showTimer = ref(true);
const cardNumber = ref('');
const CVV = ref('');

const {
  isModalOpen,
  years,
  months,
  isDisabledSubmit,
  openModal,
  closeModal,
  handleMonthSelect,
  handleYearSelect
} = useMainLogic(cardNumber, CVV);

const STAR_OPTIONS = [
  'Exclusive access to <b class="text-primary text-body-bold">350+</b> learning programs',
  'Personalized course plan',
  'Comfy learning schedule made by you',
  '<b class="text-primary text-body-bold">24/7</b> tutor support in a secure chat',
  'Lifetime access to materials',
]

useHead({
  title: 'PlanetLearn',
  bodyAttrs: {
    class: 'light',
  },
});

function toggleTimer() {
  showTimer.value = !showTimer.value;
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
