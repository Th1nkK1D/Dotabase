<template>
  <div class="columns">
    <div class="column is-2"></div>

    <div class="column is-8">
      <b-field>
        <b-input type="text" placeholder="Guidename" v-model="guide.name"></b-input>
      </b-field>

      <b-field label="Hero">
        <b-autocomplete v-model="heroSearch" :data="filterdHeroList" field="name" :keep-first="true" @select="option => guide.heroKey = option ? option['.key'] : null"></b-autocomplete>
      </b-field>

      <button class="button" @click="addPC()">+ PurchaseCategory</button>

      <!-- PurchaseCategory List -->
      <div class="columns is-multiline">
        <div class="column is-12" v-for="(cat,c) in guide.purchaseCategory" :key="c">
          <div class="box">
            <b-field>
              <b-input type="text" placeholder="Category Name" size="is-small" v-model="cat.name"></b-input>
            </b-field>
            <div class="columns is-multiline">
              <div class="column">
                <img :src="item.icon"  v-for="item in cat.items" :key="item.name">
              </div>
            </div>
            <b-field label="Item">
              <b-autocomplete v-model="itemSearch" :data="filterdItemList" field="name" :keep-first="true" @select="option => option ? cat.items.push(option) : null"></b-autocomplete>
            </b-field>
          </div>
        </div>
      </div><!-- End of PurchaseCategory List -->
    </div>

    <div class="column is-2"></div>
  </div>
</template>

<script>
import Firebase from 'firebase'
var heroDB = Firebase.database().ref('/Heroes')
var itemDB = Firebase.database().ref('/Items')

export default {
  name: 'UpdateGuide',

  data () {
    return {
     guide: {
       name: '',
       heroKey: '',
       purchaseCategory: []
     },
     heroSearch: '',
     itemSearch: ''
    }
  },

  firebase:  {
    heroes: heroDB,
    items: itemDB
  },

  computed: {
    filterdHeroList() {
      return this.heroes.filter((hero) => {
        return hero.name.toLowerCase().indexOf(this.heroSearch.toLowerCase()) >= 0
      })
    },
    filterdItemList() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(this.itemSearch.toLowerCase()) >= 0
      })
    }
  },

  methods: {
    addPC() {
      this.guide.purchaseCategory.push({
        name: '',
        items: []
      })
    }
  }
}
</script>

<style scoped>

</style>
