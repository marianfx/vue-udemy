<template>
    <ul class="list-group">
        <li
                class="list-group-item"
                v-for="index in 5" :key="index">
            <app-server :serverId="index"></app-server>
        </li>
    </ul>
</template>
<script>
import ServerVue from './Server.vue';
export default {
    components: {
        'app-server': ServerVue
    }
}
</script>