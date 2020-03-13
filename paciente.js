export default class paciente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono){
        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._telefono = telefono
    }
    getNombreCompleto(){
        return `${this._nombre.getNombreCompleto()}`
    }

    getPerfil(){
        return (`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}`)
    }

}