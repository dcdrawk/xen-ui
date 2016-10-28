<template>
  <div class="xen-list" :class="{ 'dense': dense }">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'xen-list',

    props: [
      'dense'
    ],

    // Components
    components: {

    },

    // Data
    data () {
      return {
        msg: 'Hello World!'
      }
    },

    // Methods
    methods: {

    },

    // Mounted
    mounted () {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../styles/xen/lists';
</style>
