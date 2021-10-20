<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
                :item="item"
                class="item"
                @itemchanged="$emit('reloadlist')"
            />
        </div>
    </div>
</template>

<script>
import listItem from "./listItem";
export default {
    name: "listView",
    props: ['items'],
    components: {
        listItem,
    }
}
</script>

<style scoped>
.item {
    background: lightgray;
    padding: 5px;
    margin-top: 5px;
}
</style>
