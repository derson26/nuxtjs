<template>
    <header class="w-full border-b-4 flex justify-center h-16 items-center bg-gray-400">
      <!-- <NuxtLayout> -->
        <ul class="flex justify-center align-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/events">Events</NuxtLink></li>
        <li><NuxtLink to="/images">Images</NuxtLink></li>
        <li><NuxtLink to="/svg">svg icon</NuxtLink></li>
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
    ul > li {
        margin: 0 1em;
        text-transform: capitalize;
    }
</style>