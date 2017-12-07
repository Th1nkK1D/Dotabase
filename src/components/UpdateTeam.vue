<template>
    <div>
      <div class="columns">
        <div class="column">

        </div>
        <div class="column">
          <h1 class="title is-1">Update Team</h1>
          <br>
          <b-field label="Team Name">
          <b-input type="text" placeholder="Name" v-model="Team.name" ></b-input>
          </b-field>
          <b-field label="Team Region">
          <b-input type="text" placeholder="Region" v-model="Team.region" ></b-input>
          </b-field>
          <button class="button is-primary" @click="submit()">Submit</button>
          <br>
        </div>
        <div class="column">

        </div>
      </div>

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
