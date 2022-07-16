<template>
  <section class="support">
    <div class="container">
      <div class="support__inner">
        <h6 class="support__title title">
          {{ info.title }}
        </h6>
        <form class="support__form" @submit.prevent="copyWallet">
          <app-input
          ref="walletInput"
          :inputValue="info.wallet"
          ></app-input>
          <app-button
          :title="info.btnTitle"
          view="copy"
          btnType="submit"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.909 0L3.81805 0C2.61805 0 1.63623 0.981818 1.63623 2.18182L1.63623 17.4545H3.81805L3.81805 2.18182H16.909V0ZM20.1817 4.36364H8.18168C6.98168 4.36364 5.99987 5.34545 5.99987 6.54545V21.8182C5.99987 23.0182 6.98168 24 8.18168 24H20.1817C21.3817 24 22.3635 23.0182 22.3635 21.8182V6.54545C22.3635 5.34545 21.3817 4.36364 20.1817 4.36364ZM20.1817 21.8182H8.18168V6.54545H20.1817V21.8182Z" fill="white"/>
            </svg>
          </app-button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:{
        title: 'Support our project',
        btnTitle: 'Copy',
        wallet: '2qPiTAMwqzboSFn8GfWsedK5B5UFn8GfWsedK5Af',
      }
    }
  },
  methods: {
    copyWallet() {
      console.log(this.$refs.walletInput)
      // this.$refs.walletInput.focus()
    }
  },
}
</script>