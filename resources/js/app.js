require('./bootstrap');

import { createApp } from 'vue'
import App from "./components/app.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

createApp({
    components: {
        App,
    }
})
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
