$(function() {
	$(".j-nextshow").click(function(e) {
		e.preventDefault();
		var i = $(this),
		t = i.next();
		if (t.is(":hidden")) {
			t.slideDown()
		} else {
			t.slideUp()
		}
	});
	var e = $(".tab-options li");
	e.click(function() {
		i = $(this).index();
		$(this).addClass("tab-active").siblings().removeClass("tab-active");
		var e = $(this).parents().next().find(".tab-content-item");
		e.eq(i).fadeIn(500).siblings(".tab-content-item").hide()
	});
	$(".nlazy").lazyload({
		effect: "fadeIn"
	});
	baguetteBox.run(".baguetteBoxOne", {
		animation: "fadeIn"
	});
	$(".scroll-box").DY_scroll();
	
	$(".scroll-box1").DY_scroll({
		auto: true
	});
	$("table").wrap("<div class='table'><div></div></div>");
	$(".video-play").click(function() {
		var e = $(this).attr("data-src");
		$(".video-backdrop").show().find("iframe").attr("src", e)
	});
	$(".video-backdrop .item-close").click(function() {
		$(this).parent().hide()
	});
	$(".attr-nav li>p").click(function(e) {
		e.preventDefault();
		var i = $(this),
		t = i.next();
		if (t.is(":hidden")) {
			t.slideDown();
			i.parent().addClass("active")
		} else {
			t.slideUp();
			i.parent().removeClass("active")
		}
	});
	$(".faq-list .item-title").click(function(e) {
		e.preventDefault();
		var i = $(this),
		t = i.next();
		if (t.is(":hidden")) {
			t.slideDown();
			i.addClass("active");
			i.parent().siblings().find(".item-title").removeClass("active");
			i.parent().siblings().find(".item-title").next().slideUp()
		} else {
			t.slideUp();
			i.removeClass("active")
		}
	})
});
$(window).load(function() {
	var READ_MORE = $(".more-btn").attr('data-more');
	var READ_LESS = $(".more-btn").attr('data-less');
	var HEIGHT_DES = 96;

	$(".pro1-spec").each(function() {
		if ($(this).height() > HEIGHT_DES) {
			$(this).addClass("on");
			$(this).height(HEIGHT_DES);
			$(this).next().text(READ_MORE);
		}
	})
	$(".more-btn").click(function() {
		var more_span = $(this);
		var desb = more_span.prev();
		
		if (more_span.text() == READ_MORE) {

			desb.height("auto");
			
			more_span.text(READ_LESS);
		} else {

			desb.height(HEIGHT_DES);
			more_span.text(READ_MORE);
		}
	})
})

