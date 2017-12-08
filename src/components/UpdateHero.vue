<template>
	<div>
		<h1 class="title is-1">Update Hero</h1>
<<<<<<< HEAD
<div class="columns">
  <div class="column">
		<div class="columns">
		  <div class="column">
		<b-field label="Hero Name">
      <b-input type="text" name="heroname" v-model="Hero.name" ></b-input>
    </b-field>
	</div>
    <!-- <label for="heroname">Hero Name</label>
		<input type="text" name="heroname" v-model="Hero.name"> -->
		<div class="column">
		<b-field label="Attribute">
      <b-input type="text" name="heroattribute" v-model="Hero.attribute"></b-input>
    </b-field>
	</div>
</div>
		<!-- <label for="heroattribute">Attribute</label>
		<input type="text" name="heroattribute" v-model="Hero.attribute"> -->
		<b-field label="Avatar">
      <b-input type="text" name="heroavatar" v-model="Hero.avatar"></b-input>
    </b-field>
		<!-- <label for="heroavatar">Avatar</label>
		<input type="text" name="heroavatar" v-model="Hero.avatar"> -->
		<b-field label="Lore">
      <b-input maxlength="2000" type="textarea" name="lore" v-model="Hero.lore"></b-input>
    </b-field>
		<!-- <label for="lore">Lore</label>
		<input type="text" name="lore" v-model="Hero.lore"> -->
		<button class="button is-primary is-focused"v-on:click="addRole()">+ role</button><br>
		<div v-for="(roles, ri) in Hero.roles" v-bind:key="ri">
			<div class="columns">
				<div class="column">
					<b-field v-bind:label="'Roles '+(ri+1)">
						<b-input type="text"
							name="roles"
							v-model="Hero.roles[ri]">
						</b-input>
					</b-field>
				</div>
				<div class="column is-narrow">
    			<button class="button is-primary is-outlined is-focused is-small"v-on:click="removeRole(ri)">Remove</button>
				</div>
			</div>
		</div>
			<br>
	<h2 class="title is-5">Hero Stats</h2>
	<div class="columns">
	<div class="column">
		<b-field label="STR : ">
			<b-input type="number" name="str_start" v-model.number="Hero.strBase"></b-input>
		</b-field>
		<!-- <label for="str_start">STR : </label>
=======
		<div class="columns">
			<div class="column">
				<b-field label="Hero Name">
					<b-input type="text" name="heroname" v-model="Hero.name"></b-input>
				</b-field>
				<!-- <label for="heroname">Hero Name</label>
		<input type="text" name="heroname" v-model="Hero.name"> -->
				<b-field label="Avatar">
					<b-input type="text" name="heroavatar" v-model="Hero.avatar"></b-input>
				</b-field>
				<!-- <label for="heroavatar">Avatar</label>
		<input type="text" name="heroavatar" v-model="Hero.avatar"> -->
				<b-field label="Attribute">
					<b-input type="text" name="heroattribute" v-model="Hero.attribute"></b-input>
				</b-field>
				<!-- <label for="heroattribute">Attribute</label>
		<input type="text" name="heroattribute" v-model="Hero.attribute"> -->
				<b-field label="Lore">
					<b-input type="text" name="lore" v-model="Hero.lore"></b-input>
				</b-field>
				<!-- <label for="lore">Lore</label>
		<input type="text" name="lore" v-model="Hero.lore"> -->
				<button class="button is-primary" v-on:click="addRole()">+ role</button><br>
				<div v-for="(roles, ri) in Hero.roles" v-bind:key="ri">
					<b-field v-bind:label="'Roles '+(ri+1)">
						<b-input type="text" name="roles" v-model="Hero.roles[ri]">
						</b-input>
					</b-field>
					<!-- <label for="roles">Roles {{ri+1}}</label>
     	<input type="text" name="roles" v-model="Hero.roles[ri]"> -->
					<button class="button is-black" v-on:click="removeRole(ri)">Remove</button>
				</div>
				<br>
				<h2 class="title is-5">Hero Stats</h2>
				<div class="columns">
					<div class="column">
						<b-field label="STR : ">
							<b-input type="number" name="str_start" v-model.number="Hero.strBase"></b-input>
						</b-field>
						<!-- <label for="str_start">STR : </label>
