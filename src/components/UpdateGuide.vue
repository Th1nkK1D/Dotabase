<template>
  <div>
    <b-field>
      <b-input type="text" placeholder="Guidename" v-model="guide.name"></b-input>
    </b-field>

    <b-field label="Hero">
      <b-autocomplete v-model="heroSearch" placeholder="Search hero..." :data="filterdHeroList" field="name" :keep-first="true" @select="option => guide.hero = option ? option : null"></b-autocomplete>
    </b-field>

    <button class="button" @click="addPC()">+ PurchaseCategory</button>

    <!-- PurchaseCategory List -->
    <div class="columns is-multiline">
      <div class="column" v-for="(cat,c) in guide.purchaseCategory" :key="c">
        <div class="box">
          <b-field>
            <b-input type="text" placeholder="Category Name" size="is-small" v-model="cat.name"></b-input>
          </b-field>
          <div class="columns is-multiline">
            <div class="column">
              <img :src="item.icon" v-for="(item,i) in cat.items" :key="i" @click="removeItem(c,i)">
            </div>
          </div>
          <b-field>
            <b-autocomplete v-model="itemSearch" placeholder="Search item..." :data="filterdItemList" field="name" size="is-small" :keep-first="true" @select="option => option ? cat.items.push(option) : null"></b-autocomplete>
          </b-field>
        </div>
      </div>
    </div><!-- End of PurchaseCategory List -->

    <!-- Learn Order -->
    <div class="columns is-multiline" v-if="guide.hero">
      <!-- Skills -->
      <div class="column is-12" v-for="(skill,s) in guide.hero.skills" :key="s">
        <img :src="skill.icon" alt="">
        <b-radio v-for="(learn,l) in guide.learnOrder" :key="l" :native-value="{isSkill: true, slot: s}" v-model="guide.learnOrder[l]" size="is-small"></b-radio>
      </div><!-- End of Skills -->

      <!-- Talents -->
      <div class="column is-12">
        Talent
        <b-radio v-for="(learn,l) in guide.learnOrder" :key="l" :native-value="{isSkill: false}" v-model="guide.learnOrder[l]" size="is-small"></b-radio>
      </div><!-- End of Talents -->
    </div><!-- End of Learn Order -->

    {{guide.learnOrder}}
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
       hero: '',
       learnOrder: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
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
    },
    removeItem(c,i) {
      this.guide.purchaseCategory[c].items.splice(i,1)
    }
  }
}
</script>

<style scoped>

</style>
