<template>
    <ul class="jobs-list">
        <li class=" bg-white my-4 p-2 rounded-lg" v-for="job in propJob" :key="job.id">
            <h2 class="capitalize text-2xl text-bold">{{ job.title }} in {{ job.location }}</h2>
            <div class="salary  py-3 text-green-600 font-bold">
                <p class="capitalize"> salary: {{ job.salary }} pounds</p>
            </div>
            <div class="description capitalize text-justify">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, veniam! Accusantium culpa magni
                    veritatis dignissimos. Totam repellat facilis laudantium harum quaerat cumque fuga vel dolore quod
                    voluptatibus. Ipsa, quia aut.</h2>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { IJob, TOrder } from '../types/job';

defineProps({
    propJob: {
        type: Object as PropType<IJob[]>,
        required: true,
    },
    propsOrder: {
        required: true,
        type: String as PropType<TOrder>
    }
},
)
</script>

<style scoped></style>