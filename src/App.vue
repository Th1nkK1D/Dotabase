<template>

  <div>
    <nav class="navbar is-dark is-bold">
      <div class="navbar-brand">
        <a class="navbar-item">
          <router-link to="/">
            <span class="icon">
              <img src="https://steamuserimages-a.akamaihd.net/ugc/559884055410135065/429CE099233669AB4C0322F6F211053A0B589094/">
            </span>

          </router-link>
        </a>
        <!-- <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div> -->
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/hero">
            Heroes
          </router-link>
          <router-link class="navbar-item" to="/item">
            Items
          </router-link>
          <router-link class="navbar-item" to="/guide">
            Guides
          </router-link>
          <router-link class="navbar-item" to="/player">
            Players
          </router-link>
          <router-link class="navbar-item" to="/team">
            Teams
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <router-link v-if="!user" class="button is-success is-outlined" to="login">Login</router-link>
              <a v-else class="button is-success is-outlined" @click="logout()">Hi, {{user.username}} (Logout)</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

// Config Firebase
var config = {
  apiKey: 'AIzaSyAxiBf44qWEyekWQcxuDWzhEuzXsSwvt3s',
  authDomain: 'dotabase-fe206.firebaseapp.com',
  databaseURL: 'https://dotabase-fe206.firebaseio.com',
  projectId: 'dotabase-fe206',
  storageBucket: 'dotabase-fe206.appspot.com',
  messagingSenderId: '737827328503'
}

Firebase.initializeApp(config)

export default {
  name: 'app',
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout', this.$router)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px;
}
</style>
