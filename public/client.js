// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html


// reset all values from input at load
$("input[type='text']").val("");

//check off specific todo's by clicking
$("ul").on("click", "li", function() { // look at li's inside ul
  $(this).toggleClass("completed");
});

// delete todo item from X being clicked
$("ul").on("click", "span", function(event) { // look at span's inside ul
  $(this).parent().fadeOut(1000, function() {
    $(this).remove();
  }); //span.li; for line 8, then li.remove(); for line 9
  event.stopPropagation(); // stop event bubbling ( only fire span and not li )
});

// add new li when inputting a task
$("input[type='text']").on("keypress", function(event) {
  if (event.which === 13) {
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
    $(this).val("");
  }
});

// change the plus sign to an x and back to a plus when clicked
// http://stackoverflow.com/questions/21919044/css3-transition-on-click-using-pure-css
$(".fa-plus").click(function() {
  if ($(this).css("transform") == "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)") {
    $(this).css("transform", "rotate(0deg)");
  } else {
    $(this).css("transform", "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)");
  }
});

// hide and unhide the input
$(".fa-plus").on("click", function() { $("input[type='text']").fadeToggle(500);
});
