<template>
  <div>
    <img src="../assets/dota2.png">
    <br>
    <h1>Welcome to Dotabase!</h1>
    <br>
    <router-link to = "guidecomment">
      <button>GuideComment</button>
    </router-link>
    <router-link to = "login">
      <button>Login</button>
    </router-link>
    <router-link to = "register">
      <button>Register</button>
    </router-link>
    <router-link to = "updateguide">
      <button>UpdateGuide</button>
    </router-link>
    <br>
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

  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
