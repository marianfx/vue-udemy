var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'Vue, vue',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      // this.$refs.showButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      // alert('Title changed, new value: ' + value);
      console.log("Title changed: " + this.title);
    }
  }
});
// DOES not override string interpolation, but also does not update behind code (changes directly in the DOM); useful to display things differently
setTimeout(function() { /* vm1.title = "Changed by timer!"; */ vm1.show(); }, 3000);

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "Second instance!"
  },
  methods: {
    onChange: function() {
      vm1.title = "Changed!";
    }
  }
});

// $el is the reference to the exact ElementRef DOM element
console.log(vm2.$el);

// $data is the exact data passed inside the constructor
console.log(vm2.$data);

// all the references (JS object + inside ElementRefs)
console.log(vm1.$refs);

// change manually some value
setTimeout(() => {
vm1.$refs.heading.innerText = 'Changed manually'; }, 1000);