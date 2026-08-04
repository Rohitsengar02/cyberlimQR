import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./toogle-theme";
import UserAvatar from "./avatar/avatar";
import LaunchUI from "./logos/launch-ui";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="text-primary">
            <LaunchUI className="h-6 w-6" />
          </div>
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-xl tracking-tight">
            Cyberlim
          </span>
        </Link>
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList className="flex items-center gap-1 sm:gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/qrCodeGenerator">QR Generator</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/qrCodeGenerator/favorites">Saved QRs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-2">
              <ModeToggle />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <UserAvatar />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
