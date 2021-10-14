<template>
    <div>Example Component, {{ greeting }}</div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "ExampleComponent",
    setup() {
        const greeting = ref('Hello world');
        return {greeting};
    }
}
</script>

<style scoped>

</style>
