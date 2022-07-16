<template>
  <section class="character" id="development">
    <div class="container">
      <div class="character__inner">
        <div class="character__info">
          <h6 class="character__title title">
            {{ info.title }}
          </h6>
          <div class="character__descr">
            <p class="character__descr-paragraph"
            v-for="paragraph in info.descr"
            :key="paragraph"
            >
              {{ '&nbsp;' + paragraph }}
            </p>
          </div>
        </div>
        <div class="character__imgwrapper">
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
        title: 'Character development',
        descr: [
          'We are a team of creative people who want to create a modern, high-quality and interesting project.',
          'Our goal is to develop a full-fledged video game called "Legend of Elvion". The game will be in the genre of action-adventure with an open world and RPG elements.',
          'We also plan to link our game with the crypto world in order to remove the boundaries of virtual reality.'
        ],
        img: require('@/assets/images/temp/character-graphic.png'),
      } 
    }
  },
}
</script>