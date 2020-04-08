$.getJSON(
    "http://api.icndb.com/jokes/random",
    function(data) {
        $('#fact').html(data.value.joke);
    }
);