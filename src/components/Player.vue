<template>
  <div>

    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{player.name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateplayer/'+player.name">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-7">
        <img :src="player.avatar" :alt="player.name">
        <p>Team Name: {{player.teamName}}</p>
        <p>Role: {{player.role}}</p>
        <p>Solo MMR: {{player.mmrSolo}}</p>
        <p>Party MMR: {{player.mmrParty}}</p>
        <p>Match Played: {{player.matchPlayed}}</p>
      </div>
      <div class="column is-5">
        <h5 class="title is-5">Hero Ranks</h5>
        <table class="table">
          <thead>
            <tr>
              <th>Hero Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="heroRanks in player.heroRanks" :key="heroRanks.name">
              <td>
                {{heroRanks.heroName}}
              </td>
              <td>
                {{heroRanks.score}}
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>

  </div>
</template>

<script>
import Firebase from 'firebase'
var playerDB = Firebase.database().ref('/Players')

export default {
  name: 'Player',
  props: ['playerKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('player', playerDB.child(this.playerKey))
  },
  data() {
    return {
      player: {}
    }
  }
}
</script>

<style scoped>

</style>
