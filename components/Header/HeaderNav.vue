<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li class="header__nav-item"
      v-for='item in links'
      :key='item.label'
      >
        <a class="header__nav-link nav-link" :href="'#' + item.href"
        @click.prevent='scrollToSection(item.href)'
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import scrollToSection from '@/mixins/scrollToSection'

export default {
  data() {
    return {
      links:[
        {
          label: 'About',
          href: 'about',
        },
        {
          label: 'Development',
          href: 'development',
        },
        {
          label: 'NFT',
          href: 'collection',
        },
        {
          label: 'Roadmap',
          href: 'roadmap',
        },
      ],
    }
  },
  mixins:[
    scrollToSection,
  ],
}
</script>