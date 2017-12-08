<template>
  <div>

    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Guides</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updateguide">
          <button class="button">+ Guide</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(guide,key) in guides" v-bind:key="key">
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Highest Rating Guides</h3>
        <ul>
          <li v-for="(guide,key) in guides" v-bind:key="key">
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
            Rating:
          </li>
        </ul>
        <br>
      </div>
    </div>

  </div>
</template>

<script>
import Firebase from 'firebase'
var guideDB = Firebase.database().ref('/Guides')

export default {
  name: 'GuidesList',
  data() {
    return {}
  },
  firebase: {
    guides: guideDB
  }
}
</script>

<style scoped>

</style>
