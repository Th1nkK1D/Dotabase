<template>
  <div>

    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{hero.name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updatehero/'+heroKey">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-third">
        <img :src="hero.avatar" :alt="hero.name">
        <p>Role:
          <span v-for="role in hero.roles" :key="role">{{role}} </span>
        </p>
        <p>Attribute: {{hero.attribute}}</p>
        <h2>Stat</h2>
        <p>Strength: {{hero.strBase}} +{{hero.strGain}}</p>
        <p>Agility: {{hero.agiBase}} +{{hero.agiGain}}</p>
        <p>Intelligence: {{hero.intBase}} +{{hero.intGain}}</p>
        <p>Health: {{hero.hp}} (+{{hero.hpRegen}}/sec)</p>
        <p>Mana: {{hero.mana}} (+{{hero.manaRegen}}/sec)</p>
        <p>Damage: {{hero.damageMin}}-{{hero.damageMax}}</p>
        <p>Armor: {{hero.armor}}</p>
        <p>Magic Resistance: {{hero.magicResistance}}</p>
        <p>Move Speed: {{hero.moveSpeed}}</p>
        <p>Attack Range: {{hero.attackRange}}</p>
        <p>Attack Speed: {{hero.attackSpeed}}</p>
      </div>
      <div class="column">
        <h3 class="title is-3">Skills</h3>
        <div v-for="skill in hero.skills" :key="skill.slot">
          <h4>{{skill.name}}</h4>
          <img :src="skill.icon" :alt="skill.name">
          <p>{{skill.description}}</p>
          <ul>
            <li v-for="attr in skill.attributes" :key="attr.name">{{attr.name}}:
              <i>{{attr.value}}</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <center>
      <h3 class="title is-3">Talents</h3>
      <table>
        <tr v-for="(talentEachLvl,index) in sortedTalent" :key="talentEachLvl[0]">
          <td>{{talentEachLvl[0]}}</td>
          <td>Level{{25-(5*index)}}</td>
          <td>{{talentEachLvl[1]}}</td>
        </tr>
      </table>
    </center>
    <br>
    <br>
    <p>{{hero.lore}}</p>
    <h3>Best Score For Sven</h3>
    <br>

  </div>
</template>

<script>
import Firebase from 'firebase'

var heroDB = Firebase.database().ref('/Heroes')

export default {
  name: 'Hero',
  props: ['heroKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('hero', heroDB.child(this.heroKey))
  },
  data() {
    return {
      hero: {}
    }
  },
  computed: {
    sortedTalent() {
      if (this.hero !== undefined && this.hero.talents !== undefined) {
        return this.hero.talents.reverse()
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
