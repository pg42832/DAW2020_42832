var http = require("http")
var fs = require("fs")
var url = require('url')

http.createServer(function (req, res) {

    var num = req.url.split("/")
    var pag = num[num.length-1];
    console.log(pag);

    if(pag == 'arq2html.xsl')
    {
        fs.readFile('arq2html.xsl' ,function(err,data){
        
            if(err){  
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write("Ficheiro "+ pag + " Inexistente!!");
                res.end()
            }
            else{
                res.writeHead(200, {'Content-Type':  'text/html; charset=utf-8'})
                res.write(data)
                res.end()
            }
        })
    }else{
        fs.readFile('dataset/arq' + pag +'.xml',function(err,data){
        
            if(err){  
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write("Ficheiro "+ pag + " Inexistente!!");
                res.end()
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(data)
                res.end()
            }
        }
    )}
}).listen(7777);
console.log("servidor à escuta na porta 7777....")
