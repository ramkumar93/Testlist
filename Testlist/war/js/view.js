var app = app || {};

(function ($) {
	
	console.log("view initisted")
//	app.collection = new app.collection();
	app.view = Backbone.View.extend({
		//... is a list tag.
		//tagName:  '.todo-list',
		
		el: '.datainput',
		
		//template: _.template($('#item-template').html()),
		
		//model: app.todo,
		
		events: {

			'keypress .new-todo': 'createOnEnter'
//			'blur .new-todo': 'retriveOnEnter',
			
			//'load': 'retriveOnEnter'
			//'dblclick label': 'doubleClick'

		},
		
		initialize : function(){
			//console.log(todo.toJSON());

			console.log("initialized");
			this.$list = $('.todo-list');
			//this.trigger("listenTo")
			//this.listenTo(this.model, 'change', this.addOne);
			
			//this.model.listenTo(app.todos, 'add', this.addOne);
			//this.on("load", this.retriveOnEnter, this);
			console.log("listenTo is initiated");
			//app.todos.fetch({reset: true});
			//this.model.reset();
//			this.render;
//			return this;
			
//			
//			this.on('add', this.addone, this);	
//			this.on('remove', this.addAll, this);	
//			this.on('reset', this.addAll, this);	
//			this.on('change', this.render, this);
		
			
			
		},
		
		
		
		render: function () {

			//alert("Render");
			//this.addAll();
//			this.$(".todo-list").append(this.template(app.demo.toJSON()));
//			this.$input = this.$('.edit');
//			this.$input.hide();\
			//this.addAll();
//			return this;
//		var self = this;
//		var x = app.demo;
//		this.$el.html('');
//			_.each(this.model.toArray(), function(x){
//				self.$el.append(new app.TodoView({model : x}).render().$el);
//				
//			});
//		
		},

		addOne: function (todo) {
			console.log("in addOne fn");
			var view = new app.TodoView({ model: todo });
			this.$list.append(view.render().el);
		},
		
		addAll: function () {
			this.$list.html('');
			console.log("in addAll fn ---------------");
			app.todos.each(this.addOne, this);
		},
		
		
		newAttributes: function () {
			console.log("inside new attributes");
			var id = Math.floor(100000000 + Math.random() * 900000000);
			var myTodo = {
				ID : id.toString(),
				title : $(".new-todo").val().trim(),
				order: app.todos.nextOrder(),
				completed : false,
				status: "active"
			};
			//app.todos.add(myTodo);
			return myTodo;
			console.log("after return");
		},
		
		
		createOnEnter : function(e){
			console.log("enter");
				if (e.which === 13 && $(".new-todo").val().trim()) {
					app.todos.create(this.newAttributes()); 
					//app.todos.add();
					$(".new-todo").val("");
					
					//console.log(app.todos);
					
					

				}
		},
		
		
		
		
		
		retriveOnEnter : function(e){
			console.log("enter");
			
			
					app.todos.reset();
					var myCollection = app.todos;
					
					myCollection.fetch({
							success: function (myCollection, response) {
						        // fetch successful, lets iterate and update the values here
								myCollection.each(function (item, index, all) {
//						           console.log("Retrived Completed "+ item.get("completed"));
//						           var status = true;
//						           if(item.get("completed") === status)
//						        	   {
////						        	   app.todos.reset();
////						        	   this.addOne();
////						        	   return this;
//						        	   new app.TodoView().toogle();
//						        	   console.log("Item added");
//						        	   }
//						           else
//						        	   {
//						        	   console.log("Item not added");
//						        	   }
//						          
						          
						        });
						    }	
					});

			
		}
});

	//new app.view();
})(jQuery);
