new Vue({
	el: '#app',
  data: { // available inside id='app'
    title: "Hello, world",
    name: "Alex",
    link: "http://www.google.com",
    htmlLink: "<a href='http://www.google.com'>Google!</a>",

    counter: 0,
    x: 0,
    y: 0,
    result: '',

    attachRed: false,
    color: 'green'
  },
  computed: { // like properties, with getters/setters
    output: function() {
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  },
  watch: { 
    // watch for changes; the names inside must be existing variable names
    // useful to do async stuff or custom tasks; in computed, can't execute async tasks
    counter: function(newValue) {
      var me = this;
      setTimeout(function() { me.counter = 0; }, 2000);
    }
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value; 
      // this will be the closest element in hierarchy => data
      // event is the basic DOM event, with target being the input
    },
    sayHello: function() {
      // return "Hello!";
      // return title; // this would not work
      // return this.data.title; // this is the VUE instance => has access
      this.title = "Just hello";
      return this.title; // vue also does a proxy so i can do this.
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    // this is how we stop event propagation
    // cancelMouseMove: function(event) {
    //   event.stopPropagation(); // does not call the event of the father etc.
    // },
    alertMe: function() {
      alert("This is an alert!");
    }
  }
})