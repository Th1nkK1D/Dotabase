<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Teams</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updateteam">
          <button class="button">+ Team</button>
        </router-link>
      </div>
    </div>

    <h3 class="title is-3">Highest Average MMR Teams</h3>
    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <a @click="sortKey = 'name'">Team Name</a>
          </th>
          <th>
            <a @click="sortKey = 'region'">Region</a>
          </th>
          <th>
            <a @click="sortKey = 'teamMmr'">Average MMR</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team,key) in sortedTeams" v-bind:key="key">
          <td>
            {{key+1}}
          </td>
          <td>
            <router-link v-bind:to="'team/'+team['.key']">{{team.name}}</router-link>
          </td>
          <td>
            {{team.region}}
          </td>
          <td>
            {{ teamMmr[team.name] ? teamMmr[team.name].sum / teamMmr[team.name].count : '-' }}
          </td>
        </tr>
      </tbody>
    </table>
    <br>

  </div>
</template>

<script>
import Firebase from 'firebase'
var teamDB = Firebase.database().ref('/Teams')
var playerDB = Firebase.database().ref('/Players')

export default {
  name: 'TeamsList',
  data() {
    return {
      sortKey: null
    }
  },
  firebase: {
    teams: teamDB.orderByChild('name'),
    players: playerDB
  },
  computed: {
    teamMmr() {
      let avgList = {}

      for (let i = 0; i < this.players.length; i++) {
        if (!avgList[this.players[i].teamName]) {
          avgList[this.players[i].teamName] = {
            count: 1,
            sum: this.players[i].mmrSolo
          }
        } else {
          avgList[this.players[i].teamName].count++
          avgList[this.players[i].teamName].sum += this.players[i].mmrSolo
        }
      }

      return avgList
    },
    sortedTeams() {
      if (!this.sortKey) {
        return this.teams
      } else {
        if (this.sortKey == 'teamMmr') {
          // Number compare DESC
          return this.teams.sort(
            (a, b) =>
              (this.teamMmr[b.name]
                ? this.teamMmr[b.name].sum / this.teamMmr[b.name].count
                : 0) -
              (this.teamMmr[a.name]
                ? this.teamMmr[a.name].sum / this.teamMmr[a.name].count
                : 0)
          )
        } else {
          // String compare ASC
          return this.teams.sort((a, b) =>
            a[this.sortKey].localeCompare(b[this.sortKey])
          )
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
