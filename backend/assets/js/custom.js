
$(window).ready(function(){
    
	
	$(".nav-toggle").click(function () {
		$(".sidebar").toggleClass("menu-toggle");
        $(".overlay-common").addClass("show");

	});
	$(".overlay-common").click(function () {
		$(".sidebar").removeClass("menu-toggle");
		$(".overlay-common").removeClass("show");

	});
	$(".dropdown-menu").click(function(e){
		e.stopPropagation();
	});
    $('.menus .down').click(function(e){
        e.preventDefault();
        $(this).parent().parent().toggleClass("open");
        
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
