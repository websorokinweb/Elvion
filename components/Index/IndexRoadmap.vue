<template>
  <section class="roadmap" id="roadmap">
    <div class="container">
      <div class="roadmap__inner">
        <h6 class="roadmap__title title title--wreath">
          {{ info.title }}        
        </h6>
        <p class="roadmap__descr">
          {{ info.descr }}        
        </p>
        <ul class="roadmap__list">
          <li class="roadmap__item"
          v-for="item in info.items"
          :key="item.id"
          >
            <div class="roadmap__list-img">
              <nuxt-img format="webp" :src="item.img" alt="roadmap graphic" />
            </div>
            <p class="roadmap__item-title">
              {{ item.title }}
              <span>
                {{ item.title }}
              </span>
            </p>
            <ul class="roadmap__points">
              <li class="roadmap__point"
              v-for="point in item.list"
              :key="point"
              v-html="point"
              >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:{
        title: 'Roadmap',
        descr: 'We are a team of creative people who want to create a modern, high-quality and interesting project.',
        items:[
          { 
            id: 0,
            title: 'The first point',
            img: require('@/assets/images/temp/roadmap-1.png'),
            list: [
              'Discussion of the idea',
              'Team formation.',
              // 'Distribution of tasks <br> and their execution',
              'Distribution of tasks and their execution',
            ],
          },
          { 
            id: 1,
            title: 'Second point',
            img: require('@/assets/images/temp/roadmap-2.png'),
            list: [
              // 'Development of the <br> NFT collection',
              'Development of the NFT collection',
              'Game scenario development.',
            ],
          },
          { 
            id: 2,
            title: 'The third point',
            img: require('@/assets/images/temp/roadmap-3.png'),
            list: [
              'Launching social media',
              'Launching a website.',
              'Publication of 8000 NFT on Solana',
            ],
          },
          { 
            id: 3,
            title: 'The fourth point',
            img: require('@/assets/images/temp/roadmap-4.png'),
            list: [
              'Sale of the NFT collection',
              'The beginning of game development.',
            ],
          },
        ],
      } 
    }
  },  
}
</script>