<template>
  <div>
    <h1>{{item.name}}</h1>
    <img :src="item.icon" :alt="item.name">
    <p>{{item.lore}}</p>
    <p>Category: {{item.category}}</p>
    <p>Price: {{item.price}}</p>

    <p>Recipes:
      <span v-for="recipe in item.recipe" :key="recipe">{{recipe}} </span>
    </p>
    <p>Recipe Price: {{item.recipePrice}}</p>

    <h2>Stat</h2>
    <ul>
      <li v-for="stat in item.stats" :key="stat.name">{{stat.name}}:
        <i>{{stat.value}}</i>
      </li>
    </ul>

    <h2>Ability</h2>
    <div v-for="ability in item.abilities" :key="ability.name">
      <h4>{{ability.name}}</h4>
      <p>Type : {{ability.abilityType}}</p>
      <p>{{ability.description}}</p>
      <ul>
        <li v-for="attr in ability.attributes" :key="attr.name">{{attr.name}}:
          <i>{{attr.value}}</i>
        </li>
      </ul>
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
