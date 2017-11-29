<template>
  <div class="columns">
    <div class="column is-2"></div>

    <div class="column is-8">
      <b-field>
        <b-input type="text" placeholder="Guidename" v-model="guide.name"></b-input>
      </b-field>

      <b-field label="Hero">
        <b-autocomplete v-model="heroSearch" :data="filterdHeroList" field="name" :keep-first="true" @select="option => guide.heroKey = option ? option['.key'] : null"></b-autocomplete>
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
       heroKey: '',
     },
     heroSearch: ''
    }
  },

  firebase:  {
    heroes: heroDB // Read
  },

  computed: {
    filterdHeroList() {
      return this.heroes.filter((hero) => {
        return hero.name.toLowerCase().indexOf(this.heroSearch.toLowerCase()) >= 0
      })
    }
  }
}
</script>

<style scoped>

</style>
