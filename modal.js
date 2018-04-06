$(document).ready(()=>
{
	$(".mod").hide();
	$(".but").on("click",function(e)
	{
		$("body").css("background-color","rgba(71, 71, 71,0.5)");
		$("body").css("color","rgba(0,0,0,0.7)");
		$(".mod").slideDown();
		e.stopPropagation();
	});

	$("body").on("click",function(e)
	{
		$(".mod").slideUp("fast");
		$("body").css("background-color","white");
		$("body").css("color","rgba(0,0,0)");
	});

})
$(".mod").click(function(e)
{
e.stopPropagation();
});
