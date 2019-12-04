<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input v-model="text1" type="text" placeholder="This text will be reversed">
                <p> {{ text1 | reversed }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <input v-model="text2" type="text" placeholder="This text will have its length calculated">
                <p> {{ text2 | with-length }}</p>

                <h2>Computed properties</h2>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input v-model="text1" type="text" placeholder="This text will be reversed">
                <p> {{ reversedText }}</p>

                <input v-model="text2" type="text" placeholder="This text will have its length calculated">
                <p> {{ textWithLength }}</p>

                <h2>With mixins</h2>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <input v-model="text2" type="text" placeholder="This text will have its length calculated">
                <p> {{ textWithLength2 }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { reversed } from './filters/filters';
import { textMixin } from './mixins/mixins';
  export default {
    name: 'app',
    data() {
      return {
        text1: '',
        text2: ''
      }
    },
    computed: {
      reversedText() {
        var value = this.text1;
        if (!value) return value;
        return value.split('').reverse().join('');
      },
      textWithLength() {
        var value = this.text2;
        if (!value) return value;
        return value + " (" + value.length + ")";
      }
    },
    mixins: [textMixin],
    filters: {
      'reversed': reversed
    }
  }
</script>

<style>

</style>