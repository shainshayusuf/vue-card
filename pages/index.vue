<template>
 
   <Card :tasks="loadedPosts"/>
 
</template>

<script>
import Card from "@/components/Card";
export default {
  components:{
    Card
  },
   computed:{
      loadedPosts(){
        return this.$store.getters.loadedTasks
      }
    }
//  methods

   
}
</script>

<style>

</style>
