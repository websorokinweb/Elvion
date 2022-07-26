<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__info">
          <h6 class="about__title title">
            {{ info.title }}
          </h6>
          <div class="about__descr">
            <p class="about__descr-paragraph"
            v-for="paragraph in info.descr"
            :key="paragraph"
            >
              {{ '&nbsp;' + paragraph }}
            </p>
          </div>
        </div>
        <div class="about__imgwrapper">
          <!-- <nuxt-img format="webp" :src="info.img" alt="about graphic" /> -->
          <nuxt-img format="webp" src="/temp/about-graphic.png" alt="about graphic" />
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
        title: 'A little bit about our startup',
        descr:[
          'We are a team of creative people who want to create a modern, high-quality and interesting project.',
          'Our goal is to develop a full-fledged video game called "Legend of Elvion". The game will be in the genre of action-adventure with an open world and RPG elements.',
          'We also plan to link our game with the crypto world in order to remove the boundaries of virtual reality.'
        ],
        // img: require('@/assets/images/temp/about-graphic.png'),
      } 
    }
  },
}
</script>