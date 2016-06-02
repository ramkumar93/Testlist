var app = app || {};

(function() {
	
	app.todo = Backbone.Model.extend({
	
		urlRoot: "/createTodo",
		
		default:{
			ID: "",
			title: "",
			completed: false,
			status: ""
			},
			
			 initialize : function() {
			       // alert("creating a Model");
			    },
	
			    
		toogle: function(){
			
			this.save({
				
				completed: !this.get('completed')
			});
			
		}
		
});
//
})();