<template>
  <div>
    <h1>{{item.name}}</h1>
    <!-- <img :src="hero.avatar" :alt="hero.name"> -->
    <p>{{item.lore}}</p>
    <p>Category: {{item.category}}</p>
    <p>Price: {{item.price}}</p>
    <!-- recipeprice -->
    <p>Recipes: <span v-for="recipes in item.recipes" :key="recipes">{{recipes}} </span></p>
    

    <h2>Stat</h2>
    <ul>
     <li v-for="stats in item.stat" :key="stats.name">{{stats.name}}: <i>{{stats.value}}</i></li>
    </ul>

    <h2>Ability</h2>
    <div v-for="ability in item.ability" :key="ability.name">
      <h4>{{ability.name}}</h4>
      <p>{{ability.description}}</p>
      <ul>
        <li v-for="attr in ability.attribute" :key="attr.name">{{attr.name}}: <i>{{attr.value}}</i></li>
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
    this.$bindAsObject('item',itemDB.child(this.itemKey))
  },
  data () {
    return {
      item: {}
    }
  },
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
