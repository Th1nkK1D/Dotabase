<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Items</h1>
      </div>
      <div class="column is-narrow" v-if="$store.state.user && $store.state.user.admin">
        <router-link to="/updateitem">
          <button class="button">+ Item</button>
        </router-link>
      </div>
    </div>
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
    return {}
  },
  firebase: {
    items: itemDB
  }
}
</script>

<style scoped>

</style>
