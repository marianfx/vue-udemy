new Vue({
	el: '#app',
  data: { // available inside id='app'
  	title: "Hello World"
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value; 
      // this will be the closest element in hierarchy => data
      // event is the basic DOM event, with target being the input
    }
  }
})