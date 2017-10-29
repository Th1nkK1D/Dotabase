<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase'

// Config Firebase
var config = {
  apiKey: "AIzaSyAxiBf44qWEyekWQcxuDWzhEuzXsSwvt3s",
  authDomain: "dotabase-fe206.firebaseapp.com",
  databaseURL: "https://dotabase-fe206.firebaseio.com",
  projectId: "dotabase-fe206",
  storageBucket: "dotabase-fe206.appspot.com",
  messagingSenderId: "737827328503"
};

Firebase.initializeApp(config)

export default {
  name: 'app'
}
</script>

<style>

</style>
