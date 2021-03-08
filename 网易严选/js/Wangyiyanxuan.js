window.onload=function(){
	var as=document.querySelectorAll('#login>a');/*登录div里的a标签*/
	var popNav=document.getElementById('popNav');/*登录div里的客户服务a标签的弹出框*/
	var QRcode=document.getElementById('QRcode');/*登录div里的下载a标签的二维码弹出框*/
	var tel=popNav.querySelector('#tel');/*电话客服li*/
	var pbox=popNav.querySelector('p');/*电话客服弹出框*/
	var sinput=document.querySelector('#searchInput input');/*搜索框*/
	var sdiv=document.querySelector('#searchInput');/*搜索框所在的div*/
	var swrap=document.querySelector('.search');/*包围搜索框的最上层div*/
	var navList=swrap.querySelectorAll('nav .nav--li');/*搜索框下面的商品导航栏*/
	var pop2=document.getElementById('pop2');/*搜索框下面商品导航栏的弹出框*/
	var catagoryList=document.querySelectorAll('#pop_catagoryList-nav li');/*搜索框下面商品导航栏的弹出框列表*/
	var bannerImgs=document.getElementsByClassName('banner--img');/*banner轮播图下的li*/
	var prevBtn=document.getElementById('banner--prev');/*banner轮播图上的按钮prev*/
	var nextBtn=document.getElementById('banner--next');/*banner轮播图上的按钮next*/
	var bannerLis=document.querySelectorAll('#banner--bottom li');/*banner轮播图上的小圆点li*/
	
	
	var arr=[{'src':['img/1-2.gif','img/1-2.gif','img/1-3.gif','img/1-4.gif','img/1-5.gif'],
			  'txt':['被枕','床品件套','家具','舒坐','灯具']},
			 {'src':['img/2-1.gif','img/2-2.gif','img/2-3.gif','img/2-4.gif','img/2-5.gif'],
			  'txt':['锅具','刀铲','功能厨具','餐具','杯壶']},
			 {'src':['img/3-1.gif','img/3-2.gif','img/3-3.gif','img/3-4.gif','img/3-5.gif'],
			  'txt':['功能箱包','双肩包','靴','拖鞋','围巾件套']},
			 {'src':['img/4-1.gif','img/4-2.gif','img/4-3.gif','img/4-4.gif','img/4-5.gif'],
			  'txt':['内裤','内衣','袜子','外衣','T恤']},
			 {'src':['img/5-1.gif','img/5-2.gif','img/5-3.gif','img/5-4.gif','img/5-5.gif'],
			  'txt':['毛巾','香熏','美妆','面部护理','日用清洁']},
			 {'src':['img/6-1.gif','img/6-2.gif','img/6-3.gif','img/6-4.gif','img/6-5.gif'],
			  'txt':['服饰','妈咪','玩具','用品','喂养']},
			 {'src':['img/7-1.gif','img/7-2.gif','img/7-3.gif','img/7-4.gif','img/7-5.gif'],
			  'txt':['收纳','旅行','雨具','海外','口罩']},
			 {'src':['img/8-1.gif','img/8-2.gif','img/8-3.gif','img/8-4.gif','img/8-5.gif'],
			  'txt':['糕点','小食','果干','炒货','冲饮']},
			 {'src':['img/9-1.gif','img/9-2.gif','img/9-3.gif','img/9-4.gif','img/9-5.gif'],
			  'txt':['魔兽世界','守望先锋','星际争霸II','风暴英雄','夏日甜心']}
		];
	
	/*登录div里的客户服务a标签及a标签弹出框的鼠标事件*/
	as[4].onmouseover=popNav.parentNode.onmouseenter=function(){
		popNav.parentNode.style.display='block';
		return false;
	};
	as[4].onmouseout=popNav.parentNode.onmouseleave=function(){
		popNav.parentNode.style.display='none';
		return false;
	};
	tel.onmouseenter=function(){
		pbox.style.display='block';
		return false;
	};
	tel.onmouseleave=function(){
		pbox.style.display='none';
		return false;
	};
	
	/*登录div里的下载a标签及a标签弹出框的鼠标事件*/
	as[5].onmouseover=QRcode.parentNode.onmouseenter=function(){
		QRcode.parentNode.style.display='block';
		return false;
	};
	as[5].onmouseout=QRcode.parentNode.onmouseleave=function(){
		QRcode.parentNode.style.display='none';
		return false;
	};
	
	/*搜索框聚焦事件及聚焦后的弹出框的鼠标事件*/
	sinput.onclick=sdiv.nextElementSibling.onmouseenter=function(){
		sdiv.nextElementSibling.style.display='block';
		return false;
	};
	sinput.onmouseleave=sdiv.nextElementSibling.onmouseleave=function(){
		sdiv.nextElementSibling.style.display='none';
		return false;
	};
	
	/*搜索框下面商品导航栏的弹出框*/
	for (let i=1;i<navList.length-2;i++) {
		navList[i].onmouseenter=function(){
			for (var j=0;j<catagoryList.length;j++) {
				catagoryList[j].firstChild.src=arr[i-1].src[j];
				catagoryList[j].lastChild.firstChild.innerHTML=arr[i-1].txt[j];
			}
			this.firstChild.className='active';
			pop2.style.display='block';
			return false;
		};
		
		navList[i].onmouseleave=function(){
			this.firstChild.className='';
			pop2.style.display='none';
			pop2.onmouseenter=function(){
				this.style.display='block';
				navList[i].firstChild.className='active';
			};
			pop2.onmouseleave=function(){
				this.style.display='none';
				navList[i].firstChild.className='';
			};
			return false;
		};
		
	}
	
	/*banner轮播图上的事件*/
	/*banner轮播图自动滚动*/
	var n=0;
	var timer;
	var length1=bannerImgs.length;
	function autoPlay(){
		clearTimeout(timer);
		
		for (var j=0;j<length1;j++) {
			bannerImgs[j].style.opacity=0;
			bannerLis[j].className='';
		}
		bannerImgs[n].style.opacity=1;
		bannerLis[n].className='banner--active';
		
		timer=setTimeout(function(){
			n++;
			if (n>=length1) {
				n=0;
			}
			autoPlay();
		},2000);
	}
	autoPlay();
	
	/*鼠标放在banner上的图片上停止滚动,离开继续滚动*/
	prevBtn.parentNode.firstElementChild.onmouseenter=function(){
		clearTimeout(timer);
		return false;
	};
	prevBtn.parentNode.firstElementChild.onmouseleave=function(){
		autoPlay();
		return false;
	};
	
	/*鼠标放在banner图片上的小圆点上，对应的图片播放停止离开后继续滚动*/
	for (let k=0;k<length1;k++) {
		
		bannerLis[k].onmouseenter=function(){
			for (var l=0;l<length1;l++) {
				bannerLis[l].className='';
				bannerImgs[l].style.opacity=0;
			}
			n=k;
			bannerImgs[k].style.opacity=1;
			bannerLis[k].className='banner--active';
			clearTimeout(timer);
			
			/*timer=setTimeout(autoPlay,5000);*/
			bannerLis[k].onmouseleave=function(){
				autoPlay();
			}
			return false;
		};
	}
	/*banner轮播图上的prev按钮*/
	prevBtn.onclick=function(){
		clearTimeout(timer);
		n-=1;
		if (n<0) {
			n=length1-1;
		}
		for (var j=0;j<length1;j++) {
			bannerImgs[j].style.opacity=0;
			bannerLis[j].className='';
		}
		bannerImgs[n].style.opacity=1;
		bannerLis[n].className='banner--active';
		autoPlay();
	};
	/*banner轮播图上的按钮next*/
	nextBtn.onclick=function(){
		clearTimeout(timer);
		n+=1;
		if (n>length1-1) {
			n=0;
		}
		for (var j=0;j<length1;j++) {
			bannerImgs[j].style.opacity=0;
			bannerLis[j].className='';
		}
		bannerImgs[n].style.opacity=1;
		bannerLis[n].className='banner--active';
		autoPlay();
	};
	
	/*人气 推荐板块的选项卡事件*/
	var options=document.querySelectorAll('.recommendation--title li');/*选项卡*/
	var optionDivs=document.querySelectorAll('.recommendation--content');/*每个选项卡对应的div*/
	var le=options.length;
	for (let m=0;m<le;m++) {
		options[m].onclick=function(){
			for (var y=0;y<le;y++) {
				options[y].className='';
				optionDivs[y].className='recommendation--content clearfix active';
			}
			this.className='active';
			optionDivs[m].className='recommendation--content clearfix';
		};
	}
	
	/*限时购上的倒计时*/
	var timeCount=document.querySelector('.limitedSales--timer');
	var maxtime=3*60*60;
	var countTimer;
	var hours=0,minutes=0,seconds=0;
	function countDown(maxtime){
		if (maxtime>=0) {
			hours=Math.floor(maxtime/(60*60));
			minutes=Math.floor((maxtime%(60*60))/60);
			seconds=Math.floor((maxtime%(60*60))%60);
			timeCount.children[0].innerHTML='0'+hours;
			if (minutes<10) {
				minutes='0'+minutes;
			}
			if (seconds<10) {
				seconds='0'+seconds;
			}
			timeCount.children[2].innerHTML=minutes;
			timeCount.children[4].innerHTML=seconds;
			countTimer=setTimeout(function(){
				maxtime--;
				countDown(maxtime);
			},1000);
		} else{
			clearTimeout(countTimer);
			timeCount.children[0].innerHTML='00';
			timeCount.children[2].innerHTML='00';
			timeCount.children[4].innerHTML='00';
		}
	}
	countDown(maxtime);
	
	/*滚动条事件*/
	var back2top=document.querySelector('.fixWrap--down');/*回到顶部的div*/
	window.onscroll=function(e){
		if (document.body.scrollTop>660) {
			back2top.style.display='block';
		} else{
			back2top.style.display='none';
		}
		
		back2top.onclick=function(){
			scrollMove(document.body.scrollTop);
		};
		
		function scrollMove(pagey){
			pagey-=50;
			if (pagey<=0) {
				window.scrollTo(0,0);
				clearTimeout(secondtimer);
			} else{
				var secondtimer=setTimeout(function(){
					window.scrollTo(0,pagey);
					scrollMove(pagey);
				},16);
			}
		}
	};
	
};