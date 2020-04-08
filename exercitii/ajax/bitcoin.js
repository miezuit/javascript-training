$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rate').html(data.bpi.EUR.rate_float);
    }
);