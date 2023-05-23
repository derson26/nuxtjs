<template>
  <h1>Events</h1>
    <ul>
      <li><NuxtLink :to="`/events/${id}`">Event ID</NuxtLink></li>
  </ul>
  
  
</template>
 
<script lang="ts">
  import { defineComponent } from '../../.nuxt/imports';

  export default defineComponent({
    data() {
      return {
        id: 1
      }
    }
  })
</script>
