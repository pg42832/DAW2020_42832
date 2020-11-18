// const { fstat } = require("fs");
var http = require("http")
var axios = require("axios")

http.createServer(function (req, res) {
    console.log(req.method + " " + req.url);
    if(req.method == "GET")
    {
        if(req.url == "/")
        {
            res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
            res.write("<h2>Escola de Música</h2>")
            res.write("<ul>")
            res.write("<li><a href='/alunos'>Lista de Alunos</a> </li>")
            res.write("<li><a href='/cursos'>Lista de Cursos</a> </li>")
            res.write("<li><a href='/instrumentos'>Lista de Instrumentos</a> </li>")
            res.write("</ul>")
            res.end()
        }
        else if(req.url == "/alunos" )
        {
            axios.get("http://localhost:3000/alunos")
            .then(function (resp)
            {
                res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
                res.write("<h2>Escola de Música: Lista de Alunos</h2>")
                res.write("<ul>")
                alunos = resp.data;
                alunos.forEach( a => {
                        res.write("<Li><a href='/alunos/"+ a.id + "'>" + a.id + " - " + a.nome +"</a></li>")
                }) 
                res.write("</ul>")
                res.write("<address>[ <a href='/'> Voltar </a>]</address>")
                res.end()
            })
            .catch (function (error) {
                console.log("Erro na obtenção na Lista de Alunos: " + error);
            })
        }
        else if(req.url == "/cursos" )
        {
            axios.get("http://localhost:3000/cursos")
            .then(function (resp)
            {
                res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
                res.write("<h2>Escola de Música: Lista de Cursos</h2>")
                res.write("<ul>")
                curso = resp.data;
                curso.forEach( c => {
                        res.write("<Li><a href='/cursos/"+ c.id + "'>" + c.id + " - " + c.designacao + "</a></li>")
                }) 
                res.write("</ul>")
                res.write("<address>[ <a href='/'> Voltar </a>]</address>")
                res.end()
            })
            .catch (function (error) {
                console.log("Erro na obtenção na Lista de Cursos: " + error);
            })
        }
        else if(req.url == "/instrumentos" )
        {
            axios.get("http://localhost:3000/instrumentos")
            .then(function (resp)
            {
                res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
                res.write("<h2>Escola de Música: Lista de Instrumentos</h2>")
                res.write("<ul>")
                instrumento = resp.data;
                instrumento.forEach( inst => {
                        res.write("<Li><a href='/instrumentos/"+ inst.id + "'>" + inst.id + " - " + inst.text + "</a></li>")
                        console.log(inst.id);
                }) 
                res.write("</ul>")
                res.write("<address>[ <a href='/'> Voltar </a>]</address>")
                res.end()
            })
            .catch (function (error) {
                console.log("Erro na obtenção na Lista de Instrumentos: " + error);
            })
        }



//__________________________________________________________

        else if(req.url == "/alunos/" + {id} )
        {
        axios.get("http://localhost:3000/alunos/" + {id})
        .then(function (resp)
        {
            res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
            res.write("<h2>Aluno:</h2>")
            res.write("<ul>")
            res.write("<li> ID: " + resp.data.id + "</li>")
            res.write("<li> Nome: " + resp.data.nome + "</li>")
            res.write("<li> Data de Nascimento: " + resp.data.dataNasc + "</li>")
            res.write("<li> Curso: " + resp.data.curso + "</li>")
            res.write("<li> Ano do Curso: " + resp.data.anoCurso + "</li>")
            res.write("<li> Instrumento: " + resp.data.instrumento + "</li>")
            res.write("</ul>")
            res.write("<address>[ <a href='/alunos'> Voltar </a>]</address>")
            
        })
        .catch (function (error) {
            console.log("Erro na obtenção do Aluno: " + error);
        })
        }

//________________________________________________

        // if(req.url == "/cursos/CS23" )
        // {
        // axios.get("http://localhost:3000/cursos/CS23")
        // .then(function (resp)
        // {
        //     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
        //     res.write("<h2>Curso:</h2>")
        //     res.write("<ul>")
        //     res.write("<li> ID: " + resp.data.id + "</li>")
        //     res.write("<li> Designação: " + resp.data.designacao + "</li>")
        //     res.write("<li> Duração: " + resp.data.duracao + "</li>")
        //     res.write("<li> Instrumento: " + resp.data.instrumento + "</li>")
        //     res.write("<li> ID do Instrumento: " + resp.data.instrumento.id + "</li>")
        //     res.write("<li> Instrumento: " +resp.data. instrumento.text + "</li>")
        //     res.write("</ul>")
        //     res.write("<address>[ <a href='/cursos'> Voltar </a>]</address>")
            
        // })
        // .catch (function (error) {
        //     console.log("Erro na obtenção do Curso: " + error);
        // })
        // }

//_____________________________________________________________
        // if(req.url == "/instrumentos/I1" )
        // {
        // axios.get("http://localhost:3000/instrumentos/I1")
        // .then(function (resp)
        // {
        //     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})  
        //     res.write("<h2>Instrumento:</h2>")
        //     res.write("<ul>")
        //     res.write("<li> ID: " + resp.data.id + "</li>")
        //     res.write("<li> Instrumento: " + resp.data.text + "</li>")
        //     res.write("</ul>")
        //     res.write("<address>[ <a href='/instrumentos'> Voltar </a>]</address>")
            
        // })
        // .catch (function (error) {
        //     console.log("Erro na obtenção do Instrumento: " + error);
        // })
        // }


        


    }
    else
    {
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
        res.write("<p> Pedido não suportado: "+ req.method +" " + req.url + "</p>")
        res.end();
    }  
}).listen(4000);
console.log("servidor à escuta na porta 4000....")
