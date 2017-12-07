<template>
  <div>
      <h1>Guide</h1> <br>
      <p>{{guide.name}}</p>    
      <p>{{guide.hero}}</p>
      
      <div v-for="(learn,index) in guide.learnOrder" :key="index">
          <div v-if="guide.learnOrder">
              {{learn}}
          </div>          
      </div>     
  </div>
</template>

<script>
import Firebase from 'firebase'

var guideDB = Firebase.database().ref('/Guides')

export default {
  name: 'Guide',
  props: ['guideKey'],
  mounted() {
    // Firebase bind
    this.$bindAsObject('guide',guideDB.child(this.guideKey))
  },
  data () {
    return {
      guide: {}
    }
  },
  computed: {
    
  },
}
</script>

<style scoped>

</style>
