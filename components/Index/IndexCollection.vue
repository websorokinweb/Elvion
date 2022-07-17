<template>
  <section class="collection" id="collection">
    <div class="container">
      <div class="collection__inner">
        <h6 class="roadmap__title title">
          {{ info.title }}        
        </h6>
        <p class="roadmap__descr">
          {{ info.descr }}        
        </p>
        <!-- <swiper
        :slides-per-view="5"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
          <swiper-slide
          v-for="item in info.items"
          :key="item.id"
          > 
            <img :src="item.img" alt="">
          </swiper-slide>
        </swiper> -->
      </div>
    </div>
  </section>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper-vue2'

// import 'swiper/swiper-bundle.min.css'

export default {
  data() {
    return {
      info:{
        title: 'NFT Collection',
        descr: ' We are a team of creative people who want to create a modern, high-quality and interesting project.',
        items:[
          {
            id: 0, 
            img: require('@/assets/images/temp/collection-1.jpg')
          },
          {
            id: 1, 
            img: require('@/assets/images/temp/collection-2.jpg')
          },
          {
            id: 2, 
            img: require('@/assets/images/temp/collection-3.jpg')
          },
          {
            id: 3, 
            img: require('@/assets/images/temp/collection-4.jpg')
          },
          {
            id: 4, 
            img: require('@/assets/images/temp/collection-5.jpg')
          },
          {
            id: 5, 
            img: require('@/assets/images/temp/collection-1.jpg')
          },
          {
            id: 6, 
            img: require('@/assets/images/temp/collection-2.jpg')
          },
          {
            id: 7, 
            img: require('@/assets/images/temp/collection-3.jpg')
          },
          {
            id: 8, 
            img: require('@/assets/images/temp/collection-4.jpg')
          },
          {
            id: 9, 
            img: require('@/assets/images/temp/collection-5.jpg')
          },
        ],
      },
    }
  },
  // methods: {
  //   onSwiper(swiper) {
  //     console.log(swiper);
  //   },
  //   onSlideChange() {
  //     console.log('slide change');
  //   },
  // },
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
}
</script>