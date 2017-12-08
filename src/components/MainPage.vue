<template>
  <div>
    <!-- http://fc00.deviantart.net/fs71/f/2012/355/9/d/dota_2_icon_for_windows_7_by_excharny-d5ook5y.png -->
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome To Dotabase!
          </h1>
          <br>
          <h2 class="subtitle">
            What is Dotabase?
          </h2>
          It is the website for Dota2 Player to learn and share the guide with others user.
        </div>
      </div>
    </section>

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
