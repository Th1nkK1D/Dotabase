<template>
  <div>


			<h1>Update Hero</h1>

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

			<h2>Skills</h2>
			<br>





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
