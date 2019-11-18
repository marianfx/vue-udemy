<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './components/Header'
    
    export default {
        components: {
            'app-header': HeaderComponent
        }
    }
</script>

<style>
</style>
