<template>
  <div>
    <h1 class="title is-1">{{guide.name}}</h1> <br>
    <h5 class="title is-5">
      <p>Hero : {{guide.hero}}</p>
    </h5>
    <img :src="hero.avatar" :alt="hero.name">
    <div class="columns">
      <div v-for="purchase in guide.purchaseCategory" :key="purchase.slot" class="column">
        <h3 class="title is-3">{{purchase.name}}</h3>

        <div v-for="item in purchase.items" :key="item">
          <img :src="items[item].icon" :alt="item"> {{item}}
        </div>
        <br>
      </div>
      =======
      <h1>Guide</h1> <br>
      <p>{{guide.name}}</p>
      <img :src="hero.avatar" :alt="hero.name">
      <p>{{guide.hero}}</p><br>
      <div v-for="purchase in guide.purchaseCategory" :key="purchase.slot">
        {{purchase.name}}
        <div v-for="item in purchase.items" :key="item">
          <img :src="items[item].icon" :alt="item"> {{item}}
        </div>
        <br>
      </div>

      <table>
        <tr v-for="(skill,Sindex) in hero.skills" :key="skill.name">
          <div>{{skill.name}}</div><br>
          <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined">
            <div v-if="learn != 0 && Sindex == learn.slot">
              1
            </div>
            <div v-if="learn != 0 && Sindex != learn.slot">
              0
            </div>
            <div v-if="learn == 0">
              0
            </div>
          </td>
        </tr>
        <tr>
          talents
          <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined">
            <div v-if="learn != 0 && learn.isSkill">
              0
            </div>
            <div v-if="learn != 0 && !learn.isSkill">
              1
            </div>
            <div v-if="learn == 0">
              0
            </div>
          </td>
        </tr>
      </table>

      <table>
        <tr v-for="(skill,Sindex) in hero.skills" :key="skill.name">
          <h4 class="title is-4">
            <div>{{skill.name}}</div>
          </h4>
          <div class="columns">
            <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined" class="column">
              <div class="yes" v-if="learn != 0 && Sindex == learn.slot">
                <center>
                  {{Lindex+1}}
                </center>
              </div>
              <div class="nope" v-if="learn != 0 && Sindex != learn.slot">
                {{Lindex+1}}
              </div>
              <div class="nope" v-if="learn == 0">
                {{Lindex+1}}
              </div>
            </td>
          </div>
        </tr>
        <tr>
          <h4 class="title is-4">
            <div>TarentTree</div>
          </h4>
          <div class="columns">
            <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined" class="column">
              <div class="column is-three-quarters">
              </div>
              <div class="nope" v-if="learn != 0 && learn.isSkill">
                {{Lindex+1}}
              </div>
              <div class="yes" v-if="learn != 0 && !learn.isSkill">
                <center>
                  {{Lindex+1}}
                </center>
              </div>
              <div class="nope" v-if="learn == 0">
                {{Lindex+1}}
              </div>
            </td>
          </div>
        </tr>
      </table>

      <br>
      <h5 class="title is-5">
        <center>
          <table>
            <tr v-for="(talentEachLvl,index) in sortedTalent" :key="talentEachLvl[0]">
              <td :class="guide.talentTree[index] == 0 ? 'use' : ''">{{talentEachLvl[0]}}</td>
              <td>Level{{25-(5*index)}}</td>
              <td :class="guide.talentTree[index] == 1 ? 'use' : ''">{{talentEachLvl[1]}}</td>
              <br>
            </tr>
          </table>
        </center>
      </h5>
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
    this.$bindAsObject('guide', guideDB.child(this.guideKey), null, function() {
      this.$bindAsObject('hero', heroDB.child(this.guide.hero))
    })
  },
  data() {
    return {
      guide: {},
      hero: {}
    }
  },
  firebase: {
    items: {
      source: itemDB,
      // optionally bind as an object
      asObject: true
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
.nope {
  background-color: black;
  color: black;
}
.yes {
  background-color: red;
  color: white;
}
.use {
  background-color: gold;
}
</style>
