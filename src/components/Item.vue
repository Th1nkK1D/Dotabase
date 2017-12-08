<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{item.name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateitem/'+itemKey">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <img :src="item.icon" :alt="item.name">
        <h5 class="title is-5">Lore</h5>
        <p>{{item.lore}}</p>
        <br>
        <p>Category: {{item.category}}</p>
        <br>
        <p>Price : {{item.price}}</p>

        <p>Recipes:
          <span v-for="recipe in item.recipe" :key="recipe">{{recipe}} </span>
        </p>
        <p>Recipe Price: {{item.recipePrice}}</p>
      </div>
      <div class="column is-2">
        <h5 class="title is-5">Stat</h5>
        <ul>
          <li v-for="stat in item.stats" :key="stat.name">{{stat.name}}:
            <i>{{stat.value}}</i>
          </li>
        </ul>
      </div>
      <div class="column is-4">
        <h5 class="title is-5">Ability</h5>
        <div v-for="ability in item.abilities" :key="ability.name">
          <h6 class="title is-6">{{ability.name}}</h6>
          <p>Type : {{ability.abilityType}}</p>
          <p>Description : {{ability.description}}</p>
          <br>
          <ul>
            <li v-for="attr in ability.attributes" :key="attr.name">{{attr.name}}:
              <i>{{attr.value}}</i>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Firebase from 'firebase'
var itemDB = Firebase.database().ref('/Items')

export default {
  name: 'Item',
  props: ['itemKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('item', itemDB.child(this.itemKey))
  },
  data() {
    return {
      item: {}
    }
  }
  //   computed: {
  //     sortedTalent() {
  //       if(this.hero !== undefined && this.hero.talents !== undefined) {
  //         return this.hero.talents.reverse()
  //       } else {
  //         return null
  //       }
  //     }
  //   },
}
</script>

<style scoped>

</style>
