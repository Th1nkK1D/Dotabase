<template>

    <div>
        <h1>Register</h1>
        <br>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="Member.username">
        <br>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="Member.password">
        <br>
        <label for="email">E-mail</label>
        <input type="text" name="email" v-model="Member.email">
        <br>
        <label for="heroAvatar">Avatar</label>
        <input type="text" name="heroAvatar" v-model="Member.heroAvatar">
        <br>
        <br>
        <button v-on:click="submit()">submit</button>
        <br>
        <br>
        Already have an account?
        <br>
        <router-link to = "login">
          <button>To Login Page</button>
        </router-link>
    </div>
</template>

<script>

import Firebase from 'firebase'

var MemberDB = Firebase.database().ref('/Members')

export default
{
  firebase:  {
    nummember: MemberDB
  },
  name: 'Register',
  data () {
    return {
      Member:{
        username: '',
        password: '',
        email: '',
        heroAvatar: ''
              }
            }
          },

methods:{
   submit: function() {
        // Add/Update
    this.member.admin = false  
    MemberDB.child(this.Member.username).set(this.Member)
  }
        }
}
</script>

<style scoped>

</style>
