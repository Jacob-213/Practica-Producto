const express=require("express");
const path=require("path");
const usuariosRutas=require("./routes/usuariosRutas");
const productoRutas=require("./routes/productosRutas");

const app=express();
app.use("/",express.static(path.join(__dirname,"web")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use("/",usuariosRutas);
app.use("/",productoRutas);

app.get("/", (req, res) => {
    res.redirect("/usuarios");
});


const port=process.env.port || 3000;
app .listen(port,()=>{
    console.log("Servidor en http://127.0.0.1:"+port);
});