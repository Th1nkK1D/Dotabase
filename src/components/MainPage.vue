<template>
  <div>
    <img src="../assets/dota2.png">
    <br>
    <h1>Welcome to Dotabase!</h1>
    <br>
    <router-link to = "hero">
      <button>Heroes List</button>
    </router-link>
    <router-link to = "guide">
      <button>Guides List</button>
    </router-link>
    <router-link to = "item">
      <button>Items List</button>
    </router-link>
    <router-link to = "player">
      <button>Players List</button>
    </router-link>
    <router-link to = "team">
      <button>Teams List</button>
    </router-link>
    <br>
    <router-link to = "login">
      <button>Login</button>
    </router-link>
    <router-link to = "register">
      <button>Register</button>
    </router-link>
    <router-link to = "guidecomment">
      <button>GuideComment</button>
    </router-link>
    <br>
    <router-link to = "updateguide">
      <button>UpdateGuide</button>
    </router-link>
    <router-link to = "updatehero">
      <button>UpdateHero</button>
    </router-link>
    <router-link to = "updateitem">
      <button>UpdateItem</button>
    </router-link>
    <router-link to = "updateplayer">
      <button>UpdatePlayer</button>
    </router-link>
    <router-link to = "updateteam">
      <button>UpdateTeam</button>
    </router-link>
  <br>
  <br>
  <h3>Most Active Member</h3>
  <br>
  <h3>Heroes With Highest Guide Number</h3>
  <br> 


   






  </div>
</template>

<script>

import Firebase from 'firebase'
var heroDB = Firebase.database().ref('/Heroes')
var playerDB = Firebase.database().ref('/Players')
var itemDB = Firebase.database().ref('/Items')
var MemberDB = Firebase.database().ref('/Members')
var teamDB = Firebase.database().ref('/Teams')

export default {
  name: 'MainPage',
  data () {
    return {
      // Add data here
    }
  },
  firebase:  {
    players: playerDB
  }
}
</script>

<style scoped>

</style>
