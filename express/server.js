
const express = require("express")

const server = express();

server.set("view engine","ejs");
server.set("views","views")

server.get("/",(req,res)=>{res.send("hi")})

//server.use("/v1/readFiles",require("./router/readFiles.js"))
server.use("/v1/downloadFile",require("./router/loadFiles.js"))

server.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("server listened at "+process.env.PORT)
})