# dotabase

> Dota 2 Web Database with Vue + Firebase

## Init Project

``` bash
# install dependencies
yarn
```

## Start server
``` bash
# serve with hot reload at localhost:8080
yarn run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## VueJS Example
``` html
<!-- v-if -->
<span v-if="seen">Now you see me</span>

<!-- v-for -->
<ol>
    <li v-for="todo in todos">
        {{ todo.text }}
    </li>
</ol>

<!-- v-model -->
<input v-model="message">

<!-- v-on:click -->
<button v-on:click="reverseMessage">Reverse Message</button>

```

More on [VueJS Doc](https://vuejs.org/v2/guide/)

## Firebase Example
``` javascript
import Firebase from 'firebase'

var heroDB = Firebase.database().ref('/Hero') // Main Directory

export default {
  name: 'my-component',
  firebase:  {
    heroes: heroDB // Read
  },
  methods: {
      submit: function() {
        // Add/Update
        heroDB.child(this.newHero.localized_name).set(this.newHero) 
      },
      remove: function() {
        // Delete
        heroDB.child(this.newHero.localized_name).remove() 
      }
  }
}
```

More on [Firebase Doc](https://firebase.google.com/docs/)
