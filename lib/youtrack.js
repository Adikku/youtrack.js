var http = require('http'), 
  xml2js = require('xml2js'),
  util = require('../lib/util');

var config = {
	host : 'localhost',
	port : '8080',
	username : 'suser',
	password : 'top$ecret'
};


var findIssuesByProject = function(projectName, options, handleEach, handleDone) {
	var path = '/rest/issue/byproject/' + projectName + util.buildQueryString(options);
	var request = {
		host : config.host,
		port : config.port,
		username : config.username,
		password : config.password,
		path : path
	};
	return handleEach();
};

exports.config = config
exports.findIssuesByProject = findIssuesByProject