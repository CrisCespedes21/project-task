import { CirclePlus } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
export const Contenido = () => {
    return (
        <>
            <div className='flex items-center mb-4'>
                <h1 className='text-xl font-bold mr-2'> Nueva Tarea</h1>
                <CirclePlus />
            </div>
            <Card className="flex w-full border-0">
                <CardContent className='p-0 w-full'>
                    <form>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Input id="nombre" placeholder="Nombre de tu nueva tarea" />
                            </div>
                            <div className='flex flex-col space-y-1.5'>
                                <Input id="descripcion" placeholder="Describe tu nueva tarea" />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className='flex items-center my-4'>
                <h2 className='font-semibold'>Selecciona el color para la tarea</h2>
            </div>
            <div className="flex sm:justify-center justify-start gap-8 flex-wrap">
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"></button>
                <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"></button>
            </div>


        </>
    )
}
