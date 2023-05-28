
<template>
    <h1>Home Page - useState</h1>
    <h2>Shared State {{ count }}</h2>
    <hr>
    <h1>Home Page - management state with Pinia</h1>
    <h2>name: {{ store.name }}</h2>
    <h2>number: {{ store.counter }}</h2> 
    <h2>Double number {{ store.doubleCounter }}</h2>
    <button class="rounded-lg p-2 bg-slate-400 border-4" @click="store.increment">Increment value</button>
</template>

<script setup lang="ts">
    // SEO
    useHead({
        title: 'Home Page',
        meta: [
            {name: 'author', content:'Derson Ussuale'},
            {name:'description', content: 'Learning more about Nuxtjs' },
            {name:'keywords', content: 'NuxtJs, Programming in NuxtJs '}
        ]
    })
    // Pinia
    import { useCounterStore } from '../stores/myStores';

    const store = useCounterStore()
    
    // console.log(store.doubleCounter)

    //useState
    const count = useCount();

    
</script>

<style scoped>
    h1, h2 {
        text-transform: capitalize;
        /* margin-top: 0.5em; */
    }
</style>