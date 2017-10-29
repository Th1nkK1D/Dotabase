<template>
	<div>
		<h1>Update Hero</h1>
		<div>
			<label for="heroname">Hero Name</label>
			<input type="text" name="heroname">
			<br>

			<label for="heroavatar">Avatar</label>
			<input type="text" name="heroavatar">
			<br>

			<label for="heroattribute">Attribute</label>
			<input type="text" name="heroattribute" >
			<br>

			<label for="roles">Roles</label>
			<input type="text" name="roles" >
			<br>
		</div>
		<div>
			<h2>Hero Stats</h2>
			<label for="str_start">STR : </label>
			<input type="number" name="str_start" >
			<label for="str_per_lvl">STR per level : </label>
			<input type="number" name="str_per_lvl" >
			<br>

			<label for="agi_start">AGI : </label>
			<input type="number" name="agi_start" >
			<label for="agi_per_lvl">AGI per level : </label>
			<input type="number" name="agi_per_lvl" >
			<br>

			<label for="int_start">INT : </label>
			<input type="number" name="int_start" >
			<label for="int_per_lvl">INT per level : </label>
			<input type="number" name="int_per_lvl" >
			<br>

			<label for="health">Health : </label>
			<input type="number" name="health" >
			<br>

			<label for="mana">Mana : </label>
			<input type="number" name="mana" >
			<br>

			<label for="armor">Armor : </label>
			<input type="number" name="armor" >
			<br>

			<label for="magicresistance">Magic Resistance : </label>
			<input type="number" name="magicresistance" >
			<br>

			<label for="movespeed">Movement Speed : </label>
			<input type="number" name="movespeed" >
			<br>

			<label for="attackrange">Attack Range : </label>
			<input type="number" name="attackrange" >
			<br>

			<label for="attackspeed">Attack Speed : </label>
			<input type="number" name="attackspeed" >
			<br>

			<label for="damage">Damage : </label>
			<input type="number" name="damage" >
			<br>

			<label for="healthregen">Health Regeneration : </label>
			<input type="number" name="healthregen" >
			<br>

			<label for="manaregen">Mana Regeneration : </label>
			<input type="number" name="manaregen" >
			<br>

			<label for="lore">Lore</label>
			<input type="text" name="lore" >
			<br>
		</div>

		<div>
			<h2>Skills</h2>
			<button type="button" name="sn1">SN 1</button>
			<button type="button" name="moreSn"> + </button>
			<br>

			<label for="skillname">Skill Name : </label>
			<input type="text" name="skillname" >
			<label for="skillslot">Slot : </label>
			<input type="number" name="skillslot" >
			<br>

			<label for="skilltype">Skill Type : </label>
			<input type="text" name="skilltype" >
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
