<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li @click="selectServer(server)"
                    class="list-group-item"
                    v-for="server in state.servers" :key="server"
                    style="cursor: pointer">
                    {{ server }} 
            </li>
        </ul>
    </div>
</template>

<script>
import { serverStore } from './ServerStore';

export default {
    data() {
        return {
            state: serverStore.state
        }
    },
    methods: {
        selectServer(server) {
            serverStore.selectServer(server);
        }
    }
}
</script>

<style>

</style>
