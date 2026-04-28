const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) =>{
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

	try{
		fs.readdir(process.argv[2], (err, dir) =>{
			dir.forEach(arq =>{
				res.write(arq);
				res.write('<br>');
			});
			res.end();
		});
	} catch (err){
		console.log(err);
	}
});

server.listen(3333);
