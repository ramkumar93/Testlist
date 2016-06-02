var app = app || {};

(function() {
	
	var collection = Backbone.Collection.extend({
	
		model: app.todo,
		
		
		initialize: function () {
			
			this.fetch({
				success: function (myCollection, response) {
			        // fetch successful, lets iterate and update the values here
					myCollection.each(function (item, index, all) {

			        });
			    }	
		});
			
			
			
			 this.reset();
			 app.view = new app.view();
			 
			// app.view.render();
	
			 
//			 this.on('load', function() {
//	         	  
//	         	   app.view.retriveOnEnter();
//	         	  
//	        });
			 
	        this.on('add', function(model) {
	         	  
	         	   app.view.addOne(model);
	         	  
	        });

	        this.on('remove',  function(model) {
	            console.log('something got removed');
	            app.view.addAll();
	        });
	        
//	        this.on('change',  function(model) {
//	            console.log('something got changed');
//	            app.view.addAll();
//	        });
	        
	        this.on('reset',  function(model) {
	            console.log('something got reseted');
	            app.view.addAll();
	        });
	        
	    },
		
		
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},
	
		
		url: "/retriveTodo"
});
   app.todos = new collection();

})();