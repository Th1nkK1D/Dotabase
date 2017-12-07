<template>

    <div>
        

  <div class="columns">
    <div class="column">
      
    </div>
    <div class="column">
      <h1>Login</h1>
        <br>
        <b-field label="Username">
        <b-input type="text" name="username" v-model="username" maxlength="30"></b-input>
        </b-field>

        <!-- <label for="username">Username</label> -->
        <!-- <input type="text" name="username" v-model="username"> -->
        <br>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
        <br>
        <button v-on:click ="login()">Login</button>
        <br>
        <br>
        Don't have an account?
        <br>
        {{member}}
        <router-link to = "register">
          <button>Create Account</button>
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
        }
      })
    }
  }
}

</script>

<style scoped>

</style>
