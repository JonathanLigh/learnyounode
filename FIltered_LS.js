var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(error, list){
	for (var i = 0; i < list.length; i++){
		var extend = path.extname(list[i]);
		var realExtend = exten.slice(1, extend.length);
		if(realExtend === ext){
			console.log(list[i]);
		}
	}
});