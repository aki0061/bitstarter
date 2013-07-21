var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var ifile = "./index.html";
  fs.readFile(ifile,function (err,data){
    if(err) throw err;
    console.log(data);
    response.send(data.toString('utf-8'));
  });
 
  //response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
