const ruta = require("express").Router();
const ProductoClase = require("../clases/ProductoClase");
const ProductoBD = require("../bd/ProductoBD");

ruta.get("/producto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const productosMySql = await productobd.mostrarProductos();
        var productosCorrectos = [];
        productosMySql.forEach(producto => {
            var producto1 = new ProductoClase(producto);

            if (producto1.nombre != undefined && producto1.precio != undefined) {
                productosCorrectos.push(producto);
            }
        });

        res.render("mostrarProductos", { productosCorrectos });
    } catch (error) {
        console.error("Error al mostrar productos: ", error);
        res.status(500).send("Error interno del servidor");
    }
});

ruta.post("/agregarProducto", (req, res) => {
    var producto1 = new ProductoClase(req.body);
    if (producto1.nombre != undefined && producto1.precio != undefined) {
        const productobd = new ProductoBD();
        productobd.nuevoProducto(producto1.mostrarDatos);
        res.redirect("/productos");
    } else {
        res.render("error");
    }
});

ruta.get("/agregarProducto", (req, res) => {
    res.render("formularioProducto");
});

ruta.get("/productos/editarProducto/:idProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const producto = await productobd.productoId(req.params.idProducto);
        res.render("editarProducto", producto);
    } catch (error) {
        console.error("Error al obtener producto por id: ", error);
        res.status(500).send("Error interno del servidor");
    }
});

ruta.post("/editarProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.editarProducto(req.body);
        res.redirect("/productos");
    } catch (error) {
        console.error("Error al editar el producto: ", error);
        res.status(500).send("Error interno del servidor");
    }
});

ruta.get("/productos/borrarProducto/:id", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.borrarProducto(req.params.id);
        res.redirect("/productos");
    } catch (error) {
        console.error("Error al borrar el producto: ", error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = ruta;