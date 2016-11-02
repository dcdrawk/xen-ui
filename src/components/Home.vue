<template>
  <div>
    <xen-page-toolbar class="xen-theme-indigo" title="Home"></xen-page-toolbar>
    <div class="xen-page-content xen-page-background">
      <div class="row space-around">
        <img src="../assets/logo/android-chrome-192x192.png">
        <h1 class="display-1 col-xs-12 text-center">Xen UI</h1>
        <h2 class="title col-xs-12 text-center">A Material Design Vue.js Component Library</h2>
        <div class="col-xs-12 text-center">
          <div>
            <a href="http://www.google.ca" target="_blank">
            <xen-button :raised="true" class="xen-theme-primary">View on Github</xen-button>
            </a>
          </div>
        </div>
        <xen-divider class="col-xs-12"></xen-divider>
        <h2 class="headline col-xs-12 text-center">Powered By</h2>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">VueJS</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">The Progressive JavaScript Framework</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">Vue Router</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">The official router for Vue.js</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">Vuex</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">Centralized State Management for Vue.js.</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">Greensock</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">High-performance Web Animations</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">HammerJS</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">Mouse / Touch Gesture Library</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>

        <div class="col-xs-4">
          <xen-card>
            <xen-card-header>
              <h2 class="title">Socket.io</h2>              
            </xen-card-header>
            <xen-card-content>
              <h3 class="subheading">Realtime application framework</h3>
            </xen-card-content>
            <xen-card-actions class="text-right">
              <a href="#" target="_blank">
                <xen-button class="xen-color-primary">Documentation</xen-button>
              </a>
            </xen-card-actions>
          </xen-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XenPageToolbar from './xen/PageToolbar'
  import XenButton from './xen/Button'
  import XenDivider from './xen/Divider'
  import XenCard from './xen/Card'
  import XenCardHeader from './xen/CardHeader'
  import XenCardContent from './xen/CardContent'
  import XenCardMedia from './xen/CardMedia'
  import XenCardActions from './xen/CardActions'
  import XenRipple from './xen/Ripple'

  export default {
    name: 'hello',

    components: {
      XenPageToolbar,
      XenButton,
      XenDivider,
      XenCard,
      XenCardHeader,
      XenCardContent,
      XenCardMedia,
      XenCardActions,
      XenRipple
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

