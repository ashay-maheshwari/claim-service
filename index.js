var express = require("express");

let app = express();
var port = process.env.PORT || 8081;

//app.get('/', (req,res) => res.send("Hello world with express js"));
var claim_body = [{ 
    "claim_id":"678", 
    "status": "Pending",
    "requestor": "Ashay Maheshwari",
    "approver": "Ashay Maheshwari",
    "amount": "900",
    "application_date": "2019-01-19",
    "title": "Client meeting"
  },{ 
    "claim_id":"679", 
    "status": "Approved",
    "requestor": "Ashay Maheshwari",
    "approver": "Ashay Maheshwari",
    "amount": "600",
    "application_date": "2019-01-19",
    "title": "Client meeting"}, 
    { 
        "claim_id":"680", 
        "status": "Pending with HR",
        "requestor": "Ashay Maheshwari",
        "approver": "Ashay Maheshwari",
        "amount": "180",
        "application_date": "2019-01-19",
        "title": "Client meeting"},
         { 
            "claim_id":"681", 
            "status": "Approved",
            "requestor": "Vamsi Phani Ramkumar",
            "approver": "Nageshwara Gaddam",
            "amount": "9100",
            "application_date": "2019-01-19",
            "title": "Client meeting"} ];
var found = 0;
app.get('/', (req,res) => res.json(claim_body));
app.get('/claims/:claim_id', function (req, res) {
    for (var i = 0, len = claim_body.length; i < len; ++i) {
        // console.log(myObj[i]["claim_id"]);
        if(claim_body[i]["claim_id"] == req.params["claim_id"]) {
            res.json(claim_body[i]);
            found = 1;
            res.end();
        }         
    } if(found == 1) { res.json({"error":"404"});}
});
app.listen(port, function () {
    console.log("Running rest on port " +  port);
});
