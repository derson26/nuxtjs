<template>
    <header class="w-full flex justify-center h-16 items-center bg-gray-400 box-border capitalize ">
      <!-- <NuxtLayout> -->
        <ul class="flex justify-center align-center capitalize">
          <li class="p-1"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/job">API 1</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/params">Events</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/images">Images</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/svg">svg icon</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/protected">Protected Area</NuxtLink></li>
          <li class="p-1"><NuxtLink to="/server">API 2</NuxtLink></li>
      </ul>
      <!-- </NuxtLayout> -->
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style scoped>
    /* ul > li {
        margin: 0 1em;
        text-transform: capitalize;
    } */
</style>