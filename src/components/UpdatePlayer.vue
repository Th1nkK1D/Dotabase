<template>
    
    <div>
        <h1>Update Player</h1>
        <br>
        <label for="name">Player Name</label>
        <input type="text" name="name" v-model="Player.name">
        <br>
        <label for="playeravatar">Avatar</label>
        <input type="text" name="playeravatar" v-model="Player.avatar">
        <br>
        <label for="teamname">Team Name</label>
        <input type="text" name="teamname" v-model="Player.teamName">
        <br>
        <label for="playerrole">Role</label>
        <input type="text" name="playerrole" v-model="Player.role">
        <br>
        <label for="solommr">MMR Solo</label>
        <input type="number" name="solommr" v-model.number="Player.mmrSolo">
        <br>
        <label for="partymmr">MMR Party</label>
        <input type="number" name="partymmr" v-model.number="Player.mmrParty">
        <br>
        <label for="matchplayed">Match Played</label>
        <input type="number" name="matchplayed" v-model.number="Player.matchPlayed">
        <br>
        <br>
        <br>
        <h2>Hero Rank:</h2>
        <label for="heroname">Hero Name</label>
        <input type="text" name="heroname" v-model="Player.heroRanks[0].heroName">
        <br>
        <label for="heroscore">Hero Score</label>
        <input type="number" name="heroscore" v-model.number="Player.heroRanks[0].score">
        <br>
        <button v-on:click="submit()">Submit</button>
        <br>
        {{Player.heroRanks[0].score}}
        <br>
        {{Player}}
    </div>



</template>

<script>
import Firebase from 'firebase'
var playerdb = Firebase.database().ref('/Players')
export default {
  name: 'UpdatePlayer',
  data () {
    return {
      Player: {
        name: '',
        avatar: '',
        teamName: '',
        role: '',
        mmrSolo: null,
        mmrParty: null,
        matchPlayed: null,
        heroRanks: [{
          heroName: '',
          score: null,
        }],
      }
    }
  },
  methods: {
    submit: function() {
      playerdb.child(this.Player.name).set(this.Player)
    }
  }
}
</script>

<style scoped>

</style>
