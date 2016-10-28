<template>
  <!-- <div class="xen-button-container" > -->
  <span class="xen-icon-button-container" :class="{ 'raised': raised, 'flat': !raised, 'disabled': disabled, 'large': large }">
    <span class="xen-icon-button-shadow">
      <xen-ripple :round="true">
        <span ref="button" class="xen-icon-button-wrapper" v-bind:class="{ 'primary': primary, 'secondary': secondary, 'raised': raised, 'flat': !raised, 'square': square }">
          <i class="material-icons">{{ icon }}</i>
        </span>
      </xen-ripple>
    </span>    
  </span>
</template>

<script>
  import XenRipple from './Ripple'

  export default {

    name: 'xen-icon-button',

    props: [
      'raised',
      'primary',
      'secondary',
      'icon',
      'square',
      'disabled',
      'large'
    ],
    // Components
    components: {
      XenRipple
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
<style lang="scss">
  @import '../../styles/xen/button';

  .xen-icon-button-container {
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
