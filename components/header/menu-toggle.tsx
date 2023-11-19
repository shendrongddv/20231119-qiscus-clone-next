import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const MenuToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex h-full w-4/5 p-0 md:hidden">
        {/* # */}
        {/* # */}
        {/* # */}
        {/* # */}
      </SheetContent>
    </Sheet>
  );
};
