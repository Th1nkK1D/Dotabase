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
            {{key+1}}
          </td>
          <td>
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
          </td>
          <td>
            <span v-if="guide.hero && heroes[guide.hero]">{{heroes[guide.hero].name}}</span>
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
    <br>
  </div>
</template>

<script>
import Firebase from 'firebase'
var guideDB = Firebase.database().ref('/Guides')
var heroDB = Firebase.database().ref('/Heroes')
var ratingDB = Firebase.database().ref('/Rating')

export default {
  name: 'GuidesList',
  data() {
    return {
      sortKey: 'dateCreated'
    }
  },
  firebase: {
    guides: guideDB,
    heroes: {
      source: heroDB,
      asObject: true
    },
    ratings: ratingDB
  },
  computed: {
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
  }
}
</script>

<style scoped>

</style>
