<template>
  <div id="app">
    <xen-sidebar :class="{ 'xen-sidebar-open': sidebarOpen, 'xen-sidebar-closed': !sidebarOpen }">
      <section class="xen-branding">
        <img class="xen-logo" src="./assets/logo/android-chrome-192x192.png">
        <h2 class="title">Xen UI</h2>
      </section>
      <section class="xen-nav">

        <xen-list :dense="true" ref="home">
          <router-link to="/">
            <xen-list-item text="Home" :bold="true"></xen-list-item>
          </router-link>
        </xen-list>
        <xen-divider></xen-divider>

        <xen-list :dense="true">
          <xen-list-item text="Components" :bold="true" @click.native="expand('components')"></xen-list-item>
        </xen-list>

        <xen-list :dense="true" ref="components" style="height: 0px; overflow: hidden;" class="xen-sublist">
          <router-link to="/components/cards">
            <xen-list-item ref="cards" text="Cards" :bold="true"></xen-list-item>
          </router-link>
          <router-link to="/components/buttons">
            <xen-list-item ref="buttons" text="Buttons" :bold="true"></xen-list-item>
          </router-link>
          <router-link to="/components/lists">
            <xen-list-item ref="lists" text="Lists" :bold="true"></xen-list-item>
          </router-link>
          <router-link to="/components/tabs">
            <xen-list-item ref="tabs" text="Tabs" :bold="true"></xen-list-item>
          </router-link>
          <router-link to="/components/dividers">
            <xen-list-item ref="dividers" text="Dividers" :bold="true"></xen-list-item>
          </router-link>
        </xen-list>

      </section>
    </xen-sidebar>
    <transition name="fade">      
      <div class="xen-sidebar-backdrop" v-if="sidebarOpen" @click="toggleSidebar()"></div>
    </transition>    
    <div class="page-container">
      <transition name="router-fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive> 
      </transition>
    </div>
  </div>
</template>

<script>
  import XenSidebar from './components/xen/Sidebar'
  import XenToolbar from './components/xen/Toolbar'
  import XenList from './components/xen/List'
  import XenListItem from './components/xen/ListItem'
  import XenDivider from './components/xen/Divider'

  export default {
    name: 'app',

    components: {
      XenSidebar,
      XenToolbar,
      XenList,
      XenListItem,
      XenDivider
    },

    data () {
      return {
        sidebarOpen: false
      }
    },

    mounted () {
      var path = window.location.hash
      var pathArray = path.replace(/-+/, '').replace(/#+/, '').replace(/\/+/, '').split('/')

      this.$nextTick(() => {
        if (pathArray.length === 1 && pathArray[0] === '') {
          this.setActive('home')
        } else {
          this.expand(pathArray[0])
          this.setActive(pathArray[1])
        }

        this.$on('toggle-sidebar', () => {
          console.log('!!!!!!!!!!!')
        })
      })

      window.onpopstate = (event) => {
        setTimeout(() => {
          var path = this.$route.path
          var pathArray = path.replace(/-+/, '').replace(/\/+/, '').split('/')
          console.log(pathArray)
          if (pathArray.length === 1 && pathArray[0] === '') {
            this.setActive('home')
          } else {
            this.setActive(pathArray[1])
          }
        }, 0)
      }
    },

    methods: {
      toggleSidebar () {
        this.sidebarOpen = !this.sidebarOpen
      },
      expand (list) {
        console.log(list)
        if (this.$refs[list].$el.style.height === '0px') {
          this.$refs[list].$el.style.height = this.$refs[list].$el.scrollHeight + 'px'
        } else {
          this.$refs[list].$el.style.height = 0
        }
      },
      collapseAll () {
        for (var i in this.$refs) {
          this.$refs[i].$el.style.height = 0
        }
      },
      setActive (listItem) {
        console.log(listItem)
        for (var i in this.$refs) {
          this.$refs[i].$el.classList.remove('active')
        }
        this.$refs[listItem].$el.classList.add('active')
        this.active = this.$refs[listItem].text
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/core';
  #app {
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .xen-logo {
    width: 100px;
    height: auto;
    margin-top: 16px;
  }
  .xen-branding {
    text-align: center;
  }
  .page-toolbar {
    // padding-left: 280px;
    top: -56px;
    position: relative;
  }
  .xen-sidebar {
    transform: translate3d(0, 0, 0);
  }
  .xen-nav .xen-list {
    margin: 0;
    transition: all 300ms $material-easing;
  }
  .xen-sidebar,
  .page-container,
  .page-toolbar {
    // transition: all .3s $swift-out;
    transition: all 375ms $material-easing;
  }

  .xen-menu-button.xen-icon-button-container {
    display: none;
  }

  .xen-sidebar-backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.52);
    z-index: 9;
    top: 0;
    &.show {
      animation: fade-in .5s forwards;
    }
    &.hide {
      animation: fade-out .5s forwards;
    }
  }

  .xen-nav .active {
    color: $primary-color;
  }

  .xen-list.xen-sublist .xen-list-item {
    padding-left: 32px;
  }

  @media only screen and (max-width: $small-breakpoint) {
    .xen-menu-button.xen-icon-button-container {
      display: inline-block;
    }
    .xen-sidebar {
      transform: translate3d(-280px, 0, 0);
    }

    .page-container, .page-toolbar {
      padding-left: 0;
    }

    .xen-sidebar.xen-sidebar-open {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
