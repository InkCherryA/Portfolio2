
//获取轮播容器对象 和 分页指示器元素对象
var swiper = document.getElementById('swiper');
//播放下一张图片的方法
function changeAfter() {
	//1. 删除轮播容器中第一个子元素，并返回被删除的元素对象
	//swiper.children 返回swiper元素下的所有子元素
	var child = swiper.removeChild(swiper.children[0]);
	//2. 将被删除元素追加到轮播容器的末尾
	swiper.appendChild(child);

}

//播放上一张图片的方法
function changeBefore() {
	//1. 获取最后一张在轮播容器中的的下标
	var index = swiper.children.length - 1;
	//2. 把最后一张删除，并返回被删除的元素对象
	var child = swiper.removeChild(swiper.children[index]);
	//3. 将被删除元素添加到第一张之前
	swiper.insertBefore(child, swiper.children[0]);

}




var handlerWheel = throttle(scrollMove, 100)

function scrollMove() {
	var e=e||window.event;
	e.preventDefault();

	if(e.wheelDelta){            	//判断浏览器IE，谷歌滑轮事件
		if(e.wheelDelta>0){  		//当滑轮向上滚动时
		    changeBefore();
		}
		if(e.wheelDelta<0){         //当滑轮向下滚动时
			changeAfter();
		}
	}else if(e.detail){             //Firefox滑轮事件
	   if(e.detail>0){         		//当滑轮向下滚动时
		changeAfter();
   		}
   		if(e.detail<0){            	//当滑轮向上滚动时
			changeBefore();
   		}
   }
}
function throttle(func, timeFrame) {
	var lastTime = 0;
	return function () {
		var now = Date.now();
		if (now - lastTime >= timeFrame) {
			func();
			lastTime = now;
		}
	};
}



document.getElementById("swiper").addEventListener('mouseenter', mouselog)
document.getElementById("swiper").addEventListener('mouseleave', mouselog)
function mouselog(event) {
	// let d = new Date();
	// text.value += `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, '$10$2');
	// text.scrollTop = text.scrollHeight;
	if (event.type == 'mouseenter'){
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
		// firefox的页面滚动事件其他浏览器不一样
		if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
			document.addEventListener('mousewheel', handlerWheel,{ passive: false })
		} else {
			document.addEventListener('DOMMouseScroll', handlerWheel,{ passive: false })
		}
	} else if (event.type == 'mouseleave'){
		if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
			document.removeEventListener('mousewheel', handlerWheel)
		} else {
			document.removeEventListener('DOMMouseScroll', handlerWheel)
		}
	}
  }


