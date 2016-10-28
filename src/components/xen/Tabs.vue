<template>
<div class="xen-tabs" :class="{'icons': icons, 'icons-only': iconsOnly}" v-cloak>
  <!--Tab Items-->
  <div class="xen-tab-items-container" :class="theme ? 'xen-theme-' + theme : ''">
    <div ref="tabItems" class="xen-tab-items">
      <xen-button class="xen-tab-button" v-for="(tab, key, index) in $slots" @click.native="selectTab(key, index)" :class="{'active': active === key}" v-if="key !== 'default'" ref="tabs">
        <i v-show="icons" class="material-icons">
          {{ iconValues[key] }}
        </i>
        {{ key }}
      </xen-button>
    </div>
    <div ref="active-tab-bar" class="xen-active-tab-bar"></div>
  </div>
  <!--Tab Content-->
  <div class="xen-tab-content" v-for="(tab, key, index) in $slots" v-show="active === key">
    <slot :name="key"></slot>
  </div>
</div>
</template>

<script>
import XenButton from './Button'

export default {

  name: 'xen-tabs',

  components: {
    XenButton
  },

  props: [
    'defaultTab',
    'theme',
    'secondary',
    'icons',
    'iconsOnly'
  ],

  data () {
    return {
      active: '',
      iconValues: [''],
      offset: 0,
      translate: 0,
      scale: 0,
      deltaX: 0,
      activeOffset: 0,
      activePosition: 0,
      test: {},
      index: 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.offset = 0

      this.active = this.defaultTab
      if (this.icons) {
        this.getIcons()
      } else {
        this.updateBar(0)
      }
    })
  },

  methods: {
    selectTab (key, index) {
      this.active = key
      this.index = index
      this.scrollTabs(index)
      this.updateBar(index)
    },

    findTab (index) {
      for (var i in this.$refs.tabs) {
        var item = this.$refs.tabs[i]
        if (index === +i) {
          return item.$el
        }
      }
    },

    updateBar (index) {
      if (this.$refs.tabs) {
        var button = this.findTab(index)
        var tabBar = this.$refs['active-tab-bar']
        // var tabs = this.$slots
        this.scale = button.clientWidth / 100
        this.translate = 0

        for (var i in this.$refs.tabs) {
          if (+i !== this.index) {
            this.translate += this.$refs.tabs[i].$el.clientWidth
          } else {
            break
          }
        }
        tabBar.style.transform = `translateX(${this.translate + this.offset}px) scaleX(${this.scale})`
        tabBar.style.color = 'red'
      }
    },

    scrollTabs (index) {
      var tabItems = this.$refs.tabItems
      // var tabs = this.$slots
      var button = this.$refs.tabs[index].$el
      this.activeOffset = button.offsetLeft
      this.activePosition = button.offsetLeft

      if (button.clientWidth + button.offsetLeft > tabItems.clientWidth) {
        this.offset = (tabItems.clientWidth - button.offsetLeft - button.clientWidth)
        if (button !== this.$refs.tabItems.lastElementChild) {
          this.offset -= 64
        }
        tabItems.style.transform = `translateX(${this.offset}px)`
      } else {
        this.offset = 0
        tabItems.style.transform = `translateX(${this.offset}px)`
      }
    },

    getIcons () {
      var iconArray = {}
      for (var i in this.$slots) {
        if (i !== 'default') {
          iconArray[i] = this.$slots[i][0].elm.attributes['icon'].nodeValue
        }
      }
      this.iconValues = iconArray
      this.updateBar(0)
    }
  },

  watch: {
    'iconsOnly': {
      handler: function (val, oldVal) {
        this.updateBar(this.defaultTab)
        this.active = this.defaultTab
      }
    }
  }

}
</script>

<style lang="scss">
  @import '../../styles/xen/tabs';

  .xen-button-container.xen-tab-button {
    margin: 0;
    display: inline-table;
    .xen-button {
      padding: 10px 16px;
    }
  }

  .xen-tab-items {
    height: 40px;
  }
</style>