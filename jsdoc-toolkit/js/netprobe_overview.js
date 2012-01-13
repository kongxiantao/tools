/**
 * @fileOverview 测试评分概述和趋势
 * @time : 2012-01-13
 */

 
/**
 * 检查对象安全
 * @param (Object)异步返回的数据对象
 * @return (Boolean)
 */
function init_check_o(that){
	if(!that.data.result.data || !that.data.result.data.overview || !that.data.result.data.overview.overview){
		return true;
	}else{
		return false;
	}
}


/**
 * 体检分数
 * @return (int)
 */
function getHealth(){
	if(init_check_o(this)){
		return '-';
	}		
	var overview = this.data.result.data.overview.overview;
	if( !overview.health || overview.health == ''){
		return '-';
	}else{
		return overview.health;
	}
}

/**
 * 体检图片
 * @return (string) 图片路径
 */
function getHealthImg(){
	var img = 'source/images/check00.jpg';
	if(init_check_o(this)){
		return img;
	}
	var health = this.data.result.data.overview.overview.health;
	health = health - 0;
	if(health >= 85){
		img = 'source/images/check03.jpg';
	}else if(health < 85 && health >= 70){
		img = 'source/images/check02.jpg';
	}else if(health < 70 && health > 0){
		img = 'source/images/check01.jpg';
	}
	return img;
}


function getUrls(){
	if(init_check_o(this)){
		return 0;
	}
	var overview = this.data.result.data.overview;
	if(overview && overview.overview.urls){
		return overview.overview.urls.length;
	}else{
		return 0;
	}
}

function getTestCount(){
	if(init_check_o(this)){
		return 0;
	}
	var overview = this.data.result.data.overview;
	if(overview && overview.overview.execute_icmp){
		return overview.overview.execute_icmp * 1;
	}else{
		return 0;
	}
}

/**
 * 体检提示
 * @return (string) 提示信息
 */
function getHealthTip(){
	var overview = this.data.result.data.overview;
	if(init_check_o(this)){	
		if(!overview.overview && overview.score){
			var source_date = overview.source_date;
			var date = source_date.split('-')[0] + '年' + source_date.split('-')[1] + '月' + source_date.split('-')[2] + '日';
			tip = '<span style="color:#ff0600;">没有得分，因(' + date + ')该站点没有流量统计数据，请确认CNZZ统计代码已放置在网站页面中。'
					+'<a href="http://new.cnzz.com/v1/main.php?s=site_list" target="_blank" class="blue">进入CNZZ统计</a></span>';
		}else if(overview.score === 0){
			var task_date = overview.task_date;
			var date = task_date.split('-')[0] + '年' + task_date.split('-')[1] + '月' + task_date.split('-')[2] + '日';
			tip = '<span style="color:#ff0600;">没有得分，因为(' + date + ')您没有开启CNZZ网络通，请确保客户端每天都在线。'
					+'<a href="http://cnrdn.com/QgY4" target="_blank" class="blue">下载客户端获取积分</a></span>';
		}
		return tip;
	}
	
	var health = overview.overview.health;
	health = health - 0;
	var tip = '';
	if(health >= 85){
		tip = '<span style="color:#299305;">您的网站速度良好，请继续保持。</span>';
	}else if(health < 85 && health >= 70){
		tip = '<span style="color:#ff6c00;">您的网站速度一般，尚有优化空间。</span>';
	}else if(health < 70 && health > 0){
		tip = '<span style="color:#ff0600;">您的网站速度不理想，需要立即调整。</span>';
	}		
	return tip;
}

