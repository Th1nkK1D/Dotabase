<template>

  <div>
    <nav class="navbar is-light">
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
          <a class="navbar-item">
            <router-link to="/hero">
              Heroes
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/guide">
              Guides
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/item">
              Items
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/player">
              Players
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/team">
              Teams
            </router-link>
          </a>

          <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" >
            Overview
          </a>
          <a class="navbar-item">
            Modifiers
          </a>
          <a class="navbar-item">
            Columns
          </a>
          <a class="navbar-item">
            Layout
          </a>
          <a class="navbar-item">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item is-active">
            Components
          </a>
        </div>
      </div> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <a class="button is-info is-outlined" href="https://www.facebook.com/Th1nkK1D">
                Contract Us
              </a>

              <p class="control">
                <a class="button is-success is-outlined">
                  <span v-if="!user">
                    <router-link to="login">Login</router-link>
                  </span>
                  <span v-else>
                    Hi, {{user.username}}
                    <a @click="logout()">(Logout)</a>
                  </span>
                </a>
              </p>
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
