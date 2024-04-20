<template>
  <Teleport :to="'body'">
    <template v-if="isOpen">
      <div class="w-screen fixed top-0 left-0 h-screen bg-black opacity-20 z-10" @click="$emit('close')"></div>
      <div
        class="fixed max-w-[90vw] min-w-[400px] z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-6 px-4 bg-white rounded-xl">
        <div class="text-xl max-w text-center font-extrabold mb-6">
          <slot name="title">
            <h2>Payment method</h2>
          </slot>
        </div>

        <div class="mb-10">
          <slot name="body">
            <div>
              <Button :classes="'bg-paypal hover:bg-paypal-hover mb-4 max-w-none'">
                <template #icon>
                  <PayPal :filled="true" :fontControlled="false" class="w-[50px] h-[32px]" />
                </template>
                <template #default>
                  <span class="uppercase text-black text-body-bold">Buy now</span>
                </template>
              </Button>
              <Button
                :classes="'bg-white max-w-none google-pay border mb-4 border-light-grey hover:bg-black text-black'">
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

              <Fieldset class="mb-[30px]">
                <template #legend>Card number</template>
                <template #default>
                  <input type="text" name="cardNumber" id="cardNumber">
                </template>
              </Fieldset>
              <div class="flex gap-2.5">
                <Fieldset class="w-1/3">
                  <template #legend>Month</template>
                  <template #default>
                    <Select :options="[]"></Select>
                  </template>
                </Fieldset>
                <Fieldset class="w-1/3">
                  <template #legend?>Year</template>
                  <template #default>
                    <Select :options="[]"></Select>
                  </template>
                </Fieldset>
                <Fieldset class="w-1/3">
                  <template #legend>CVV</template>
                  <template #default>
                    <input type="text" />
                  </template>
                </Fieldset>
              </div>
            </div>
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
import PayPal from '~/public/assets/svg/paypal.svg';
import GooglePay from '~/public/assets/svg/googlepay.svg';

interface IProps {
  isOpen: boolean;
}
interface IEmit {
  (e: 'close'): void;
}

defineProps<IProps>();
defineEmits<IEmit>();
</script>