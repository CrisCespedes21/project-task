// Routes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NuevaTarea } from "../Sections/Main_Comp/NuevaTarea";
import { ListarTareas } from "../Sections/Main_Comp/ListarTareas";

export function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ListarTareas />} />
            <Route path="nueva-tarea" element={<NuevaTarea />} />
        </Routes>
    );
}
