<template>
  <section class="support">
    <div class="container">
      <div class="support__inner">
        <h6 class="support__title title">
          {{ info.title }}
        </h6>
        <form class="support__form">
          <app-input
          
          ></app-input>
          <app-button
          :title="info.btnTitle"
          view="copy"
          ></app-button>
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
      }
    }
  },
}
</script>