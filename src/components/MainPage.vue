<template>
  <div>


    




    
    <br>
    <h1>Welcome to Dotabase!</h1>
    <br>
    
    

    
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
  /* .icon {
    height:100px;
    width:100px ;
  } */
</style>
