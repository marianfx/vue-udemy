new Vue({
	el: '#app',
  data: { // available inside id='app'
    title: "Hello, world",
    link: "http://www.google.com"
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
    }
  }
})