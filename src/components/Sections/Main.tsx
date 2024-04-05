import { Header } from "./Main_Comp/Header"
import { NuevaTarea } from "./Main_Comp/NuevaTarea"
import { ListarTareas } from "./Main_Comp/ListarTareas"

export function Main() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="p-3">
                 <NuevaTarea />
                {/* <ListarTareas />  */}
            </div>
        </>
    )

}