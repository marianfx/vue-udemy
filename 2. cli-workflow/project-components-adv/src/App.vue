<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="selectedComponent='app-quote'">Quote</button>
    <button @click="selectedComponent='app-author'">Author</button>
    <button @click="selectedComponent='app-new'">New</button>
    <hr>
    <component :is="selectedComponent">
      <span slot="content">Default content</span>
    </component>
  </div>
</template>

<script>
import QuoteComponent from "./components/Quote";
import NewComponent from './components/New.vue';
import AuthorComponent from './components/Author.vue';

export default {
  name: 'app',
  data() {
    return {
      selectedComponent: 'app-quote'
    }
  },
  components: {
    'app-quote': QuoteComponent,
    'app-new': NewComponent,
    'app-author': AuthorComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.component {
    border: 1px solid black;
    padding: 30px;
}
</style>
