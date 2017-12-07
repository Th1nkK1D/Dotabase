<template>
  <div>
      <h1>Guide</h1> <br>
      <p>{{guide.name}}</p>
      <img :src="hero.avatar" :alt="hero.name">
      <p>{{guide.hero}}</p><br>
      <div v-for="purchase in guide.purchaseCategory" :key="purchase.slot">
        {{purchase.name}}
        <div v-for="item in purchase.items" :key="item">
          <img :src="items[item].icon" :alt="item">
          {{item}}
        </div>
        <br>
      </div>

      <div v-for="(skill,Sindex) in hero.skills" :key="skill.name">
          {{skill.name}}
          <div v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn">
            {{learn.slot}}
          </div>         
      </div> 
      <br>
      
      <h2>Talents</h2>
    <table>
      <tr v-for="(talentEachLvl,index) in sortedTalent" :key="talentEachLvl[0]">
        <td>{{talentEachLvl[0]}}</td>
        <td>Level{{25-(5*index)}}</td>
        <td>{{talentEachLvl[1]}}</td>

      </tr>
    </table>



      <div v-for="talent in guide.talentTree" :key="talent">
        {{talent}}
      </div>  
      <br>  
  </div>
</template>

<script>
import Firebase from 'firebase'

var guideDB = Firebase.database().ref('/Guides')
var heroDB = Firebase.database().ref('/Heroes')
var itemDB = Firebase.database().ref('/Items')

export default {
  name: 'Guide',
  props: ['guideKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('guide',guideDB.child(this.guideKey),null,function() {
      this.$bindAsObject('hero',heroDB.child(this.guide.hero))
    },
    
    )
  },
  data () {
    return {
      guide: {},
      hero: {}
    }
  },
  firebase:  {
    items: {
      source: itemDB,
      // optionally bind as an object
      asObject: true,
    }
  },
  computed: {
    sortedTalent() {
      if(this.hero !== undefined && this.hero.talents !== undefined) {
        return this.hero.talents.reverse()
      } else {
        return null
      }
    }
  },
}
</script>

<style scoped>

</style>
