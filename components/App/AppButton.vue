<template>
  <button
  v-if='!link && !pagesLink'
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :type='btnType'
  >
    <slot></slot>
    {{ title }}
  </button>

  <router-link
  v-else-if="pagesLink"
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :to='custom === null ? href : custom'
  >
    <slot></slot>
    {{ title }}
  </router-link>

  <a class='btn'
  v-else-if="link"
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :href='href'
  target="_blank"
  >
    <slot></slot>
    {{ title }}
  </a>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true,
    },
    pagesLink:{
      type: Boolean,
      default: false,
    },
    link:{
      type: Boolean,
      default: false,
    },
    href:{
      type: String,
      default: '',
    },
    custom:{
      type: Object,
      default: null
    },
    view:{
      type: String,
      default: 'pink',
    },
    big:{
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: 'button'
    },
  },
  computed: {
    useStyle() {
      return 'btn--' + this.view
    }
  },
}
</script>