<template>
  <div>
    Welcome to Dotabase!
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
