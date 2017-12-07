<template>
  <div>
  <h1 class="title is-1">Heroes</h1>
  <router-link to="updatehero">
    <button class="button">+ Hero</button>
  </router-link>

  <div class="columns">
    <div class="column">
      <ul>
        <li v-for="(hero,key) in heroes" v-bind:key="key">
          <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
        </li>
    </ul>
    </div>
    <div class="column">
      <h3>Popular Heroes</h3>
      <br>
    </div>
  </div>

  </div>
</template>

<script>
import Firebase from 'firebase'
var heroDB = Firebase.database().ref('/Heroes')

export default {
  name: 'HeroesList',
  data() {
    return {

    }
  },
  firebase:  {
    heroes: heroDB
  }
}
</script>

<style scoped>

</style>
