<template>
  <div class="xen-input-container" v-bind:class="{ 'has-value': value, 'focus': focused }">
    <label>{{label}}</label>
    <textarea ref="textarea" v-model="value" v-focus="focused" @focus="focused = true" @blur="focused = false" :placeholder="placeholder" :rows="rows"></textarea>
    <div class="xen-input-border"></div>
  </div>
</template>

<style lang="scss">
  @import '../../styles/xen/_input.scss';
</style>
<script>
  import { focus } from 'vue-focus'

  export default {
    directives: { focus: focus },
    name: 'xen-textarea',
    props: [
      'label',
      'value',
      'type',
      'model',
      'placeholder',
      'rows',
      'autoGrow'
    ],

    data () {
      return {
        focused: false
      }
    },

    methods: {
      auto_grow () {
        var element = this.$refs.textarea
        element.style.height = '16px'
        element.style.height = (element.scrollHeight + 21) + 'px'
      }
    },

    mounted () {
      // if (this.)
      // this.auto_grow()
    },

    watch: {
      'value': {
        handler: function (val, oldVal) {
          if (typeof this.autoGrow === 'undefined' || this.autoGrow !== false) {
            this.auto_grow()
          }
        }
      }
    }
  }
</script>
