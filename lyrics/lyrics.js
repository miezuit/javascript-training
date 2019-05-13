$('#submit').click(search);

function search() {
  $.getJSON(
    'https://api.lyrics.ovh/v1/' + $('#artist').val() +
    '/' + $('#title').val(),
    function(data) {
      $('#lyrics').text(data.lyrics);
    }
  ).fail(function() {
      $('#lyrics').text('Not found');
  });
}
