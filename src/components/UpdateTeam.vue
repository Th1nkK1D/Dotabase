<template>
    
    <div>
        <h1>Update Team</h1>
        <br>
        <label for="teamname">Team Name</label>
        <input type="text" name="teamname" v-model="Team.name">
        <br>
        <label for="teamregion">Team Region</label>
        <input type="text" name="teamregion" v-model="Team.region">
        <br>
        <button v-on:click="submit()">Submit</button>
        <br>
        {{Team}}
    </div>
  


</template>

<script>
import Firebase from 'firebase'
var teamdb = Firebase.database().ref('/Teams')
export default {
  name: 'UpdateTeam',
  data () {
    return {
      Team : {
        name: '',
        region: '',
      }
    }
  },
  methods: {
    submit: function() {
      teamdb.child(this.Team.name).set(this.Team)
    }
  }
}
</script>

<style scoped>

</style>
