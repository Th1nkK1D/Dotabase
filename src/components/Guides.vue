<template>
  <div>

    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{guide.name}}</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateguide/'+guideKey">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <h5 class="title is-5" v-if="hero && guide.name">
      <p>Hero : {{hero.name}}</p>
    </h5>
    <img :src="hero.avatar" :alt="hero.name">
    <div class="columns">
      <div v-for="purchase in guide.purchaseCategory" :key="purchase.slot" class="column">
        <h3 class="title is-3">{{purchase.name}}</h3>
        <div v-for="item in purchase.items" :key="item">
          <img :src="items[item].icon" :alt="item"> {{item}}
        </div>
      </div>
      <br>
    </div>

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

    <div>
      <h3 class="title is-3">Comment</h3>
      <b-field>
        <b-radio-button v-model="ratingg.rating" :native-value="1" type="is-success">
          <div @click="clickk()">
            <span>Like</span>
          </div>
        </b-radio-button>
        <b-radio-button v-model="ratingg.rating" :native-value="-1" type="is-danger">
          <div @click="clickk()">
            <span>Dislike</span>
          </div>
        </b-radio-button>
      </b-field>
      <b-field>
        <b-input type="text" placeholder="Comment" v-model="Commentt.comment"></b-input><br>
      </b-field>
      <button class="button is-primary" @click="save()">Sent</button><br> ----------------------------------------------------------------------------------------------------------------
      <div v-for="(Scomment,index) in showCom" :key="index" v-if="Scomment != undefined">
        <div class="title is-4">Comment {{index+1}} </div>
        {{Scomment.comment}}
        <br><br> by {{Scomment.memberID}} at {{Scomment.dateCreated}}
        <br><br> ----------------------------------------------------------------------------------------------------------------
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Moment from 'moment'

var guideDB = Firebase.database().ref('/Guides')
var heroDB = Firebase.database().ref('/Heroes')
var itemDB = Firebase.database().ref('/Items')
var commentDB = Firebase.database().ref('/Comments')
var rateDB = Firebase.database().ref('/Rating')

export default {
  name: 'Guide',
  props: ['guideKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('guide', guideDB.child(this.guideKey), null, function() {
      this.$bindAsObject('hero', heroDB.child(this.guide.hero))
      this.$bindAsArray(
        'showCom',
        commentDB.orderByChild('guideID').equalTo(this.guideKey)
      )
    })
  },
  data() {
    return {
      guide: {},
      hero: {},
      showCom: {},
      Commentt: {
        guideID: '',
        memberID: '',
        comment: '',
        dateCreated: null
      },
      ratingg: {
        guideID: '',
        memberID: '',
        rating: '',
        dateCreated: ''
      }
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
  },
  methods: {
    save() {
      if (!this.Commentt.dateCreated) {
        this.Commentt.dateCreated = new Moment().format()
      }

      if (!this.Commentt.memberID) {
        this.Commentt.memberID = this.$store.state.user.username
      }
      // New guide
      commentDB.push(this.Commentt)
    },
    clickk() {
      if (!this.ratingg.dateCreated) {
        this.ratingg.dateCreated = new Moment().format()
      }

      if (!this.ratingg.memberID) {
        this.ratingg.memberID = this.$store.state.user.username
      }
      rateDB.push(this.ratingg)
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
