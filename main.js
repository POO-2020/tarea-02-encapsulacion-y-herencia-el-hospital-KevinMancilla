import cita from "./cita.js"
import Doctor from "./doctor.js"
import Fecha from "./fecha.js"
import Hospital from "./hospital.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import tiempo from "./tiempo.js"
import PacienteAsegurado from "./pacienteasegurado.js"

class Main{
    constructor(){
        this.nombre1 = new Nombre("kevin", "rene", "mancilla")
        this.doctor = new Doctor(this.nombre1,"jefe","3121105426","cedula:23245")
        this.paciente = new Paciente(this.nombre1,new Fecha(new Date(2001, 8, 27)),"3121105426")
        this.tiempo = new tiempo(this.tiempo)
        this.cita = new cita (new Fecha(new Date(2001,8,27)),this.tiempo,this.doctor,this.paciente)
        this.fecha = new Fecha(this.fecha)
        this.hospital = new Hospital("Puerta de Hierro", "Av Pino Suarez","Num #674")
        this.hora = new tiempo(3, 50, "am")
        this.fechaVigencia = new Fecha(20,6,2001)
        
    }

    Nombre(){
        console.log(this.nombre1.getNombreCompleto())
        console.log(this.nombre1.getApellidoNombre())
        console.log(this.nombre1.getIniciales())
    }

    Doctor(){
        console.log(`Datos del Doctor = ${this.doctor.getPerfil()}`)
    }

    Paciente(){
        console.log(`El paciente es: ${this.paciente.getPerfil()}`)
    }

    Tiempo(){
        let hora = new tiempo(3, 50, "am")
        let hora2 = new tiempo(4, 50, "pm")
        console.log(`La hora esta programada para las ${hora.getFormato12()}`)
        console.log(`La hora esta programada para las ${hora.getFormato24()}`)
        console.log(`La hora esta programada para las ${hora2.getFormato12()}`)
        console.log(`La hora esta programada para las ${hora2.getFormato24()}`)
    }

    Cita(){
        console.log(`Cita programada para ${this.cita.getCita()}`)
    }

    Fecha(){
        let fechaP = new Fecha(27,8,2001)
        console.log(`Son ${fechaP.getAños()} años`)
        console.log(`Son ${fechaP.getMeses()} meses`)
        console.log(`Son ${fechaP.getSemanas()} semanas`)
        console.log(`Son ${fechaP.getDias()} dias `)
        console.log(fechaP.getFecha())
        console.log(fechaP.getDiaFecha())
    }

    Hospital(){
            this.hospital.registrarDoctor(this.doctor)
            this.hospital.registrarCita(this.cita)
            this.hospital.listarDoctores()
            this.hospital.listarCitas()
    }

    PacienteAsegurado(){
        let datosP1 = {
            nombre: new Nombre("Jorge", "Alberto", "Gonzales"),
            fechaNacimiento: new Fecha(5,3,2001),
            telefono: 312123012,
            numeroPoliza: 595951992399123,
            fechaFinVigencia: new Fecha(2,8,2023),
            compañia: "SD999231"
        }

        let pacienteAsegurado = new PacienteAsegurado(datosP1)
        console.log(`${pacienteAsegurado.getPerfil()}`)
    }
}

    let verificar = new Main()

    verificar.Nombre()
    verificar.Doctor()
    verificar.Paciente()
    verificar.Tiempo()
    verificar.Cita()
    verificar.Fecha()
    verificar.Hospital()
    verificar.PacienteAsegurado()
    


