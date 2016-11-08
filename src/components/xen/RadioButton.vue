<template>
  <div class="xen-radio-button-container" @click="toggleCheckbox()" v-bind:class="{ 'has-value': selected, 'secondary-color': secondaryColor }">
    <xen-ripple :center="true">
      <div class="xen-radio-button">
        <div class="circle"></div>
      </div>
    </xen-ripple>
  </div>
</template>

<style lang="scss">
  @import '../../styles/xen/radio-button'
</style>

<script>
  import XenRipple from './Ripple'

  export default{
    props: [
      'value',
      'secondaryColor'
    ],

    components: {
      XenRipple
    },

    data () {
      return {
        selected: false
      }
    },

    methods: {
      toggleCheckbox () {
        this.$parent.$children.forEach((item, index) => {
          item.selected = false
        })
        this.$parent.$emit('radioSelect', this.value)
        this.selected = true
      }
    }

  }
</script>
