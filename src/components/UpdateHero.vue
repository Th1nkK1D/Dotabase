<template>
	<div>
		<h1>Update Hero</h1>
		<div>
			<label for="heroName">Hero Name</label>
			<input type="text" name="heroName">
			<br>

			<label for="heroAvatar">Avatar</label>
			<input type="text" name="heroAvatar">
			<br>

			<label for="attribute">Attribute</label>
			<input type="text" name="attribute" >
			<br>

			<label for="roles">Roles</label>
			<input type="text" name="roles" >
			<br>
		</div>
		<div>
			<h2>Hero Stats</h2>
			<label for="str_start">STR : </label>
			<input type="text" name="str_start" >
			<label for="str_per_lvl">STR per level : </label>
			<input type="text" name="str_per_lvl" >
			<br>

			<label for="agi_start">AGI : </label>
			<input type="text" name="agi_start" >
			<label for="agi_per_lvl">AGI per level : </label>
			<input type="text" name="agi_per_lvl" >
			<br>

			<label for="int_start">INT : </label>
			<input type="text" name="int_start" >
			<label for="int_per_lvl">INT per level : </label>
			<input type="text" name="int_per_lvl" >
			<br>

			<label for="health">Health : </label>
			<input type="text" name="health" >
			<br>

			<label for="mana">Mana : </label>
			<input type="text" name="mana" >
			<br>

			<label for="armor">Armor : </label>
			<input type="text" name="armor" >
			<br>

			<label for="magicResist">Magic Resistance : </label>
			<input type="text" name="magicResist" >
			<br>

			<label for="moveSpeed">Movement Speed : </label>
			<input type="text" name="moveSpeed" >
			<br>

			<label for="at_range">Attack Range : </label>
			<input type="text" name="at_ramge" >
			<br>

			<label for="at_speed">Attack Speed : </label>
			<input type="text" name="at_speed" >
			<br>

			<label for="damage">Damage : </label>
			<input type="text" name="damage" >
			<br>

			<label for="health_regen">Health Regeneration : </label>
			<input type="text" name="health_regen" >
			<br>

			<label for="mana_regen">Mana Regeneration : </label>
			<input type="text" name="mana_regen" >
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

			<label for="skillName">Skill Name : </label>
			<input type="text" name="skillName" >
			<label for="slot">Slot : </label>
			<input type="text" name="slot" >
			<br>

			<label for="skillType">Skill Type : </label>
			<input type="text" name="skillType" >
			<br>

			<div>
				<h3>Normal Skill</h3>
				<label for="aghanimUpgrade">Aghanim Upgrade : </label>
				<input type="radio" name="aghanimUpgrade" value="true">
				<label > Yes </label>
				<input type="radio" name="aghanimUpgrade" value="false">
				<label > No </label>
				<br>
				<div>
					<label for="type">Type : </label>
					<input type="radio" name="aghanimUpgrade" value="false">
					<label > Passive </label>
					<input type="radio" name="aghanimUpgrade" value="true">
					<label > Active </label>
					<br>
					<label for="damageType">Damage Type : </label>
					<input type="text" name="damageType" >
					<br>
					<label for="spell_immune">Pierce Spell Immunuty : </label>
					<input type="radio" name="spell_immune" value="true">
					<label > Yes </label>
					<input type="radio" name="spell_immune" value="false">
					<label > No </label>
					<br>
					<label for="description">Description : </label>
					<input type="text" name="description" >
					<br>
					<label for="icon">Icon : </label>
					<input type="text" name="icon" >
					<br>
					<label for="skill_att">Attribute : </label><br>
					<button type="button" name="AT1">AT 1</button>
					<button type="button" name="moreAt"> + </button>
					<br>
					<label for="att_name">Name : </label>
					<input type="text" name="att_name" >
					<br>
					<label for="att_value">Value : </label>
					<input type="text" name="att_value" >
					<br>
				</div>
				<div>
					<h4>Aghanim Upgrade (Yes)</h4>
					<label for="add_skill">Add Skill : </label>
					<input type="radio" name="add_skill" value="true">
					<label > Yes </label>
					<input type="radio" name="add_skill" value="false">
					<label > No </label>
					<br>
					<label for="ch_skill">Change Skill : </label>
					<input type="radio" name="ch_skill" value="true">
					<label > Yes </label>
					<input type="radio" name="ch_skill" value="false">
					<label > No </label>
					<br><br>
					<label for="type">Type : </label>
					<input type="radio" name="aghanimUpgrade" value="false">
					<label > Passive </label>
					<input type="radio" name="aghanimUpgrade" value="true">
					<label > Active </label>
					<br>
					<label for="damageType">Damage Type : </label>
					<input type="text" name="damageType" >
					<br>
					<label for="spell_immune">Pierce Spell Immunuty : </label>
					<input type="radio" name="spell_immune" value="true">
					<label > Yes </label>
					<input type="radio" name="spell_immune" value="false">
					<label > No </label>
					<br>
					<label for="description">Description : </label>
					<input type="text" name="description" >
					<br>
					<label for="icon">Icon : </label>
					<input type="text" name="icon" >
					<br>
					<label for="skill_att">Attribute : </label><br>
					<button type="button" name="AT1">AT 1</button>
					<button type="button" name="moreAt"> + </button>
					<br>
					<label for="att_name">Name : </label>
					<input type="text" name="att_name" >
					<br>
					<label for="att_value">Value : </label>
					<input type="text" name="att_value" >
					<br>
				</div>
			</div>
			<div>
				<h3>Special Skill</h3>
				<button type="button" name="pr1">PR 1</button>
				<button type="button" name="morePr"> + </button>
				<br>
				<label for="spc_skill_name">Name : </label>
				<input type="text" name="spc_skill_name" >
				<br>
				<label for="spc_dam_type">Damage Type : </label>
				<input type="text" name="spc_dam_type" >
				<br>
				<label for="spc_spell_immune">Pierce Spell Immunuty : </label>
				<input type="radio" name="spc_spell_immune" value="true">
				<label > Yes </label>
				<input type="radio" name="spc_spell_immune" value="false">
				<label > No </label>
				<br>
				<label for="spc_description">Description : </label>
				<input type="text" name="spc_description" >
				<br>
				<label for="spc_icon">Icon : </label>
				<input type="text" name="spc_icon" >
				<br>
				<label for="spc_skill_att">Attribute : </label><br>
				<button type="button" name="spc_AT1">AT 1</button>
				<button type="button" name="more_spc_At"> + </button>
				<br>
				<label for="spc_att_name">Name : </label>
				<input type="text" name="spc_att_name" >
				<br>
				<label for="spc_att_value">Value : </label>
				<input type="text" name="spc_att_value" >
				<br>
			</div>
			<div>
				<h3>Talent Tree</h3>
				<button type="button" name="lvl25_l">..........</button>
				<label> 25 </label>
				<button type="button" name="lvl25_r">..........</button>
				<br>
				<button type="button" name="lvl20_l">..........</button>
				<label> 20 </label>
				<button type="button" name="lvl20_r">..........</button>
				<br>
				<button type="button" name="lvl15_l">..........</button>
				<label> 15 </label>
				<button type="button" name="lvl15_r">..........</button>
				<br>
				<button type="button" name="lvl10_l">..........</button>
				<label> 10 </label>
				<button type="button" name="lvl10_r">..........</button>
				<br>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
