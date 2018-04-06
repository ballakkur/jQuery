$(document).ready(function()
{
	$("#Collapsible1").hide();
	$("#Collapsible2").hide();
	$("#Collapsible3").hide();
})
$(".container #h11").on("click",function()
{
	//alert("just");
	$("#Collapsible1").toggle(200);
	$("#Collapsible2").hide(200);
	$("#Collapsible3").hide(200);
});

$(".container #h12").on("click",function()
{
	//alert("just");
	$("#Collapsible2").toggle(200);
	$("#Collapsible1").hide(200);
	$("#Collapsible3").hide(200);
});
$(".container #h13").on("click",function()
{
	//alert("just");
	$("#Collapsible3").toggle(200);
	$("#Collapsible1").hide(200);
	$("#Collapsible2").hide(200);
});