<template>
  <div id="app">
    <xen-sidebar :class="{ 'xen-sidebar-open': sidebarOpen, 'xen-sidebar-closed': !sidebarOpen }">
      <section class="xen-branding">
        <img class="xen-logo" src="./assets/logo/android-chrome-192x192.png">
        <h2 class="title">Xen UI</h2>
      </section>
      <section class="xen-nav">

        <xen-list :dense="true" ref="Home">
          <router-link to="/">
            <xen-list-item text="Home" :bold="true"></xen-list-item>
          </router-link>
        </xen-list>
        <xen-divider></xen-divider>
        <xen-list :dense="true" ref="components">
          <router-link to="/">
            <xen-list-item text="Components" :bold="true" @click.native.native="expand('components')"></xen-list-item>
          </router-link>
          <router-link to="/cards">
            <xen-list-item  text="Cards" :bold="true"></xen-list-item>
          </router-link>
          <router-link to="/buttons">
            <xen-list-item ref="buttons" text="Buttons"></xen-list-item>
          </router-link>
          <router-link to="/lists">
            <xen-list-item ref="lists" text="Lists"></xen-list-item>
          </router-link>
          <router-link to="/tabs">
            <xen-list-item ref="tabs" text="Tabs"></xen-list-item>
          </router-link>
          <router-link to="/dividers">
            <xen-list-item ref="dividers" text="Dividers"></xen-list-item>
          </router-link>
        </xen-list>
      </section>
    </xen-sidebar>
    <transition name="fade">      
      <div class="xen-sidebar-backdrop" v-if="sidebarOpen" @click="toggleSidebar()"></div>
    </transition>
    <div class="page-toolbar">
      <xen-toolbar>
        <i class="material-icons xen-menu-button" @click="toggleSidebar()">menu</i>
        <span class="title">Cards</span>
      </xen-toolbar>
    </div>
    <div class="page-container">
      <transition name="router-fade">
        <router-view></router-view>
        
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
        this.expand(pathArray[0])
        this.setActive(pathArray[1])
      })

      window.onpopstate = (event) => {
        setTimeout(() => {
          var path = this.$route.path
          var pathArray = path.replace(/-+/, '').replace(/\/+/, '').split('/')
          this.setActive(pathArray[1])
        }, 0)
      }
    },

    methods: {
      toggleSidebar () {
        this.sidebarOpen = !this.sidebarOpen
      },
      expand (list) {
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
        // console.log(this.$refs)
        // for (var i in this.$refs) {
        //   this.$refs[i].$el.classList.remove('active')
        // }
        // this.$refs[listItem].$el.classList.add('active')
        // this.active = this.$refs[listItem].text
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/core';
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
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
    padding-left: 280px;
    top: -56px;
    position: relative;
  }
  .xen-sidebar {
    transform: translate3d(0, 0, 0);
  }
  .xen-nav .xen-list {
    margin: 0;
  }
  .xen-sidebar,
  .page-container,
  .page-toolbar {
    // transition: all .3s $swift-out;
    transition: all 375ms $material-easing;
  }

  .xen-menu-button {
    display: none;
  }

  .xen-sidebar-backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.52);
    z-index: 5;
    top: 0;
    &.show {
      animation: fade-in .5s forwards;
    }
    &.hide {
      animation: fade-out .5s forwards;
    }
  }

  @media only screen and (max-width: $small-breakpoint) {
    .xen-menu-button {
      display: inline-block;
    }
    .xen-sidebar {
      transform: translate3d(-280px, 0, 0);
    }

    .page-container, .page-toolbar {
      padding-left: 0;
    }

    .toolbar {

    }

    .xen-sidebar.xen-sidebar-open {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
