<template>
  <div class="columns">
    <div class="column is-2"></div>

    <div class="column is-8">
      <b-field>
        <b-input type="text" placeholder="Guidename" v-model="guide.name"></b-input>
      </b-field>

      <b-field label="Hero">
        <b-autocomplete v-model="guide.heroName" :data="heroList" @select="option => selected = option">
        </b-autocomplete>
      </b-field>

      {{guide}}
    </div>

    <div class="column is-2"></div>
  </div>
</template>

<script>
import Firebase from 'firebase'
var heroDB = Firebase.database().ref('/Heroes')

export default {
  name: 'UpdateGuide',

  data () {
    return {
     guide: {
       name: '',
       heroName: '',
     }
    }
  },

  firebase:  {
    heroes: heroDB // Read
  },

  computed: {
    heroList() {
      return this.heroes.map(h => h.name)
    }
  }
}
</script>

<style scoped>

</style>
