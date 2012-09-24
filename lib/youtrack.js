var http = require('http'), 
  xml2js = require('xml2js');

var config = {
	host : 'localhost',
	port : '8080',
	username : 'suser',
	password : 'top$ecret'
}

var doSomething = function() {
	return "I just did something...";
}

exports.config = config
exports.doSomething = doSomething