import Cabecera from "./Lista_Comp/Cabecera";
import { Calendario } from "./Lista_Comp/Calendario";
import { Button } from "@/components/ui/button";

export function Lista() {
    return (
        <>
            <div>
                <Cabecera />
            </div>
            <div className="p-2 gap-2 flex justify-center">
                <Calendario />
            </div>
            <div className="flex-col flex gap-4">
                <div className="flex flex-col">
                    <p className="text-base pl-3 font-medium">Tareas</p>
                    <Button variant="secondary" className="h-9 py-2 w-full justify-start">
                        <p className="ml-3 text-sm">Hoy</p>
                    </Button>
                </div>
                <div>
                    <p className="text-base pl-3 font-medium">Lista</p>
                    <Button variant="ghost" className="h-9 px-4 py-2 w-full justify-start">
                        <p className="ml-3 text-sm">Rutina Diaria</p>
                    </Button>
                    <Button variant="ghost" className="h-9 px-4 py-2 w-full justify-start">
                        <p className="ml-3 text-sm">Rutina de Estudio</p>
                    </Button>
                </div>
            </div>
        </>
    )

}