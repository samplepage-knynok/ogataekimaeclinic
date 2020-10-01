$(function(){
		// ハンバーガーメニュー
		$('.hum-icon').click(function() {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$('.ham-menu').addClass('active'); //クラスを付与
				} else {
					$('.ham-menu').removeClass('active'); //クラスを外す
				}
		});
		
		// ページ内リンククリック時にメニューを閉じる
		$('.ham-menu ul li a').on('click', function() {
				$('.ham-menu').toggleClass('active');
				$('.hum-icon').toggleClass('active');
		});
		
		
		
		// ページTOPに戻る
		$(window).scroll(function () {
				var now = $(window).scrollTop();
				if (now > 200) {
					$('.pagetop').fadeIn("slow");
				} else {
					$('.pagetop').fadeOut('slow');
				}
		});
		
		$('.pagetop').click(function () {
				$('body,html').animate({
						scrollTop: 0
				}, 300);
				return false;
		});
});
