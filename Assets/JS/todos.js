//check off specific todos by clicking
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});
//click on X to delete todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//adding todo
$(".fa-2x").click(function(){
	$("body").toggleClass("rea");
	$("h1").toggleClass("reas");
});
$("input").keypress(function(event){
	if(event.which === 13)
	{
		//grabbing new todo from input
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>"+todotext+"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle();
});