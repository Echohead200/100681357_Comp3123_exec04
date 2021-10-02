//const { response } = require('express')
let express = require('express')
let app = express()


let server = app.listen(8071, () => {
    console.log(server.address())
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})

app.get("/", (req, res) => {
    res.send("<h1>Testing now</h1>")
})

//http://localhost:8071/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello, Express JS</h1>")
})


//query string work here
//http://localhost:8071/user?fnm=Jeff&lnm=Mcilveen

app.get("/user",(req,res) => {
    let fnm = req.query.fnm
    let last_name = req.query["lnm"]

    
    response={
        fnm,
        last_name,


    }
    res.send(response)



})

//http://localhost:8071/user2?fnm=Jeff&lnm=Mcilveen


//http://localhost:8071/user/Jeff/Mcilveen
app.get("/user/:fnm/:lnm", (req, res) => {
    let fnm = req.params.fnm
    let last_name = req.params["lnm"]
    let full_name = `${fnm}, ${last_name}`

    response = {
        fnm,
        last_name,   
    }

    res.send(response)
})

