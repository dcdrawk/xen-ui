<template>
  <div class="xen-ripple" @mousedown="ripple($event);" :class="{ 'round': round }">
    <div ref="dot" class="xen-ripple-dot" v-if="showRipple"></div>
    <slot></slot>
  </div>
</template>

<script>
  import gsap from 'gsap'

  export default {

    name: 'xen-ripple',

    props: [
      'target',
      'round'
    ],

    // Components
    components: {

    },

    // Data
    data () {
      return {
        msg: 'Hello World!',
        showRipple: false
      }
    },

    // Methods
    methods: {
      ripple (ev) {
        this.showRipple = true
        var rippleScale = this.$parent.$el.clientWidth * 1.5 / 24
        this.$nextTick(() => {
          this.$refs.dot.style.left = ev.layerX - 12 + 'px'
          this.$refs.dot.style.top = ev.layerY - 12 + 'px'
          this.$nextTick(() => {
            gsap.TweenLite.to(this.$refs.dot, 0, { scaleX: 1, scaleY: 1, opacity: 0.2 })
            gsap.TweenLite.to(this.$refs.dot, 0.375 * (rippleScale / 100 + 1), { scaleX: rippleScale, scaleY: rippleScale, opacity: 0, ease: gsap.Power1.easeOut, onComplete: this.rippleComplete() })
          })
        })
      },

      rippleComplete () {
        console.log('done')
      }
    },

    // Mounted
    mounted () {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../styles/variables';
  .xen-ripple {
    overflow: hidden;
    position: relative;
    &.round {
      border-radius: 50%;
    }
  }
  .xen-ripple-dot {
    position: absolute;
    left: 0;
    width: 24px;
    height: 24px;
    // background-color: rgba(0,0,0,.24);
    background-color: currentColor;
    opacity: .2;
    /*transform-origin: 50%;*/
    /*-webkit-transform-origin: 50%;*/
    /*-moz-transform-origin: 50%;*/
    border-radius: 50%;
    transform: scale(1);
  }
</style>
