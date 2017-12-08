<template>
  <div>
    <h1 class="title is-1">Create Guide</h1>
    <b-field>
      <b-input type="text" placeholder="Guidename" v-model="guide.name"></b-input>
    </b-field>

    <b-field label="Hero" v-if="heroes">
      <b-autocomplete v-model="heroSearch" placeholder="Search hero..." :data="filterdHeroList" field="name" :keep-first="true" @select="option => guide.hero = option ? heroes[heroes.indexOf(option)]['.key'] : null"></b-autocomplete>
    </b-field>

    <div v-if="selectedHero">

      <h1 class="title">Purchase Category</h1>
      <!-- PurchaseCategory -->
      <div>
        <button class="button" @click="addPC()">+ PurchaseCategory</button>

        <div class="columns is-multiline">
          <div class="column" v-for="(cat,c) in guide.purchaseCategory" :key="c">
            <div class="box">
              <b-field>
                <b-input type="text" placeholder="Category Name" size="is-small" v-model="cat.name"></b-input>
              </b-field>
              <div class="columns is-multiline">
                <div class="column">
                  <img :src="items.find(it => it['.key'] == item).icon" v-for="(item,i) in cat.items" :key="i" @click="removeItem(c,i)">
                </div>
              </div>
              <b-field>
                <b-autocomplete v-model="itemSearch" placeholder="Search item..." :data="filterdItemList" field="name" size="is-small" :keep-first="true" @select="option => option ? cat.items.push(items[items.indexOf(option)]['.key']) : null"></b-autocomplete>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <!-- End of PurchaseCategory -->
      <h1 class="title">Learn Order</h1>
      <!-- Learn Order -->
      <div class="columns is-multiline">
        <!-- Skills -->
        <div class="column is-12" v-for="(skill,s) in selectedHero.skills" :key="s">
          <img :src="skill.icon" alt="">
          <b-radio v-for="(learn,l) in guide.learnOrder" :key="l" :native-value="{isSkill: true, slot: s}" v-model="guide.learnOrder[l]" size="is-small"></b-radio>
        </div>
        <!-- End of Skills -->

        <!-- Talents -->
        <div class="column is-12">
          Talent
          <b-radio v-for="(learn,l) in guide.learnOrder" :key="l" :native-value="{isSkill: false}" v-model="guide.learnOrder[l]" size="is-small"></b-radio>
        </div>
        <!-- End of Talents -->
      </div>
      <!-- End of Learn Order -->

      <h1 class="title">Talent Tree</h1>
      <!-- Talent Tree -->
      <div>
        <div class="columns" v-for="tl in 4" :key="tl">
          <div class="column">
            <b-radio v-model="guide.talentTree[4-tl]" :native-value="0"></b-radio>
            {{selectedHero.talents[4-tl][0]}}
          </div>
          <div class="column is-narrow">{{25 - tl*5}}</div>
          <div class="column">
            <b-radio v-model="guide.talentTree[4-tl]" :native-value="1"></b-radio>
            {{selectedHero.talents[4-tl][1]}}
          </div>
        </div>

      </div>
      <!-- End of Talent Tree -->

    </div>

    <button class="button is-primary" @click="save()">Save</button>

  </div>

</template>

<script>
import Firebase from 'firebase'
import Moment from 'moment'

var heroDB = Firebase.database().ref('/Heroes')
var itemDB = Firebase.database().ref('/Items')
var guideDB = Firebase.database().ref('/Guides')

export default {
  name: 'UpdateGuide',
  props: ['guideKey'],

  data() {
    return {
      condition: true,
      heroes: null,
      items: null,
      heroSearch: '',
      itemSearch: '',
      guide: {
        memberID: '',
        name: '',
        hero: '',
        dateCreated: null,
        talentTree: [null, null, null, null],
        learnOrder: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        purchaseCategory: []
      }
    }
  },

  firebase: {
    heroes: heroDB,
    items: itemDB
  },

  computed: {
    filterdHeroList() {
      return this.heroes.filter(hero => {
        return (
          hero.name.toLowerCase().indexOf(this.heroSearch.toLowerCase()) >= 0
        )
      })
    },
    filterdItemList() {
      return this.items.filter(item => {
        return (
          item.name.toLowerCase().indexOf(this.itemSearch.toLowerCase()) >= 0
        )
      })
    },
    selectedHero() {
      return this.heroes.find(hero => hero['.key'] === this.guide.hero)
    }
  },

  methods: {
    addPC() {
      this.guide.purchaseCategory.push({
        name: '',
        items: []
      })
    },
    removeItem(c, i) {
      this.guide.purchaseCategory[c].items.splice(i, 1)
    },
    save() {
      if (!this.guide.dateCreated) {
        this.guide.dateCreated = new Moment().format()
      }

      if (!this.guide.memberID) {
        this.guide.memberID = this.$store.state.user.username
      }

      if (this.guideKey) {
        guideDB.child(this.guideKey).set(this.guide)
      } else {
        // New guide
        guideDB.push(this.guide)
      }
    }
  },
  mounted() {
    // Check permission
    if (!this.$store.state.user) {
      this.$router.push('/')
    } else {
      if (this.guideKey) {
        this.$bindAsObject(
          'guide',
          guideDB.child(this.guideKey),
          null,
          function() {
            // CheckOwner
            if (this.$store.state.user.username != this.guide.memberID) {
              this.$router.push('/guide/' + this.guideKey)
            }

            delete this.guide['.key']
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
