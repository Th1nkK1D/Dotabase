<template>
	<div>
		<h1 class="title is-1">Update Hero</h1>
		<div class="columns">
			<!-- big columw #1 -->
			<div class="column">

				<!-- co(s) -->
				<div class="columns">
					<div class="column">
						<b-field label="Hero Name">
							<b-input type="text" name="heroname" v-model="Hero.name"></b-input>
						</b-field>
					</div>
					<div class="column">
						<b-field label="Attribute">
							<b-input type="text" name="heroattribute" v-model="Hero.attribute"></b-input>
						</b-field>
					</div>
				</div>
				<!-- ############################ -->

				<b-field label="Avatar">
					<b-input type="text" name="heroavatar" v-model="Hero.avatar"></b-input>
				</b-field>

				<b-field label="Lore">
					<b-input maxlength="2000" type="textarea" name="lore" v-model="Hero.lore"></b-input>
				</b-field>

				<button class="button is-primary is-focused" v-on:click="addRole()">+ role</button><br>

				<!-- v-for -->
				<div v-for="(roles, ri) in Hero.roles" v-bind:key="ri">
					<!-- co(s) -->
					<div class="columns">
						<div class="column">
							<br>
							<div class="field is-horizontal">
								<div class="field-label is-normal">
									<label class="label">Roles {{ri+1}}</label>
								</div>
								<div class="field-body">
									<div class="field">
										<p class="control">
											<input class="input" type="text" placeholder="Role" name="roles" v-model="Hero.roles[ri]">
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="column is-narrow">
							<br>
							<button class="button is-primary is-outlined is-focused" v-on:click="removeRole(ri)">Remove</button>
						</div>
					</div>
				</div>
				<!-- ############################ -->

				<br>
				<h2 class="title is-5">Hero Stats</h2>
				<!-- co(s) -->
				<div class="columns">

					<div class="column">
						<b-field label="STR : ">
							<b-input type="number" name="str_start" v-model.number="Hero.strBase"></b-input>
						</b-field>
						<b-field label="STR per level : ">
							<b-input type="number" name="str_per_lvl" v-model.number="Hero.strGain"></b-input>
						</b-field>
						<b-field label="AGI : ">
							<b-input type="number" name="agi_start" v-model.number="Hero.agiBase"></b-input>
						</b-field>
						<b-field label="AGI per level : ">
							<b-input type="number" name="agi_per_lvl" v-model.number="Hero.agiGain"></b-input>
						</b-field>
						<b-field label="INT : ">
							<b-input type="number" name="int_start" v-model.number="Hero.intBase"></b-input>
						</b-field>
						<b-field label="INT per level : ">
							<b-input type="number" name="int_per_lvl" v-model.number="Hero.intGain"></b-input>
						</b-field>
						<b-field label="Health : ">
							<b-input type="number" name="health" v-model.number="Hero.hp"></b-input>
						</b-field>
						<b-field label="Mana : ">
							<b-input type="number" name="mana" v-model.number="Hero.mana"></b-input>
						</b-field>
						<br>
					</div>

					<div class="column">
						<b-field label="Health Regeneration : ">
							<b-input type="number" name="healthregen" v-model.number="Hero.hpRegen"></b-input>
						</b-field>
						<b-field label="Mana Regeneration : ">
							<b-input type="number" name="manaregen" v-model.number="Hero.manaRegen"></b-input>
						</b-field>

						<!-- co(s) -->
						<div class="columns">

							<div class="column">
								<b-field label="Damage (Min): ">
									<b-input type="number" name="damage" v-model.number="Hero.damageMin"></b-input>
								</b-field>
							</div>
							<div class="column">
								<b-field label="Damage (Max): ">
									<b-input type="number" name="damage" v-model.number="Hero.damageMax"></b-input>
								</b-field>
							</div>

						</div>
						<!-- ############################ -->

						<b-field label="Armor : ">
							<b-input type="number" name="armor" v-model.number="Hero.armor"></b-input>
						</b-field>
						<b-field label="Magic Resistance : ">
							<b-input type="number" name="magicresistance" v-model.number="Hero.magicResistance"></b-input>
						</b-field>
						<b-field label="Movement Speed : ">
							<b-input type="number" name="movespeed" v-model.number="Hero.moveSpeed"></b-input>
						</b-field>
						<b-field label="Attack Range : ">
							<b-input type="number" name="attackrange" v-model.number="Hero.attackRange"></b-input>
						</b-field>
						<b-field label="Attack Speed : ">
							<b-input type="number" name="attackspeed" v-model.number="Hero.attackSpeed"></b-input>
						</b-field>
						<br>
					</div>
				</div>
				<!-- ###END (S)######################### -->

				<!-- Tree -->
				<h3 class="title is-5">Talent Tree</h3>
				<div class="columns">
					<div class="column"></div>
					<div class="column is-narrow">
						<table class="table" v-if="Hero.talents">
							<thead>
								<tr>
									<th class="subtitle">Talent 1</th>
									<th class="subtitle">Level</th>
									<th class="subtitle">Talent 2</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="tl in 4" :key="tl">
									<td>
										<b-input type="text" name="talent3_0" v-model="Hero.talents[4-tl][0]"></b-input>
									</td>
									<td>
										<strong>{{25 - tl*5}}</strong>
									</td>
									<td>
										<b-input type="text" name="talent3_1" v-model="Hero.talents[4-tl][1]"></b-input>
									</td>
								</tr>
							</tbody>

						</table>
					</div>
					<div class="column">
					</div>
				</div>

				<!--
				<div >

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
				</div> -->
			</div>
			<!-- END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   big columw #1 -->

			<!-- big colume #2 -->
			<div class="column">
				<h2 class="title is-5">Skills</h2>
				<button class="button is-primary is-focused" v-on:click="addSkill()">+ skill</button>
				<!-- v-for -->
				<div v-for="(skill, si) in Hero.skills" v-bind:key="si">
					<br>
					<h4 class="title is-6">Skill {{si+1}}</h4>
					<b-field label="Skill Name : ">
						<b-input type="text" name="skillname" v-model="skill.name"></b-input>
					</b-field>

					<!-- co(s) -->
					<div class="columns">
						<div class="column">
							<b-field label="Icon : ">
								<b-input type="text" name="skillicon" v-model="skill.icon"></b-input>
							</b-field>
						</div>
						<div class="column is-one-third">
							<b-field label="Max Upgrade : ">
								<b-input type="number" name="maxupgrade" v-model.number="skill.maxUpgrade"></b-input>
							</b-field>
						</div>
					</div>
					<!-- ############## -->

					<b-field label="Description : ">
						<b-input maxlength="1000" type="textarea" v-model="skill.description"></b-input>
					</b-field>
					<br>
					<br>
					<br>
					<button class="button is-primary is-focused " v-on:click="addSkillAttribute(si)">+ attribute</button>
					<div v-for="(attr, ati) in skill.attributes" v-bind:key="ati"><br>
						<b-field v-bind:label="'Attribute : '+(ati+1)"></b-field>
						<!-- Co(s) -->
						<div class="columns">
							<div class="column">
								<div class="field is-horizontal">
									<div class="field-label is-normal">
										<label class="label">Name</label>
									</div>
									<div class="field-body">
										<div class="field">
											<p class="control">
												<input class="input" type="text" placeholder="Name" name="attname" v-model="attr.name">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="column">
								<div class="field is-horizontal">
									<div class="field-label is-normal">
										<label class="label">Value</label>
									</div>
									<div class="field-body">
										<div class="field">
											<p class="control">
												<input class="input" type="text" placeholder="Value" name="attvalue" v-model="attr.value">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="column is-narrow">
								<button class="button is-black is-outlined is-focused" v-on:click="removeSkillAttribute(ati,si)">Remove</button>
								<br>
							</div>
						</div>
						<!-- ################## END CO(s) ##################### -->
					</div>
					<br>
					<button class="button is-primary is-outlined is-focused" v-on:click="removeSkill(si)">RemoveSkill</button>
					<br>
					<br>
					<br>

				</div>
				<!-- End v-for -->

				<br>
				<br>
				<br>
				<button class="button is-primary is-focused is-medium" v-on:click="submit()">Submit</button>
			</div>
		</div>
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
        .child(this.Hero.name.replace(/ /g, '_').toLowerCase())
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
