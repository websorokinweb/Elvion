<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__info">
          <h6 class="about__title title">
            {{ info.title }}
          </h6>
          <p class="about__descr">
            {{ info.descr }}
          </p>
        </div>
        <div class="about__imgwrapper">
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
        title: 'A little bit about our startup',
        descr: 'We are a team of creative people who want to create a modern, high-quality and interesting project. Our goal is to develop a full-fledged video game called "Legend of Elvion". The game will be in the genre of action-adventure with an open world and RPG elements. We also plan to link our game with the crypto world in order to remove the boundaries of virtual reality.',
        img: require('@/assets/images/temp/about-graphic.png'),
      } 
    }
  },
}
</script>