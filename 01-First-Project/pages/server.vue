
<template>
    <div class="w-4/5 mx-auto text-center capitalize">
        <h1>API</h1>
        
        <h1 v-if="pending">Loading</h1>

            <div v-else>
                <ul v-for="user in users">
                <hr>
                <li>age: {{ user.age }}</li>
                <li>name: {{ user.name }}</li>
                <hr>
            </ul>

            <hr>
            <h1 class="mt-4">Find a country</h1>
            <label for="country">
                <input type="text" id="country" v-model="countrySearching">
            </label>

            <div v-if="countrySearching">
                <div v-for="country, index in data?.countries" :key="index">
                    
                    <ul>
                        <li>id: {{ country._id }}</li>
                        <li>Country name: {{ country.label }}</li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    // fetch data
    const { data:users, pending } = await useLazyFetch('/api/users');

    const countrySearching = ref<string>('');
    const { data } = await useLazyFetch('/api/countries', 
    { body:{ country: countrySearching},
        method: 'POST',
    });


    // const { data, pending } = await useLazyFetch('/api/users');
    // console.log(toRaw(data.value));
    
    
</script>

<style scoped></style>