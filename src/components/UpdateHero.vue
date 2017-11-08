<template>
	<div>
		<h1>Update Hero</h1>
		
			<label for="heroname">Hero Name</label>
			<input type="text" name="heroname" v-model="Hero.name",>
			<br>
			<label for="heroavatar">Avatar</label>
			<input type="text" name="heroavatar" v-model="Hero.avatar">
			<br>
			<label for="heroattribute">Attribute</label>
			<input type="text" name="heroattribute" v-model="Hero.attribute">
			<br>
			<label for="roles">Roles</label>
			<input type="text" name="roles" v-model="Hero.roles">
			<br>
			<label for="lore">Lore</label>
			<input type="text" name="lore" v-model="Hero.lore">
			<br>
		
		
			<h2>Hero Stats</h2>
			<label for="str_start">STR : </label>
			<input type="number" name="str_start" v-model="Hero.strBase">
			<label for="str_per_lvl">STR per level : </label>
			<input type="number" name="str_per_lvl" v-model="Hero.strGain">
			<br>
			<label for="agi_start">AGI : </label>
			<input type="number" name="agi_start" v-model="Hero.agiBase">
			<label for="agi_per_lvl">AGI per level : </label>
			<input type="number" name="agi_per_lvl" v-model="Hero.agiGain">
			<br>
			<label for="int_start">INT : </label>
			<input type="number" name="int_start" v-model="Hero.intBase">
			<label for="int_per_lvl">INT per level : </label>
			<input type="number" name="int_per_lvl" v-model="Hero.intGain">
			<br>

			<label for="health">Health : </label>
			<input type="number" name="health" v-model="Hero.hp">
			<br>
			<label for="mana">Mana : </label>
			<input type="number" name="mana" v-model="Hero.mana">
			<br>
			<label for="healthregen">Health Regeneration : </label>
			<input type="number" name="healthregen" v-model="Hero.hpRegen">
			<br>
			<label for="manaregen">Mana Regeneration : </label>
			<input type="number" name="manaregen" v-model="Hero.manaRegen">
			<br>

			<label for="damagemin">Min Damage : </label>
			<input type="number" name="damage" v-model="Hero.damageMin">
			<br>
			<label for="damagemax">Max Damage : </label>
			<input type="number" name="damage" v-model="Hero.damageMax">
			<br>

			<label for="armor">Armor : </label>
			<input type="number" name="armor" v-model="Hero.armor">
			<br>
			<label for="magicresistance">Magic Resistance : </label>
			<input type="number" name="magicresistance" v-model="Hero.magicResistance">
			<br>

			<label for="movespeed">Movement Speed : </label>
			<input type="number" name="movespeed" v-model="Hero.moveSpeed">
			<br>
			<label for="attackrange">Attack Range : </label>
			<input type="number" name="attackrange" v-model="Hero.attackRange">
			<br>
			<label for="attackspeed">Attack Speed : </label>
			<input type="number" name="attackspeed" v-model="Hero.attackSpeed">
			<br>

		

		<div>
			<h2>Skills</h2>
			<button type="button" name="sn1">SN 1</button>
			<button type="button" name="moreSn"> + </button>
			<br>

			<label for="skillname">Skill Name : </label>
			<input type="text" name="skillname" v-model="Hero.Skill.name">
			<label for="skillslot">Slot : </label>
			<input type="number" name="skillslot" v-model="Hero.Skill.slot">
			<br>

			<label for="skillicon">Icon : </label>
			<input type="text" name="skillicon" v-model="Hero.Skill.icon">
			<br>

			<label for="skilldescription">Description : </label>
			<input type="text" name="skilldescription" v-model="Hero.Skill.description">
			<br>

			<label for="maxupgrade">Max Upgrade : </label>
			<input type="number" name="maxupgrade" v-model="Hero.Skill.maxUpgrade">
			<br>

			<label for="minlearnlevel">Min Learn Level : </label>
			<input type="text" name="minlearnlevel" v-model="Hero.Skill.minLearnLevel[0]">
			<br>

			<h3>Attribute</h3>
				<label for="attname">Name : </label>
				<input type="text" name="attname" v-model="Hero.Skill.Attribute.name">
				<br>
				<label for="attvalue">Value : </label>
				<input type="text" name="attvalue" v-model="Hero.Skill.Attribute.value">
				<br>		
					
		</div>
			
		<div>
			<h3>Talent Tree</h3>
			<input type="text" name="talent3.0" v-model="Hero.Talent.talent[3][0]">
			25
			<input type="text" name="talent3.1" v-model="Hero.Talent.talent[3][1]">
			<br>
			<input type="text" name="talent2.0" v-model="Hero.Talent.talent[2][0]">
			20
			<input type="text" name="talent2.1" v-model="Hero.Talent.talent[2][1]">
			<br>
			<input type="text" name="talent1.0" v-model="Hero.Talent.talent[1][0]">
			15
			<input type="text" name="talent1.1" v-model="Hero.Talent.talent[1][1]">
			<br>
			<input type="text" name="talent0.0" v-model="Hero.Talent.talent[0][0]">
			10
			<input type="text" name="talent0.1" v-model="Hero.Talent.talent[0][1]">
			<br>
		</div>
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
		  Skill:[{
			  name: '',
			  slot: null,
			  icon: '',
			  description: '',
			  maxUpgrade: null,
			  minLearnLevel: [],
			  Attribute: [{
				  name: '',
				  value: '',
			  }],	
		  }],
		  Talent:[{
			  talent:[],
		  }],
	  }
    }
  },
	methods: {
    submit: function() {
      herodb.child(this.Hero.name).set(this.Hero)
    }
	}
}
</script>

<style scoped>

</style>
