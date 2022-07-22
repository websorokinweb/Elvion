<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <app-logo></app-logo>
        <header-nav></header-nav>
        <app-button
        title="Donate project"
        ></app-button>
        <button class="header__menu-btn btn-clear"
        @click='toggleMenu()'
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
    <div class="header__menu"
    :class='[menuIsOpen]'
    @click='toggleMenu()'
    >
      <header-nav></header-nav>
      <app-button
      title="Donate project"
      ></app-button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
    }
  },
  computed: {
    menuIsOpen(){
      if(this.menuOpened){
        return "header__menu--active"
      }
      return ""
    },
  },
  methods: {
    toggleMenu(){
      this.menuOpened = !this.menuOpened
    },
  },
}
</script>