
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "gregs_list"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM contacts", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});


connection.query("SELECT * FROM bank_accounts WHERE dob = '"+ req.body.dob +"' AND bank_account = '"+ req.body.account_number +"'",function(error, results){});


connection.query("SELECT * FROM bank_accounts WHERE dob = ? AND bank_account = ?",{
    dob: req.body.dob,
    account_number: req.body.account_number
   },function(error, results){});
