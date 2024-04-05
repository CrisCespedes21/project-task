import { Plus } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Save } from 'lucide-react';
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Link } from 'react-router-dom';

export const NuevaTarea = () => {
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="flex w-full flex-col  max-w-screen-lg">
                    <div className='flex items-center mb-3 justify-between'>
                        <h1 className='text-2xl font-bold mr-2'> Nueva Tarea</h1>
                        <div className='flex'>
                            <Button className="flex gap-3" variant="default">
                                <Link className="flex gap-3" to="/">
                                    < Save className="w-[18px]  h-[18px]" />
                                    Guardar Tarea
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <form className='p-0 '>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Input id="nombre" placeholder="Nombre de tu nueva tarea" />
                            </div>
                            <div className='flex flex-col space-y-1.5'>
                                <Input id="descripcion" placeholder="Describe tu nueva tarea" />
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center my-4'>
                        <h2 className='font-semibold text-lg'>Selecciona el color para la tarea</h2>
                    </div>
                    <div className="flex sm:justify-center justify-start gap-8 flex-wrap">
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"></button>
                        <button className="sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"></button>
                    </div>
                    <Card className='mt-3 p-3'>
                        <CardDescription className='flex flex-col sm:flex-row flex-grow justify-around p-3'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-between'>
                                    <h2 className="text-sm font-semibold text-zinc-900	mr-2">Establezca un ciclo para su tarea</h2>
                                    <Switch />
                                </div>
                                <Separator></Separator>
                                <div className='w-full flex justify-center'>
                                    <div className="bg-gray-100 flex flex-row w-fit  rounded-full m-0">
                                        <Button variant="secondary" className="rounded-full">
                                            Diariamente
                                        </Button>
                                        <Button variant="default" className="rounded-full">
                                            Semalmente
                                        </Button>
                                        <Button variant="secondary" className="rounded-full">
                                            Mensualmente
                                        </Button>
                                    </div>
                                </div>
                                <Separator></Separator>
                                <div>
                                    <div className="flex h-8 items-center text-sm justify-between">
                                        <Button variant="secondary" className='rounded-full w-8 h-8'>
                                            <p>LU</p>
                                        </Button>
                                        <Separator className='' orientation="vertical" />
                                        <Button variant="secondary" className='rounded-full w-8 h-8 '>
                                            <p>MA</p>
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <Button variant="secondary" className='rounded-full w-8 h-8 '>
                                            <p>MI</p>
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <Button variant="secondary" className='rounded-full w-8 h-8 '>
                                            <p>JU</p>
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <Button variant="default" className='rounded-full w-8 h-8 '>
                                            <p>VI</p>
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <Button variant="default" className='rounded-full w-8 h-8 '>
                                            <p>SA</p>
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <Button variant="secondary" className='rounded-full w-8 h-8 '>
                                            <p>DO</p>
                                        </Button>
                                    </div>
                                </div>
                                <Separator />
                                <div className='flex justify-between'>
                                    <Button variant="secondary"> Repetir </Button>
                                    <Button variant="secondary" size="icon"><ChevronRight /></Button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 mr-2'>
                                <h2 className="text-sm font-semibold  text-zinc-900">Establezca una etiqueta para su tarea</h2>
                                <Separator></Separator>
                                <div className=" gap-2 flex flex-col sm:flex-row sm:w-fit w-auto rounded-3xl sm:rounded-full m-0 text-neutral-800">
                                    <Button variant="secondary" className='rounded-full text-current'>Rutina Diaria</Button>
                                    <Button variant="secondary" className='rounded-full text-current'>Rutina de Estudio</Button>
                                    <Button variant="secondary" className='rounded-full text-current'>Añadir más<Plus className='w-4 h-4' /></Button>
                                </div>
                            </div>
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </>
    )
}
