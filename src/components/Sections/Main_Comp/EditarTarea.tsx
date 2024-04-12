import { ChevronRight, Save } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  FormDataEdit,
  Tarea,
  colores,
  coloresClasses,
} from "@/lib/definiciones";
import { useNavigate, useParams } from "react-router-dom";

interface EditarTareaProps {
  editarTarea: (tareaEditada: FormDataEdit) => void;
  listaTareas: Tarea[];
}

export const EditarTarea: React.FC<EditarTareaProps> = ({
  editarTarea,
  listaTareas,
}) => {
  const navegación = useNavigate();
  const { id } = useParams();

  //   Busqueda del id en el array tareas
  const tareaActualizar = listaTareas.find((tarea) => tarea.id === id);
  if (!tareaActualizar) {
    navegación("/");
    return;
  }

  const [formData, setFormData] = useState<FormDataEdit>({
    id: tareaActualizar.id,
    nombre: tareaActualizar.nombre,
    descripcion: tareaActualizar.descripcion,
    color: tareaActualizar.color,
    ciclo: tareaActualizar.ciclo,
    frecuencia: tareaActualizar.frecuencia,
    dias: tareaActualizar.dias,
    categoria: tareaActualizar.categoria,
    estado: tareaActualizar.estado,
  });

  const [colorActivo, setColorActivo] = useState(tareaActualizar.color);
  const [categoriaActiva, setCategoriaActiva] = useState(
    tareaActualizar.categoria
  );
  const [frecuencia, setFrecuencia] = useState("");
  const getClassName = (color: string) => {
    if (color === colorActivo) {
      return `sm:w-8 sm:h-8 w-6 h-6 rounded-full outline-none ring-2 ${coloresClasses[color].bgActivo} ${coloresClasses[color].ring}`;
    } else {
      return `sm:w-8 sm:h-8 w-6 h-6 rounded-full ${coloresClasses[color].bg}`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editarTarea(formData);
    navegación("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSwitchChange = (ciclo: boolean) => {
    setFormData({
      ...formData,
      ciclo: ciclo,
    });
  };

  const handleFrecuencia = (frecuencia: string) => {
    setFrecuencia(frecuencia);
    setFormData({
      ...formData,
      frecuencia: frecuencia,
    });
  };

  const handleColor = (color: string) => {
    setColorActivo(color);
    setFormData({
      ...formData,
      color: color,
    });
  };

  const handleCategoria = (categoria: string) => {
    setCategoriaActiva(categoria);
    setFormData({
      ...formData,
      categoria: categoria,
    });
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <form
          className="flex w-full flex-col  max-w-screen-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center mb-3 justify-between">
            <h1 className="text-xl sm:text-2xl font-bold mr-2">
              {" "}
              Editar Tarea
            </h1>
            <div className="flex">
              <Button className="flex gap-3" variant="default" type="submit">
                <Save className="w-[18px]  h-[18px]" />
                Guardar Tarea
              </Button>
            </div>
          </div>
          <div className="p-0 ">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  required
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  id="nombre"
                  placeholder="Nombre de tu tarea"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  required
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  id="descripcion"
                  placeholder="Descripción de tu tarea"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center my-4">
            <h2 className="font-semibold text-lg">
              Selecciona el color para la tarea
            </h2>
          </div>
          {/*Selección de Color  */}
          <div className="flex sm:justify-center justify-start gap-8 flex-wrap">
            <input type="hidden" name="color" value={formData.color} />
            {colores.map((color) => (
              <button
                key={color}
                type="button"
                className={getClassName(color)}
                onClick={() => handleColor(color)}
              ></button>
            ))}
          </div>
          <Card className="mt-3 p-3">
            <div className="flex flex-col sm:flex-row flex-grow justify-around p-3">
              {/* Ciclo de la tarea */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold text-zinc-900	mr-2">
                    Establezca un ciclo para su tarea
                  </h2>
                  <Switch
                    checked={formData.ciclo}
                    onCheckedChange={handelSwitchChange}
                  />
                </div>
                <Separator></Separator>
                <div className="w-full flex justify-center">
                  <div className="bg-gray-100 flex flex-row w-fit  rounded-full m-0">
                    <input
                      required
                      type="hidden"
                      name="frecuencia"
                      value={formData.frecuencia}
                    />
                    <Button
                      type="button"
                      variant={
                        frecuencia === "Diariamente" ? "default" : "secondary"
                      }
                      className="rounded-full shadow-none"
                      onClick={() => handleFrecuencia("Diariamente")}
                    >
                      Diariamente
                    </Button>
                    <Button
                      type="button"
                      variant={
                        frecuencia === "Semalmente" ? "default" : "secondary"
                      }
                      className="rounded-full shadow-none"
                      onClick={() => handleFrecuencia("Semalmente")}
                    >
                      Semalmente
                    </Button>
                    <Button
                      type="button"
                      variant={
                        frecuencia === "Mensualmente" ? "default" : "secondary"
                      }
                      className="rounded-full shadow-none"
                      onClick={() => handleFrecuencia("Mensualmente")}
                    >
                      Mensualmente
                    </Button>
                  </div>
                </div>
                <Separator></Separator>
                <div>
                  <div className="flex h-8 items-center text-sm justify-between">
                    {/* <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full w-8 h-8"
                    >
                      <p>LU</p>
                    </Button>
                    <Separator className="" orientation="vertical" />
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>MA</p>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>MI</p>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>JU</p>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button
                      type="button"
                      variant="default"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>VI</p>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button
                      type="button"
                      variant="default"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>SA</p>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-full w-8 h-8 "
                    >
                      <p>DO</p>
                    </Button> */}
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <Button type="button" variant="secondary">
                    {" "}
                    Repetir{" "}
                  </Button>
                  <Button type="button" variant="secondary" size="icon">
                    <ChevronRight />
                  </Button>
                </div>
              </div>
              {/* Categoria para la tarea */}
              <div className="flex flex-col gap-3 mr-2">
                <input
                  required
                  type="hidden"
                  name="categoria"
                  value={formData.categoria}
                />
                <h2 className="text-sm font-semibold  text-zinc-900">
                  Establezca una etiqueta para su tarea
                </h2>
                <Separator></Separator>
                <div className=" gap-2 flex flex-col sm:flex-row sm:w-fit w-auto rounded-3xl sm:rounded-full m-0 text-neutral-800">
                  <Button
                    type="button"
                    onClick={() => handleCategoria("Rutina Diaria")}
                    variant={
                      categoriaActiva === "Rutina Diaria"
                        ? "default"
                        : "secondary"
                    }
                    className="rounded-full"
                  >
                    Rutina Diaria
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleCategoria("Rutina de Estudio")}
                    variant={
                      categoriaActiva === "Rutina de Estudio"
                        ? "default"
                        : "secondary"
                    }
                    className="rounded-full"
                  >
                    Rutina de Estudio
                  </Button>
                  {/* <Button
                    variant="secondary"
                    className="rounded-full text-current"
                  >
                    Añadir más
                    <Plus className="w-4 h-4" />
                  </Button> */}
                </div>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
