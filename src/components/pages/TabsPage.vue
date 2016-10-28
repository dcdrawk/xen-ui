<template>
  <div>
    <xen-tabs theme="indigo" default-tab="Item Two">
      <div slot="Item One">
        First Tab!
      </div>
      <div slot="Item Two">
        Second Tab
      </div>
      <div slot="Item Three">
        Third Tab
      </div>
      <div slot="Item Four">
        Fourth Tab
      </div>
    </xen-tabs>
  </div>
</template>

<script>
  import XenTabs from '../xen/Tabs'

  export default {

    name: 'tabs-page',

    components: {
      XenTabs
    },

    data () {
      return {

      }
    }
  }
</script>

<style lang="css" scoped>

</style>