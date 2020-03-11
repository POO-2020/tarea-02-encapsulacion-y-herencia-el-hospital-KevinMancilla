import nombre from "./nombre.js"
export default class doctor{
    constructor(nombre, especialidad, telefono, cedula){
        this._nombre = nombre
        this._especialidad = especialidad
        this._telefono = telefono
        this._cedula = cedula
    }
    getPerfil(){
        return (`${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`)
    }
}

