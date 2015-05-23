var input;
var color;
$("button").on("click", function(e){
	e.preventDefault()
	console.log("foo")
	 input = $("input").val()
	 $("tr:even:not(:first-child)").css("backgroundColor", input)
	 
})

