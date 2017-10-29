<template>
    
    <div>
        <h1>Register</h1>
        <br>
        <label for="username">Username</label>
        <input type="text" name="username">
        <br>
        <label for="password">Password</label>
        <input type="password" name="password">
        <br>
        <label for="email">E-mail</label>
        <input type="text" name="email">
        <br>
        <label for="memberavatar">Avatar</label>
        <input type="text" name="memberavatar">
        <br>
        <br>
        <button>Register</button>
        <br>
        <br>
        <button>To Login Page</button>
    </div>



</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
