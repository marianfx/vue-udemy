<template>
  <div id="app" class="container">
       <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{name}} ({{age}})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p> {{ ageTimesThree }} </p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p> {{ getRandomNumber() }} -> {{ getRandomIntNumber() }} </p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
        <img style="width:100px;height:100px">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <input type="text" v-model="name">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        name: "Laurentiu",
        age: '19'
      }
    },
    computed: {
      ageTimesThree() {
        return this.age * 3;
      }
    },
    methods: {
      getRandomNumber() {
        return Math.random();
      },
      getRandomIntNumber() {
        return Math.floor(Math.random() * 100) + 1
      }
    }
  }
</script>

<style>

</style>