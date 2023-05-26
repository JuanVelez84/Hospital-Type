export type enfermedad = "Fiebre" | "Gripa" | "Otro"
export type cargo = "Doctor" | "Enfermera" | "Enfermero"
export type especialidad = "Medico general" | "Cirujano"

export interface IPersona {
    id: number,
    nombre: string,
    apellido: string,
    cargo: cargo,
    especialidad: especialidad,
    enfermedad: enfermedad 
}

interface Diagnostico extends IPersona {
    diagnostico: string
}