
$('.rectangle').click(function() {
    $(this).animate(
      {
        width: '0px',
        height: '0px'
      },
      {
        complete: function() {
          $(this).animate(
            {
              width: '300px',
              height: '100px'
            }
          )
        }
      }
    )
});
