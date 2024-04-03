import { CirclePlus } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
export const Contenido = () => {
    return (
        <>
            <div className='flex intems-cemter mb-8'>
                <h1 className='text-xl font-semibold mr-2'> Nueva Tarea</h1>
                <CirclePlus />
            </div>
            <Card className="w-[1000px] border-0">
                <CardContent>
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
        </>
    )
}
