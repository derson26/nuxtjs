<template>
    <div class=" bg-slate-400">
        <CustomHeader/>
        <main class="custom_layout bg-orange-50  w-full md:w-4/5 mx-auto">
            <slot />
        </main>
            
        <Footer/>
    </div>
</template>

<script lang="ts"></script>

<style scoped>
    .custom_layout {
        min-height: calc(100vh - 4rem - 4rem);
    }
</style>