import { Header } from "./Main/Header"
import {Contenido} from "./Main/Contenido"

export function Main() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="p-3">
                <Contenido />
            </div>
        </>    )

}