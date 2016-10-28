<template>
<xen-tabs theme="indigo" default-tab="Example">
    <div slot="Example">
      <section class="page-tab-content">
        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Flat Buttons<h2>
          </xen-card-header>
          <xen-card-content>
            <xen-button>Default Button</xen-button>            
            <xen-button class="xen-color-indigo">Indigo Button</xen-button>
            <xen-button class="xen-color-green">Green Button</xen-button>
            <xen-button class="xen-color-amber">Amber Button</xen-button>
            <xen-button class="xen-color-red">Red Button</xen-button>
            <xen-button :disabled="true">Disabled Button</xen-button>
          </xen-card-content>
        </xen-card>

        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Raised Buttons</h2>
          </xen-card-header>
          <xen-card-content>
            <xen-button :raised="true">Default Button</xen-button>            
            <xen-button :raised="true" class="xen-theme-indigo">Indigo Button</xen-button>
            <xen-button :raised="true" class="xen-theme-green">Green Button</xen-button>
            <xen-button :raised="true" class="xen-theme-amber">Amber Button</xen-button>
            <xen-button :raised="true" class="xen-theme-red">Red Button</xen-button>
            <xen-button :raised="true" :disabled="true">Disabled Button</xen-button>          
          </xen-card-content>
        </xen-card>

        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Flat Icon Buttons</h2>
          </xen-card-header>
          <xen-card-content>
            <xen-icon-button icon="menu"></xen-icon-button>
            <xen-icon-button icon="person" class="xen-color-indigo"></xen-icon-button>
            <xen-icon-button icon="check" class="xen-color-green"></xen-icon-button>
            <xen-icon-button icon="star" class="xen-color-amber"></xen-icon-button>
            <xen-icon-button icon="close" class="xen-color-red"></xen-icon-button>
            <xen-icon-button icon="sync_disabled" :disabled="true"></xen-icon-button>
          </xen-card-content>
        </xen-card>

        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Raised Icon Buttons</h2>
          </xen-card-header>
          <xen-card-content>
            <xen-icon-button :raised="true" icon="menu"></xen-icon-button>
            <xen-icon-button :raised="true" icon="menu" :large="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="person" class="xen-theme-indigo"></xen-icon-button>
            <xen-icon-button :raised="true" icon="person" class="xen-theme-indigo" :large="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="check" class="xen-theme-green"></xen-icon-button>
            <xen-icon-button :raised="true" icon="check" class="xen-theme-green" :large="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="star" class="xen-theme-amber0"></xen-icon-button>
            <xen-icon-button :raised="true" icon="star" class="xen-theme-amber0" :large="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="close" class="xen-theme-red"></xen-icon-button>
            <xen-icon-button :raised="true" icon="close" class="xen-theme-red" :large="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="sync_disabled" :disabled="true"></xen-icon-button>
            <xen-icon-button :raised="true" icon="sync_disabled" :disabled="true" :large="true"></xen-icon-button>

          </xen-card-content>
        </xen-card>
      </section>
    </div>
    <div slot="Template">
      <div class="page-tab-content">          
        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Default Cards</h2>
          </xen-card-header>
          <xen-card-content class="xen-no-margin">
            <pre><code class="language-html">{{  }}</code></pre>            
          </xen-card-content>
        </xen-card>
      </div>
    </div>
    <div slot="Script">
      <div class="page-tab-content">          
        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Default Cards</h2>
          </xen-card-header>
          <xen-card-content class="xen-no-margin">
            <pre><code class="language-javaScript">{{  }}</code></pre>            
          </xen-card-content>
        </xen-card>
      </div>
    </div>
  </xen-tabs>
</template>

<script>
  import XenTabs from '../xen/Tabs'
  import XenCard from '../xen/Card'
  import XenCardHeader from '../xen/CardHeader'
  import XenCardContent from '../xen/CardContent'
  import XenButton from '../xen/Button'
  import XenIconButton from '../xen/IconButton'

  export default {

    name: 'my-component',

    // Components
    components: {
      XenTabs,
      XenCard,
      XenCardHeader,
      XenCardContent,
      XenButton,
      XenIconButton
    },

    // Data
    data () {
      return {
        msg: 'Hello World!'
      }
    },

    // Methods
    methods () {

    },

    // Mounted
    mounted () {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
