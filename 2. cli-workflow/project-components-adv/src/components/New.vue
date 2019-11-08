<template>
    <div>
        <h3>The new</h3>
    </div>
</template>

<script>
export default {
    props: {
        theText: { type: String }
    },
    deactivated() {
        console.log("Exited dynamic component");
    },
    activated() {
        console.log("Entered dynamic component");
    }
}
</script>

<style scoped>
</style>