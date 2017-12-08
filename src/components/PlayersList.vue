<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Players</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updateplayer">
          <button class="button">+ Player</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(player,key) in players" v-bind:key="key">
            <router-link v-bind:to="'player/'+player['.key']">{{player.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3 class="title is-3">Player With Highest Solo MMR</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Solo MMR</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(player,key) in players" v-bind:key="key">
              <td>
                {{key+1}}
              </td>
              <td>
                <router-link v-bind:to="'player/'+player['.key']">{{player.name}} </router-link>
              </td>
              <td>
                {{player.mmrSolo}}
              </td>
            </tr>
          </tbody>
        </table>
        <br>
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
    return {}
  },
  firebase: {
    players: playerDB
  }
}
</script>

<style scoped>

</style>
