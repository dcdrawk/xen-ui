<template>
  <div class="xen-sidebar whiteframe-z3">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'my-component',

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
    methods () {

    },

    // Mounted
    mounted () {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/xen/_sidebar.scss';
</style>
