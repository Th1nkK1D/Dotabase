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

    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player Name</th>
          <th>Solo MMR</th>
          <th>Party MMR</th>
          <th>Match Played</th>
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
          <td>
            {{player.mmrParty}}
          </td>
          <td>
            {{player.matchPlayed}}
          </td>
        </tr>
      </tbody>
    </table>
    <br>
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
