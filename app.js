var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.listen (3000, function(){
	console.log("Server is online");
});

app.get('/products', function(req,res){
	res.render("products/list")
})