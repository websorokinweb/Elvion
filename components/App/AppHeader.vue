<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <app-logo></app-logo>
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
          <app-button
          title="Donate project"
          ></app-button>
        </div>
      </div>
    </header>
  </div>
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