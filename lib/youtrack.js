var http = require('http'), 
  xml2js = require('xml2js'),
  util = require('../lib/util');

var config = {
	host : 'localhost',
	port : '8080',
	username : 'suser',
	password : 'top$ecret'	
};

var setServer = function(server) {
	http = server;
}

var findIssuesByProject = function(projectName, options, callback) {
	var path = '/rest/issue/byproject/' + projectName + util.buildQueryString(options);
	var requestOptions = {
		host : config.host,
		port : config.port,
		username : config.username,
		password : config.password,
		path : path
	};
	var request = http.get(requestOptions);	
	request.on('response', function(res){
		var body = "";
		res.on('data', function(data){			
			body += data;
		});
		res.on('end', function() {						
			callback(body);
		});
	});	
};

exports.config = config
exports.setServer = setServer
exports.findIssuesByProject = findIssuesByProject