import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SunMoon } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useMediaQuery } from '@react-hook/media-query';
import { Sheet, SheetTrigger, SheetContent, } from "@/components/ui/sheet";
import { Lista } from "../Lista";

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Cambia el tamaño máximo según lo consideres necesario
  return (
    <>
      <div className="flex sm:justify-end justify-between p-2 gap-2">
        {
          (isMobile) &&
          <Sheet>
            <SheetTrigger><Button size='icon' variant="ghost" ><Menu className="h-5 w-5"/></Button></SheetTrigger>
            <SheetContent className="w-[350px]">
              <>
              <Lista/>
              </>
            </SheetContent>
          </Sheet>

        }
        <div className="flex justify-end">
          <Button variant="ghost" size="icon">
            <SunMoon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <BellRing className="h-4 w-4" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

      </div>
    </>

  )
}

