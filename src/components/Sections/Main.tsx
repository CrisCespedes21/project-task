import { Header } from "./Main_Comp/Header";
import { useState } from "react";
import { Tarea } from "@/lib/definiciones";
import { Routes, Route } from "react-router-dom";
import { ListarTareas } from "./Main_Comp/ListarTareas";
import { NuevaTarea } from "./Main_Comp/NuevaTarea";

export function Main() {
  // Definir una lista de tareas
  const [Tareas, setTareas] = useState<Tarea[]>([
    {
      id: "1",
      nombre: "Lectura",
      descripcion: "Leer el libro de matematicas",
      color: "purple",
      ciclo: true,
      frecuencia: "diaria",
      dias: [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
      ],
      categoria: "estudio",
      estado: "pendiente",
    },
  ]);
  const agregarTarea = (nuevaTarea: Tarea) => {
    setTareas([...Tareas, nuevaTarea]);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<ListarTareas tareas={Tareas} />} />
          <Route
            path="nueva-tarea"
            element={<NuevaTarea agregarTarea={agregarTarea} />}           
          />
        </Routes>
      </div>
    </>
  );
}
