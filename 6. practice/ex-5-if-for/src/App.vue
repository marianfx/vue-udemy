<template>
  <div id="app" class="container">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="visibleParagraph = !visibleParagraph">Toggle</button>
      <p v-if="visibleParagraph">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="visibleParagraph">You either see me ...</p>
      <p v-show="!visibleParagraph">...or me</p>
    </div>

    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <h3>The list</h3>
    <ul>
      <li v-for="(element, index) in array" :key="element"> {{ element }} -> {{ index }}  </li>
    </ul>

    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li v-for="(element, key) in myObject" :key="element"> {{ key }} -> {{ element }} </li>
    </ul>

    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <h3>Nested</h3>
    <ul>
      <li v-for="(element, key) in testData" :key="key">
        <ul v-if="Array.isArray(element)">
          <li v-for="subelement in element" :key="subelement"> {{ subelement }}</li>
        </ul>
        <template v-else> {{ element }} </template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        visibleParagraph: "1",
        array: ['Max', 'Anna', 'Chris', 'Manu'],
        myObject: {
          title: 'Lord of the Rings',
          author: 'J.R.R. Tolkiens',
          books: '3'
        },
        testData: {
          name: 'TESTOBJECT', 
          id: 10,
          data: [1.67, 1.33, 0.98, 2.21]
        }
      }
    }
  }
</script>

<style>

</style>