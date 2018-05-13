$(document).ready(function() {
  updateRate();
  function updateRate() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    request.send(null);
    request.onreadystatechange = function() {
      if(this.readyState == 4) {
        var rates = JSON.parse(request.responseText);
        $("#rate").html(rates.bpi.USD.rate);
      }
    };
    setTimeout(updateRate, 5000);
  }
});
