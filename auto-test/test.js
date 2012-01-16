var test_netRange = new cnzz.speed.NetRange(1000,'2000-01-01', '2000-01-11');

_.extend(test_netRange, {
	test : function(){
		out('================================');
		out('test create');
		this.createTableHead();
		this.ajax_list();
		this.appendToHtml();		
		this.getAttribue();
		var debug_result = this.debug_result;
		out(debug_result);
		
		test('test - name ', 1, function(){
			equal(debug_result.toString(), '9,10,11,6,7,8', ' cnzz.speed.NetRange test pass' );
		});
	}
});

test_netRange.test();