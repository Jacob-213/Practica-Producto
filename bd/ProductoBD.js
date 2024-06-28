const ConectarBD = require("./conectarBD");

class ProductoBD extends ConectarBD {
    constructor() {
        super();
    }

    async nuevoProducto(producto) {
        const sql = "INSERT INTO productos values(null, '" + producto.nombre + "', '" + producto.precio + "','" + producto.descripcion + "','" + producto.categoria + "');";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Crea un nuevo producto");
        } catch (error) {
            console.error("ERROR AL AGREGAR PRODUCTO" + error);
            console.error(sql);
        }
    }

    async mostrarProductos() {
        const sql = "SELECT * FROM productos;";
        try {
            await this.conectarMySql();
            const [productosMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            return (productosMySql);
        } catch (error) {
            console.error("Error al obtener los datos de los productos" + error);
            console.error(sql);
        }
    }

    async productoId(idproducto) {
        const sql = "SELECT * FROM productos WHERE idproducto="+idproducto+";";
        try {
            await this.conectarMySql();
            const [[producto]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Consulta correcta por id");
            return producto;
        } catch (error) {
            console.error("Error al consultar por id" + error);
            console.error(sql);
        }
    }

    async editarProducto(producto) {
        const sql = "UPDATE productos SET nombre='" + producto.nombre + "', precio='" + producto.precio + "' WHERE idproducto='" + producto.idproducto + "';";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Actualización correcta de producto");
        } catch (error) {
            console.error("Error al editar producto" + error);
            console.error(sql);
        }
    }

    async borrarProducto(idproducto) {
        const sql = "DELETE FROM productos WHERE idproducto=" + idproducto;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto borrado");
        } catch (error) {
            console.error("Error al borrar el producto" + error);
            console.log(sql);
        }
    }
}

module.exports = ProductoBD;
