<template>
  <div>
    <h1 class="title is-1">Create Guide</h1>
    <b-field>
      <b-input type="text" placeholder="Guidename" v-model="name"></b-input>
    </b-field>

    <b-field label="Hero">
      <b-autocomplete v-model="heroSearch" placeholder="Search hero..." :data="filterdHeroList" field="name" :keep-first="true" @select="option => hero = option ? option : null"></b-autocomplete>
    </b-field>

    <div v-if="hero">

      <h1 class="title">Purchase Category</h1>
      <!-- PurchaseCategory -->
      <div>
        <button class="button" @click="addPC()">+ PurchaseCategory</button>

        <div class="columns is-multiline">
          <div class="column" v-for="(cat,c) in purchaseCategory" :key="c">
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
        </div>
      </div><!-- End of PurchaseCategory -->

      <h1 class="title">Learn Order</h1>
      <!-- Learn Order -->
      <div class="columns is-multiline">
        <!-- Skills -->
        <div class="column is-12" v-for="(skill,s) in hero.skills" :key="s">
          <img :src="skill.icon" alt="">
          <b-radio v-for="(learn,l) in learnOrder" :key="l" :native-value="{isSkill: true, slot: s}" v-model="learnOrder[l]" size="is-small"></b-radio>
        </div><!-- End of Skills -->

        <!-- Talents -->
        <div class="column is-12">
          Talent
          <b-radio v-for="(learn,l) in learnOrder" :key="l" :native-value="{isSkill: false}" v-model="learnOrder[l]" size="is-small"></b-radio>
        </div><!-- End of Talents -->
      </div><!-- End of Learn Order -->

      <h1 class="title">Talent Tree</h1>
      <!-- Talent Tree -->
      <div>
        <div class="columns" v-for="(talentLvl,tl) in talentTree" :key="tl">
          <div class="column">
            <b-radio v-model="talentTree[tl]" :native-value="0"></b-radio>
            {{hero.talents[3-tl][0]}}
          </div>
          <div class="column is-narrow">{{25 - tl*5}}</div>
          <div class="column">
            <b-radio v-model="talentTree[tl]" :native-value="1"></b-radio>
            {{hero.talents[3-tl][1]}}
          </div>
        </div>
        {{talentTree}}
      </div><!-- End of Talent Tree -->
    </div>

    <button class="button is-primary" @click="save()">Save</button>

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
      heroSearch: '',
      itemSearch: '',
      name: '',
      hero: '',
      purchaseCategory: [],
      learnOrder: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 
      talentTree: [null,null,null,null],
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
    },
  },

  methods: {
    addPC() {
      this.purchaseCategory.push({
        name: '',
        items: []
      })
    },
    removeItem(c,i) {
      this.purchaseCategory[c].items.splice(i,1)
    },
    save() {
      let guide = {}

      guide.name = this.name
      guide.hero = this.hero['.key']

      guide.purchaseCategory = []
      
      for (let c = 0; c < this.purchaseCategory.length; c++) {
        guide.purchaseCategory.push({
          name: this.purchaseCategory[c].name,
          items: this.purchaseCategory[c].items.map(i => i['.key'])
        })
      }

      guide.learnOrder = this.learnOrder
      guide.talentTree = [].concat(this.talentTree).reverse()

      guide.memberID = 'testuser'
      guide.dateCreated = new Date()

      console.log(guide)
    }
  }
}
</script>

<style scoped>

</style>
