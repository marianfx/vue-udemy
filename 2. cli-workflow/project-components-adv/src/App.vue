<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <app-quote>
      <h1>This is a quote</h1>
      <p>This is the quote contents</p>
    </app-quote>
  </div>
</template>

<script>
import QuoteComponent from "./components/Quote";

export default {
  name: 'app',
  components: {
    'app-quote': QuoteComponent
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
