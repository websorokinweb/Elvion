<template>
  <NuxtLink class="logo nav-link" to="/" @click.native="scrollToSection('cover')">
    <img src="@/assets/images/logo.svg" alt="logo">
  </NuxtLink>
</template>

<script>
import scrollToSection from '@/mixins/scrollToSection'

export default {
  mixins:[
    scrollToSection,
  ],
}
</script>