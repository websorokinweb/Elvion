<template>
  <section class="collection" id="collection">
    <div class="container">
      <div class="collection__inner">
        <h6 class="collection__title title title--wreath">
          {{ info.title }}        
        </h6>
        <p class="collection__descr">
          {{ info.descr }}        
        </p>
      </div>
    </div>
    <div class="collection__swiper-overwrapper">
      <div ref="swiper" class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide"
          v-for="item in info.items"
          :key="item.id"
          > 
            <img :src="item.img" alt="">
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
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
  </section>
</template>

<script>
import Swiper from 'swiper/js/swiper.esm.bundle';
import 'swiper/css/swiper.min.css'

export default {
  mounted() {
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      // modules: [Pagination],
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20,
        // },
        320: {
          slidesPerView: 1,
        },
        460: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // 1550: {
          
        // },
        // 480: {
          // slidesPerView: 3,
          // spaceBetween: 30
        // },
        // 640: {
          // slidesPerView: 4,
          // spaceBetween: 40
        // }
      }
    })
  },
  data() {
    return {
      // swiperOption: {
      //   slidesPerView: 4,
      //   // slidesPerView: 'auto',
      //   // centerInsufficientSlides: true,
      //   // centeredSlides: true,
      //   spaceBetween: 30,
      //   loop: true,
      //   // pagination: {
      //     // el: '.swiper-pagination'
      //   // },
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //     type: "bullets"
      //   },
      // },
      info:{
        title: 'NFT Collection',
        descr: ' We are a team of creative people who want to create a modern, high-quality and interesting project.',
        items:[
          {
            id: 1, 
            img: require('@/assets/images/temp/collection-1.jpg')
          },
          {
            id: 2, 
            img: require('@/assets/images/temp/collection-2.jpg')
          },
          {
            id: 3, 
            img: require('@/assets/images/temp/collection-3.jpg')
          },
          {
            id: 4,
            img: require('@/assets/images/temp/collection-4.jpg')
          },
          {
            id: 5, 
            img: require('@/assets/images/temp/collection-5.jpg')
          },
          {
            id: 6, 
            img: require('@/assets/images/temp/collection-6.jpg')
          },
          {
            id: 7, 
            img: require('@/assets/images/temp/collection-7.jpg')
          },
          {
            id: 8, 
            img: require('@/assets/images/temp/collection-8.jpg')
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
  components: {
    Swiper,
    // Slide,
  },
}
</script>