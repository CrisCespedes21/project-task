import Cabecera from "./Lista/Cabecera";
import { Calendario } from "./Lista/Calendario";

export function Lista() {
    return (
        <>
            <div>
                <Cabecera />
            </div>
            <div className="p-2 gap-2 flex justify-center">
                <Calendario />
            </div>
        </>
    )

}