
<template>
    <ul class="order flex justify-center gap-4 rounded-2xl pt-4 capitalize">
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="funcOrderBy('title')">order by title</li>
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="funcOrderBy('salary')">order by salary</li>
        <li class="border-4 p-2 rounded-md cursor-pointer" @click="funcOrderBy('location')">order by location</li>
    </ul>
    <h1 class="capitalize mt-2">Order By: {{ varOrderBy }}</h1>
    <Jobs :propJob="result!.jobs" propOrderBy="salary" :propsOrder="varOrderBy" />
</template>

<script setup lang="ts">
import { TOrder, IJob } from '../types/job';

const { data: result } = await useLazyFetch('/api/jobs');

// Concept of reactivity
const varOrderBy = ref<TOrder>('title');

// console.log(toRaw(jobs.value));

const funcOrderBy = (params: TOrder) => {
    varOrderBy.value = params;
    console.log(params)

    // stackoverflow: https://stackoverflow.com/questions/55727823/javascript-check-if-a-array-of-property-is-ascending-sorted
    const varIsOrdered = result.value!.jobs.every((b, i, { [i - 1]: a }) => !a || a[varOrderBy.value] < b[varOrderBy.value]);

    // if array is not ordered 
    if (!varIsOrdered) {
        result.value!.jobs.sort((a: IJob, b: IJob) => {
            return a[varOrderBy.value].toLocaleLowerCase() > b[varOrderBy.value].toLocaleLowerCase() ? 1 : -1;
        });
    }else {
        result.value!.jobs.sort((a: IJob, b: IJob) => {
            return a[varOrderBy.value].toLocaleLowerCase() > b[varOrderBy.value].toLocaleLowerCase() ? -1 : 1;
        }); 
    }

}

// watch(()=> varOrderBy.value, (first, second)=> {
//     console.log("Output",first, second)
// });


</script>

<style scoped></style>