>>>>>>> 89fd435eb0768a6e98d769931f99e28cb13aed65
		<input type="number" name="str_start" v-model.number="Hero.strBase"> -->
						<b-field label="STR per level : ">
							<b-input type="number" name="str_per_lvl" v-model.number="Hero.strGain"></b-input>
						</b-field>
						<!-- <label for="str_per_lvl">STR per level : </label>
		<input type="number" name="str_per_lvl" v-model.number="Hero.strGain"> -->
						<b-field label="AGI : ">
							<b-input type="number" name="agi_start" v-model.number="Hero.agiBase"></b-input>
						</b-field>
						<!-- <label for="agi_start">AGI : </label>
		<input type="number" name="agi_start" v-model.number="Hero.agiBase"> -->
						<b-field label="AGI per level : ">
							<b-input type="number" name="agi_per_lvl" v-model.number="Hero.agiGain"></b-input>
						</b-field>
						<!-- <label for="agi_per_lvl">AGI per level : </label>
		<input type="number" name="agi_per_lvl" v-model.number="Hero.agiGain"> -->
						<b-field label="INT : ">
							<b-input type="number" name="int_start" v-model.number="Hero.intBase"></b-input>
						</b-field>
						<!-- <label for="int_start">INT : </label>
		<input type="number" name="int_start" v-model.number="Hero.intBase"> -->
						<b-field label="INT per level : ">
							<b-input type="number" name="int_per_lvl" v-model.number="Hero.intGain"></b-input>
						</b-field>
						<!-- <label for="int_per_lvl">INT per level : </label>
		<input type="number" name="int_per_lvl" v-model.number="Hero.intGain"> -->
						<b-field label="Health : ">
							<b-input type="number" name="health" v-model.number="Hero.hp"></b-input>
						</b-field>
						<!-- <label for="health">Health : </label>
		<input type="number" name="health" v-model.number="Hero.hp"> -->
						<b-field label="Mana : ">
							<b-input type="number" name="mana" v-model.number="Hero.mana"></b-input>
						</b-field>
						<!-- <label for="mana">Mana : </label>
		<input type="number" name="mana" v-model.number="Hero.mana"> -->
						<br>
					</div>
					<div class="column">
						<b-field label="Health Regeneration : ">
							<b-input type="number" name="healthregen" v-model.number="Hero.hpRegen"></b-input>
						</b-field>
						<!-- <label for="healthregen">Health Regeneration : </label>
		<input type="number" name="healthregen" v-model.number="Hero.hpRegen"> -->
						<b-field label="Mana Regeneration : ">
							<b-input type="number" name="manaregen" v-model.number="Hero.manaRegen"></b-input>
						</b-field>
						<!-- <label for="manaregen">Mana Regeneration : </label>
		<input type="number" name="manaregen" v-model.number="Hero.manaRegen"> -->
						<div class="columns">
							<div class="column">
								<b-field label="Damage (Min): ">
									<b-input type="number" name="damage" v-model.number="Hero.damageMin"></b-input>
								</b-field>
							</div>
							<div class="column">
								<!-- <label for="damagemin">Damage : </label>
		<input type="number" name="damage" v-model.number="Hero.damageMin"> -->
								<b-field label="Damage (Max): ">
									<b-input type="number" name="damage" v-model.number="Hero.damageMax"></b-input>
								</b-field>
							</div>
						</div>
						<!-- <label for="damagemax"> - </label>
		<input type="number" name="damage" v-model.number="Hero.damageMax"> -->
						<b-field label="Armor : ">
							<b-input type="number" name="armor" v-model.number="Hero.armor"></b-input>
						</b-field>
						<!-- <label for="armor">Armor : </label>
		<input type="number" name="armor" v-model.number="Hero.armor"> -->
						<b-field label="Magic Resistance : ">
							<b-input type="number" name="magicresistance" v-model.number="Hero.magicResistance"></b-input>
						</b-field>
						<!-- <label for="magicresistance">Magic Resistance : </label>
		<input type="number" name="magicresistance" v-model.number="Hero.magicResistance"> -->
						<b-field label="Movement Speed : ">
							<b-input type="number" name="movespeed" v-model.number="Hero.moveSpeed"></b-input>
						</b-field>
						<!-- <label for="movespeed">Movement Speed : </label>
		<input type="number" name="movespeed" v-model.number="Hero.moveSpeed"> -->
						<b-field label="Attack Range : ">
							<b-input type="number" name="attackrange" v-model.number="Hero.attackRange"></b-input>
						</b-field>
						<!-- <label for="attackrange">Attack Range : </label>
		<input type="number" name="attackrange" v-model.number="Hero.attackRange"> -->
						<b-field label="Attack Speed : ">
							<b-input type="number" name="attackspeed" v-model.number="Hero.attackSpeed"></b-input>
						</b-field>
						<!-- <label for="attackspeed">Attack Speed : </label>
		<input type="number" name="attackspeed" v-model.number="Hero.attackSpeed"> -->
