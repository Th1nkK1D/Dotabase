<template>

    <div>
        <h1>Login</h1>
        <br>
        <label for="username">Username</label>
        <input type="text" name="username">
        <br>
        <label for="password">Password</label>
        <input type="password" name="password">
        <br>
        <button>Login</button>
        <br>
        <br>
        Don't have an account?
        <br>
        <router-link to = "register">
          <button>Create Account</button>
        </router-link>
    </div>



</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
