<template>
  <div class="xen-page-background">
    <xen-page-toolbar class="xen-theme-indigo" title="Data Tables"></xen-page-toolbar>
    <xen-tabs class="xen-page-tabs" theme="indigo" default-tab="Example">

      <!-- Example Tab -->
      <div slot="Example">
        <section class="page-tab-content">

          <!-- Default Table -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Table</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-data-table :rows="rows1" :columns="columns" order="name" :direction="-1"></xen-data-table>
            </xen-card-content>
          </xen-card>

          <!-- Bordered Table -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Bordered Table</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-input class="xen-color-primary" placeholder="Type to Filter Rows" :value="searchText" @input="searchText = $event"></xen-input>
              <xen-data-table :rows="rows2" :columns="columns" :border="true" :filter="searchText" no-results="No Results to Display"></xen-data-table>
            </xen-card-content>
          </xen-card>

          <!-- Selection Table -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Selection + Hover Table</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-data-table :rows="rows3" :columns="columns" :hover="true" :selection="true" selection-key="selected" @selected="rows3 = $event"></xen-data-table>
            </xen-card-content>
          </xen-card>

          <!-- Editable Table -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Editable + Striped Table</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-data-table :rows="rows4" :columns="columnsEditable" :striped="true"></xen-data-table>
            </xen-card-content>
          </xen-card>

          <!-- Responsive Table -->
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Responsive Table</h2>
            </xen-card-header>
            <xen-card-content>
              <xen-data-table :rows="rows5" :responsive="true" :columns="columns"></xen-data-table>
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
              <h2 class="title">Default Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ defaultTableTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>

          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Bordered Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ borderedTableTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>

          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Selection + Hover Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ selectionTableTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>

          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Editable + Striped Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ editableTableTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>

          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Responsive Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-html">{{ responsiveTableTemplate }}</code></pre>            
            </xen-card-content>
          </xen-card>


        </div>
      </div>

      <!-- Script Tab-->
      <div slot="Script">
        <div class="page-tab-content"> 

          <!-- Default Table Script -->         
          <xen-card>
            <xen-card-header background="#eee">
              <h2 class="title">Default Table</h2>
            </xen-card-header>
            <xen-card-content class="xen-no-margin">
              <pre><code class="language-javaScript">{{ tableScript }}</code></pre>            
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
  import XenButton from '../xen/Button'
  import XenDialog from '../xen/Dialog'
  import XenDataTable from '../xen/DataTable'
  import XenInput from '../xen/Input'
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
      XenButton,
      XenDialog,
      XenInput,
      XenDataTable
    },

    // Data
    data () {
      return {
        searchText: '',
        rows1: [{
          name: 'Jon',
          house: 'Snow',
          sigil: 'Wolf',
          age: 21
        }, {
          name: 'Tyrion',
          house: 'Lannister',
          sigil: 'Lion',
          age: 39
        }, {
          name: 'Daenerys',
          house: 'Targaryen',
          sigil: 'Dragon',
          age: 21
        }, {
          name: 'Jorah',
          house: 'Mormont',
          sigil: 'Bear',
          age: 50
        }, {
          name: 'Theon',
          house: 'Greyjoy',
          sigil: 'Kraken',
          age: 21
        }],

        rows2: [{
          name: 'Arya',
          house: 'Stark',
          sigil: 'Wolf',
          age: 11
        }, {
          name: 'Stannis',
          house: 'Baratheon',
          sigil: 'Flaming Stag',
          age: 40
        }, {
          name: 'Jamie',
          house: 'Lannister',
          sigil: 'Lion',
          age: 36
        }, {
          name: 'Brienne',
          house: 'Tarth',
          sigil: 'Sun',
          age: 32
        }, {
          name: 'Sandor',
          house: 'Clegane',
          sigil: 'Dog',
          age: 35
        }],

        rows3: [{
          name: 'Bran',
          house: 'Stark',
          sigil: 'Wolf',
          age: 10
        }, {
          name: 'Barristan',
          house: 'Selmy',
          sigil: 'Wheat',
          age: 60
        }, {
          name: 'Walder',
          house: 'Frey',
          sigil: 'The Twins',
          age: 89
        }, {
          name: 'Jojen',
          house: 'Reed',
          sigil: 'Lizard-Lion',
          age: 12
        }, {
          name: 'Loras',
          house: 'Tyrell',
          sigil: 'Rose',
          age: 23
        }],

        rows4: [{
          name: 'Sansa',
          house: 'Stark',
          sigil: 'Wolf',
          age: 13
        }, {
          name: 'Robert',
          house: 'Baratheon',
          sigil: 'Stag',
          age: 42
        }, {
          name: 'Cersei',
          house: 'Lannister',
          sigil: 'Lion',
          age: 36
        }, {
          name: 'Margaery',
          house: 'Tyrell',
          sigil: 'Rose',
          age: 18
        }, {
          name: 'Gregor',
          house: 'Clegane',
          sigil: 'Dog',
          age: 40
        }],

        rows5: [{
          name: 'Eddard',
          house: 'Stark',
          sigil: 'Wolf',
          age: 41
        }, {
          name: 'Davos',
          house: 'Seaworth',
          sigil: 'Onion',
          age: 42
        }, {
          name: 'Samwel',
          house: 'Tarly',
          sigil: 'Huntsman',
          age: 17
        }, {
          name: 'Lysa',
          house: 'Tully',
          sigil: 'Fish',
          age: 18
        }, {
          name: 'Viserys',
          house: 'Targaryen',
          sigil: 'Dragon',
          age: 21
        }],

        columns: [{
          head: 'Name',
          key: 'name'
        }, {
          head: 'House',
          key: 'house'
        }, {
          head: 'Sigil',
          key: 'sigil'
        }, {
          head: 'Age',
          key: 'age'
        }],

        columnsEditable: [{
          head: 'Name',
          key: 'name'
        }, {
          head: 'House',
          key: 'house',
          editable: true
        }, {
          head: 'Sigil',
          key: 'sigil',
          options: ['Wolf', 'Stag', 'Lion', 'Rose', 'Dog']
        }, {
          head: 'Age',
          key: 'age'
        }],
        defaultTableTemplate: `<xen-data-table :rows="rows1" :columns="columns" order="name" :direction="-1"></xen-data-table>`,
        borderedTableTemplate: `<xen-data-table :rows="rows2" :columns="columns" :border="true" :filter="searchText" no-results="No Results to Display"></xen-data-table>`,
        selectionTableTemplate: `<xen-data-table :rows="rows3" :columns="columns" :hover="true" :selection="true" selection-key="selected" @selected="rows3 = $event"></xen-data-table>`,
        editableTableTemplate: `<xen-data-table :rows="rows4" :columns="columnsEditable" :striped="true"></xen-data-table>`,
        responsiveTableTemplate: `<xen-data-table :rows="rows5" :responsive="true" :columns="columns" :border="true" :filter="searchText" no-results="No Results to Display"></xen-data-table>`,
        tableScript: `import XenDataTable from '../xen/DataTable'

export default {
  components: {
    XenDataTable
  }

  data () {
    return {
      searchText: '',
      rows1: [{
        name: 'Jon',
        house: 'Snow',
        sigil: 'Wolf',
        age: 21
      }, {
        name: 'Tyrion',
        house: 'Lannister',
        sigil: 'Lion',
        age: 39
      }, {
        name: 'Daenerys',
        house: 'Targaryen',
        sigil: 'Dragon',
        age: 21
      }, {
        name: 'Jorah',
        house: 'Mormont',
        sigil: 'Bear',
        age: 50
      }, {
        name: 'Theon',
        house: 'Greyjoy',
        sigil: 'Kraken',
        age: 21
      }],

      rows2: [{
        name: 'Arya',
        house: 'Stark',
        sigil: 'Wolf',
        age: 11
      }, {
        name: 'Stannis',
        house: 'Baratheon',
        sigil: 'Flaming Stag',
        age: 40
      }, {
        name: 'Jamie',
        house: 'Lannister',
        sigil: 'Lion',
        age: 36
      }, {
        name: 'Brienne',
        house: 'Tarth',
        sigil: 'Sun',
        age: 32
      }, {
        name: 'Sandor',
        house: 'Clegane',
        sigil: 'Dog',
        age: 35
      }],

      rows3: [{
        name: 'Bran',
        house: 'Stark',
        sigil: 'Wolf',
        age: 10
      }, {
        name: 'Barristan',
        house: 'Selmy',
        sigil: 'Wheat',
        age: 60
      }, {
        name: 'Walder',
        house: 'Frey',
        sigil: 'The Twins',
        age: 89
      }, {
        name: 'Jojen',
        house: 'Reed',
        sigil: 'Lizard-Lion',
        age: 12
      }, {
        name: 'Loras',
        house: 'Tyrell',
        sigil: 'Rose',
        age: 23
      }],

      rows4: [{
        name: 'Sansa',
        house: 'Stark',
        sigil: 'Wolf',
        age: 13
      }, {
        name: 'Robert',
        house: 'Baratheon',
        sigil: 'Stag',
        age: 42
      }, {
        name: 'Cersei',
        house: 'Lannister',
        sigil: 'Lion',
        age: 36
      }, {
        name: 'Margaery',
        house: 'Tyrell',
        sigil: 'Rose',
        age: 18
      }, {
        name: 'Gregor',
        house: 'Clegane',
        sigil: 'Dog',
        age: 40
      }],

      rows5: [{
        name: 'Eddard',
        house: 'Stark',
        sigil: 'Wolf',
        age: 41
      }, {
        name: 'Davos',
        house: 'Seaworth',
        sigil: 'Onion',
        age: 42
      }, {
        name: 'Samwel',
        house: 'Tarly',
        sigil: 'Huntsman',
        age: 17
      }, {
        name: 'Lysa',
        house: 'Tully',
        sigil: 'Fish',
        age: 18
      }, {
        name: 'Viserys',
        house: 'Targaryen',
        sigil: 'Dragon',
        age: 21
      }],

      columns: [{
        head: 'Name',
        key: 'name'
      }, {
        head: 'House',
        key: 'house'
      }, {
        head: 'Sigil',
        key: 'sigil'
      }, {
        head: 'Age',
        key: 'age'
      }],

      columnsEditable: [{
        head: 'Name',
        key: 'name'
      }, {
        head: 'House',
        key: 'house',
        editable: true
      }, {
        head: 'Sigil',
        key: 'sigil',
        options: ['Wolf', 'Stag', 'Lion', 'Rose', 'Dog']
      }, {
        head: 'Age',
        key: 'age'
      }],
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
