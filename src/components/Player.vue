<template>
  <div>
    <h1>{{player.name}}</h1>
    <img :src="player.avatar" :alt="player.name">
    <p>Team Name: {{player.teamName}}</p>
    <p>Role: {{player.role}}</p>
    <p>Solo MMR: {{player.mmrSolo}}</p>
    <p>Party MMR: {{player.mmrParty}}</p>
    <p>Match Played: {{player.matchPlayed}}</p>

    <h2>Hero Ranks</h2>
    <ul>
      <li v-for="heroRanks in player.heroRanks" :key="heroRanks.name">{{heroRanks.heroName}}:
        <i>{{heroRanks.score}}</i>
      </li>
    </ul>

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
