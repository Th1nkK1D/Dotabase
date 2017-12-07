<template>

    <div>


  <div class="columns">
    <div class="column">

    </div>
    <div class="column">
      <h1 class="title is-1">Login</h1>
        <br>
        <b-field label="Username">
        <b-input type="text" name="username" v-model="username" maxlength="30"></b-input>
        </b-field>

        <br>
        <b-field label="Password">
            <b-input type="password"
                vname="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        <!-- <label for="password">Password</label> -->
        <!-- <input type="password" name="password" v-model="password"> -->
        <br>
        <!-- <a class="button">Button</a> -->
        <button class="button is-black" v-on:click ="login()">Login</button>
        <br>
        <br>
        Don't have an account?
        <br>
        <router-link to = "register">
          <button class="button is-black" >Create Account</button>
        </router-link>
    </div>
    <div class="column">

    </div>

  </div>


    </div>



</template>

<script>

import Firebase from 'firebase'
var MemberDB = Firebase.database().ref('/Members')

export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: "",
      member: ""
    }
  },
  methods : {
    login() {
      this.$bindAsObject('member',MemberDB.child(this.username),null,function(){
        if (!this.member.password)
          console.log("Can not find this user.")
        else {
          if (this.member.password != this.password)
            console.log("No matching password.")
          else
            console.log("Complete!")
            this.$store.commit('login',this.member)

            this.$router.push('/')
        }
      })
    }
  }
}

</script>

<style scoped>

</style>
