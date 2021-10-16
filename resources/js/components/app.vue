<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form
                @reloadlist="getList"
            />
        </div>
        <list-view
            :items="items"
            @reloadlist="getList"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";
export default {
    name: "app",
    components: {
        addItemForm,
        listView,
    },
    data() {
        return {
            items: [],
        }
    },
    props: ['foo'],
    methods: {
        getList() {
            axios.get('api/items')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
.heading {
    background: pink;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
