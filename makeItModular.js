var filterFiles = require('./filtMod');
var dir = process.argv[2];
var ext = process.argv[3];

filtFiles(dir, ext, function(error, data){
	if(error){
		return error;
	}
	for (var i = 0; i < data.length; i++){
		console.log(data[i]);
	}
});