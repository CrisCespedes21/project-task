import { Header } from "./Main_Comp/Header";
import { useState } from "react";
import { Tarea } from "@/lib/definiciones";
import { Routes, Route } from "react-router-dom";
import { ListarTareas } from "./Main_Comp/ListarTareas";
import { NuevaTarea } from "./Main_Comp/NuevaTarea";
import { EditarTarea } from "./Main_Comp/EditarTarea";

export function Main() {
  // Definir una lista de tareas
  const [Tareas, setTareas] = useState<Tarea[]>([]);
  const agregarTarea = (nuevaTarea: Tarea) => {
    setTareas([...Tareas, nuevaTarea]);
  };
  const editarTarea = (tareaEditada: Tarea) => {
    setTareas(
      Tareas.map((tarea) =>
        tarea.id === tareaEditada.id ? tareaEditada : tarea
      )
    );
  };

  const eliminarTarea = (id: string) => {
    setTareas(Tareas.filter((tarea) => tarea.id !== id));
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<ListarTareas tareas={Tareas} eliminarTarea={eliminarTarea} />} />
          <Route
            path="nueva-tarea"
            element={<NuevaTarea agregarTarea={agregarTarea} />}
          />
          <Route
            path="editar-tarea/:id"
            element={
              <EditarTarea editarTarea={editarTarea} listaTareas={Tareas} />
            }
          />
        </Routes>
      </div>
    </>
  );
}
