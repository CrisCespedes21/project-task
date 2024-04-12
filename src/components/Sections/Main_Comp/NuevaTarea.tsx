import { ChevronRight } from "lucide-react";
import { Save } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { FormDataCreate, Tarea } from "@/lib/definiciones";
import { useNavigate } from "react-router-dom";

interface NuevaTareaProps {
  agregarTarea: (nuevaTarea: Tarea) => void;
}

export const NuevaTarea: React.FC<NuevaTareaProps> = ({ agregarTarea }) => {
  // Establece la navegacion
  const navegación = useNavigate();

  // Definir colores
  const colores = [
    "slate",
    "stone",
    "blue",
    "cyan",
    "violet",
    "purple",
    "fuchsia",
    "rose",
    "red",
    "orange",
    "amber",
    "lime",
    "green",
    "emerald",
  ];

  // Estado para el formulario
  const [formData, setFormData] = useState<FormDataCreate>({
    nombre: "",
    descripcion: "",
    color: "",
    ciclo: false,
    frecuencia: "",
    dias: [],
    categoria: "",
  });
  // Estados para los colores, categorias y frecuencia
  const [frecuencia, setFrecuencia] = useState("");
  const [colorActivo, setColorActivo] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("");

  // Manejo del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Crear la nueva tarea
    const nuevaTarea: Tarea = {
      id: Date.now().toString(),
      ...formData,
      estado: "pendiente",
    };
    agregarTarea(nuevaTarea);
    navegación("/");
  };
  // Manejo de los cambios en el formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Manejo de los cambios en el switch
  const handelSwitchChange = (ciclo: boolean) => {
    setFormData({
      ...formData,
      ciclo: ciclo,
    });
  };
  // Manejo de la frecuencia
  const handleFrecuencia = (frecuencia: string) => {
    setFrecuencia(frecuencia);
  };
  // Manejo del color
  const handleColor = (color: string) => {
    setColorActivo(color);
    setFormData({
      ...formData,
      color: color,
    });
  };
  // Manejo de la categoria
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
          {/* Header */}
          <div className="flex items-center mb-3 justify-between">
            <h1 className="text-xl sm:text-2xl font-bold mr-2"> Nueva Tarea</h1>
            <div className="flex">
              <Button className="flex gap-3" variant="default" type="submit">
                <Save className="w-[18px]  h-[18px]" />
                Guardar Tarea
              </Button>
            </div>
          </div>
          {/* Formulario */}
          <div className="p-0 ">
            {/* Impust */}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  required
                  name="nombre"
                  onChange={handleChange}
                  id="nombre"
                  placeholder="Nombre de tu nueva tarea"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  required
                  name="descripcion"
                  onChange={handleChange}
                  id="descripcion"
                  placeholder="Describe tu nueva tarea"
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
            <button
              type="button"
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "slate"
                  ? "outline-none ring-2F ring-slate-500  bg-slate-500"
                  : " bg-slate-300"
              }`}
              onClick={() => handleColor("slate")}
            ></button>
            <button
              type="button"
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "stone"
                  ? "outline-none ring-2 ring-stone-500  bg-stone-500"
                  : " bg-stone-300"
              }`}
              onClick={() => handleColor("stone")}
            ></button>
            <button
              type="button"
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "blue"
                  ? "outline-none ring-2 ring-blue-500  bg-blue-500"
                  : " bg-blue-300"
              }`}
              onClick={() => handleColor("blue")}
            ></button>
            <button
              type="button"
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "cyan"
                  ? "outline-none ring-2 ring-cyan-500  bg-cyan-500"
                  : " bg-cyan-300"
              }`}
              onClick={() => handleColor("cyan")}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("violet")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "violet"
                  ? "bg-violet-500 outline-none ring-2 ring-violet-500"
                  : "bg-violet-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("purple")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "purple"
                  ? "bg-purple-500 outline-none ring-2 ring-purple-500"
                  : "bg-purple-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("fuchsia")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "fuchsia"
                  ? "bg-fuchsia-500 outline-none ring-2 ring-fuchsia-500"
                  : "bg-fuchsia-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("rose")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "rose"
                  ? "bg-rose-500 outline-none ring-2 ring-rose-500"
                  : "bg-rose-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("red")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "red"
                  ? "bg-red-500 outline-none ring-2 ring-red-500"
                  : "bg-red-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("orange")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "orange"
                  ? "bg-orange-500 outline-none ring-2 ring-orange-500"
                  : "bg-orange-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("amber")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "amber"
                  ? "bg-amber-500 outline-none ring-2 ring-amber-500"
                  : "bg-amber-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("lime")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "lime"
                  ? "bg-lime-500 outline-none ring-2 ring-lime-500"
                  : "bg-lime-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("green")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "green"
                  ? "bg-green-500 outline-none ring-2 ring-green-500"
                  : "bg-green-300"
              } `}
            ></button>
            <button
              type="button"
              onClick={() => handleColor("emerald")}
              className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full ${
                colorActivo === "emerald"
                  ? "bg-emerald-500 outline-none ring-2 ring-emerald-500"
                  : "bg-emerald-300"
              } `}
            ></button>
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
                    <Button
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
                    </Button>
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
