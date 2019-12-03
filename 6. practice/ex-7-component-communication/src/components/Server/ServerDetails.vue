<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!state.selectedServer">There is no server selected</p>
        <p v-else>I am {{ state.selectedServer }} </p>
    </div>

</template>

<script>
import { serverStore } from './ServerStore';

export default {
    data() {
        return {
            state: serverStore.state
        }
    }
}
</script>

<style>

</style>
