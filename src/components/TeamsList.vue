<template>
  <div>
    <h1>Teams</h1>

    <ul>
        <li v-for="(team,key) in teams" v-bind:key="key">
            <router-link v-bind:to="'team/'+team['.key']">{{team.name}}</router-link>
        </li>
    </ul>

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
