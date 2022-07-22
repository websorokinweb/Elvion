<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <app-logo></app-logo>
        <p class="footer__copyright">
          <span class="footer__copyright--roboted">
            ©  
          </span>  
          {{ info.copyright }}
        </p>
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
        copyright: '2022 Startup. All rights reserved.',
      },
    }
  },
}
</script>