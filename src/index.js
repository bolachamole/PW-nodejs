const fs = require('fs');
const http = require('http');
const dotenv = require('dotenv');

const PORT = process.env.PORT ?? 3333;

const server = http.createServer((req, res) =>{
	fs.readdir(`./${process.argv[2]}`, (err, dir) =>{
		if (err) console.log(err);
		else{
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			dir.forEach(arq =>{
				res.write(arq);
				res.write('<br>');
			});
		}
		res.end();
	});
});

server.listen(PORT);
