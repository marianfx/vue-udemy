<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! ({{ name }})</p>
        <hr>
        <div class="row">
            <button @click="changeName">Change my name</button>
            <div class="col-xs-12 col-sm-6">
                <!-- <app-user-detail name="Max"></app-user-detail> This is static binding with value -->
                <app-user-detail :name="name" @nameWasReset="onNameReset" :resetFn="resetNameHere"></app-user-detail> 
                <!-- This is dynamic binding with v-bind -->

            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: "Maximum"
            }
        },
        methods: {
            changeName() {
                this.name = "Anna";
            },
            resetNameHere() {
                this.name = "Name reset";
            },
            onNameReset(data) {
                this.name = data;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
