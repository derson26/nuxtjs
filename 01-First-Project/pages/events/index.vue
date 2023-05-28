<template>
  <h1>Events</h1>
    <ul>
      <li><NuxtLink :to="`/events/${id}`">Click on me to see [ Event ID ] </NuxtLink></li>
  </ul>
  
  
</template>
 
<script lang="ts" setup>
 const id = 1;

  
</script>
