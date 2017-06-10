var express = require('express');
var app = express();

app.listen (3000, function(){

});


app.get('/produtos', function(req,res){
	res.send("<html><body>List</body></html>")
})