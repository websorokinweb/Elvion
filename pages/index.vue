<template>
  <div>
    <app-header
    :class="headerFloats ? 'header--floats' : ''"
    ></app-header>
    <index-cover></index-cover>
    <index-about></index-about>
    <index-character></index-character>
    <index-support></index-support>
    <index-collection></index-collection>
    <index-roadmap></index-roadmap>
    <app-footer></app-footer>
    <!-- <index-scroll></index-scroll> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      headerFloats: false,
    }
  },
  methods: {
    handleScrollHeader () {
      let scroll = window.pageYOffset;
      if (scroll >= 80) {
        this.headerFloats = true
      } else {
        this.headerFloats = false
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScrollHeader);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollHeader);
  }
  // created () {
  //   window.addEventListener('scroll', this.setActiveSection);
  // },
  // destroyed () {
  //   window.removeEventListener('scroll', this.setActiveSection);
  // },
  // methods: {
  //   setActiveSection() {
  //     let current = "";

  //     this.sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       if (pageYOffset >= sectionTop - 300){
  //         current = section.getAttribute("id"); 
  //       }
  //     });

  //     this.links.forEach((li) => {
  //       li.classList.remove("active");
  //       if (li.getAttribute("href") === '#' + current) {
  //         li.classList.add("header__nav-link--active");
  //       }else{
  //         li.classList.remove('header__nav-link--active')
  //       }
  //     });
  //   }
  // },
}
</script>

<!-- <style lang="scss"> -->
<!-- @import '~assets/scss/main.scss'; -->

<!-- </style> -->