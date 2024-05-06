type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1

let pacientesAsignadosAPediatria : Pacientes[] = []

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra") {
            pacientesAsignadosAPediatria.push(pacientes[i])
        }
    }
    return pacientesAsignadosAPediatria
  };

console.log(obtenPacientesAsignadosAPediatria(pacientes))

let pacientesAsignadosAPediatriaMenoresDeDiezAños: Pacientes[] = []

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesAsignadosAPediatriaMenoresDeDiezAños.push(pacientes[i])
        }
    }
    return pacientesAsignadosAPediatriaMenoresDeDiezAños
  };

  console.log (obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))

  // Apartado 2
  
  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo : boolean = false;
  
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
            activarProctolo = true
        }
    }
  
    return activarProctolo;
  };

  console.log(`Activar protocolo: ${activarProtocoloUrgencia(pacientes)}`)

  // Apartado 3

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra")
            pacientes[i].especialidad = "Medico de familia"
    }
    return pacientes
  };

  console.log(reasignaPacientesAMedicoFamilia(pacientes))

  // Apartado 4

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let irseACasaPediatra : boolean = true
    for(let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra") {
            irseACasaPediatra = false
        }
    }

    return irseACasaPediatra
  };

  console.log(`El pediatra puede irse a casa: ${HayPacientesDePediatria(pacientes)}`)

  // Apartado 5

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

  const totalDePacientesPorEspecialidad :NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0, pediatria: 0, cardiologia: 0
  }
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    for(let i = 0; i < pacientes.length; i++) {
        switch(pacientes[i].especialidad) {
            case "Pediatra" 
            :
            totalDePacientesPorEspecialidad.pediatria++
            break
            case "Cardiólogo"
            :
            totalDePacientesPorEspecialidad.cardiologia++
            break
            case "Medico de familia"
            :
            totalDePacientesPorEspecialidad.medicoDeFamilia++
            break
            default
            :
            ""
        }
    }
    return totalDePacientesPorEspecialidad
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes))