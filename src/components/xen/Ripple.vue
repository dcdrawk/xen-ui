<template>
  <div class="xen-ripple" @mousedown="ripple($event);" :class="{ 'round': round }">
    <div ref="dot" class="xen-ripple-dot" v-if="showRipple"></div>
    <slot></slot>
  </div>
</template>

<script>
  import gsap from 'gsap'

  export default {
    // Name
    name: 'xen-ripple',

    // Props
    props: [
      'target',
      'round',
      'center',
      'fit'
    ],

    // Data
    data () {
      return {
        msg: 'Hello World!',
        showRipple: false,
        rippleTimeout: undefined
      }
    },

    // Methods
    methods: {
      ripple (ev) {
        this.showRipple = true
        var rippleScale = !this.fit ? this.$parent.$el.clientWidth * 1.5 / 24 : this.$parent.$el.clientWidth / 24
        this.$nextTick(() => {
          if (this.center) {
            this.$refs.dot.style.left = this.$parent.$el.clientWidth / 2 - 12 + 'px'
            this.$refs.dot.style.top = this.$parent.$el.clientHeight / 2 - 12 + 'px'
          } else {
            this.$refs.dot.style.left = ev.offsetX - 12 + 'px'
            this.$refs.dot.style.top = ev.offsetY - 12 + 'px'
          }
          this.$nextTick(() => {
            gsap.TweenLite.to(this.$refs.dot, 0, { scaleX: 1, scaleY: 1, opacity: 0.2 })
            gsap.TweenLite.to(this.$refs.dot, 0.375 * (rippleScale / 100 + 1), { scaleX: rippleScale, scaleY: rippleScale, opacity: 0, ease: gsap.Power1.easeOut, onComplete: this.rippleComplete(rippleScale) })
          })
        })
      },

      rippleComplete (rippleScale) {
        window.clearTimeout(this.rippleTimeout)
        this.rippleTimeout = window.setTimeout(() => {
          this.showRipple = false
        }, 375 * (rippleScale / 100 + 1))
      }
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
    background-color: currentColor;
    opacity: .2;
    border-radius: 50%;
    transform: scale(1);
    pointer-events: none;
  }
</style>
