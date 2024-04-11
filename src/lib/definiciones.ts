export type Tarea = {
    nombre: string;
    descripcion: string;
    estado: 'pendiente'| 'terminada';
    color: string;
    ciclo: boolean;
    frecuencia: string;
    dias: string[];
    categoria: string;
    };

export interface FormData {   
    nombre: string;
    descripcion: string;
    color: string;
    ciclo: boolean;
    frecuencia: string;
    dias: string[];
    categoria: string;
}