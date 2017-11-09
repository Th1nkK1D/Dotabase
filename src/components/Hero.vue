<template>
  <div>
    <h1>{{hero.name}}</h1>
    {{hero}}
  </div>
</template>

<script>
import Firebase from 'firebase'

var heroDB = Firebase.database().ref('/Heroes')

console.log(this.heroKey)

export default {
  name: 'Hero',
  props: ['heroKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('hero',heroDB.child(this.heroKey))
  },
  data () {
    return {
      // Add data here
    }
  },
  firebase:  {
    hero: heroDB
  },
}
</script>

<style scoped>

</style>
