<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__copyright">
          {{ info.copyright }}
        </p>
        <app-logo></app-logo>
        <app-socials></app-socials>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      info:{
        copyright: '© 2022 Startup. All rights reserved.',
      },
    }
  },
}
</script>