export interface Tarea {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
  ciclo: boolean;
  frecuencia: string;
  dias: string[];
  categoria: string;
  estado: "pendiente" | "terminada";
}

export interface FormDataCreate {
  nombre: string;
  descripcion: string;
  color: string;
  ciclo: boolean;
  frecuencia: string;
  dias: string[];
  categoria: string;
}

export interface FormDataEdit {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
  ciclo: boolean;
  frecuencia: string;
  dias: string[];
  categoria: string;
  estado: "pendiente" | "terminada";
}

export interface FormDataDelete {
  id: string;
}
