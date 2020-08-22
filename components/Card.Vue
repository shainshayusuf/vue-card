<template>
<section>
    <div v-for="task in tasks" align="center" :key="task.id"> 
  <b-card class="rounded-pill mb-4"
    :title="task.title"
    border-variant="dark"
    
    
    
    style="max-width: 40rem;"
    
  >
  
    <div class="text-center">
      <h5 class="h5">
        Assigned For User<span class="font-weight-light">: {{task.userId}}</span>
      </h5>
      
    </div>
    <div v-if="task.completed">
      <b-badge variant="success">Completed</b-badge>
      </div>
    <div v-else>
        <b-badge variant="danger">Pending</b-badge>
      </div>
    </b-card>
    </div>
</section>
</template>

<script>
export default {
    props:{
        tasks:{
            type:Array,
            required:true
        }
    }
}
</script>