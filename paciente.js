export default class paciente{
    constructor(nombre, fechaNacimiento, telefono){
        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._telefono = telefono
    }

    getPerfil(){
        return (`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}`)
    }

}