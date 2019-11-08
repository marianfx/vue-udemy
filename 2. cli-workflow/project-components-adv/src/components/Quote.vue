<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        theText: { type: String }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
</style>