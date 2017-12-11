<template>
  <div v-if="itemKey && items[itemKey]">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{items[this.itemKey].name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateitem/'+itemKey">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <img :src="items[this.itemKey].icon" :alt="items[this.itemKey].name">
        <h5 class="title is-5">Lore</h5>
        <p>{{items[this.itemKey].lore}}</p>
        <br>
        <p>Category: {{items[this.itemKey].category}}</p>
        <br>

        <p>Total Price : {{items[this.itemKey].price}}</p>

        <div v-if="items[this.itemKey].recipe">
          <p>Recipes: </p>
          <ul>
            <li v-for="recipe in items[this.itemKey].recipe" :key="recipe">-
              <router-link :to="'/item/'+recipe">{{items[recipe].name}}</router-link> ({{items[recipe].price}})</li>
            <li v-if="items[this.itemKey].recipePrice">- Recipe ({{items[this.itemKey].recipePrice}})</li>
          </ul>
        </div>
      </div>
      <div class="column is-2">
        <h5 class="title is-5">Stat</h5>
        <ul>
          <li v-for="stat in items[this.itemKey].stats" :key="stat.name">{{stat.name}}:
            <i>{{stat.value}}</i>
          </li>
        </ul>
      </div>
      <div class="column is-4">
        <h5 class="title is-5">Ability</h5>
        <div v-for="ability in items[this.itemKey].abilities" :key="ability.name">
          <h6 class="title is-6">{{ability.name}}</h6>
          <p>Type : {{ability.abilityType}}</p>
          <p>Description : {{ability.description}}</p>
          <br>
          <ul>
            <li v-for="attr in ability.attributes" :key="attr.name">{{attr.name}}:
              <i>{{attr.value}}</i>
            </li>
          </ul>
          <br>
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

  data() {
    return {}
  },
  firebase: {
    items: {
      source: itemDB,
      asObject: true
    }
  }
}
</script>

<style scoped>

</style>
