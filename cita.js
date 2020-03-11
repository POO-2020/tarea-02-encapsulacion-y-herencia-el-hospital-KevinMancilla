export default class cita{
    constructor(fecha, hora, doctor, paciente){
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }
    getCita(){
        return(`${this._fecha.getFecha()}, ${this._hora.getFormato24()}, ${this._doctor._nombre._apellidoPaterno} , ${this._paciente._nombre.getNombreCompleto()}`)
    }
}
