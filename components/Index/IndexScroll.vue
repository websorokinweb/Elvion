<template>
  <div>

  </div>
</template>

<script>
import scrollToSection from '@/mixins/scrollToSection';

export default {
  mounted () {
    if(window.location.hash){
      this.$nextTick(() => {
        this.scrollToSection(window.location.hash)
      })
    }
  },
  mixins:[
    scrollToSection,
  ],
}
</script>