<template>
  <div>
    <xen-page-toolbar class="xen-theme-indigo" title="Tabs"></xen-page-toolbar>
    <xen-tabs theme="indigo" default-tab="Example">
      <div slot="Example">
        <section class="page-tab-content">

          <!-- Default Divider -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Tabs</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-tabs default-tab="Messages">
                <div slot="Messages">
                  Messages Content
                </div>
                <div slot="Reminders">
                  Reminders Content
                </div>
                <div slot="Notifications">
                  Notifications Content
                </div>
              </xen-tabs>
            </xen-card-content>
          </xen-card>

          <!-- Default Divider -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Themed tabs with icons</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-tabs theme="primary" default-tab="Messages" :icons="true">
                <div slot="Messages" icon="message">
                  Messages Content
                </div>
                <div slot="Reminders" icon="access_time">
                  Reminders Content
                </div>
                <div slot="Notifications" icon="notifications">
                  Notifications Content
                </div>
              </xen-tabs>
            </xen-card-content>
          </xen-card>

          <!-- Default Divider -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Tabs with icons only</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-tabs default-tab="Messages" :icons="true" :icons-only="true">
                <div slot="Messages" icon="message">
                  Messages Content
                </div>
                <div slot="Reminders" icon="access_time">
                  Reminders Content
                </div>
                <div slot="Notifications" icon="notifications">
                  Notifications Content
                </div>
              </xen-tabs>
            </xen-card-content>
          </xen-card>
        </section>
      </div>

      <!-- Divider Script -->
      <div slot="Script">
        <div class="page-tab-content"> 

          <!-- Default Divider Script -->         
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Divider</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-javaScript">{{ dividerScript }}</code></pre>            
            </xen-card-content>
          </xen-card>

          <!-- Divider in List Script -->         
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Divider in List</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-javaScript">{{ dividerInListScript }}</code></pre>            
            </xen-card-content>
          </xen-card>
        </div>
      </div>
    </xen-tabs>
  </div>
</template>

<script>
  import XenTabs from '../xen/Tabs'
  import XenCard from '../xen/Card'
  import XenCardHeader from '../xen/CardHeader'
  import XenCardContent from '../xen/CardContent'
  import XenDivider from '../xen/Divider'
  import XenList from '../xen/List'
  import XenListItem from '../xen/ListItem'
  import XenPageToolbar from '../xen/PageToolbar'
  import Prism from 'prismjs'

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
      XenListItem,
      XenPageToolbar
    },

    // Data
    data () {
      return {
        msg: 'Hello World!',
        dividerTemplate: `<xen-divider></xen-divider>`,
        dividerInListTemplate: `<xen-list>
  <xen-list-item text="Two Line Item" secondary-text="Duis autem vel eum iriure dolor in hendrerit in vulputate"></xen-list-item>
  <xen-list-item text="Two Line Item" secondary-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></xen-list-item>
  <xen-divider></xen-divider>
  <xen-list-item text="Two Line Item" secondary-text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse"></xen-list-item>
  <xen-list-item text="Two Line Item" secondary-text="Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore erat volutpat."></xen-list-item>
</xen-list>`,
        dividerScript: `import XenDivider from '../xen/Divider'

export default {
  components: {
    XenDivider
  }
}`,
        dividerInListScript: `import XenDivider from '../xen/Divider'
import XenList from '../xen/List'
import XenListItem from '../xen/ListItem'

export default {
  components: {
    XenDivider,
    XenList,
    XenListItem
  }
}`
      }
    },

    // Mounted
    mounted () {
      Prism.highlightAll()
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
