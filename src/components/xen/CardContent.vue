<template>
  <div class="xen-card-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    // Name
    name: 'xen-card-content'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .xen-card-content {
    margin: 16px;

    &.xen-no-margin {
      margin: 0;
    }

  }

  p:last-of-type {
    margin-bottom: 0;
  }
</style>
