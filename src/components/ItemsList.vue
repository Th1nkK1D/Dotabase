<template>
  <div>
    <h1>Items</h1>
    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="(item,key) in items" v-bind:key="key">
              <router-link v-bind:to="'item/'+item['.key']">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Most Used Items</h3>
        <br>
      </div>
    </div>


  </div>
</template>

<script>
import Firebase from 'firebase'
var itemDB = Firebase.database().ref('/Items')

export default {
  name: 'ItemsList',
  data() {
    return {

    }
  },
  firebase:  {
    items: itemDB
  }
}
</script>

<style scoped>

</style>
