<template>
  <div>

    <br>
    <h1>Welcome to Dotabase!</h1>
    <br> What is Dotabase?<br> It is the website for Dota2 Player to learn and share the guide with others user.

    <br>
    <br>
    <h3>Most Active Member</h3>
    <ul>
      <li v-for="(member,key) in members" v-bind:key="key">
        <router-link v-bind:to="'member/'+member['.key']">{{member.username}}</router-link>
        Score :
      </li>
    </ul>
    <br>
    <br>
    <h3>Heroes With Highest Guide Number</h3>
    <ul>
      <li v-for="(hero,key) in heroes" v-bind:key="key">
        <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
        Guides :
      </li>
    </ul>

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
  data() {
    return {
      // Add data here
    }
  },
  firebase: {
    players: playerDB,
    members: MemberDB,
    heroes: heroDB
  }
}
</script>

<style scoped>
/* .icon {
    height:100px;
    width:100px ;
  } */
</style>
