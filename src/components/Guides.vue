<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">{{guide.name}}</h1>
        Create by {{guide.memberID}} on
        <span v-if="guide.dateCreated">{{guide.dateCreated | moment("ddd D MMM YY, HH:mm")}}</span>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link :to="'/updateguide/'+guideKey">
          <button class="button">Edit</button>
        </router-link>
      </div>
    </div>

    <router-link :to="'/hero/'+guide.hero">
      <h1 class="title is-5" v-if="hero && guide.name">
        Hero : {{hero.name}}
      </h1>

      <img :src="hero.avatar" :alt="hero.name">
    </router-link>

    <section class="section">
      <h3 class="title is-3">Purchase Order</h3>
      <div class="columns" v-if="items">
        <div v-for="purchase in guide.purchaseCategory" :key="purchase.slot" class="column">
          <h3 class="title is-4">{{purchase.name}}</h3>
          <router-link v-for="item in purchase.items" :key="item" :to="'/item/'+item">
            <img :src="items[item].icon" :alt="items[item].name">
          </router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <h3 class="title is-3">Learn Order</h3>
      <table class="table">
        <tr v-for="(skill,Sindex) in hero.skills" :key="skill.name">
          <td><img :src="skill.icon" width="50px" height="auto"></td>
          <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined">
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
        </tr>
        <tr>
          <td><img src="../assets/talent.png" width="50px" height="auto"></td>
          <td v-for="(learn,Lindex) in guide.learnOrder" :key="Lindex" v-if="learn != undefined">
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
        </tr>
      </table>
    </section>

    <center>
      <h3 class="title is-4">Talent Tree</h3>
      <table class="table">
        <thead>
          <tr>
            <th style="text-align: center;">Talent 1</th>
            <th style="text-align: center;">Level</th>
            <th style="text-align: center;">Talent 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(talentEachLvl,index) in sortedTalent" :key="talentEachLvl[0]">
            <td :class="guide.talentTree[index] == 0 ? 'use' : ''">{{talentEachLvl[0]}}</td>

            <td style="text-align: center;">{{25-(5*index)}}</td>

            <td :class="guide.talentTree[index] == 1 ? 'use' : ''">{{talentEachLvl[1]}}</td>
            <br>
          </tr>
        </tbody>
      </table>
    </center>

    <section class="section">
      <h3 class="title is-3">Rating and Comments</h3>
      <strong>Rating: {{ overallRating.sum }}</strong> ({{ overallRating.count }} votes)

      <b-field>
        <b-radio-button v-model="myRating.rating" :native-value="1" type="is-success" @input="saveRating()">
          <span>Like</span>
        </b-radio-button>
        <b-radio-button v-model="myRating.rating" :native-value="-1" type="is-danger" @input="saveRating()">
          <span>Dislike</span>
        </b-radio-button>
      </b-field>

      <b-field>
        <b-input maxlength="100" type="textarea" placeholder="Comment" v-model="myComment.comment"></b-input>
      </b-field>

      <button class="button is-primary" @click="saveComment()">Add Comment</button>
      <section class="section">
        <div class="box" v-for="(com,index) in comments" :key="index" v-if="com != undefined">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{com.memberID}}</strong>
                  <small>on {{com.dateCreated | moment("ddd D MMM YY, HH:mm")}}</small>
                  <br> {{com.comment}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
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

    this.$bindAsArray(
      'ratings',
      ratingDB.child(this.guideKey),
      null,
      function() {
        // Get current user rating

        let mr = this.ratings.find(
          r => r.memberID == this.$store.state.user.username
        )

        if (mr) {
          delete mr['.key']
          this.myRating = mr
        }
      }
    )
  },
  data() {
    return {
      guide: {},
      hero: {},
      comments: [],
      ratings: [],
      myComment: {
        memberID: '',
        comment: '',
        dateCreated: null
      },
      myRating: {
        memberID: '',
        rating: '',
        dateCreated: ''
      }
    }
  },
  firebase: {
    items: {
      source: itemDB,
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
      if (this.$store.state.user) {
        this.myComment.memberID = this.$store.state.user.username
        this.myComment.dateCreated = new Moment().unix()

        // Push comment
        commentDB.child(this.guideKey).push(this.myComment)
      }
    },
    saveRating() {
      if (this.$store.state.user) {
        this.myRating.memberID = this.$store.state.user.username
        this.myRating.dateCreated = new Moment().unix()

        // Update rating
        ratingDB
          .child(this.guideKey)
          .child(this.$store.state.user.username)
          .set(this.myRating)
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
