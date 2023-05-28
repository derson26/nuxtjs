import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',() => {
    const counter = ref<number>(1);

    const name = ref<string>('Derson Ussuale');

    const doubleCounter = computed(()=> counter.value * 2);

    function increment() {
        counter.value++;
    }


    return {counter, doubleCounter, increment, name}
});