<template>

  <div>
    <div class="columns">
      <div class="column">

      </div>
      <div class="column">
        <h1 class="title is-1">Register</h1>
        <br>
        <br>
        <b-field for="username" label="Username" v-bind:type="userCheck ? '' : 'is-danger'" v-bind:message="userCheck? '' : 'Already have this username'">
          <b-input type="text" name="username" v-model="Member.username" maxlength="30"></b-input>
        </b-field>

        <br>
        <b-field for="password" label="Password">
          <b-input type="password" name="password" v-model="Member.password" password-reveal>
          </b-input>
        </b-field>

        <br>
        <b-field for="email" label="Email" type="text">
          <b-input type="email" name="email" v-model="Member.email" maxlength="50">
          </b-input>
        </b-field>
        <br>
        <button class="button is-primary is-outlined is-focused" v-on:click="submit()">submit</button>
        <br>
        <br> Already have an account?
        <br>
        <router-link to="login">
          <br>
          <button class="button is-black is-outlined is-focused is-samll">To Login Page</button>
        </router-link>
      </div>
      <div class="column">

      </div>

    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import md5 from 'md5'

var MemberDB = Firebase.database().ref('/Members')

export default {
  firebase: {
    nummember: MemberDB
  },
  name: 'Register',
  data() {
    return {
      Member: {
        username: '',
        password: '',
        email: ''
      },
      members: '',
      userCheck: true
    }
  },

  methods: {
    submit: function() {
      // Add/Update
      this.$bindAsObject(
        'members',
        MemberDB.child(this.Member.username),
        null,
        function() {
          if (this.members.username == this.Member.username) {
            console.log('fail')
            this.userCheck = false
          } else {
            this.Member.admin = false
            this.Member.password = md5(this.Member.password)
            MemberDB.child(this.Member.username).set(this.Member)

            // Redirect to login
            this.$router.push('/login')
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
