<template>
  <ul class="social__list">
    <li class="social__item"
    v-for='social in socials'
    :key='social.type'
    >
      <a class='social__link' :href='social.href'
      :class='social.type == "telegram" ? "social__link--telegram" : ""'
      target="_blank"
      >
        <img :src="social.img" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socials:[
        {
          href: 'https://www.instagram.com',  
          type: 'telegram',
          img: require('@/assets/images/telegram.svg'),
        },
        {
          href: '#',
          type: 'twitter',
          img: require('@/assets/images/twitter.svg'),
        },
        {
          href: '#',
          type: 'discord',
          img: require('@/assets/images/discord.svg'),
        },
      ],
    }
  },
}
</script>