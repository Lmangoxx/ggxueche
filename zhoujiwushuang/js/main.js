$(function(){
	'use strict';

	//判断手机横竖屏状态：
	function orientation(){

		var userAgentInfo = navigator.userAgent;  
		var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
		var flag = true;  
		for (var v = 0; v < Agents.length; v++) {  
			if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
		}

		if(flag) {
			$('.music-cell,.main-cell').hide();
			$('.portrait').show().find('span').html('请使用手机浏览');
			return;
		}

		if (window.orientation === 180 || window.orientation === 0) {
			// 竖屏状态
			$('.music-cell,.main-cell').hide();
			$('.portrait').show();
			return;
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
            // 横屏状态
            $('.music-cell,.main-cell').show();
			$('.portrait').hide();

			var erji = false;
		    setTimeout(loadEnd, 1000);
			$(".orgion").on('click', function(event) {
				var $this = $(this);
				!erji ? (
					$this.addClass('choose'),
					domeFadeIn($this),
					bigCon($this.attr('id'))
				) : '';
			});
			$(".orgion span").on('click', function(event) {
				var $this = $(this);
				if(erji){
					$this.parent().attr('class', 'choose orgion q' + ( $this.index() + 1 ));
					$('.bang .big').hide().siblings().show();
					smallCon($this.attr('class'), $this.parent().attr('id'));
				}
			});
			$(".go-index").on('click', function(event) {
				var $this = $(this);
				domeFadeOut($this);
			});

			// 音乐控制
			$(".music-cell").on('touchstart', function(event) {
				var audio = document.getElementById('audio-s');
				if(audio.paused){                 
		      		audio.play();
		  		}else{
		   			audio.pause();
		  		}
		  		$(this).toggleClass('playing');
			});

			/**
			 *	loadEnd，页面加载完成后的回调
			 * 
			 */
			function loadEnd(){
				$('#loading-cell').fadeOut();
				$('#content-cell').fadeIn();
			}
			/**
			 *	domeFadeIn，dome层显示控制
			 * 
			 */
			function domeFadeIn(el){
				el.siblings('.bang, .go-index, .black, .bang .big').fadeIn();
				erji = true;
			}
			/**
			 *	domeFadeOut，dome层隐藏控制
			 * 
			 */
			function domeFadeOut(el){
				el.fadeOut().siblings('.bang, .black').fadeOut();
				el.fadeOut().siblings('.orgion.choose').removeClass('choose');
				$('.bang .big').show().siblings().hide();
				erji = false;
			}
			/**
			 *	bigCon，大区内容填充
			 * 
			 */
			function bigCon(key){
				$('.big .con').html('');
				if('undefined' !== typeof dataList && dataList[key]){
					var html = [];
					for(var i in dataList[key]){
						html[dataList[key][i].win] = '<p><strong>'+i.toUpperCase()+'</strong>占'+dataList[key][i].win+'失'+dataList[key][i].lose+'</p>';
					}
					$('.big .con').append(html.reverse().join(''))
				} else {
					alert('数据出错');
				}
			}
			/**
			 *	smallCon，小区内容填充
			 * 
			 */
			function smallCon(key, obj){
				if('undefined' !== typeof dataList && dataList[obj] && dataList[obj][key]){
					var small = dataList[obj][key]
					$('.small #title').html(key.toUpperCase() + '（' + small.address + '）');
					$('.small #kill').html('<strong>敌军斩杀</strong>（赛区总击杀数）：'+small.kill+'口');
					$('.small #death').html('<strong>友将阵亡</strong>（赛区总阵亡数）：'+small.death+'口');
					$('.small #people').html('<strong>人口掠夺</strong>（赛区总补刀数）：'+small.people+'口');
					$('.small #city').html('<strong>城池攻略</strong>（赛区总推塔数）：'+small.city+'座');
					$('#generals #id').html('ID:' + small.generals.id);
					$('#generals #kill').html('敌军斩杀：' + small.generals.kill + '刀');
					$('#generals #evaluate').html('评价：' + small.generals.evaluate);
					$('#generals #img').attr('src', small.generals.img);
					$('#papers #id').html('ID:' + small.papers.id);
					$('#papers #kill').html('敌军斩杀：' + small.papers.kill + '刀');
					$('#papers #evaluate').html('评价：' + small.papers.evaluate);
					$('#papers #img').attr('src', small.papers.img);
				} else {
					alert('数据出错');
				}
			}
        }
	}

	// 事件监听
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientation, false);
	window.onload = orientation;
});