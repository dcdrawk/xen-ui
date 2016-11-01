<template>
  <div ref="target" >
    <xen-ripple v-cloak>
      <div class="xen-list-item" :class="{ 'avatar': avatar, 'one-line': !secondaryText, 'two-line': secondaryText && !multiLine, 'multi-line': multiLine && secondaryText, 'bold': bold}">
        <span v-if="icon && avatar" class="xen-list-item-avatar">
          <i class="material-icons">{{ icon }}</i>
        </span>

        <span v-if="icon && !avatar" class="xen-list-item-icon">
          <i class="material-icons">{{ icon }}</i>
        </span>

        <span class="xen-list-item-text-container">
          <span class="item-text">{{ text }}</span>
          <span v-if="secondaryText" class="secondary-text">{{ secondaryText }}</span>
        </span>
      </div>
    </xen-ripple>
  </div>
</template>

<script>
  import XenRipple from '../xen/Ripple'

  export default {

    name: 'xen-list-item',

    props: [
      'avatar',
      'icon',
      'text',
      'secondaryText',
      'bold',
      'twoLine',
      'multiLine'
    ],

    // Components
    components: {
      XenRipple
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // @import '../../styles/xen/lists';
</style>
