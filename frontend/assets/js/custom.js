
$(window).ready(function(){
    
	$(".menus a").click(function(e){
		var parent=$(this).parent();
		if(parent.find(">ul").length){
			e.preventDefault();
			parent.siblings().removeClass("open");
			if(parent.hasClass("open")){
				parent.removeClass("open");    
			}else{
				parent.addClass("open");    
			}

		}else{
			$(".menus li").removeClass("active");
			parent.addClass("active");
		}    

	});
	$(".nav-toggle").click(function () {
		$(".header").toggleClass("show");
		$(".overlay-common").addClass("show");

	});
	$(".overlay-common").click(function () {
		$(".header").removeClass("show");
		$(".overlay-common").removeClass("show");

	});
	$(".dropdown-menu").click(function(e){
		e.stopPropagation();
	});
    $(".option-tabs").click(function(){
        $(this).parent().find(".tabs").toggleClass("show");
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".tabs").length
                    === 0) {
            $(".tabs").removeClass("show");
        }
    });
    $(".panel-head").click(function(){
        $(this).parent().toggleClass("active");
    });

})
$(function () {
    if($(".p-scrollbar").length>0){
        $('.p-scrollbar').each(function(){ 
            const ps = new PerfectScrollbar($(this)[0]); 
        });
    }
    
    if($(".datepicker").length>0){
        $('.datepicker').each(function(){ 
            $('.datepicker').datepicker({
                language:'vi',
                format: 'dd/mm/yyyy',
            });
        });
    }

    
});
