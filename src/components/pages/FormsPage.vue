<template>
  <div class="xen-page-background">
    <xen-page-toolbar class="xen-theme-indigo" title="Forms"></xen-page-toolbar>
    <xen-tabs theme="indigo" default-tab="Example">

      <!-- Example Tab -->
      <div slot="Example">
        <section class="page-tab-content">

          <!-- Default Component -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Input Fields</h2>
            </xen-card-header>
            <xen-card-content>
              <!-- Basic Input -->
              <xen-input value="Basic Input"></xen-input>

              <!-- Input with Placeholder -->
              <xen-input placeholder="Input with Placeholder"></xen-input>

              <!-- Input with Placeholder -->
              <xen-input label="Input with Floating Label"></xen-input>
            </xen-card-content>
          </xen-card>

          <!-- Default Component -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Textareas</h2>
            </xen-card-header>
            <xen-card-content>
              <!-- Basic Input -->
              <xen-textarea value="Basic Input"></xen-textarea>

              <!-- Input with Placeholder -->
              <xen-textarea placeholder="Input with Placeholder" :auto-grow="false"></xen-textarea>

              <!-- Input with Placeholder -->
              <xen-textarea label="Input with Floating Label" rows="5" :auto-grow="false"></xen-textarea>
            </xen-card-content>
          </xen-card>

        </section>
      </div>

      <!-- Template Tab-->
      <div slot="Template">
        <div class="page-tab-content">

          <!-- Component Template -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Component</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ componentTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>

        </div>
      </div>

      <!-- Script Tab-->
      <div slot="Script">
        <div class="page-tab-content"> 

          <!-- Default Component Script -->         
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Component</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-javaScript">{{ componentScript }}</code></pre>            
            </xen-card-content>
          </xen-card>

        </div>
      </div>
    </xen-tabs>
  </div>
</template>

<script>
  import XenPageToolbar from '../xen/PageToolbar'
  import XenTabs from '../xen/Tabs'
  import XenCard from '../xen/Card'
  import XenCardHeader from '../xen/CardHeader'
  import XenCardContent from '../xen/CardContent'
  import XenInput from '../xen/Input'
  import XenTextarea from '../xen/TextArea'
  import Prism from 'prismjs'

  export default {

    name: 'copmonent-page',

    // Components
    components: {
      XenPageToolbar,
      XenTabs,
      XenCard,
      XenCardHeader,
      XenCardContent,
      XenInput,
      XenTextarea
    },

    // Data
    data () {
      return {
        msg: 'Hello World!',
        componentTemplate: `<xen-component></xen-component>`,
        componentScript: `import XenComponent from '../xen/Component'

export default {
  components: {
    XenComponent
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
