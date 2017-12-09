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
          <th>Rank</th>
          <th>Guide Name</th>
          <th>Hero Name</th>
          <th>Rating</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(guide,key) in guides" v-bind:key="key">
          <td>
            {{key+1}}
          </td>
          <td>
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
          </td>
          <td>
            {{guide.hero}}
          </td>
          <td>
            <span v-if="guideRating[guide['.key']]">{{guideRating[guide['.key']].sum / guideRating[guide['.key']].count}} ({{guideRating[guide['.key']].count}} votes)</span>
            <span v-else>-</span>
          </td>
          <td>
            {{guide.dateCreated}}
          </td>
        </tr>
      </tbody>
    </table>
    <br> {{guideRating}}

  </div>
</template>

<script>
import Firebase from 'firebase'
var guideDB = Firebase.database().ref('/Guides')
var ratingDB = Firebase.database().ref('/Rating')

export default {
  name: 'GuidesList',
  data() {
    return {}
  },
  firebase: {
    guides: guideDB,
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
            console.log(this.ratings[g][u])
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
    }
  }
}
</script>

<style scoped>

</style>
