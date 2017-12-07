<template>
  <div>
    <h1>Players</h1>

    
    <br>
    <br>
    



    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(player,key) in players" v-bind:key="key">
              <router-link v-bind:to="'player/'+player['.key']">{{player.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Player With Highest Solo MMR</h3>
      <br>
        <ul>
          <li v-for="(player,key) in players" v-bind:key="key">
                <router-link v-bind:to="'player/'+player['.key']">{{player.name}} </router-link>
                Solo MMR: {{player.mmrSolo}}
          </li>
        </ul>
      <br>
      <h3>Player With Highest Party MMR</h3>
      <br>
        <ul>
          <li v-for="(player,key) in players" v-bind:key="key">
                <router-link v-bind:to="'player/'+player['.key']">{{player.name}} </router-link>
                Party MMR: {{player.mmrParty}}
          </li>
        </ul>
      <br>
      <h3>Player With Highest Match Played</h3>
      <br>
        <ul>
          <li v-for="(player,key) in players" v-bind:key="key">
                <router-link v-bind:to="'player/'+player['.key']">{{player.name}} </router-link>
                Match Played: {{player.matchPlayed}}
          </li>
        </ul>
      <br>
      </div>
    </div>




  </div>
</template>

<script>
import Firebase from 'firebase'
var playerDB = Firebase.database().ref('/Players')

export default {
  name: 'PlayersList',
  data() {
    return {

    }
  },
  firebase:  {
    players: playerDB
  }
}
</script>

<style scoped>

</style>
