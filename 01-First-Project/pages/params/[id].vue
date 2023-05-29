
<template>
    <h1>Event id: {{ $route.params.id }}</h1>
    <h1>Using Composable: We are in {{ sayName(`event page with id ${$route.params.id}`) }}</h1>
    <h1>{{ color }}</h1>
    <h2 @click="count++">click to increment value {{ count }}</h2>
</template>

<script setup lang="ts">
// import { useColor } from '../../composables/state';

    definePageMeta({ layout: 'custom', });
    const { sayName } = useName();
    
    //Same as useState('color') or useCount('count')
    const color = useColor();
    const count = useCount();

    // Using custom layout
    
    //show params inside script tag
    // const route = useRoute();

    // console.log(route.params.id)

</script>

<style scoped>
    h2 {
        cursor: pointer;
    }
</style>