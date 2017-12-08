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
    <p>Team Name: {{team.name}}</p>
    <p>Region: {{team.region}}</p>

  </div>
</template>

<script>
import Firebase from 'firebase'
var teamDB = Firebase.database().ref('/Teams')

export default {
  name: 'Team',
  props: ['teamKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('team', teamDB.child(this.teamKey))
  },
  data() {
    return {
      team: {}
    }
  }
}
</script>

<style scoped>

</style>
