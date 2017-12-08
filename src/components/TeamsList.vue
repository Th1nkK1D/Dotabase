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
          <th>Rank</th>
          <th>Team Name</th>
          <th>Region</th>
          <th>Average MMR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team,key) in teams" v-bind:key="key">
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
            num
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

export default {
  name: 'TeamsList',
  data() {
    return {}
  },
  firebase: {
    teams: teamDB
  }
}
</script>

<style scoped>

</style>
