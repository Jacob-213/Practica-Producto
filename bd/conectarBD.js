require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");

    }

    async conectarMySql(){
        try {
            this.conexion = await this.mysql.createConnection({
                host: process.env.HOSTMYSQL || "bdvugusoasodb7uqbrlo-mysql.services.clever-cloud.com",
                user: process.env.USERMYSQL || "uk2knhgecxj8w6oe",
                password: process.env.PASSWORDMYSQL || "UDD7BH4Tph6YAynaBiPq",
                database: process.env.DATABASEMYSQL || "bdvugusoasodb7uqbrlo",
                port: process.env.PORTMYSQL || 3306
            });
            console.log("Conectado a MySql");
            return this.conexion;
       } catch (error){
            console.error("Error al conectar con MySql"+error);
       }
    }
    async cerrarConexion(){
        
            try {
                await this.conexion.end();
                console.log("Conexion de Mysql cerrada");
            } catch (error) {
                console.error("Error al desconectar de Mysql"+error);
            
        }
    }
}

module.exports=ConectarBD;