//net start ==============================
function net_img(name){	
	var img = 'source/images/danger.gif';
	if(init_check_o(this)){
		return img;
	}
	var overview = this.data.result.data.overview.overview;
	if('jump_num' === name){
		var jump_num = parseFloat(overview.jump_num);
		if(jump_num && jump_num <= 15){
			img = 'source/images/good.gif';
		}else if(jump_num > 15 &&jump_num <= 20){
			img = 'source/images/warning.gif';
		}
	}else if('packet_loss' === name){
		var loss = parseFloat(overview.packet_loss);
		if( loss <= 1 && overview.packet_loss){
			img = 'source/images/good.gif';
		}else if(loss > 1 && loss <= 5){
			img = 'source/images/warning.gif';
		}
	}else if('aver_time' === name){
		var aver_time = parseFloat(overview.aver_time);
		if(aver_time && aver_time <= 100){
			img = 'source/images/good.gif';
		}else if(aver_time > 100 &&aver_time <= 200){
			img = 'source/images/warning.gif';
		}
	}		
	return img;
}

function net_tip(name){
	if(init_check_o(this)){
		return '-';
	}
	var overview = this.data.result.data.overview.overview;
	var tip = '-';
	if('jump_num' === name){
		var jump_num = parseFloat(overview.jump_num);
		if(jump_num && jump_num <= 100){
			tip = '状态良好。';
		}else if(jump_num > 100){
			tip = '<a class="blue click_tip" href="javascript:void(0);">路由的平均跳数越高，说明访问用户的网络离您网站服务器的网络距离越远。</a>';
		}	
	}else if('packet_loss' === name){
		var loss = parseFloat(overview.packet_loss);
		if( loss <= 1 && overview.packet_loss){
			tip = '状态良好。';
		}else if(loss > 1 && loss <= 5){
			tip = '<a class="blue click_tip" href="javascript:void(0);">丢包率可以反应出您网站的用户到服务器间的链路稳定性。</a>';
		}
	}else if('aver_time' === name){
		var aver_time = parseFloat(overview.aver_time);
		if(aver_time && aver_time <= 100){
			tip = '状态良好。';
		}else if(aver_time > 100){
			tip = '<a class="blue click_tip" href="javascript:void(0);">可配合丢包率数据指标一起分析，反应您网站的用户到服务器间的链路质量问题。</a>';
		}
	}
	return tip;
}

function net_num(name){
	if(init_check_o(this)){
		return '-';
	}
	var overview = this.data.result.data.overview.overview;
	var num = '-';
	if('jump_num' === name){
		if(overview.jump_num){
			num = overview.jump_num;
		}	
	}else if('packet_loss' === name){
		if(overview.packet_loss){
			num = overview.packet_loss + '%';
		}
	}else if('aver_time' === name){
		if(overview.aver_time){
			num = overview.aver_time;
		}
	}
	return num;
}
//net end ==============================
// page start ==============================
function page_img(name){
	var img = 'source/images/danger.gif';
	if(init_check_o(this)){
		return img;
	}
	
	var overview = this.data.result.data.overview.overview;	
	if('dns' === name){
		var dns = parseFloat(overview.dns);
		if((dns === 0) || (dns && dns <= 0.02)){
			img = 'source/images/good.gif';
		}else if(dns > 0.02 && dns <= 0.1){
			img = 'source/images/warning.gif';
		}
	}else if('tcp' === name){
		var tcp = parseFloat(overview.tcp);
		if((tcp === 0) || (tcp && tcp <= 0.1)){
			img = 'source/images/good.gif';
		}else if(tcp > 0.1 && tcp <= 0.5){
			img = 'source/images/warning.gif';
		}
	}else if('first_byte' === name){
		var first_byte = parseFloat(overview.first_byte);
		if((first_byte === 0) || (first_byte && first_byte <= 0.5)){
			img = 'source/images/good.gif';
		}else if(first_byte > 0.5 && first_byte <= 1){
			img = 'source/images/warning.gif';
		}
	}else if('page_load' === name){
		var page_load = parseFloat(overview.page_load);
		if((page_load === 0) || (page_load && page_load <= 2)){
			img = 'source/images/good.gif';
		}else if(page_load > 2 && page_load <= 8){
			img = 'source/images/warning.gif';
		}
	}else if('total_time' === name){
		var total_time = parseFloat(overview.total_time);
		if((total_time === 0) || (total_time && total_time <= 2)){
			img = 'source/images/good.gif';
		}else if(total_time > 2 && total_time <= 8){
			img = 'source/images/warning.gif';
		}
	}else if('sp' === name){
		var sp = parseFloat(overview.sp);
		if(sp && sp >= 50000){
			img = 'source/images/good.gif';
		}else if(sp < 50000 && sp >= 10000){
			img = 'source/images/warning.gif';
		}
	}else if('server_error' === name){
		var server_error = parseFloat(overview.server_error);
		if((server_error === 0) || (server_error && server_error <= 0.5)){
			img = 'source/images/good.gif';
		}else if(server_error > 0.5 && server_error < 1){
			img = 'source/images/warning.gif';
		}
	}		
	return img;
}

