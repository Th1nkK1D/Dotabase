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
        <b-radio-button v-model="myRating.rating" :native-value="1" type="is-success">
          <div @click="rate()">
            <span>Like</span>
          </div>
        </b-radio-button>
        <b-radio-button v-model="myRating.rating" :native-value="-1" type="is-danger">
          <div @click="rate()">
            <span>Dislike</span>
          </div>
        </b-radio-button>
      </b-field>
      <b-field>
        <b-input type="text" placeholder="Comment" v-model="myComment.comment"></b-input>
      </b-field>

      <button class="button is-primary" @click="saveComment()">Sent</button><br> ----------------------------------------------------------------------------------------------------------------
      <div v-for="(com,index) in comments" :key="index" v-if="com != undefined">
        <div class="title is-4">Comment {{index+1}} </div>
        {{com.comment}}
        <br><br> by {{com.memberID}} at {{com.dateCreated}}
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
var ratingDB = Firebase.database().ref('/Rating')

export default {
  name: 'Guide',
  props: ['guideKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('guide', guideDB.child(this.guideKey), null, function() {
      this.$bindAsObject('hero', heroDB.child(this.guide.hero))
    })

    this.$bindAsArray('comments', commentDB.child(this.guideKey))
    this.$bindAsArray('ratings', ratingDB.child(this.guideKey))
  },
  data() {
    return {
      guide: {},
      hero: {},
      comments: [],
      ratings: [],
      myComment: {
        comment: '',
        dateCreated: null
      },
      myRating: {
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
    },
    overallRating() {
      let sum = 0
      let count = this.ratings.length

      for (let i = 0; i < count; i++) {
        sum += this.ratings[i].rating
      }

      return {
        sum: sum,
        count: count
      }
    }
  },
  methods: {
    saveComment() {
      console.log(this.myComment)

      if (this.$store.state.user) {
        this.myComment.memberID = this.$store.state.user.username
        this.myComment.dateCreated = new Moment().unix()

        console.log(this.myComment)

        // New guide
        commentDB.child(this.guideKey).push(this.myComment)
      }
    },
    saveRating() {
      this.myRating.dateCreated = new Moment().unix()
      console.log(this.myRating)

      if (!this.myRating.guideID) {
        // New vote
        console.log('new vote')
        this.myRating.memberID = this.$store.state.user.username

        rateDB.push(this.myRating)
      } else {
        // Already vote
        console.log('update vote')
        let key = this.myRating['.key']
        console.log(this.myRating)

        delete this.myRating['.key']

        rateDB.child(key).set(this.myRating)
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
