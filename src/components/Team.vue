<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{team.name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateteam/'+team.name">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <p>Region: {{team.region}}</p>

    <br>

    <h1 class="title is-4" v-if="teamMembers.length > 0">Team Members:</h1>

    <ul>
      <li v-for="player in teamMembers" :key="player.name">-
        <router-link :to="'/player/'+player['.key']">{{player.name}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import Firebase from 'firebase'

var teamDB = Firebase.database().ref('/Teams')
var playerDB = Firebase.database().ref('/Players')

export default {
  name: 'Team',
  props: ['teamKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('team', teamDB.child(this.teamKey), null, function() {
      this.$bindAsArray(
        'teamMembers',
        playerDB.orderByChild('teamName').equalTo(this.team.name)
      )
    })
  },
  data() {
    return {
      team: {},
      teamMembers: []
    }
  }
}
</script>

<style scoped>

</style>
