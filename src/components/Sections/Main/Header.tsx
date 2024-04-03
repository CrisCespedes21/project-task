import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SunMoon } from 'lucide-react';
import { BellRing } from 'lucide-react';

export const Header = () => {
  return (
    <>
      <div className="flex justify-end p-3 gap-2">
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
    </>

  )
}

