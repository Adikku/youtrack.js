fakeServer = {
	get:{},
	data:""
}

function Response(data){this.data = data;}
Response.prototype.on = function(eventName, callback){
	if(eventName == 'data'){
		callback(this.data);
	}
	if(eventName == 'error'){
		callback();
	}
	if(eventName == 'end'){
		callback();
	}
};

function Request(data) {this.data = data;}
Request.prototype.on = function(eventName, callback){
	if(eventName == 'response'){
		callback(new Response(this.data));
	}
};

exports.get = function(options) {
	fakeServer.get = options;
	return new Request(fakeServer.data);
}

exports.fakeServer = fakeServer