const express = require ("express")
const app = express()
const path = require ("path")
//server
app.set("port",process.env.PORT || 3000 )
// app.listen(3000,()=>console.log("server on http://localhost:3000"))


app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))

//public uso de la carpeta publica
app.use(express.static(path.resolve(__dirname,"../public")))

//website routes
app.use (require("./routes/web"))
