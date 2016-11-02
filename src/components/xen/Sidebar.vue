<template>
  <div class="xen-sidebar whiteframe-z3">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    // Name
    name: 'xen-sidebar'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/xen/_sidebar.scss';
</style>
