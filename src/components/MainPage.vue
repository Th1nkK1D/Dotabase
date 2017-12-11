<template>
  <div>

    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">

          <div class="columns">
            <div class="column is-3">
              <img src="../assets/Mainlogo.png">
            </div>
            <div class="column">
              <h1 class="title">
                Welcome To Dotabase!
              </h1>
              <br>
              <h2 class="subtitle">
                What is Dotabase?
              </h2>
              It is the website for Dota2 Player to learn and share the guide with others user.
            </div>
            <div class="column is-3">
              <img src="../assets/Mainlogo.png">
            </div>
          </div>

        </div>
      </div>
    </section>
    <br>

    <div class="columns">

      <div class="column is-5">
        <section class="hero is-danger is-bold">
          <div class="hero-body">
            <div class="container">

              <h3 class="title is-3">Heroes With Highest Guide (last 30 days)</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Hero Name</th>
                    <th>Guide Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr li v-for="(hero,key) in guideRank" v-bind:key="key">
                    <td>
                      {{key+1}}
                    </td>
                    <td>
                      <router-link v-bind:to="'hero/'+hero.heroKey">{{hero.heroName}}</router-link>
                    </td>
                    <td>
                      {{hero.count}}
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-7">
        <section class="hero is-danger is-bold">
          <div class="hero-body">
            <div class="container">
              <h3 class="title is-3">Most Active Member (last 30 days)</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Guides</th>
                    <th>Comments</th>
                    <th>Ratings</th>
                    <th>Active score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(member,key) in memberRank" v-bind:key="key">
                    <td>
                      {{key+1}}
                    </td>
                    <td>
                      {{member.username}}
                    </td>
                    <td>{{member.guideCount}}</td>
                    <td>{{member.commentCount}}</td>
                    <td>{{member.ratingCount}}</td>
                    <td>
                      {{3 * member.guideCount + member.commentCount + member.ratingCount}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Moment from 'moment'

var heroDB = Firebase.database().ref('/Heroes')
var playerDB = Firebase.database().ref('/Players')
var itemDB = Firebase.database().ref('/Items')
var MemberDB = Firebase.database().ref('/Members')
var teamDB = Firebase.database().ref('/Teams')
var guideDB = Firebase.database().ref('/Guides')
var commentDB = Firebase.database().ref('/Comments')
var ratingDB = Firebase.database().ref('/Rating')

var lastMonthUnix = new Moment().unix() - 60 * 60 * 24 * 30

export default {
  name: 'MainPage',
  data() {
    return {
      // Add data here
    }
  },
  firebase: {
    players: playerDB,
    members: MemberDB,
    heroes: heroDB,
    guides: guideDB.orderByChild('dateCreated').startAt(lastMonthUnix),
    comments: commentDB.orderByChild('dateCreated').startAt(lastMonthUnix),
    rating: ratingDB.orderByChild('dateCreated').startAt(lastMonthUnix)
  },
  computed: {
    guideRank() {
      if (this.guides) {
        let rank = []

        for (let i = 0; i < this.guides.length; i++) {
          let r = rank.findIndex(h => h.heroKey == this.guides[i].hero)

          if (r < 0) {
            rank.push({
              heroKey: this.guides[i].hero,
              heroName: this.heroes.find(h => h['.key'] == this.guides[i].hero)
                .name,
              count: 1
            })
          } else {
            rank[r].count++
          }
        }

        return rank.sort((a, b) => b.count - a.count).slice(0, 5)
      } else {
        return null
      }
    },
    memberRank() {
      let rank = []

      // Init rank array
      for (let m = 0; m < this.members.length; m++) {
        rank.push({
          memberID: this.members[m]['.key'],
          username: this.members[m].username,
          guideCount: 0,
          commentCount: 0,
          ratingCount: 0
        })
      }

      // Count guides
      for (let g = 0; g < this.guides.length; g++) {
        let owner = rank.findIndex(m => m.memberID == this.guides[g].memberID)

        if (owner >= 0) {
          rank[owner].guideCount++
        }
      }

      // Count comment
      for (let c = 0; c < this.comments.length; c++) {
        for (let member in this.comments[c]) {
          let owner = rank.findIndex(
            m => m.memberID == this.comments[c][member].memberID
          )

          if (owner >= 0) {
            rank[owner].commentCount++
          }
        }
      }

      // Count rating
      for (let r = 0; r < this.rating.length; r++) {
        for (let member in this.rating[r]) {
          let owner = rank.findIndex(
            m => m.memberID == this.rating[r][member].memberID
          )

          if (owner >= 0) {
            rank[owner].ratingCount++
          }
        }
      }

      return rank
        .sort(
          (a, b) =>
            3 * b.guideCount +
            b.commentCount +
            b.ratingCount -
            3 * a.guideCount +
            a.commentCount +
            a.ratingCount
        )
        .slice(0, 5)
    }
  }
}
</script>

<style scoped>
/* .icon {
    height:100px;
    width:100px ;
  } */
</style>
