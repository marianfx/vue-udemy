new Vue({
	el: '#app',
  data: { // available inside id='app'
    title: "Hello, world",
    link: "http://www.google.com",
    htmlLink: "<a href='http://www.google.com'>Google!</a>",

    counter: 0,
    x: 0,
    y: 0
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
    // }
  }
})