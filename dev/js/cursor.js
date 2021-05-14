$(document).ready(function() {
	var cursor = $(".cursor-follow");
	$("body")
		.mousemove(function(e) {
			cursor
				.css({
					top: e.pageY - cursor.height() / 2,
					left: e.pageX - cursor.width() / 2
				})
				.removeClass("cursor-center");
		})
		.mouseleave(function() {
			cursor.addClass("cursor-center");
		});
});
