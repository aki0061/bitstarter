var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var fs = require('fs');
  var ifile = "./index.html";
  fs.readfile(ifile,function ( err,data){
    if(err) throw err;
    console.log(data);
  });
 
  //response.send('Hello World2!');
  response.send(data.toString);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
