
<template>
    
    <ul class="order flex justify-center gap-4 rounded-2xl pt-4 capitalize">
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="varOrderBy='title'">order by title</li>
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="varOrderBy='salary'">order by salary</li>
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="varOrderBy='location'">order by location</li>
    </ul>
    <h1 class="capitalize mt-2">Order By: {{ varOrderBy }}</h1>
    <Jobs :propJob="funcOrderBy" propOrderBy="salary" :propsOrder="varOrderBy"/>
   
</template>

<script setup lang="ts">
import { TOrder, IJob } from '../types/job';

const { data:result } = await useLazyFetch('/api/jobs');

// Concept of reactivity
const varOrderBy = ref<TOrder>('title');
const jobs = result.value!.jobs;

// console.log(toRaw(jobs.value));

const funcOrderBy = computed(() => {
    return [...jobs].sort((a: IJob, b:IJob) => {
        return a[varOrderBy.value] > b[varOrderBy.value] ? 1 : -1;
    })
})
</script>

<style scoped></style>