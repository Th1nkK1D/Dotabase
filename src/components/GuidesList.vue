<template>
  <div>
    <h1>Guides</h1>

    <ul>
        <li v-for="(guide,key) in guides" v-bind:key="key">
            <router-link v-bind:to="'guide/'+guide['.key']">{{guide.name}}</router-link>
        </li>
    </ul>

  </div>
</template>

<script>
import Firebase from 'firebase'
var guideDB = Firebase.database().ref('/Guides')

export default {
  name: 'GuidesList',
  data() {
    return {

    }
  },
  firebase:  {
    guides: guideDB
  }
}
</script>

<style scoped>

</style>
