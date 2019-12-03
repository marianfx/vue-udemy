<template>
  <div id="app" class="container">
        <div class="row">
            <div class="col-xs-12">
              <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <app-server-list></app-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
              <app-server-details></app-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
              <app-footer></app-footer>
            </div>
        </div>
  </div>
</template>

<script>
import ServerListVue from './components/Servers/ServerList.vue';
import HeaderVue from './components/BusinessUi/Header.vue';
import ServerDetailsVue from './components/Servers/ServerDetails.vue';
import FooterVue from './components/BusinessUi/Footer.vue';
  export default {
    name: 'app',
    components: {
      'app-header': HeaderVue,
      'app-server-list': ServerListVue,
      'app-server-details': ServerDetailsVue,
      'app-footer': FooterVue
    }
  }
</script>

<style>

</style>