<template>
  <section class="cover">
    <div class="container">
      <div class="cover__inner">
        <div class="cover__info">
          <p class="cover__title title title--main">
            {{ info.title }}
          </p>
          <p class="cover__descr">
            {{ info.descr }}
          </p>
          <button class="cover__btn" type='button'>
            {{ info.btnTitle }}
          </button>
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