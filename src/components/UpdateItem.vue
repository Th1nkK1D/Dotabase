<template>
    <div>
        <h1>Update Item</h1>
        <br>
<div class="columns">
  <div class="column">
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
        <!-- <input type="text" name="itemdescription" v-model="Item.lore"> -->
        <textarea name="itemdescription" id="" cols="100" rows="5" v-model="Item.lore"></textarea>
        <br>
        <button v-on:click="addRecipe()">+ recipe</button>
        <div v-for="(recipe, re) in Item.recipe" v-bind:key="re">
        <label for="recipe">Recipe {{re+1}}</label>
        <input type="text" name="recipe" v-model="Item.recipe[re]">
        <button v-on:click="removeRecipe(re)">Remove</button>
        </div>
        <label for="recipeprice">Recipe Price</label>
        <input type="number" name="recipeprice" v-model.number="Item.recipePrice">
        <br>
        <br>

        <h2>Stats</h2>
        <button v-on:click="addStat()">+ stat</button>

        <div v-for="(stat, si) in Item.stats" v-bind:key="si">
          <label for="statname">Stat Name {{si+1}}</label>
          <input type="text" name="statname" v-model="stat.name">
          <label for="itemstatvalue">Value</label>
          <input type="text" name="itemstatvalue" v-model="stat.value">
          <button v-on:click="removeStat(si)">Remove</button>
        </div>
  </div>
  <div class="column">
        <h2>Abilities</h2>
        <button v-on:click="addAbility()">+ ability</button>

        <div v-for="(ability, ai) in Item.abilities" v-bind:key="ai">
          <h4>Ability {{ai+1}}</h4> <button v-on:click="removeAbility(ai)">Remove Ability</button>
          <br>
          <label for="abilityname">Name</label>
          <input type="text" name="abilityname" v-model="ability.name">
          <br>
          Type
          <br>
          <input type="radio" name="abilitytype" value="active" v-model="ability.abilityType">
          <label for="abilitytype">Active</label>
          <input type="radio" name="abilitytype" value="passive" v-model="ability.abilityType">
          <label for="abilitytype">Passive</label>
          <input type="radio" name="abilitytype" value="toggle" v-model="ability.abilityType">
          <label for="abilitytype">Toggle</label>
          <input type="radio" name="abilitytype" value="use" v-model="ability.abilityType">
          <label for="abilitytype">Use</label>
          <br>
          <label for="itemabilitydescription">Description</label>
          <textarea name="itemdabilityescription" id="" cols="100" rows="5" v-model="ability.description"></textarea>
          <br>

          <button v-on:click="addAbilityAttribute(ai)">+ attribute</button>
          <div v-for="(attr, ati) in ability.attributes" v-bind:key="ati">
            Attribute {{ati+1}} : 
            <label for="attributename">Name</label>
            <input type="text" name="attributename" v-model="attr.name">
            <label for="attributevalue">Value</label>
            <input type="text" name="attributevalue" v-model="attr.value">
            <button v-on:click="removeAbilityAttribute(ati)">Remove</button>
            <br>
          </div>
          
          <br>
        </div>

        <br>
        <button v-on:click="submit()">Submit</button>
  </div>

</div>







</div>
</template>

<script>
import Firebase from 'firebase'
var itemdb = Firebase.database().ref('/Items')

export default {
  name: 'UpdateItem',
  props: ['itemKey'],
  data () {
    return {
      Item: {
        name: '',
        icon: '',
        category: '',
        price: null,
        recipePrice: null,
        recipe: [],
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
      this.Item.recipe.push('')
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
        abilityType: '',
        description: '',
        attributes: [],
      })
    },
    addAbilityAttribute: function(ai) {
      this.Item.abilities[ai].attributes.push({
        name: '',
        value: '',
      })
    },
    removeRecipe: function(re) {
      this.Item.recipe.splice(re,1)
    },
    removeStat: function(si) {
      this.Item.stats.splice(si,1)
    },
    removeAbility: function(ai) {
      this.Item.abilities.splice(ai,1)
    },
    removeAbilityAttribute: function(ati,ai) {
      this.Item.abilities[ai].attributes.splice(ati,1)
    },
  },
  mounted() {
		// Check admin permission
		if(!this.$store.state.user || !this.$store.state.user.admin) {
			this.$router.push('/')
		} else {
			if(this.itemKey) {
				this.$bindAsObject('Item',itemdb.child(this.itemKey))
			}
    }
  }
}
</script>

<style scoped>

</style>
