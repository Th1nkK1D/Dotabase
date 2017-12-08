<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Heroes</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updatehero">
          <button class="button">+ Hero</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(hero,key) in heroes" v-bind:key="key">
            <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <!-- <h3 class="title is-3">Popular Heroes</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Hero Name</th>
              <th>Number Of Player</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hero,key) in heroes" v-bind:key="key">
              <td>
                {{key+1}}
              </td>
              <td>
                <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
              </td>
              <td>
                num
              </td>
            </tr>
          </tbody>
        </table>
        </li>
        </ul> -->
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
    return {}
  },
  firebase: {
    heroes: heroDB
  }
}
</script>

<style scoped>

</style>
