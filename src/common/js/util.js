//过滤时间格式
export function timeFilter(time, format) {
	var o = {
		'M+': time.getMonth() + 1, //month
		'd+': time.getDate(), //day
		'H+': time.getHours(), //hour
		'm+': time.getMinutes(), //minute
		's+': time.getSeconds(), //second
		'q+': Math.floor((time.getMonth() + 3) / 3), //quarter
		'S': time.getMilliseconds() //millisecond
	}

	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}

	return format;
}

//过滤日期为星期几
export function filterTimeDay(time) {
  // console.log(time)
	let str = '星期';
	let index = time.getDay();
	switch(index) {
		case 1:
			str += '一';
			break;
		case 2:
			str += '二';
			break;
		case 3:
			str += '三';
			break;
		case 4:
			str += '四';
			break;
		case 5:
			str += '五';
			break;
		case 6:
			str += '六';
			break;
		default:
			str += '日';
			break;
	}
	return str;
}
