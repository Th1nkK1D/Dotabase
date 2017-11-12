<template>
    
    <div>
        <h1>Update Guide</h1>
        <br>
          <label for="name_guide">Guide Name</label>
			    <input type="text" name="name_guide" >
			    <br>

          <label for="hero_Select">Select Hero</label>
			    <input type="text" name="hero_Select" >
			    <br>

          Purchase Order
          <br>

          <label for="po_name">Po Name</label>            
			    <input type="text" name="po_name" >
			    <br>

<!-- ช่องitemที่จะใส่ -->
          <div>

          </div>
          <label for="item_name">Item Name</label>
			    <input type="text" name="item_name" >
			    <br>

<!-- ช่อง items ทั้งหมด -->
          <div>

          </div>

          Skill Sequence
          <br>

<!-- first skill -->
          <div>
            <div>
                First Skill
            </div>
            <br>
            <div>
              <!-- up skill 1-25 -->
              <label for="1_skill"></label>            
			        <input type="radio" name="1_skill" >
            </div>
          </div>

<!-- second skill -->
          <div>
            Second Skill
          </div>
          <br>
          <div>
              <!-- up skill 1-25 -->
              <label for="1_skill"></label>            
			        <input type="radio" name="1_skill" >
          </div>

<!-- Third skill -->
          <div>
            Third Skill
          </div>
          <br>
          <div>
              <!-- up skill 1-25 -->
              <label for="1_skill"></label>            
			        <input type="radio" name="1_skill" >
          </div>

<!-- Fourth skill -->
          <div>
            Fourth Skill
          </div>
          <br>
          <div>
              <!-- up skill 1-25 -->
              <label for="1_skill"></label>            
			        <input type="radio" name="1_skill" >
          </div>

<!-- Talent Level -->
          <div>
           Talent Level
          </div>
          <br>
          <div>
              <!-- up skill 1-25 -->
              <label for="1_skill"></label>            
			        <input type="radio" name="1_skill" >
          </div>

<!-- Talent Tree -->
          <div>
            <center>
            Talent Tree
            <br>
            <div>
              <!-- lv25 -->
              <label for="t_l_25"></label>            
			        <input type="radio" name="t_l_25" >
              <label for="t_r_25">25</label>            
			        <input type="radio" name="t_r_25" >
              <br>
              <!-- lv20 -->
              <label for="t_l_20"></label>            
			        <input type="radio" name="t_l_20" >
              <label for="t_r_20">20</label>            
			        <input type="radio" name="t_r_20" >
              <br>
              <!-- lv15 -->
              <label for="t_l_15"></label>            
			        <input type="radio" name="t_l_15" >
              <label for="t_r_15">15</label>            
			        <input type="radio" name="t_r_15" >
              <br>
              <!-- lv10 -->
              <label for="t_l_10"></label>            
			        <input type="radio" name="t_l_10" >
              <label for="t_r_10">10</label>            
			        <input type="radio" name="t_r_10" >
            </div>
            </center>
          </div>

        <br>
        <button>Submit</button>
    </div>



</template>

<script>
export default {
  name: 'UpdateGuide',
  data () {
    return {
      // Add data here
    }
  }
}
</script>

<style scoped>

</style>
