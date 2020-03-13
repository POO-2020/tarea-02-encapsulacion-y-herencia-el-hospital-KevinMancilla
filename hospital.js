export default class hospital{
    constructor(nombre, direccion){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }

    registrarDoctor(doctor){
        this._doctores.push(doctor)
    }
    
    listarDoctores(){
        console.log("- - - - - - Lista de los doctores - - - - - - ")
        this._doctores.forEach( (doct, i) => {
            console.log(`No. (${i+1}): ${doct.getPerfil()}`)
        })
    }

    registrarCita(cita){
        this._citas.push(cita)
    }

    listarCitas(){
        console.log("- - - - - - Citas programadas - - - - - - ")
        this._citas.forEach( (cita, i) => {
            console.log(`No. (${i+1}):  ${cita.getCita()}`)
        })
    }
}