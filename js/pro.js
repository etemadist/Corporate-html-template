$(function() {
	$(".jqzoom").jqzoom({
		title: false,
		zoomWidth: 500,
		zoomHeight: 418,
		xOffset: 4
	});
	$(".prob-pic-item a").click(function(i) {
		i.preventDefault();
		var t = $(this);
		t.addClass("active").parents("li").siblings().find("a").removeClass("active")
	});
	$(".prob-pic-item .item-video").click(function(i) {
		i.preventDefault();
		var t = $(this),
		e = t.data("src");
		$(".m-prob .provideo-box").show().find("iframe").attr("src", e)
	});
	$(".prob-pic-item .item-pics").click(function(i) {
		i.preventDefault();
		var t = $(this);
		$(".m-prob .provideo-box").hide();
		var e = $(".jqzoom .img"),
		o = t.children("img");
		e.attr("src", o.data("src"))
	});
	$(".prob-pic-small").DY_scroll();
	$(".m-propic2").DY_scroll()
});