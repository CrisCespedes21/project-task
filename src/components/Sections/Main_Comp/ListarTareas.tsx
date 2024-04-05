
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { TextSearch } from 'lucide-react';
import { Plus } from 'lucide-react';


export const ListarTareas = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="flex w-full items-center flex-col  max-w-screen-lg">
                    <div className='flex justify-between w-full items-center mb-3'>
                        <h1 className='text-xl font-bold mr-2'>Tus Tareas de Hoy</h1>
                        <div className='flex  mt-4 '>
                            <Button className="flex gap-3" variant="default"> <Plus className="w-[18px]  h-[18px]" /> Nueva Tarea</Button>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-4 items-center w-full">
                        <div className="p-2 px-4 grid-cols-2 grid gap-4  bg-purple-300 shadow border rounded-xl w-full">
                            <div className="flex justify-start items-center gap-3 ">
                                <Checkbox />
                                <div className="space-y-1 leading-none">
                                    <div className="font-semibold text-base text-slate-900" >
                                        Lectura
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-3 ">
                                <Button variant='ghost' size="icon"><TextSearch className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Pencil className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Trash2 className="w-[18px]  h-[18px]" /></Button>
                            </div>
                        </div>
                        <div className="p-2 px-4 grid-cols-2 grid gap-4   bg-lime-300 shadow border rounded-xl w-full">
                            <div className="flex justify-start items-center gap-3 ">
                                <Checkbox />
                                <div className="space-y-1 leading-none">
                                    <div className="font-semibold text-base">
                                        <p className="line-through">Cita Medica</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-3 ">
                                <Button variant='ghost' size="icon"><TextSearch className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Pencil className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Trash2 className="w-[18px]  h-[18px]" /></Button>
                            </div>
                        </div>
                        <div className="p-2 px-4 grid-cols-2 grid gap-4  bg-indigo-300 shadow border rounded-xl w-full">
                            <div className="flex justify-start items-center gap-3 ">
                                <Checkbox />
                                <div className="space-y-1 leading-none">
                                    <div className="font-semibold text-base">
                                        Ir al gyn
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-3 ">
                                <Button variant='ghost' size="icon"><TextSearch className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Pencil className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Trash2 className="w-[18px]  h-[18px]" /></Button>
                            </div>
                        </div>
                        <div className="p-2 px-4 grid-cols-2 grid gap-4  bg-orange-300 shadow border rounded-xl w-full">
                            <div className="flex justify-start items-center gap-3 ">
                                <Checkbox />
                                <div className="space-y-1 leading-none">
                                    <div className="font-semibold text-base">
                                        Reunión de Trabajo
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-3 ">
                                <Button variant='ghost' size="icon"><TextSearch className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Pencil className="w-[18px]  h-[18px]" /></Button>
                                <Button variant='ghost' size="icon"><Trash2 className="w-[18px]  h-[18px]" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

