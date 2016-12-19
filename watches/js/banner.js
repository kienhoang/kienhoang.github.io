$(document).ready(function(){
	var banner = $('.banner-block');
	//console.log(banner);
	banner.height(banner.width() * 190 / 350);
	banner.resize(function(){
		// 350 x 190
		// console.log($(this).width());
		$(this).height($(this).width() * 190 / 350);
	});
	
});