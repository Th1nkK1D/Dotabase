<template>
	<div>
		<h1>Update Hero</h1>
		
			<label for="heroname">Hero Name</label>
			<input type="text" name="heroname" v-model="Hero.name">
			<br>
			<label for="heroavatar">Avatar</label>
			<input type="text" name="heroavatar" v-model="Hero.avatar">
			<br>
			<label for="heroattribute">Attribute</label>
			<input type="text" name="heroattribute" v-model="Hero.attribute">
			<br>
			<label for="lore">Lore</label>
			<input type="text" name="lore" v-model="Hero.lore">
			<br>
		
			<button v-on:click="addRole()">+ role</button>
       		<div v-for="(roles, ri) in Hero.roles" v-bind:key="ri">
       		<label for="roles">Roles {{ri+1}}</label>
        	<input type="text" name="roles" v-model="Hero.roles[ri]">
        	<button v-on:click="removeRole(ri)">Remove</button>
        	</div>



			<h2>Hero Stats</h2>
			<label for="str_start">STR : </label>
			<input type="number" name="str_start" v-model.number="Hero.strBase">
			<label for="str_per_lvl">STR per level : </label>
			<input type="number" name="str_per_lvl" v-model.number="Hero.strGain">
			<br>
			<label for="agi_start">AGI : </label>
			<input type="number" name="agi_start" v-model.number="Hero.agiBase">
			<label for="agi_per_lvl">AGI per level : </label>
			<input type="number" name="agi_per_lvl" v-model.number="Hero.agiGain">
			<br>
			<label for="int_start">INT : </label>
			<input type="number" name="int_start" v-model.number="Hero.intBase">
			<label for="int_per_lvl">INT per level : </label>
			<input type="number" name="int_per_lvl" v-model.number="Hero.intGain">
			<br>

			<label for="health">Health : </label>
			<input type="number" name="health" v-model.number="Hero.hp">
			<br>
			<label for="mana">Mana : </label>
			<input type="number" name="mana" v-model.number="Hero.mana">
			<br>
			<label for="healthregen">Health Regeneration : </label>
			<input type="number" name="healthregen" v-model.number="Hero.hpRegen">
			<br>
			<label for="manaregen">Mana Regeneration : </label>
			<input type="number" name="manaregen" v-model.number="Hero.manaRegen">
			<br>

			<label for="damagemin">Min Damage : </label>
			<input type="number" name="damage" v-model.number="Hero.damageMin">
			<br>
			<label for="damagemax">Max Damage : </label>
			<input type="number" name="damage" v-model.number="Hero.damageMax">
			<br>

			<label for="armor">Armor : </label>
			<input type="number" name="armor" v-model.number="Hero.armor">
			<br>
			<label for="magicresistance">Magic Resistance : </label>
			<input type="number" name="magicresistance" v-model.number="Hero.magicResistance">
			<br>

			<label for="movespeed">Movement Speed : </label>
			<input type="number" name="movespeed" v-model.number="Hero.moveSpeed">
			<br>
			<label for="attackrange">Attack Range : </label>
			<input type="number" name="attackrange" v-model.number="Hero.attackRange">
			<br>
			<label for="attackspeed">Attack Speed : </label>
			<input type="number" name="attackspeed" v-model.number="Hero.attackSpeed">
			<br>













			<!-- <button v-on:click="addAbility()">+ ability</button>

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
        </div> -->










			

		<h2>Skills</h2>
			<button v-on:click="addSkill()">+ skill</button>
		<div v-for="(skill, si) in Hero.skills" v-bind:key="si">
			<h4>Skill {{si+1}}</h4>
			<label for="skillname">Skill Name : </label>
			<input type="text" name="skillname" v-model="skill.name">

			<label for="skillicon">Icon : </label>
			<input type="text" name="skillicon" v-model="skill.icon">
			<br>

			<label for="skilldescription">Description : </label>
			<input type="text" name="skilldescription" v-model="skill.description">
			<br>

			<label for="maxupgrade">Max Upgrade : </label>
			<input type="number" name="maxupgrade" v-model.number="skill.maxUpgrade">
			<br>

			<!-- <label for="minlearnlevel">Min Learn Level : </label>
			<input type="number" name="minlearnlevel" v-model="skill.minLearnLevel">
			<br> -->



			<button v-on:click="addSkillAttribute(si)">+ attribute</button>
          	<div v-for="(attr, ati) in skill.attributes" v-bind:key="ati">
				Attribute {{ati+1}} : 
				<label for="attname">Name</label>
				<input type="text" name="attname" v-model="attr.name">
				<label for="attvalue">Value</label>
				<input type="text" name="attvalue" v-model="attr.value">
				<button v-on:click="removeSkillAttribute(ati,si)">Remove</button>
				<br>
          	</div>
		<br>
		<button v-on:click="removeSkill(si)">RemoveSkill</button>
		<br>
		<br>
		<br>			
		</div>
			
		<div>
			<h3>Talent Tree</h3>
			<input type="text" name="talent3_0" v-model="Hero.talent[3][0]">
			25
			<input type="text" name="talent3_1" v-model="Hero.talent[3][1]">
			<br>
			<input type="text" name="talent2_0" v-model="Hero.talent[2][0]">
			20
			<input type="text" name="talent2_1" v-model="Hero.talent[2][1]">
			<br>
			<input type="text" name="talent1_0" v-model="Hero.talent[1][0]">
			15
			<input type="text" name="talent1_1" v-model="Hero.talent[1][1]">
			<br>
			<input type="text" name="talent0_0" v-model="Hero.talent[0][0]">
			10
			<input type="text" name="talent0_1" v-model="Hero.talent[0][1]">
			<br>
			<br>
			
		</div>
	<button v-on:click="submit()">Submit</button>
	</div>
</template>

<script>
import Firebase from 'firebase'
var herodb = Firebase.database().ref('/Heroes')
export default {
  name: 'UpdateHero',
  data () {
    return {
      Hero: {
		  name: '',
		  avatar: '',
		  attribute: '',
		  roles: [],
		  lore: '',
		  strBase: null,
		  agiBase: null,
		  intBase: null,
		  strGain: null,
		  agiGain: null,
		  intGain: null,
		  hp: null,
		  mana: null,
		  hpRegen: null,
		  manaRegen: null,
		  damageMin: null,
		  damageMax: null,
		  armor: null,
		  magicResistance: null,
		  moveSpeed: null,
		  attackRange: null,
		  attackSpeed: null,
		  skills:[],
		  talent:[[null,null],[null,null],[null,null],[null,null]],
	  }
    }
  },
	methods: {
    submit: function() {
      herodb.child(this.Hero.name.replace(' ','_').toLowerCase()).set(this.Hero)
    },
	addRole: function() {
      this.Hero.roles.push('')
    },
	addSkill: function() {
      this.Hero.skills.push({
        name: '',
        icon: '',
        description: '',
		maxUpgrage: null,
		// minLearnLevel: null,
        attributes: [],
      })
    },
	addSkillAttribute: function(si) {
      this.Hero.skills[si].attributes.push({
        name: '',
        value: '',
      })
    },
	removeRole: function(ri) {
      this.Hero.roles.splice(ri,1)
    },
	removeSkill: function(si) {
      this.Hero.skills.splice(si,1)
    },
	removeSkillAttribute: function(ati,si) {
      this.Hero.skills[si].attributes.splice(ati,1)
    },
	}
}
</script>

<style scoped>

</style>
