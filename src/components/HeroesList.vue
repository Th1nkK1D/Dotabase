<template>
  <div>
    <h1>Heroes</h1>

    <ul>
        <li v-for="(hero,key) in heroes" v-bind:key="key">
            <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
        </li>
    </ul>

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
