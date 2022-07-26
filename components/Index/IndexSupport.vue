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
          :value="info.wallet"
          isReadonly
          :view="isError ? 'error' : ''"
          ></app-input>
          <app-button
          :title="info.btnTitle"
          view="copy"
          btnType="submit"
          >
            <nuxt-img src="/copy-logo.svg" width="24" height="24" loading="lazy" alt="social graphic" />
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
      isError: false,
      info:{
        title: 'Support our project',
        btnTitle: 'Copy',
        wallet: '2qPiTAMwqzboSFn8GfWsedK5B5UFn8GfWsedK5Af',
      }
    }
  },
  methods: {
    async copyWallet() {
      try {
        await navigator.clipboard.writeText(this.info.wallet);
        this.$refs.walletInput.$el.children[0].focus()
      } catch($e) {
        this.isError = true
        this.$refs.walletInput.$el.children[0].focus()
      }
    },
  },
}
</script>