<template>
  <div>

    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">

          <div class="columns">
            <div class="column is-3">
              <img src="http://fc00.deviantart.net/fs71/f/2012/355/9/d/dota_2_icon_for_windows_7_by_excharny-d5ook5y.png">
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
              <img src="http://fc00.deviantart.net/fs71/f/2012/355/9/d/dota_2_icon_for_windows_7_by_excharny-d5ook5y.png">
            </div>
          </div>

        </div>
      </div>
    </section>
    <br>

    <!-- <div class="columns">
      <div class="column is-2">
        <router-link to="/hero">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Heroes</h3>
              </div>
            </div>
          </section>
        </router-link>

      </div>
      <div class="column is-2">
        <router-link to="/guide">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Guides</h3>
              </div>
            </div>
          </section>
        </router-link>
      </div>
      <div class="column is-2">

        <router-link to="/item">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Items</h3>
              </div>
            </div>
          </section>
        </router-link>

      </div>
      <div class="column is-2">
        <router-link to="/player">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Players</h3>
              </div>
            </div>
          </section>
        </router-link>

      </div>
      <div class="column is-2">
        <router-link to="/team">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Teams</h3>
              </div>
            </div>
          </section>
        </router-link>

      </div>
      <div class="column is-2">
        <router-link to="/login">
          <section class="hero is-dark is-bold">
            <div class="hero-body">
              <div class="container">
                <h3 class="title is-3">Login\Register</h3>
              </div>
            </div>
          </section>
        </router-link>
      </div>

    </div> -->

    <div class="columns">

      <div class="column is-6">
        <section class="hero is-danger is-bold">
          <div class="hero-body">
            <div class="container">

              <h3 class="title is-3">Heroes With Highest Guide Number</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Hero Name</th>
                    <th>Guide Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr li v-for="(hero,key) in heroes" v-bind:key="key">
                    <td>
                      <!-- <ul>
                        <li v-for="(hero,key) in heroes" v-bind:key="key"> -->
                      <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
                      <!-- </li>
                      </ul> -->
                    </td>
                    <td>
                      num
                    </td>

                  </tr>
                </tbody>

              </table>

              <ul>
                <li v-for="(hero,key) in heroes" v-bind:key="key">
                  <router-link v-bind:to="'hero/'+hero['.key']">{{hero.name}}</router-link>
                  Guides :
                </li>
              </ul>

              <br>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-6">
        <section class="hero is-danger is-bold">
          <div class="hero-body">
            <div class="container">
              <h3 class="title is-3">Most Active Member</h3>
              <ul>
                <li v-for="(member,key) in members" v-bind:key="key">
                  <router-link v-bind:to="'member/'+member['.key']">{{member.username}}</router-link>
                  Score :
                </li>
              </ul>
              <br>
            </div>
          </div>
        </section>
      </div>
    </div>
    <br>

    <br>

    <br>

  </div>
</template>

<script>
import Firebase from 'firebase'
var heroDB = Firebase.database().ref('/Heroes')
var playerDB = Firebase.database().ref('/Players')
var itemDB = Firebase.database().ref('/Items')
var MemberDB = Firebase.database().ref('/Members')
var teamDB = Firebase.database().ref('/Teams')
var guideDB = Firebase.database().ref('/Guides')

export default {
  name: 'MainPage',
  data() {
    return {
      // Add data here
    }
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

        return rank.sort((a, b) => a.count - b.count).slice(0, 5)
      } else {
        return null
      }
    }
  },
  firebase: {
    players: playerDB,
    members: MemberDB,
    heroes: heroDB,
    guides: guideDB
  }
}
</script>

<style scoped>
/* .icon {
    height:100px;
    width:100px ;
  } */
</style>
