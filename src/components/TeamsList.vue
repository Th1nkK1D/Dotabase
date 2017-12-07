<template>
  <div>
    <h1 class="title is-1">Teams</h1>
    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(team,key) in teams" v-bind:key="key">
              <router-link v-bind:to="'team/'+team['.key']">{{team.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Highest Average MMR Teams</h3>
        <br>
      </div>
    </div>



  </div>
</template>

<script>
import Firebase from 'firebase'
var teamDB = Firebase.database().ref('/Teams')

export default {
  name: 'TeamsList',
  data() {
    return {

    }
  },
  firebase:  {
    teams: teamDB
  }
}
</script>

<style scoped>

</style>
