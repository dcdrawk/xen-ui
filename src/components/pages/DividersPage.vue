<template>
  <xen-tabs theme="indigo" default-tab="Example">
    <div slot="Example">
      <section class="page-tab-content">
        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Default Divider<h2>
          </xen-card-header>
          <xen-card-content>
            <xen-divider></xen-divider>
          </xen-card-content>
        </xen-card>

        <xen-card>
          <xen-card-header background="#eee">
            <h2 class="title">Divider in List</h2>
          </xen-card-header>
          <xen-card-content>
            <xen-list>
              <xen-list-item text="Two Line Item" secondary-text="Duis autem vel eum iriure dolor in hendrerit in vulputate"></xen-list-item>
              <xen-list-item text="Two Line Item" secondary-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></xen-list-item>
              <xen-divider></xen-divider>
              <xen-list-item text="Two Line Item" secondary-text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse"></xen-list-item>
              <xen-list-item text="Two Line Item" secondary-text="Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore erat volutpat."></xen-list-item>
            </xen-list>
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
  import XenDivider from '../xen/Divider'
  import XenList from '../xen/List'
  import XenListItem from '../xen/ListItem'

  export default {

    name: 'dividers-page',

    // Components
    components: {
      XenTabs,
      XenCard,
      XenCardHeader,
      XenCardContent,
      XenDivider,
      XenList,
      XenListItem
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
