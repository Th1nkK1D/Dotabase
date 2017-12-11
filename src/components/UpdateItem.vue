<template>
  <div>
    <h1 class="title is-1">Update Item</h1>
    <br>
    <div class="columns">
      <div class="column">
        <b-field for="itemname" label="Item Name">
          <b-input type="text" name="itemname" v-model="Item.name">
          </b-input>
        </b-field>
        <b-field for="itemicon" label="Item Icon">
          <b-input type="text" name="itemicon" v-model="Item.icon">
          </b-input>
        </b-field>
        <b-field for="type" label="Type">
          <b-input type="text" name="type" v-model="Item.category">
          </b-input>
        </b-field>

        <b-field for="itemcost" label="Cost">
          <b-input type="number" name="itemcost" v-model.number="Item.price">
          </b-input>
        </b-field>

        <b-field for="itemdescription" label="Description">
          <b-input maxlength="300" type="textarea"></b-input>
        </b-field>

        <br>

        <button class="button is-primary is-focused" v-on:click="addRecipe()">+ recipe</button>

        <div v-for="(recipe, re) in Item.recipe" v-bind:key="re">

          <div class="columns">
            <div class="column">
              <br>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Recipe {{re+1}}</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="text" placeholder="Recipe" name="recipe" v-model="Item.recipe[re]">
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-narrow">
              <br>
              <button class="button is-primary is-outlined is-focused" v-on:click="removeRecipe(re)">Remove</button>
            </div>
          </div>

        </div>

        <b-field for="recipeprice" label="Recipe Price">
          <b-input type="number" name="recipeprice" v-model.number="Item.recipePrice"></b-input>
        </b-field>

        <br>
        <br>

        <h2 class="title is-1">Stats</h2>
        <button class="button is-primary is-focused" v-on:click="addStat()">+ stat</button>
        <div v-for="(stat, si) in Item.stats" v-bind:key="si">
          <div class="columns">
            <div class="column">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Stat {{si+1}}</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="text" placeholder="Stat name" name="statname" v-model="stat.name">
                    </p>
                  </div>
                </div>
              </div>

              <!-- <b-field v-bind:label="'Stat Name '+(si+1)">
            <b-input type="text" name="statname" v-model="stat.name">
            </b-input>
          </b-field> -->
            </div>
            <div class="column">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Value</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="text" placeholder="Item stat value" name="itemstatvalue" v-model="stat.value">
                    </p>
                  </div>
                </div>
              </div>
              <!--
          <b-field label="Value">
            <b-input type="text" name="itemstatvalue" v-model="stat.value">
            </b-input>
          </b-field> -->

            </div>
            <div class="column is-narrow">
              <button class="button is-primary is-outlined is-focused" v-on:click="removeStat(si)">Remove</button>
            </div>
          </div>
        </div>

      </div>
      <!-- <div class="column">
        <h2 class="title is-1">Abilities</h2>
        <button class="button is-black" v-on:click="addAbility()">+ ability</button>
      </div> -->
      <div class="column">
        <h3 class="title is-3">Abilities</h3>
        <button class="button is-primary is-focused" @click="addAbility()">+ ability</button>
        <div v-for="(ability, ai) in Item.abilities" v-bind:key="ai">
          <br>
          <h4 class="title is-5">Ability {{ai+1}}</h4>
          <button class="button is-primary is-outlined is-focused" v-on:click="removeAbility(ai)">Remove Ability</button>
          <br><br>
          <b-field label="Name">
            <b-input type="text" name="abilityname" v-model="ability.name">
            </b-input>
          </b-field>
          <br>
          <h4 class="title is-5">Type</h4>
          <b-radio v-model="ability.abilityType" name="abilitytype" native-value="active">
            Active
          </b-radio>
          <b-radio v-model="ability.abilityType" name="abilitytype" native-value="passive">
            Passive
          </b-radio>
          <b-radio v-model="ability.abilityType" name="abilitytype" native-value="toggle">
            Toggle
          </b-radio>
          <b-radio v-model="ability.abilityType" name="abilitytype" native-value="use">
            Use
          </b-radio>
          <br>
          <br>
          <b-field for="itemabilitydescription" label="Description">
            <b-input maxlength="800" type="textarea" v-model="ability.description"></b-input>
          </b-field>
          <br>

          <button class="button is-black" v-on:click="addAbilityAttribute(ai)">+ attribute</button>
          <div v-for="(attr, ati) in ability.attributes" v-bind:key="ati">
            <br>
            <b-field v-bind:label="'Attribute : '+(ati+1)"></b-field>
            <!-- Attribute {{ati+1}} : -->
            <div class="columns">
              <div class="column">

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Name</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Attribute name" name="attributename" v-model="attr.name">
                      </p>
                    </div>
                  </div>
                </div>

                <!-- <b-field label="Name">
              <b-input type="text" name="attributename" v-model="attr.name">
              </b-input>
            </b-field> -->
              </div>
              <!-- <label for="attributename">Name</label> -->
              <!-- <input type="text" name="attributename" v-model="attr.name"> -->

              <div class="column">

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Value</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Attribute value" name="attributevalue" v-model="attr.value">
                      </p>
                    </div>
                  </div>
                </div>

                <!-- <b-field label="Value">
              <b-input type="text" name="attributevalue" v-model="attr.value">
              </b-input>
            </b-field> -->
              </div>
              <!-- <label for="attributevalue">Value</label> -->
              <!-- <input type="text" name="attributevalue" v-model="attr.value"> -->
              <div class="column is-narrow">
                <button class="button is-black is-outlined is-focused" v-on:click="removeAbilityAttribute(ati,ai)">Remove</button>
              </div>
              <br>
            </div>

          </div>

          <br>
        </div>
        <br <br>
        <br>
        <button class="button is-primary is-medium" v-on:click="submit()">Submit</button>
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
  data() {
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
        abilities: []
      }
    }
  },
  methods: {
    submit: function() {
      itemdb
        .child(this.Item.name.replace(/ /g, '_').toLowerCase())
        .set(this.Item)
    },
    addRecipe: function() {
      this.Item.recipe.push('')
    },
    addStat: function() {
      this.Item.stats.push({
        name: '',
        value: ''
      })
    },
    addAbility: function() {
      this.Item.abilities.push({
        name: '',
        abilityType: '',
        description: '',
        attributes: []
      })
    },
    addAbilityAttribute: function(ai) {
      this.Item.abilities[ai].attributes.push({
        name: '',
        value: ''
      })
    },
    removeRecipe: function(re) {
      this.Item.recipe.splice(re, 1)
    },
    removeStat: function(si) {
      this.Item.stats.splice(si, 1)
    },
    removeAbility: function(ai) {
      this.Item.abilities.splice(ai, 1)
    },
    removeAbilityAttribute: function(ati, ai) {
      this.Item.abilities[ai].attributes.splice(ati, 1)
    }
  },
  mounted() {
    // Check admin permission
    if (!this.$store.state.user || !this.$store.state.user.admin) {
      this.$router.push('/')
    } else {
      if (this.itemKey) {
        this.$bindAsObject(
          'Item',
          itemdb.child(this.itemKey),
          null,
          function() {
            delete this.Item['.key']
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
