class FoodsRepository {
	constructor(repository) {
		this.repository = repository
	}

    getAllFoods() {
		return this.repository.getAllFoods()
	}

}

module.exports = { FoodsRepository }






















const {sequelize} = require('../../infrastructure/database/Conexion');


findLastId = async () =>{
    const id = await sequelize.query("SELECT MAX(id) AS id FROM bandas", {type: sequelize.QueryTypes.SELECT})
    return id;
}


exports.findAll = async () =>{
    const bandas = await sequelize.query("SELECT * FROM bandas;", {type: sequelize.QueryTypes.SELECT})
    return bandas;
}

exports.createBanda = async (nombre, integrantes, fecha_inicio, fecha_separacion, pais) =>{
    const findId = await findLastId();
    const id = findId[0].id+1;
    
    sequelize.query(`INSERT INTO Bandas 
    VALUES(${id}, 
        '${nombre}', 
        '${integrantes}', 
        '${fecha_inicio}', 
        '${fecha_separacion}', 
        '${pais}');`, 
        {type: sequelize.QueryTypes.INSERT})
}

exports.updateBanda = async (id, nombre, integrantes, fecha_inicio, fecha_separacion, pais) =>{
    sequelize.query(`UPDATE Bandas 
    SET nombre = '${nombre}', 
        integrantes = '${integrantes}', 
        fecha_inicio = '${fecha_inicio}', 
        fecha_separacion = '${fecha_separacion}', 
        pais = '${pais}' WHERE id = ${id};`, 
        {type: sequelize.QueryTypes.UPDATE})
}

exports.deleteBanda = async (id) =>{
    sequelize.query(`DELETE FROM bandas WHERE id = ${id}`, {type: sequelize.QueryTypes.DELETE})
}

