var youTrack = require("../lib/youtrack");
var sinon = require("sinon");
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
	describe('findIssuesByProject', function(){
		it('should not find any issues for the project', function(){
			var doneCallback = sinon.spy();			
			youTrack.findIssuesByProject("Moose", {}, doneCallback);
			assert(doneCallback.called)
		});
	});
});