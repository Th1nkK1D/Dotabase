<template>
    
    <div>
        <h1>Update Item</h1>
        <br>
        <label for="itemname">Item Name</label>
        <input type="text" name="itemname">
        <br>
        <label for="itemicon">Item Icon</label>
        <input type="text" name="itemicon">
        <br>
        <label for="type">Type</label>
        <input type="text" name="type">
        <br>
        <label for="itemcost">Cost</label>
        <input type="number" name="itemcost">
        <br>
        <label for="itemdescription">Description</label>
        <input type="text" name="itemdescription">
        <br>
        <br>
        <br>
        <label for="recipes">Recipes</label>
        <input type="text" name="recipes">
        <br>
        <label for="recipeprice">Recipe Price</label>
        <input type="number" name="recipeprice">
        <br>
        <br>
        <br>
        <h2>Stats</h2> 
        <label for="statname">Stat Name</label>
        <input type="text" name="statname">
        <br>
        <label for="itemstatvalue">Value</label>
        <input type="text" name="itemstatvalue">
        <br>
        <br>
        <br>
        <h2>Abilities</h2>
        <label for="abilityname">Ability Name</label>
        <input type="text" name="abilityname">
        <br>
        <label for="abilitytype">Ability Type</label>
        <input type="text" name="abilitytype">
        <br>
        <label for="itemabilitydescription">Description</label>
        <input type="text" name="itemabilitydescription">
        <br>
        Attributes:
        <br>
        <label for="attributename">Attribute Name</label>
        <input type="text" name="attributename">
        <br>
        <label for="attributevalue">Value</label>
        <input type="text" name="attributevalue">
        <br>
        
        <br>
        <button>Submit</button>
    </div>



</template>

<script>
export default {
  name: 'UpdateItem',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
