


//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para arquivos estáticos (css, js...)
server.use(express.static("public"))

//Habilitar body do formulário
server.use(express.urlencoded ({extended: true}))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,  //boolean ou booleano
})

//Lista de doadores: Arrey
const donors = [
    {
        name: "Iara de Sousa",
        blood: "A+"
    },
    {
        name: "Wouerner Fernandes",
        blood: "O+"
    },
    {
        name: "Eduardo Lacerda",
        blood: "AB+"
    },
    {
        name: "Juliana Santos",
        blood: "B+"
    },
]


//configurar a apresentação da página
server.get("/", function (req, res) {

    return res.render("index.html", {donors})
})

server.post("/", function (req, res) {
    
    //Pegar dados do formulário.
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

//Assim coloco valores dentro do arrey.

    donors.push ({
        
        name: name,
        blood: blood,
    })

    return res.redirect("/") 

})


//Ligar o servidor e permitir acesso a porta 3000

server.listen(3000, function() {

    console.log("Servidor iniciado.")
})
