<template>
	<div>
		<h1>Update Hero</h1>
		<div>
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
		</div>
		<div>
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

			<label for="damagemin">Min Damage : </label>
			<input type="number" name="damage" v-model="Hero.damageMin">
			<br>

			<label for="damagemax">Max Damage : </label>
			<input type="number" name="damage" v-model="Hero.damageMax">
			<br>

			<label for="healthregen">Health Regeneration : </label>
			<input type="number" name="healthregen" v-model="Hero.hpRegen">
			<br>

			<label for="manaregen">Mana Regeneration : </label>
			<input type="number" name="manaregen" v-model="Hero.manaRegen">
			<br>

			<label for="lore">Lore</label>
			<input type="text" name="lore" v-model="Hero.lore">
			<br>
		</div>

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

			<div>
				<h3>Normal Skill</h3>
				<label for="aghanimupgrade">Aghanim Upgrade : </label>
				<input type="radio" name="aghanimupgrade" value="true">
				Yes
				<input type="radio" name="aghanimupgrade" value="false">
				No
				<br>
				<div>
					<label for="skilltype">Type : </label>
					<input type="radio" name="skilltype" value="false">
					Passive
					<input type="radio" name="skilltype" value="true">
					Active
					<br>
					<label for="damagetype">Damage Type : </label>
					<input type="text" name="damagetype" >
					<br>
					<label for="pirecespell">Pierce Spell Immunuty : </label>
					<input type="radio" name="pirecespell" value="true">
					Yes
					<input type="radio" name="pirecespell" value="false">
					No
					<br>
					<label for="skilldescription">Description : </label>
					<input type="text" name="skilldescription" >
					<br>
					<label for="skillicon">Icon : </label>
					<input type="text" name="skillicon" >
					<br>
					<h5>Attribute :</h5>
					<button type="button" name="AT1">AT 1</button>
					<button type="button" name="moreAt"> + </button>
					<br>
					<label for="attname">Name : </label>
					<input type="text" name="attname" >
					<br>
					<label for="attvalue">Value : </label>
					<input type="text" name="attvalue" >
					<br>
				</div>
				<div>
					<h4>Aghanim Upgrade (Yes)</h4>
					<label for="addskill">Add Skill : </label>
					<input type="radio" name="addskill" value="true">
					Yes
					<input type="radio" name="addskill" value="false">
					No
					<br>
					<label for="changeskill">Change Skill : </label>
					<input type="radio" name="changeskill" value="true">
					Yes
					<input type="radio" name="changeskill" value="false">
					No
					<br><br>
					<label for="type">Type : </label>
					<input type="radio" name="aghanimupgrade" value="false">
					Passive
					<input type="radio" name="aghanimupgrade" value="true">
					Active
					<br>
					<label for="damagetype">Damage Type : </label>
					<input type="text" name="damagetype" >
					<br>
					<label for="pirecespell">Pierce Spell Immunuty : </label>
					<input type="radio" name="pirecespell" value="true">
					Yes
					<input type="radio" name="pirecespell" value="false">
					No
					<br>
					<label for="skilldescription">Description : </label>
					<input type="text" name="skilldescription" >
					<br>
					<label for="skillicon">Icon : </label>
					<input type="text" name="skillicon" >
					<br>
					<h5>Attribute :</h5>
					<button type="button" name="AT1">AT 1</button>
					<button type="button" name="moreAt"> + </button>
					<br>
					<label for="attname">Name : </label>
					<input type="text" name="attname" >
					<br>
					<label for="attvalue">Value : </label>
					<input type="text" name="attvalue" >
					<br>
				</div>
			</div>
			<div>
				<h3>Special Skill</h3>
				<button type="button" name="pr1">PR 1</button>
				<button type="button" name="morePr"> + </button>
				<br>
				<label for="spcskillname">Name : </label>
				<input type="text" name="spcskillname" >
				<br>
				<label for="spcdamtype">Damage Type : </label>
				<input type="text" name="spcdamtype" >
				<br>
				<label for="spcpirecespell">Pierce Spell Immunuty : </label>
				<input type="radio" name="spcpirecespell" value="true">
				Yes
				<input type="radio" name="spcpirecespell" value="false">
				No
				<br>
				<label for="spcskilldescription">Description : </label>
				<input type="text" name="spcskilldescription" >
				<br>
				<label for="spcskillicon">Icon : </label>
				<input type="text" name="spcskillicon" >
				<br>
				<h5>Attribute :</h5>
				<button type="button" name="spc_AT1">AT 1</button>
				<button type="button" name="more_spc_At"> + </button>
				<br>
				<label for="spcattname">Name : </label>
				<input type="text" name="spcattname" >
				<br>
				<label for="spcattvalue">Value : </label>
				<input type="text" name="spcattvalue" >
				<br>
			</div>
			<div>
				<h3>Talent Tree</h3>
				<button type="button" name="lvl25_l">..........</button>
				25
				<button type="button" name="lvl25_r">..........</button>
				<br>
				<button type="button" name="lvl20_l">..........</button>
				20
				<button type="button" name="lvl20_r">..........</button>
				<br>
				<button type="button" name="lvl15_l">..........</button>
				15
				<button type="button" name="lvl15_r">..........</button>
				<br>
				<button type="button" name="lvl10_l">..........</button>
				10
				<button type="button" name="lvl10_r">..........</button>
				<br>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'UpdateHero',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
