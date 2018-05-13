function randomJoke() {
  $.getJSON("http://api.icndb.com/jokes/random",
    function(data) {
      displayJoke(data);
      currentJokeId = data.value.id;
    }
  );
}
function nextJoke() {
  currentJokeId++;
  getCurrentJoke();
}
function backJoke() {
  currentJokeId--;
  getCurrentJoke();
}
function displayJoke(data) {
  $("#joke").html(data.value.id + ":" + data.value.joke);
}
function getCurrentJoke() {
  $.getJSON("http://api.icndb.com/jokes/" + currentJokeId,
    function(data) {
      displayJoke(data);
    }
  );
}
$(document).ready(
  function() {
    randomJoke();
    $("#resizable").resizable();
    $("#random").click(randomJoke);
    $("#next").click(nextJoke);
    $("#back").click(backJoke);
  }
);
