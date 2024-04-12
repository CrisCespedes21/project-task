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
// Definir colores
export type ColorClasses = {
  [key: string]: {
    bg: string;
    ring: string;
    bgActivo: string;
  };
};

export const colores = [
  "slate",
  "stone",
  "blue",
  "cyan",
  "violet",
  "purple",
  "fuchsia",
  "rose",
  "red",
  "orange",
  "amber",
  "lime",
  "green",
  "emerald",
];
export const coloresClasses: ColorClasses = {
  slate: {
    bg: "bg-slate-300",
    ring: "ring-slate-500",
    bgActivo: "bg-slate-500",
  },
  stone: {
    bg: "bg-stone-300",
    ring: "ring-stone-500",
    bgActivo: "bg-stone-500",
  },
  blue: {
    bg: "bg-blue-300",
    ring: "ring-blue-500",
    bgActivo: "bg-blue-500",
  },
  cyan: {
    bg: "bg-cyan-300",
    ring: "ring-cyan-500",
    bgActivo: "bg-cyan-500",
  },
  violet: {
    bg: "bg-violet-300",
    ring: "ring-violet-500",
    bgActivo: "bg-violet-500",
  },
  purple: {
    bg: "bg-purple-300",
    ring: "ring-purple-500",
    bgActivo: "bg-purple-500",
  },
  fuchsia: {
    bg: "bg-fuchsia-300",
    ring: "ring-fuchsia-500",
    bgActivo: "bg-fuchsia-500",
  },
  rose: {
    bg: "bg-rose-300",
    ring: "ring-rose-500",
    bgActivo: "bg-rose-500",
  },
  red: {
    bg: "bg-red-300",
    ring: "ring-red-500",
    bgActivo: "bg-red-500",
  },
  orange: {
    bg: "bg-orange-300",
    ring: "ring-orange-500",
    bgActivo: "bg-orange-500",
  },
  amber: {
    bg: "bg-amber-300",
    ring: "ring-amber-500",
    bgActivo: "bg-amber-500",
  },
  lime: {
    bg: "bg-lime-300",
    ring: "ring-lime-500",
    bgActivo: "bg-lime-500",
  },
  green: {
    bg: "bg-green-300",
    ring: "ring-green-500",
    bgActivo: "bg-green-500",
  },
  emerald: {
    bg: "bg-emerald-300",
    ring: "ring-emerald-500",
    bgActivo: "bg-emerald-500",
  },
};
