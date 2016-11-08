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
      this.$nextTick(() => {
        this.$on('radioSelect', (value) => {
          this.$emit('input', value)
        })
        this.radioButtons = this.$el.querySelectorAll('.xen-radio-button-container')
        this.getSelected()
      })
    },

    methods: {
      getSelected () {
        this.radioButtons.forEach((item, index) => {
          console.log(this.value, item)
          if (this.value === item.__vue__.value) {
            item.__vue__.selected = true
          } else {
            item.__vue__.selected = false
          }
        })
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
