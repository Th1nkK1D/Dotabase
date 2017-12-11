<template>

  <div>

    <div class="columns">
      <div class="column">

      </div>
      <div class="column">
        <h1 class="title is-1">Login</h1>
        <br>
        <b-field for="username" label="Username" v-bind:type="invalidUsername ? '' : 'is-danger'" v-bind:message="invalidUsername ? '' : 'Invalid username'">
          <b-input type="text" name="username" v-model="username" maxlength="30"></b-input>
        </b-field>

        <br>
        <b-field for="password" label="Password" v-bind:type="wrongPassword ? '' : 'is-warning'" v-bind:message="wrongPassword ? '' : 'Wrong password'">
          <b-input type="password" vname="password" v-model="password" password-reveal>
          </b-input>
        </b-field>
        <!-- <label for="password">Password</label> -->
        <!-- <input type="password" name="password" v-model="password"> -->
        <br>
        <!-- <a class="button">Button</a> -->
        <button class="button is-primary is-outlined is-focused" v-on:click="login()">Login</button>
        <br>
        <br> Don't have an account?
        <br>
        <router-link to="register">
          <br>
          <button class="button is-black is-outlined is-focused is-small">Create Account</button>
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
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      member: '',
      invalidUsername: true,
      wrongPassword: true
    }
  },
  methods: {
    login() {
      this.$bindAsObject(
        'member',
        MemberDB.child(this.username),
        null,
        function() {
          if (!this.member.password) {
            console.log('Can not find this user.')
            this.invalidUsername = false
          } else {
            if (this.member.password != md5(this.password)) {
              console.log('No matching password.')
              this.wrongPassword = false
            } else {
              console.log('Complete!')
              this.$store.commit('login', this.member)

              this.$router.push('/')
            }
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