<<<<<<< HEAD
		<br>
	</div>
</div>
	<div v-if="Hero.talents">
		<h3 class="title is-5">Talent Tree</h3>
		<input type="text" name="talent3_0" v-model="Hero.talents[3][0]">
		25
		<input type="text" name="talent3_1" v-model="Hero.talents[3][1]">
		<br>
		<input type="text" name="talent2_0" v-model="Hero.talents[2][0]">
		20
		<input type="text" name="talent2_1" v-model="Hero.talents[2][1]">
		<br>
		<input type="text" name="talent1_0" v-model="Hero.talents[1][0]">
		15
		<input type="text" name="talent1_1" v-model="Hero.talents[1][1]">
		<br>
		<input type="text" name="talent0_0" v-model="Hero.talents[0][0]">
		10
		<input type="text" name="talent0_1" v-model="Hero.talents[0][1]">
		<br>
		<br>
	</div>
  </div>
  <div class="column">
    <h2 class="title is-5">Skills</h2>
			<button class="button is-primary is-focused"v-on:click="addSkill()">+ skill</button>
		<div v-for="(skill, si) in Hero.skills" v-bind:key="si">
			<br>
			<h4 class="title is-6">Skill {{si+1}}</h4>
			<b-field label="Skill Name : ">
				<b-input type="text" name="skillname" v-model="skill.name"></b-input>
			</b-field>
			<!-- <label for="skillname">Skill Name : </label>
=======
						<br>
					</div>
				</div>
				<div v-if="Hero.talents">
					<h3 class="title is-5">Talent Tree</h3>
					<input type="text" name="talent3_0" v-model="Hero.talents[3][0]"> 25
					<input type="text" name="talent3_1" v-model="Hero.talents[3][1]">
					<br>
					<input type="text" name="talent2_0" v-model="Hero.talents[2][0]"> 20
					<input type="text" name="talent2_1" v-model="Hero.talents[2][1]">
					<br>
					<input type="text" name="talent1_0" v-model="Hero.talents[1][0]"> 15
					<input type="text" name="talent1_1" v-model="Hero.talents[1][1]">
					<br>
					<input type="text" name="talent0_0" v-model="Hero.talents[0][0]"> 10
					<input type="text" name="talent0_1" v-model="Hero.talents[0][1]">
					<br>
					<br>
				</div>
			</div>
			<div class="column">
				<h2 class="title is-5">Skills</h2>
				<button class="button is-primary" v-on:click="addSkill()">+ skill</button>
				<div v-for="(skill, si) in Hero.skills" v-bind:key="si">
					<br>
					<h4 class="title is-6">Skill {{si+1}}</h4>
					<b-field label="Skill Name : ">
						<b-input type="text" name="skillname" v-model="skill.name"></b-input>
					</b-field>
					<!-- <label for="skillname">Skill Name : </label>
>>>>>>> 89fd435eb0768a6e98d769931f99e28cb13aed65
			<input type="text" name="skillname" v-model="skill.name"> -->
					<div class="columns">
						<div class="column">
							<b-field label="Icon : ">
								<b-input type="text" name="skillicon" v-model="skill.icon"></b-input>
							</b-field>
						</div>
						<div class="column">
							<!-- <label for="skillicon">Icon : </label>
			<input type="text" name="skillicon" v-model="skill.icon"> -->
							<b-field label="Max Upgrade : ">
								<b-input type="number" name="maxupgrade" v-model.number="skill.maxUpgrade"></b-input>
							</b-field>
							<!-- <label for="maxupgrade">Max Upgrade : </label>
			<input type="number" name="maxupgrade" v-model.number="skill.maxUpgrade"> -->
						</div>
					</div>
					<b-field label="Description : ">
						<b-input maxlength="1000" type="textarea" v-model="skill.description"></b-input>
					</b-field>

					<!-- <label for="skilldescription">Description : </label>
			<input type="text" name="skilldescription" v-model="skill.description"> -->
					<br>

					<br>

