
var J = new Jet();
J.console.enable();
function out(msg){
	J.out(msg);
}

var cnzz = cnzz || {};
cnzz.speed = cnzz.speed ||{};

cnzz.speed.NetRange = function(){
	var args = arguments;
	this.siteId = args[0];
	this.st = args[1];
	this.et = args[2];
	this.debug_result = [];
};

cnzz.speed.NetRange.prototype = {
	init : function(){
		out('init create');
		this.debug_result.push(1);
		this.createTableHead();
		this.debug_result.push(2);
		this.ajax_list();
		this.debug_result.push(3);
		/**@debugger=1**/
		this.appendToHtml();
		this.debug_result.push(4);		
		this.getAttribue();
		this.debug_result.push(5);
	},
	
	getAttribue : function(){
		this.debug_result.push(6);
		out(this.siteId);
		this.debug_result.push(7);
		out(this.st);
		this.debug_result.push(8);
		out(this.et);
	},
	
	createTableHead : function(){
		out('createTableHead create');
		this.debug_result.push(9);
	},
	
	ajax_list : function(){
		out('ajax_list create');
		// 2
		this.debug_result.push(10);
	},
	
	appendToHtml : function(){
		out('appendToHtml create');
		this.debug_result.push(11);
	}
};


var netRange = new cnzz.speed.NetRange(1000,'2011-01-01', '2012-01-11');
netRange.init();
_.extend(netRange, {
	addNewMethod : function(){
		out('addNewMethod create');
		this.getAttribue();
		this.debug_result.push(12);
	}
});

netRange.addNewMethod();