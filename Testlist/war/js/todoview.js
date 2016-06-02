var app = app || {};

(function ($) {
	
	console.log("todo view initisted")
	
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',
			
		className: ".lists",
		//model: app.todo,
		
		events: {
			
			'click .checkbox': 'toogle',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'keydown .edit': 'revertOnEscape',
			'blur .edit': 'close'
			
		},
		
		
		initialize : function(){
			console.log("in todoview js");
			this.template = _.template($('#item-template').html());
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		
		},
		
		
		render: function () {
		console.log("in render function");

			this.$el.html(this.template(this.model.toJSON()));

			this.$input = this.$('.edit');
			this.$input.hide();
			return this;
		},
		
		
		edit : function(){
			
			console.log("in edit function");
			this.$el.addClass("inputonedit");
			this.$(".edit").show();
			this.$(".edit").focus();
			this.$(".view").hide();
			
			//console.log("");
		},
		
		
		close: function () {
			var value = this.$input.val();
			console.log(value);
			var ID = this.model.get("ID");
			var trimmedValue = value.trim();
			console.log(trimmedValue);
			if (!this.$el.hasClass('inputonedit')) {
				console.log("no no");
				return;
			}

			if (trimmedValue) {
				//this.model.fetch({"ID": ID}, )
				this.model.save({ title: trimmedValue }, {
				    success: function (model, respose, options) {
				        console.log("The model has been saved to the server");
				       // this.model.render();
				    },
				    error: function (model, xhr, options) {
				        console.log("Something went wrong while saving the model");
				    }
				    });
			} else {
				console.log("Clear");
				this.clear();
			}
			console.log("input on edit");
			//this.$el.removeClass('editing');
			this.$el.removeClass('inputonedit');
			this.$(".edit").hide();
			this.$(".view").show();
		},

		
		updateOnEnter: function (e) {
			if (e.which === 13) {
				this.close();
			}
		},

		
		toogle: function(event){
			console.log("In toogle");
			if(!$(event.target).parent().hasClass("completed"))
				{
				//this.model.save({completed: true});
					$(event.target).parent().addClass("completed");
					console.log("In toogle if");
					
					//return this;
				}
			else{
				//this.model.save({completed: false});
					$(event.target).parent().removeClass("completed");
					console.log("In toogle else");
					
			}
			
		},
		
//		toogle: function(event){
//			console.log("In toogle");
//			if(!this.$('.view').hasClass("completed"))
//				{
//				this.$('.view').addClass("completed");
//				console.log("In toogle if");
//				this.model.save({completed: true});
//				//return this;
//				}
//			else{
//				this.$('.view').removeClass("completed");
//					console.log("In toogle else");
//					this.model.save({completed: false});
//			}
//			
//		},
//		
		
		revertOnEscape: function (e) {
			if (e.which === 47) {
				//this.$el.removeClass('editing');
			
				this.$input.val(this.model.get('title'));
			}
		},
		
		
		
		
		clear : function(){
			var id = this.model.get("ID");
			console.log("in clear function start");
			this.model.save({ status : "inactive"});
			this.model.destroy();
//			app.model.destroy({ID: id},{
//			    success: function (model, respose, options) {
//			        console.log("The model has deleted the server");
//			    },
//			    error: function (model, xhr, options) {
//			        console.log("Something went wrong while deleting the model");
//			    }
//			});
			
			//console.log("in dbl click function end");
		}
	

});

	//new app.TodoView();
})(jQuery);
