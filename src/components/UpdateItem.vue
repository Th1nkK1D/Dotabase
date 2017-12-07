<template>
    <div>
        <h1 class="title is-1">Update Item</h1>
<div class="columns">
  <div class="column">
    <b-field label="Item Name">
      <b-input type="text" placeholder="Name" v-model="Item.name" maxlength="30"></b-input>
    </b-field>
    <b-field label="Item Icon">
      <b-input type="text" placeholder="Icon" v-model="Item.icon"></b-input>
    </b-field>
    <b-field label="Type">
      <b-input type="text" placeholder="Type" v-model="Item.category" maxlength="30"></b-input>
    </b-field>
    <b-field label="Cost">
      <b-input type="number" placeholder="Item Cost" v-model.number="Item.price"></b-input>
    </b-field>
    <b-field label="Description">
      <textarea class="textarea" placeholder="Description" v-model.number="Item.lore"></textarea>
    </b-field>

    <button class="button" @click="addRecipe()">+ recipe</button>
      <div v-for="(recipe, re) in Item.recipe" v-bind:key="re">
      
    <div class="columns">
      <div class="column">
        Recipe {{re+1}}
      </div>
      <div class="column">
        <b-input type="text" placeholder="Recipe.." v-model.number="Item.recipe[re]"></b-input>
      </div>
      <div class="column">
        <button class="button" @click="removeRecipe(re)">Remove</button>
      </div>
      <div class="column">
        
      </div>
    </div>
      
      </div>
      <b-field label="Recipe Price">
      <b-input type="number" placeholder="recipe price" v-model="Item.recipePrice"></b-input>
      </b-field>
        <br>

        <h2>Stats</h2>
        <button class="button" @click="addStat()">+ stat</button>
        <div v-for="(stat, si) in Item.stats" v-bind:key="si">


        <div class="columns">
          <div class="column">
            Stat Name {{si+1}}
          </div>
          <div class="column">
            <b-input type="text" placeholder="stat" v-model.number="stat.name"></b-input>
          </div>
          <div class="column">
            Value
          </div>
          <div class="column">
            <b-input type="text" placeholder="stat" v-model.number="stat.value"></b-input>
          </div>
          <div class="column">
            <button class="button" @click="removeStat(si)">Remove</button>
          </div>
        </div>
        </div>
  </div>

  <div class="column">
        <h3 class="title is-3">Abilities</h3>
        <button class="button" @click="addAbility()">+ ability</button>
        <div v-for="(ability, ai) in Item.abilities" v-bind:key="ai">
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">Ability {{ai+1}}</h5>
        </div>
        <div class="column">
          <button class="button" @click="removeAbility(ai)">Remove ability {{ai+1}}</button>
        </div>

    </div>
          
          
<div class="columns">
  <div class="column">
    <b-field label="Name">
        <b-input type="text" placeholder="ability name" v-model="ability.name"></b-input>
    </b-field>
  </div>
  <div class="column">
    <b-field label="Type">
    <input type="radio" name="abilitytype" value="active" v-model="ability.abilityType">
          <label for="abilitytype">Active</label>
          <input type="radio" name="abilitytype" value="passive" v-model="ability.abilityType">
          <label for="abilitytype">Passive</label>
          <input type="radio" name="abilitytype" value="toggle" v-model="ability.abilityType">
          <label for="abilitytype">Toggle</label>
          <input type="radio" name="abilitytype" value="use" v-model="ability.abilityType">
          <label for="abilitytype">Use</label>
          <br>
    </b-field>
  </div>

</div>
    <b-field label="Description">
      <textarea class="textarea" placeholder="Description" v-model.number="ability.description"></textarea>
    </b-field>
    <button class="button" @click="addAbilityAttribute(ai)">+ attribute</button>
          
          <div v-for="(attr, ati) in ability.attributes" v-bind:key="ati">
            
            
            <h6 class="title is-6">Attribute {{ati+1}} :</h6>
            <div class="columns">
              <div class="column">
                Name
              </div>
              <div class="column">
                <b-input type="text" placeholder="Name" v-model="attr.name"></b-input>
              </div>
              <div class="column">
                Value
              </div>
              <div class="column">
                <b-input type="text" placeholder="Value" v-model="attr.value"></b-input>
              </div>
              <div class="column">
                <button class="button" @click="removeAbilityAttribute(ati,ai)">Remove</button>
              </div>
            </div>
            <br>
          </div>
          <br>
        </div>
        <br>
        <button class="button is-primary" @click="submit()">Submit</button>
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
				this.$bindAsObject('Item',itemdb.child(this.itemKey),null,function() {
          console.log(this.Item)
        })
			}
    }
  }
}
</script>

<style scoped>

</style>
