<template>
    <div>
        <!-- <img src="~/assets/derson.png" alt="Derson images" width="200" height="200"> -->
        <!-- Display same image using alias -->
        <img src="@/assets/derson.png" alt="Derson images" width="200" height="200">

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        const route = useRoute();

        return {}
    }
})
</script>

<style scoped>

</style>