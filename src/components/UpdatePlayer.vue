<template>
    
    <div>
        <h1>Update Player</h1>
        <br>
        <label for="name">Player Name</label>
        <input type="text" name="name">
        <br>
        <label for="playeravatar">Avatar</label>
        <input type="text" name="playeravatar">
        <br>
        <label for="teamname">Team Name</label>
        <input type="text" name="teamname">
        <br>
        <label for="region">Region</label>
        <input type="text" name="region">
        <br>
        <label for="playerrole">Role</label>
        <input type="text" name="playerrole">
        <br>
        <label for="solommr">MMR Solo</label>
        <input type="number" name="solommr">
        <br>
        <label for="partymmr">MMR Party</label>
        <input type="number" name="partymmr">
        <br>
        <br>
        <br>
        <h2>Hero Rank:</h2>
        <label for="heroname">Hero Name</label>
        <input type="number" name="heroname">
        <br>
        <label for="heroscore">Hero Score</label>
        <input type="number" name="heroscore">
        <br>
        <button>Submit</button>
    </div>



</template>

<script>
export default {
  name: 'UpdatePlayer',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
