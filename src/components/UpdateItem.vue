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
        <label for="recipes">Recipes</label>
        <input type="text" name="recipes" v-model="Item.recipes[0]">
        <br>
        <label for="recipeprice">Recipe Price</label>
        <input type="number" name="recipeprice" v-model.number="Item.recipePrice">
        <br>
        <br>
        <br>
        <h2>Stats</h2> 
        <label for="statname">Stat Name</label>
        <input type="text" name="statname" v-model="Item.Stat.name">
        <br>
        <label for="itemstatvalue">Value</label>
        <input type="text" name="itemstatvalue" v-model="Item.Stat.value">
        <br>
        <br>
        <br>
        <h2>Abilities</h2>
        <label for="abilityname">Ability Name</label>
        <input type="text" name="abilityname" v-model="Item.Ability.name">
        <br>
        <label for="itemabilitydescription">Description</label>
        <input type="text" name="itemabilitydescription" v-model="Item.Ability.description">
        <br>
        Attributes:
        <br>
        <label for="attributename">Attribute Name</label>
        <input type="text" name="attributename" v-model="Item.Ability.Attribute.name">
        <br>
        <label for="attributevalue">Value</label>
        <input type="text" name="attributevalue" v-model="Item.Ability.Attribute.value">
        <br>
        
        <br>
        <button>Submit</button>
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
        recipes: [''],
        lore: '',
        Stat: [{
          name: '',
          value: '',
        }],
        Ability: [{
          name: '',
          description: '',
          Attribute: [{
            name: '',
            value: '',
          }],
        }],
      }
    }
  },
  methods: {
    submit: function() {
      itemdb.child(this.Item.name).set(this.Item)
    }
  }
}
</script>

<style scoped>

</style>
