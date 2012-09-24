var youTrack = require("../lib/youtrack")
var assert = require("assert");

describe('youTrack', function(){
	describe('config', function(){
		it('should default the host to localhost', function(){
			assert.equal("localhost", youTrack.config.host)
		});
		it('should default the port to 8080', function(){
			assert.equal("8080", youTrack.config.port)
		});
	});
	describe('doSomething', function(){
		it('should say that it did something', function(){			
			assert.equal("I just did something...", youTrack.doSomething());
		});
	});
});