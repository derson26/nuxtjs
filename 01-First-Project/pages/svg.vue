<template>
    <div>
        <!-- 
            In NuxtJs you don't need install Vite SVG Loader, but you have some information below
            install Vite SVG Loader
            link: https://www.npmjs.com/package/vite-svg-loader

            icons: https://icones.js.org/
        -->

        <IconsBell />

        {{ sayName('SVG Page') }}
    </div>
</template>

<script setup lang="ts">
    const { sayName } = useName();
</script>

<style scoped></style>