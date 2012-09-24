var buildQueryString  = function(options) {	
	if(options == null) {	return ""; }
	var count = 0;
	var result = "?";
	for(var k in options)
	{
		if(count > 0) { result += "&" }
		result += k + "=" + options[k];
		count++;
	}
	return count > 0 ? result : "";	
};

exports.buildQueryString = buildQueryString