function page_tip(name){
	if(init_check_o(this)){
		return '-';
	}
	var overview = this.data.result.data.overview.overview;
	var tip = '-';
	if('dns' === name){
		var dns = parseFloat(overview.dns);
		if(dns && dns <= 0.02){
			tip = '状态良好。';
		}else if(dns > 0.02){
			tip = '<a class="blue click_tip" href="javascript:void(0);">DNS的解析时间过长。</a>';
		}
	}else if('tcp' === name){
		var tcp = parseFloat(overview.tcp);
		if(tcp && tcp <= 0.01){
			tip = '状态良好。';
		}else if(tcp > 0.1){
			tip = '<a class="blue click_tip" href="javascript:void(0);">在排除链路原因的前提下，建立连接时间超过长，可能是服务器本身的问题。</a>';
		}
	}else if('first_byte' === name){
		var first_byte = parseFloat(overview.first_byte);
		if(first_byte && first_byte <= 0.5){
			tip = '状态良好。';
		}else if(first_byte > 0.5){
			tip = '<a class="blue click_tip" href="javascript:void(0);">请先检查以上数据指标是否有问题。</a>';
		}
	}else if('page_load' === name){
		var page_load = parseFloat(overview.page_load);
		if(page_load && page_load <= 2){
			tip = '状态良好。';
		}else if(page_load > 2){
			tip = '<a class="blue click_tip" href="javascript:void(0);">内容下载时间和您的页面大小有之间关系。</a>';
		}
	}else if('total_time' === name){
		var total_time = parseFloat(overview.total_time);
		if(total_time && total_time <= 2){
			tip = '状态良好。';
		}else if(total_time > 2){
			tip = '<a class="blue click_tip" href="javascript:void(0);">平均页面打开时间过长会非常影响用户的体验。</a>';
		}
	}else if('sp' === name){
		var sp = parseFloat(overview.sp);
		if(sp && sp >= 50000){
			tip = '状态良好。';
		}else if(sp < 50000){
			tip = '<a class="blue click_tip" href="javascript:void(0);">平均下载速度慢，会影响页面内容的展现。</a>';
		}
	}else if('server_error' === name){
		var server_error = parseFloat(overview.server_error);
		if(server_error && server_error <= 0.5){
			tip = '状态良好。';
		}else if(server_error > 0.5){
			tip = '<a class="blue click_tip" href="javascript:void(0);">不同的错误有不同的应对和解决措施。</a>';
		}
	}
	return tip;
}

function page_num(name){
	if(init_check_o(this)){
		return '-';
	}
	var overview = this.data.result.data.overview.overview;
	var num = '-';
	if('dns' === name){
		if(overview.dns){
			num = overview.dns;
		}
	}else if('tcp' === name){
		if(overview.tcp){
			num = overview.tcp;
		}
	}else if('first_byte' === name){
		if(overview.first_byte){
			num = overview.first_byte;
		}
	}else if('page_load' === name){
		if(overview.page_load){
			num = overview.page_load;
		}
	}else if('total_time' === name){
		if(overview.total_time){
			num = overview.total_time;
		}
	}else if('sp' === name){
		if(overview.sp){
			num = overview.sp;
		}
	}else if('server_error' === name){
		if(overview.server_error){
			num = overview.server_error + '%';
		}
	}
	return num;
//page end===============================
}




