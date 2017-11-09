<template>
  <div>
    <h1>{{hero.name}}</h1>
    <img :src="hero.avatar" :alt="hero.name">
    <p>Attribute: {{hero.attribute}}</p>
    <p>Role: <span v-for="role in hero.roles" :key="role">{{role}} </span></p>
    <p>{{hero.lore}}</p>

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

    <h2>Skills</h2>
    <div v-for="skill in hero.skills" :key="skill.slot">
      <h4>{{skill.name}}</h4>
      <img :src="skill.icon" :alt="skill.name">
      <p>{{skill.description}}</p>
      <ul>
        <li v-for="attr in skill.attributes" :key="attr.name">{{attr.name}}: <i>{{attr.value}}</i></li>
      </ul>
    </div>

    <h2>Talents</h2>
    <table>
      <tr v-for="talentEachLvl in hero.talents.reverse()" :key="talentEachLvl">
        <td v-for="talent in talentEachLvl" :key="talent">{{talent}}</td>
      </tr>
    </table>
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
    this.$bindAsObject('hero',heroDB.child(this.heroKey))
  },
  data () {
    return {
      // Add data here
    }
  },
  firebase:  {
    hero: heroDB
  },
}
</script>

<style scoped>

</style>
