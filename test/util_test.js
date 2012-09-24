var util = require("../lib/util")
var assert = require("assert");

describe('util', function(){
	describe('buildQueryString', function(){
		it('should return empty string when options is null', function(){
			assert.equal("", util.buildQueryString());
		});
		it('should return empty string when options has no values', function(){
			assert.equal("", util.buildQueryString(new Object()));
		});
		it('should return query string with one option', function(){
			assert.equal("?monkey=chimp", util.buildQueryString({
					monkey: 'chimp'
				}));
		});
		it('should return query string with two options', function(){
			assert.equal("?monkey=chimp&horse=burro", util.buildQueryString({
					monkey: 'chimp',
					horse: 'burro'
				}));
		});
	});	
});