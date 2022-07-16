<template>
  <section class="cover">
    <div class="cover__graphic">
      <div class="cover__graphic-top">
        <img src="@/assets/images/corner.png" alt="corner graphic">
        <img src="@/assets/images/corner.png" alt="corner graphic">
      </div>
      <div class="cover__graphic-bottom">
        <img src="@/assets/images/corner.png" alt="corner graphic">
        <img src="@/assets/images/corner.png" alt="corner graphic">
      </div>
    </div>
    <div class="container">
      <div class="cover__inner">
        <div class="cover__info">
          <!-- <img src="@/assets/images/cloud-graphic.png" alt="cloud graphic"> -->
          <p class="cover__title title title--main">
            {{ info.title }}
          </p>
          <p class="cover__descr">
            {{ info.descr }}
          </p>
          <app-button
          big
          :title="info.btnTitle"
          ></app-button>
        </div>
        <div class="cover__imgwrapper">
          <img :src="info.img" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:{
        title: 'Buy NFT and get Bonuses in the future.',
        descr: 'Buy NFT and get priority in the game x2, x5, x10 depending on the rarity of NFT.',
        btnTitle: 'Coming Soon',
        img: require('@/assets/images/temp/cover-graphic.png'),
      }
    }
  },
}
</script>