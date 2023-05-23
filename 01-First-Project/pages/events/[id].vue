
<template>
    <h1>Event id: {{ $route.params.id }}</h1>
    <h1>Using Composable: We are in {{ sayName(`event page with id ${$route.params.id}`) }}</h1>
</template>

<script setup lang="ts">

    const { sayName } = useName();
    // Using custom layout
    definePageMeta({ layout: 'custom' });
    //show params inside script tag
    const route = useRoute();

    // console.log(route.params.id)

</script>