$(function(){
	/**
	 * @namespace cnzz.speed.netprobe
	 * 测速评分异步获取数据 
	 */	
	cnzz.speed.netprobe.overview = function() {
		var siteId= $('#siteId').val(),
			st = $('#timeInfo_st').val(),
			et = $('#timeInfo_et').val();
			
		$.get('main.php?c=ajaxnetprobe&a=overview&siteid=' + siteId + '&st=' + st + '&et=' + et, {},function(data){
			var _data = $.parseJSON(data);
			
			$('#overview_content').empty();
			$("#tmpl_overview").tmpl( _data ).appendTo('.overview_content');
		
			$('#title_mark').html('测速概况 （' + st + '至' + et + '）');
		
			var overview_html = $('#overview_html');
			$('a.click_tip', overview_html).bind('click', function(){
				$(this).parents().parents().parents().next('.tip_content').toggle();
			});
			$('a.shouqi', overview_html).bind('click', function(){
				$(this).parentsUntil('.tip_content').parent().toggle();
			});
			
			$('a.overview_look_detail').bind('click', function(e){
				var info = $(this).attr('info');
				var range;
				var check_date = _data.result.data.overview.check_date;
				if('netrange' === info || 'pagerange' === info){
					
					// $('#timeInfo_st').val(check_date);
					// $('#timeInfo_et').val(check_date);
					// cnzz.speed.netprobe.st = getDate(start,value);
					// cnzz.speed.netprobe.et = start;
					//$('#siteId').val(siteId);
					
					//$('#left_' + info).trigger('click');	
					cnzz.speed.netprobe.overviewDetail = true;
					var hash = [info, check_date, check_date];
					cnzz.speed.netprobe.updateHash(hash);
				}
			});
		});
	}
	
	
	
	/**
	 * @namespace cnzz.speed.netprobe
	 * 测速评分趋势 显示多天评分 
	 */	
	cnzz.speed.netprobe.trend = function() {
		
		var siteId= $('#siteId').val(),
			st = $('#timeInfo_st').val(),
			et = $('#timeInfo_et').val();
		
		if (!st && !et) {
			return;
		}
		$('#trend_table').find('tr:eq(1)').show().end().find('tr:gt(1)').remove();
		$('#title_mark').html('测速评分 （' + st + '至' + et + '）');
		$('#trend_loading').html('<span class="loading"></span>数据正在加载...');
		
		$.get('main.php?c=ajaxnetprobe&a=toverview&siteid=' + siteId, {st : st, et : et, status : 0}, function (data) {
			try {
				var _data = $.parseJSON(data).result.data;
				if (_data) {
					var html = '',len = _data.items.length;
					var items = _data.items.reverse();
					$.each(items, function (i, item) {
						var score = item.score || 0, wd_bar = 0;
						// score === -1 表示未测试
						if (score >= 0) {
							wd_bar = ((score * 198) / 100).toFixed(0);
						}
						html += '<tr ' + (i % 2 === 0 ? 'class="bg-blue"' : 'class="bg-white"') + '>'
							+	'<td>' + item.date + '</td>'
							+	'<td ' + (score <= 70 ? 'style="color:red;"' : '') + '>' + (item.score === -1 ? '-' : score) + '</td>'
							+	'<td>'+ item.execute_num +'</td>'
							+	'<td>'
							+		'<div class="bar">'
							+			'<p class="barbg ' + (score <= 70 ? 'barbg-red' : '') + '" style="width:' + wd_bar + 'px"></p>'
							+			'<p class="whitebg" style="width:' + (198 - wd_bar) + 'px"></p>'
							+		'</div>'
							+	'</td>'
							+	'<td><a class="blue info_trendDetail" date="' + item.date + '" href="javascript:void(0)">查看</a></td>'
							+ '</tr>';
					});
					$('#trend_table').find('tr:eq(1)').hide().end().append(html);
					$('a.info_trendDetail', $('#trend_table')).bind('click', function(){
						var date = $(this).attr('date');
						$('#inputDate').val(date + '至' + date);
						$('#date_search').trigger('click');
					});

				} else {
					$('#trend_loading').html('数据加载失败');
				}
			} catch (e1) {
				$('#trend_loading').html('暂无数据');
			}
		});
	}
	
	
	
});
