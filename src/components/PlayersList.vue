<template>
  <div>
    <h1>Players</h1>

    <ul>
        <li v-for="(player,key) in players" v-bind:key="key">
            <router-link v-bind:to="'player/'+player['.key']">{{player.name}}</router-link>
        </li>
    </ul>

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
