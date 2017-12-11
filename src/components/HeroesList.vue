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

    <b-field>
      <b-input type="text" placeholder="Search hero..." v-model="heroSearch"></b-input>
    </b-field>

    <div class="columns is-multiline is-gapless">
      <div class="column is-1" v-for="(hero,key) in filteredHeroList" v-bind:key="key">
        <router-link v-bind:to="'hero/'+hero['.key']" class="heroicon">
          <img :src="hero.avatar" alt="" width="100%" height="auto">
          <span>{{hero.name}}</span>
        </router-link>
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
      heroSearch: ''
    }
  },
  firebase: {
    heroes: heroDB
  },
  computed: {
    filteredHeroList() {
      if (this.heroSearch.length > 0) {
        return this.heroes.filter(hero => {
          return (
            hero.name.toLowerCase().indexOf(this.heroSearch.toLowerCase()) >= 0
          )
        })
      } else {
        return this.heroes
      }
    }
  }
}
</script>

<style scoped>
.heroicon {
  position: relative;
}

.heroicon > span {
  position: absolute;
  bottom: 0;
  color: white;
  margin: 5px;
}
.heroicon > img {
  filter: brightness(0.5);
}

.heroicon:hover > img {
  filter: brightness(1);
}
</style>
