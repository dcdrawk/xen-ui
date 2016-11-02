<template>
  <div class="xen-card-title" :class="{ 'xen-custom-background': background }" :style="background ? 'background-color:' + background + ';' : ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    // Name
    name: 'xen-card-title',

    // Props
    props: [
      'background'
    ]

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xen-card-title-container {
    display: flex;
  }

  .xen-card-title {
    margin: 16px;
  }

  .xen-custom-background {
    margin: 0;
    padding: 16px;
  }
</style>
