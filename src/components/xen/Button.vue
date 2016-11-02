<template>
  <div class="xen-button-container" :class="{ 'raised': raised, 'flat': !raised, 'disabled': disabled }">
    <xen-ripple>
      <div class="xen-button" :class="{ 'raised': raised }">
        <slot></slot>
      </div>
    </xen-ripple>
  </div>
</template>

<script>
  import XenRipple from './Ripple'

  export default {

    name: 'xen-button',

    props: [
      'primary',
      'raised',
      'disabled'
    ],

    // Components
    components: {
      XenRipple
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../styles/xen/button';

  .xen-button-container {
    position: relative;
    display: inline-block;
    margin: 4px;
    overflow: hidden;
    transition: all 375ms $swift-in;
    &.raised {
      @extend .whiteframe-z3;
    }
    &.disabled {
      color: $disabled-text;
      cursor: not-allowed;
      
      &.raised {
        background-color: rgba(0, 0, 0, .12);        
      }
    }
    &.disabled > * {
      pointer-events: none;
      transition: all 375ms $swift-in;
      // cursor: not-allowed;
    }
  }
</style>
