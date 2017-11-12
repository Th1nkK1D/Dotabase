<template>
    <div>
        <h1>Update Item</h1>
        <br>
        <label for="itemname">Item Name</label>
        <input type="text" name="itemname" v-model="Item.name">
        <br>
        <label for="itemicon">Item Icon</label>
        <input type="text" name="itemicon" v-model="Item.icon">
        <br>
        <label for="type">Type</label>
        <input type="text" name="type" v-model="Item.category">
        <br>
        <label for="itemcost">Cost</label>
        <input type="number" name="itemcost" v-model.number="Item.price">
        <br>
        <label for="itemdescription">Description</label>
        <input type="text" name="itemdescription" v-model="Item.lore">
        <br>
        <br>
        <br>
        <button v-on:click="addRecipe()">+ recipe</button>
        <div v-for="(recipes, re) in Item.recipes" v-bind:key="re">
        <label for="recipes">Recipes</label>
        <input type="text" name="recipes" v-model="Item.recipes.recipe">
        </div>

        <br>
        <label for="recipeprice">Recipe Price</label>
        <input type="number" name="recipeprice" v-model.number="Item.recipePrice">
        <br>
        
        <br>
        <br>

        <h2>Stats</h2>
        <button v-on:click="addStat()">+ stat</button>

        <div v-for="(stat, si) in Item.stats" v-bind:key="si">
          <label for="statname">Stat Name</label>
          <input type="text" name="statname" v-model="stat.name">
          <label for="itemstatvalue">Value</label>
          <input type="text" name="itemstatvalue" v-model="stat.value">
        </div>
        <br>
        <br>

        <h2>Abilities</h2>
        <button v-on:click="addAbility()">+ ability</button>

        <div v-for="(ability, ai) in Item.abilities" v-bind:key="ai">
          <label for="abilityname">Ability Name</label>
          <input type="text" name="abilityname" v-model="ability.name">
          <br>
          <label for="itemabilitydescription">Description</label>
          <input type="text" name="itemabilitydescription" v-model="ability.description">
          <br>

          Attributes:
          <button v-on:click="addAbilityAttribute(ai)">+ attribute</button>
          <div v-for="(attr, ati) in ability.attributes" v-bind:key="ati">
            <label for="attributename">Attribute Name</label>
            <input type="text" name="attributename" v-model="attr.name">
            <label for="attributevalue">Value</label>
            <input type="text" name="attributevalue" v-model="attr.value">
            <br>
          </div>
          
          <br>
        </div>
        
        <br>
        {{Item}}

        <br>
        <button v-on:click="submit()">Submit</button>
    
  
</div>
</template>

<script>
import Firebase from 'firebase'
var itemdb = Firebase.database().ref('/Items')
export default {
  name: 'UpdateItem',
  data () {
    return {
      Item: {
        name: '',
        icon: '',
        category: '',
        price: null,
        recipePrice: null,
        recipes: [],
        lore: '',
        stats: [],
        abilities: [],
      }
    }
  },
  methods: {
    submit: function() {
      itemdb.child(this.Item.name.replace(' ','_').toLowerCase()).set(this.Item)
    },
    addRecipe: function() {
      this.Item.recipes.push({
        recipe: '',
      })
    },
    addStat: function() {
      this.Item.stats.push({
        name: '',
        value: '',
      })
    },
    addAbility: function() {
      this.Item.abilities.push({
        name: '',
        description: '',
        attributes: [],
      })
    },
    addAbilityAttribute: function(ai) {
      this.Item.abilities[ai].attributes.push({
        name: '',
        value: '',
      })
    }
  }
}
</script>

<style scoped>

</style>
