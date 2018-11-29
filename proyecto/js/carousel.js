$('div.carousel').carousel();

var timer = 500;

var i = 0;
var max = $('#c > div').length;

	$("#c > div").eq(i).addClass('active').css('left','0%');
	$("#c > div").eq(i + 1).addClass('active').css('left','25%');
	$("#c > div").eq(i + 2).addClass('active').css('left','50%');
	$("#c > div").eq(i + 3).addClass('active').css('left','75%');


	setInterval(function(){

		$("#c > div").removeClass('active');

		$("#c > div").eq(i).css('transition-delay','0.25s');
		$("#c > div").eq(i + 1).css('transition-delay','0.5s');
		$("#c > div").eq(i + 2).css('transition-delay','0.75s');
		$("#c > div").eq(i + 3).css('transition-delay','1s');

		if (i < max-1) {
			i = i+1;
		}

		else {
			i = 0;
		}

		$("#c > div").eq(i).css('left','0').addClass('active').css('transition-delay','0.25s');
		$("#c > div").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','0.5s');
		$("#c > div").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','0.75s');
		$("#c > div").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','1s');

	}, timer);
