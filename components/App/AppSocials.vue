<template>
  <ul class="socials">
    <li class="socials__item"
    v-for='social in socials'
    :key='social.type'
    >
      <a class='socials__link' :href='social.href'
      :class='social.type == "telegram" ? "social__link--telegram" : ""'
      target="_blank"
      >
        <nuxt-img :src="social.img" loading="lazy" alt="social graphic" />
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
          href: 'https://www.instagram.com/legendofelvion',  
          type: 'telegram',
          img: '/instagram.svg',
        },
        {
          href: 'https://twitter.com/legendofelvion?t=8Ubs2nNTjAmmccECXXWWaQ&s=35',
          type: 'twitter',
          img: '/twitter.svg',
        },
        {
          href: 'https://discord.gg/2SB3zwScu9',
          type: 'discord',
          img: '/discord.svg',
        },
      ],
    }
  },
}
</script>