"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="border-primary/40 hover:bg-primary/10 text-primary font-medium transition-all cursor-pointer"
        >
          Help & Tips
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md p-4">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello from Cyberlim!
            </DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Here you can download or save the custom QR code you generated.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-2 space-y-4">
            <div className="p-3 rounded-lg bg-card/60 border border-border/40">
              <p className="text-sm font-medium leading-relaxed">
                • Downloads are generated in high-resolution PNG format and are free to use anywhere.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-card/60 border border-border/40">
              <p className="text-sm font-medium leading-relaxed">
                • If you save your QR code, you can view and manage it under the Saved QRs tab anytime while signed into your account.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full cursor-pointer">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
