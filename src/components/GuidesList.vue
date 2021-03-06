<template>
  <div>

    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Guides</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updateguide">
          <button class="button">+ Guide</button>
        </router-link>
      </div>
    </div>

    <b-field label="Hero" v-if="heroes">
      <b-autocomplete v-model="heroSearch" placeholder="Search hero..." :data="filterdHeroList" field="name" @select="option => selectHero(option)"></b-autocomplete>
    </b-field>

    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <a @click="sortKey = 'name'">Guide Name</a>
          </th>
          <th>
            <a @click="sortKey = 'hero'">Hero</a>
          </th>
          <th>
            <a @click="sortKey = 'rating'">Rating</a>
          </th>
          <th>
            <a @click="sortKey = 'dateCreated'">Date Created</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(guide,key) in sortedGuides" v-bind:key="key">
          <td>
            {{page*pageSize + key + 1}}
          </td>
          <td>
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
          </td>
          <td>
            <span v-if="guide.hero">{{heroes[heroes.findIndex(h => h['.key'] == guide.hero)].name}}</span>
          </td>
          <td>
            <span v-if="guideRating[guide['.key']]">{{guideRating[guide['.key']].sum / guideRating[guide['.key']].count}} ({{guideRating[guide['.key']].count}} votes)</span>
            <span v-else>-</span>
          </td>
          <td>
            {{guide.dateCreated | moment("ddd D MMM YY, HH:mm")}}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="columns">
      <div class="column is-narrow" v-if="page > 0">
        <button class="button" @click="changePage(-1)">&lt;</button>
      </div>
      <div class="column"></div>
      <div class="column is-narrow" v-if="guides.length == pageSize">
        <button class="button" @click="changePage(1)">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Moment from 'moment'

var guideDB = Firebase.database().ref('/Guides')
var heroDB = Firebase.database().ref('/Heroes')
var ratingDB = Firebase.database().ref('/Rating')

export default {
  name: 'GuidesList',
  data() {
    return {
      sortKey: 'dateCreated',
      guides: [],
      page: 0,
      firstDate: null,
      lastDate: null,
      pageSize: 5,
      heroSearch: '',
      selectedHero: ''
    }
  },
  firebase: {
    heroes: heroDB,
    ratings: ratingDB
  },
  computed: {
    filterdHeroList() {
      return this.heroes.filter(hero => {
        return (
          hero.name.toLowerCase().indexOf(this.heroSearch.toLowerCase()) >= 0
        )
      })
    },
    guideRating() {
      let avgList = {}

      for (let g = 0; g < this.ratings.length; g++) {
        let sum = 0
        let count = 0

        for (let u in this.ratings[g]) {
          if (u !== '.key') {
            sum += this.ratings[g][u].rating
            count++
          }
        }

        avgList[this.ratings[g]['.key']] = {
          sum: sum,
          count: count
        }
      }

      return avgList
    },
    sortedGuides() {
      if (this.sortKey == 'dateCreated') {
        // Number compare DESC
        return this.guides.sort((a, b) => b.dateCreated - a.dateCreated)
      } else if (this.sortKey == 'rating') {
        // Number compare DESC
        return this.guides.sort(
          (a, b) =>
            this.guideRating[b['.key']] && this.guideRating[a['.key']]
              ? this.guideRating[b['.key']].sum -
                this.guideRating[a['.key']].sum
              : this.guideRating[b['.key']] ? 1 : -1
        )
      } else {
        // String compare ASC
        return this.guides.sort((a, b) =>
          a[this.sortKey].localeCompare(b[this.sortKey])
        )
      }
    }
  },
  methods: {
    selectHero(option) {
      if (option) {
        this.selectedHero = option['.key']
        this.changePage(0)
      } else if (this.heroSearch.length == 0) {
        this.selectedHero = ''
        this.changePage(0)
      }
    },
    changePage(direction) {
      let queryTarget

      if (this.selectedHero.length > 0) {
        queryTarget = guideDB.orderByChild('hero').equalTo(this.selectedHero)
      } else {
        if (direction > 0) {
          // Next Page
          this.page += 1

          queryTarget = guideDB
            .orderByChild('dateCreated')
            .endAt(this.lastDate - 1)
            .limitToLast(this.pageSize)
        } else if (direction < 0) {
          // Previous Page
          this.page -= 1

          queryTarget = guideDB
            .orderByChild('dateCreated')
            .startAt(this.firstDate + 1)
            .limitToLast(this.pageSize)
        } else {
          // Reset page
          this.page = 0

          queryTarget = guideDB
            .orderByChild('dateCreated')
            .endAt(new Moment().unix())
            .limitToLast(this.pageSize)
        }
      }

      this.$bindAsArray('guides', queryTarget, null, function() {
        if (this.guides.length > 0) {
          this.lastDate = this.guides[0].dateCreated
          this.firstDate = this.guides[this.guides.length - 1].dateCreated
        }
      })
    }
  },
  mounted() {
    this.changePage(0)
  }
}
</script>

<style scoped>

</style>
