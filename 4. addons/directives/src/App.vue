<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <!-- examples of built-in directives (all are v-**) -->
            <h1>Built-in directives</h1>
            <p v-text="'Some simple text'"></p>
            <p v-html="'<strong>HTML that should be sanitized before added here</strong>'"></p>
        </div>
        <hr>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <!-- examples of custom directives (all are v-**) -->
            <h1>Custom directives</h1>
            <p v-highlight="'red'">Colored</p>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
