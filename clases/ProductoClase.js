class Producto {
    constructor(producto1) {
        this.id = producto1.idproducto;
        this.nombre = producto1.nombre;
        this.precio = producto1.precio;
        this.descripcion = producto1.descripcion;
        this.categoria = producto1.categoria;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        if (nombre && nombre.length > 0) {
            this._nombre = nombre;
        }
    }

    set precio(precio) {
        if (!isNaN(precio)) {
            this._precio = precio;
        }
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get descripcion() {
        return this._descripcion;
    }

    get categoria() {
        return this._categoria;
    }

    get id() {
        return this._id;
    }

    get mostrarDatos() {
        return {
            id: this.id,
            nombre: this.nombre,
            precio: this.precio,
            descripcion: this.descripcion,
            categoria: this.categoria
        };
    }
}

module.exports = Producto;
