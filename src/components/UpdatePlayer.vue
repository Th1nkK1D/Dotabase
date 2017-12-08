<template>

  <div>
    <h1 class="title is-1">Update Player</h1>
    <div class="columns">
      <div class="column">
        <b-field label="Player Name">
          <b-input type="text" placeholder="Name" v-model="Player.name" maxlength="30"></b-input>
        </b-field>
        <b-field label="Avatar">
          <b-input type="text" placeholder="Icon" v-model="Player.avatar"></b-input>
        </b-field>
        <b-field label="Team Name">
          <b-autocomplete v-model="teamSearch" placeholder="Search team..." :data="filterdTeamList" field="name" :keep-first="true" @select="option => Player.teamName = option ? option.name : null"></b-autocomplete>
        </b-field>
        <b-field label="Role">
          <b-input type="text" placeholder="Role" v-model="Player.role"></b-input>
        </b-field>
        <b-field label="MMR Solo">
          <b-input type="number" placeholder="Solo MMR" v-model.number="Player.mmrSolo"></b-input>
        </b-field>
        <b-field label="MMR Party">
          <b-input type="number" placeholder="Party MMR" v-model.number="Player.mmrParty"></b-input>
        </b-field>
        <b-field label="Match Played">
          <b-input type="number" placeholder="Number Of Match Played" v-model.number="Player.matchPlayed"></b-input>
        </b-field>

      </div>
      <div class="column">
        <h2 class="title is-3">Hero Rank:</h2>
        <button class="button is-primary is-focused" @click="addHero()">+ hero</button>
        <br>
        <div v-for="(heroRank, hi) in Player.heroRanks" v-bind:key="hi">

          <div class="columns">

            <div class="column">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Name #{{hi+1}}</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="text" placeholder="Hero name" name="attributename" v-model="heroRank.heroName">
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Score</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="number" placeholder="Hero score" name="heroscore" v-model.number="heroRank.score">
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="column is-narrow">
              <button class="button is-primary is-outlined is-focused" @click="removeHero(hi)">Remove</button>
            </div>

          </div>

        </div>
        <br>
        <button class="button is-primary is-focused is-medium" @click="submit()">Submit</button>
        <br>
      </div>
    </div>

  </div>

</template>

<script>
import Firebase from 'firebase'
var playerdb = Firebase.database().ref('/Players')
var teamDB = Firebase.database().ref('/Teams')

export default {
  name: 'UpdatePlayer',
  props: ['playerKey'],
  data() {
    return {
      heroSearch: '',
      teamSearch: '',
      Player: {
        name: '',
        avatar: '',
        teamName: '',
        role: '',
        mmrSolo: null,
        mmrParty: null,
        matchPlayed: null,
        heroRanks: []
      }
    }
  },
  firebase: {
    teams: teamDB
  },
  computed: {
    filterdTeamList() {
      return this.teams.filter(team => {
        return (
          team.name.toLowerCase().indexOf(this.teamSearch.toLowerCase()) >= 0
        )
      })
    }
  },
  methods: {
    submit: function() {
      playerdb.child(this.Player.name).set(this.Player)
    },
    addHero: function() {
      this.Player.heroRanks.push({
        heroName: '',
        score: null
      })
    },
    removeHero: function(hi) {
      this.Player.heroRanks.splice(hi, 1)
    }
  },
  mounted() {
    // Check admin permission
    if (!this.$store.state.user || !this.$store.state.user.admin) {
      this.$router.push('/')
    } else {
      if (this.playerKey) {
        this.$bindAsObject(
          'Player',
          playerdb.child(this.playerKey),
          null,
          function() {
            delete this.Player['.key']
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
