
//获取轮播容器对象 和 分页指示器元素对象
var swiper = document.getElementById('fb1');
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
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
// firefox的页面滚动事件其他浏览器不一样
if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
	document.addEventListener('mousewheel', handlerWheel)
} else {
	document.addEventListener('DOMMouseScroll', handlerWheel)
}
function scrollMove() {
	var e=e||window.event;
	if (e.deltaY > 0) {
    	changeAfter();
	}else {
    	changeBefore();
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

