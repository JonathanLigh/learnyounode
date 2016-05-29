var fs = require('fs');
var path = require('path');

function filtFiles(dir, initialExt, callback){
	var ext = '.' + initialExt;
	fs.readdir(dir, function(error, list){
		if(error){
			callback(error, null);
		}
		else {
			var filt = [];
			for(var i = 0; i <list.length; i++){
				if(ext === path.extname(list[i])){
					filt.push(list[i]);
				}
			}
			callback(null, filt);
		}
	});
}
module.exports = filtFiles;