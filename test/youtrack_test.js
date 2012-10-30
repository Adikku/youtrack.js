var sinon = require("sinon");
var assert = require("assert");
var youTrack = require("../lib/youtrack");
var fakeServer = require("../test/fakeServer");

describe('youTrack', function(){		
	beforeEach(function(){
		youTrack.setServer(fakeServer);
	});
	describe('config', function(){
		it('should default the host to localhost', function(){
			assert.equal("localhost", youTrack.config.host)
		});
		it('should default the port to 8080', function(){
			assert.equal("8080", youTrack.config.port)
		});
	});
	describe('findIssuesByProject', function(){
		it('should create get request with the the correct url', function(){
			youTrack.findIssuesByProject("Moose", {}, function(){});
			assert.equal("/rest/issue/byproject/Moose", fakeServer.fakeServer.get.path);			
		});
		it('should pass body of response to done callback', function(){
			var doneCallback = sinon.spy();			
			fakeServer.fakeServer.data = "ugh.";
			youTrack.findIssuesByProject("Moose", {}, doneCallback);
			assert(doneCallback.calledWithMatch("ugh."));			
		});
	});
});