<template>
  <div>
    <h1>{{team.name}}</h1>
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
