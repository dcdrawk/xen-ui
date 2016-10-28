<template>
  <div class="xen-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'xen-card',

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
  @import '../../styles/whiteframe';

  .xen-card {
    @extend .whiteframe-z1;
    background-color: #fff;
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
  }


</style>
