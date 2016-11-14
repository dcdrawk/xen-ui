<template>
  <div class="xen-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: [
      'value'
    ],

    data () {
      return {
        radioButtons: []
      }
    },

    mounted () {
      setTimeout(() => {
        this.$on('radioSelect', (value) => {
          this.$emit('input', value)
        })
        this.radioButtons = this.$el.querySelectorAll('.xen-radio-button-container')
        this.getSelected()
      }, 0)
    },

    methods: {
      getSelected () {
        for (var i in this.radioButtons) {
          let item = this.radioButtons[i]
          if (item.hasOwnProperty('__vue__')) {
            if (this.value === item.__vue__.value) {
              item.__vue__.selected = true
            } else {
              item.__vue__.selected = false
            }
          }
        }
      }
    },

    watch: {
      'value': {
        handler: function (val, oldVal) {
          this.getSelected()
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
