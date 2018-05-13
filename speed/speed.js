$(document).ready(function() {
  var width = screen.width;
  var height = screen.height;
  var score = 0;

  $("#start").click(function() {
    $("#start").hide();
    newLetter();
  });

  $(document).keydown(function(event) {
    var letter = String.fromCharCode(event.keyCode);

    $("." + letter).animate({
      "margin-top": height + "px",
      "opacity": 0
    });
    $("." + letter).hide("slow", function() {
      score++;
      $("#score").html(score);
      $(this).remove();
    });
  });
  function newLetter() {
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    var code = Math.floor(Math.random() * 25) + 65;
    var letter = String.fromCharCode(code);
    var color = randomColor();
    $("<div><div>")
                  .html(letter)
                  .addClass(letter)
                  .addClass("letter")
                  .css({
                      "background-color": color,
                      "margin-left": x + "px",
                      "margin-top": y + "px"
                  })
                  .appendTo("body");
    setTimeout(newLetter, 1000);
  }
  function randomColor() {
    var color = "#";
    var chars = "0123456789abcdef";
    for(var i=0;i<6;i++) {
      var position = Math.floor(Math.random() * (chars.length - 1));
      color = color + chars.charAt(position);
    }
    return color;
  }
});
