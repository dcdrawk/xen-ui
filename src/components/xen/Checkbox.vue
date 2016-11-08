<template>
  <div class="checkbox-container" @click="toggleCheckbox()" v-bind:class="{ 'has-value': checkboxValue }">
    <xen-ripple :center="true">
      <div class="checkbox"></div>
      <i class="material-icons">check</i>
    </xen-ripple>
  </div>
</template>
<style lang="scss">
  @import '../../styles/xen/checkbox'
</style>
<script>
  import XenRipple from './Ripple'

  export default{
    props: [
      'value'
    ],

    components: {
      XenRipple
    },

    data () {
      return {
        checkboxValue: this.value || false
      }
    },
    methods: {
      toggleCheckbox (value) {
        if (value === true || value === false) {
          this.checkboxValue = value
        } else {
          this.checkboxValue = !this.checkboxValue
        }
        this.$emit('input', this.checkboxValue)
      }
    }

  }
</script>
