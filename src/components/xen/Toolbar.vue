<template>
  <div class="xen-toolbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'xen-toolbar',
    props: [
      'title'
    ]

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/variables';

  i {
    margin-right: 16px;
  }

  .title {
    vertical-align: middle;
    line-height: 1.2;
  }
</style>