<<<<<<< HEAD
			<br>

			<button class="button is-primary is-focused "v-on:click="addSkillAttribute(si)">+ attribute</button>
          	<div v-for="(attr, ati) in skill.attributes" v-bind:key="ati"><br>
							<b-field v-bind:label="'Attribute : '+(ati+1)"></b-field>
				<!-- Attribute {{ati+1}} : -->
				<div class="columns">
					<div class="column">
				<b-field label="Name">
				<b-input type="text" name="attname" v-model="attr.name"></b-input>
				</b-field>
			</div>
				<!-- <label for="attname">Name</label>
				<input type="text" name="attname" v-model="attr.name"> -->
				<div class="column">
				<b-field label="Value">
				<b-input type="text" name="attvalue" v-model="attr.value"></b-input>
				</b-field>
			</div>

				<!-- <label for="attvalue">Value</label>
				<input type="text" name="attvalue" v-model="attr.value"> -->
				<div class="column is-narrow">
				<button class="button is-black is-outlined is-focused is-small"v-on:click="removeSkillAttribute(ati,si)">Remove</button>
				<br>
				</div>
				</div>
          	</div>
		<br>
		<button class="button is-primary is-outlined is-focused"v-on:click="removeSkill(si)">RemoveSkill</button>
		<br>
		<br>
		<br>
		</div>
		<br>
		<br>
		<br>
		<button class="button is-primary is-focused is-medium"v-on:click="submit()">Submit</button>
	</div>
</div>
=======
					<button class="button is-primary" v-on:click="addSkillAttribute(si)">+ attribute</button>
					<div v-for="(attr, ati) in skill.attributes" v-bind:key="ati">
						<b-field v-bind:label="'Attribute : '+(ati+1)"></b-field>
						<!-- Attribute {{ati+1}} : -->
						<div class="columns">
							<div class="column">
								<b-field label="Name">
									<b-input type="text" name="attname" v-model="attr.name"></b-input>
								</b-field>
							</div>
							<!-- <label for="attname">Name</label>
				<input type="text" name="attname" v-model="attr.name"> -->
							<div class="column">
								<b-field label="Value">
									<b-input type="text" name="attvalue" v-model="attr.value"></b-input>
								</b-field>
							</div>
						</div>
						<!-- <label for="attvalue">Value</label>
				<input type="text" name="attvalue" v-model="attr.value"> -->
						<button class="button is-black" v-on:click="removeSkillAttribute(ati,si)">Remove</button>
						<br>
					</div>
					<br>
					<button class="button is-black" v-on:click="removeSkill(si)">RemoveSkill</button>
					<br>
					<br>
					<br>
				</div>
				<br>
				<br>
				<br>
				<button class="button is-primary" v-on:click="submit()">Submit</button>
			</div>
		</div>
>>>>>>> 89fd435eb0768a6e98d769931f99e28cb13aed65

	</div>
</template>

<script>
import Firebase from 'firebase'
var herodb = Firebase.database().ref('/Heroes')

export default {
  name: 'UpdateHero',
  props: ['heroKey'],
  data() {
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
        skills: [],
        talents: [[null, null], [null, null], [null, null], [null, null]]
      }
    }
  },
  methods: {
    submit: function() {
      herodb
        .child(this.Hero.name.replace(' ', '_').toLowerCase())
        .set(this.Hero)
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
        attributes: []
      })
    },
    addSkillAttribute: function(si) {
      this.Hero.skills[si].attributes.push({
        name: '',
        value: ''
      })
    },
    removeRole: function(ri) {
      this.Hero.roles.splice(ri, 1)
    },
    removeSkill: function(si) {
      this.Hero.skills.splice(si, 1)
    },
    removeSkillAttribute: function(ati, si) {
      this.Hero.skills[si].attributes.splice(ati, 1)
    }
  },
  mounted() {
    // Check admin permission
    if (!this.$store.state.user || !this.$store.state.user.admin) {
      this.$router.push('/')
    } else {
      if (this.heroKey) {
        this.$bindAsObject(
          'Hero',
          herodb.child(this.heroKey),
          null,
          function() {
            delete this.Hero['.key']
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
