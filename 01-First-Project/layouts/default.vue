<template>
    <div class=" bg-slate-400">
        <Header/>
        <main class="default_layout">
            <slot />
        </main>
            
        <Footer/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style scoped>
    .default_layout {
        min-height: calc(100vh - 4rem - 4rem);
    }
</style>