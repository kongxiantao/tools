
function Model(){}
function View(){}
function Controller{}


var nameSpace = {};

nameSpace.App = function(){
	this.attr1 = arguments[0];
	this.attr2 = arguments[1];
}

nameSpace.App.prototype = {
	method1 : function(){
	
	},
	
	method2 : function (){
	
	},
	
	test : function(){
	
	}
}

var app = new nameSpace.App();

_.extend(app, {
	init : function(){
	
	}
});

//nameSpace.App.test = function(){}

app.init();