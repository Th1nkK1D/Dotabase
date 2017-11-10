<template>
  <div>
    <h1>Items</h1>

    <ul>
        <li v-for="(item,key) in items" v-bind:key="key">
            <router-link v-bind:to="'item/'+item['.key']">{{item.name}}</router-link>
        </li>
    </ul>

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
    itemss: itemDB
  }
}
</script>

<style scoped>

</style>
