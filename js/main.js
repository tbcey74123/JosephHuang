$(document).ready(function() {


	var prevTop = $(document).scrollTop();
	
	SetDivPosition(prevTop);

	$(window).scroll(function() {
		var currentTop = $(document).scrollTop();

		var differ = cal(prevTop, currentTop);

		move("flow-div1", differ, 0.35);
		move("flow-div2", differ, 0.35);
		move("flow-div3", differ, 0.35);

		prevTop = currentTop;
	});
});

var SetDivPosition = function(currentTop) {
	var S = parseInt(currentTop * 0.35);
	for(i = 1; i < 4; i++) {
		var origin = $('#flow-div' + i).css("top").replace("px","");
		origin = parseInt(origin);
		
		$('#flow-div' + i ).css("top",origin - S + "px");
	}
}

var cal = function(prevTop, currentTop) {
	differ = currentTop - prevTop;

	return differ;
}

var move = function(obj, differ, speed) {
	S = differ * speed;
	objTop = $('#' + obj).css("top").replace("px","");
	tmp = objTop - S;

	$('#' + obj).css({
		top: tmp + "px" 
	})
};
