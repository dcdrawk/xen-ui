<template>
  <div class="xen-toolbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'my-component',
    props: [
      'title'
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
    methods () {

    },

    // Mounted
    mounted () {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/variables';

  .xen-toolbar {
    position: fixed;
    width: 100%;
    background-color: $primary-color;
    color: #fff;
    padding: 16px;
    top: 0;
    /*height: 56px;*/
  }

  i {
    margin-right: 16px;
  }

  .title {
    vertical-align: middle;
    line-height: 1.2;
  }
</style>
