"use client";

import * as React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Mainlogo from "../../../Public/Homepage/mainlogo.png";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function MobileDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="md:hidden mr-4 cursor-pointer">
          <HamburgerMenuIcon width="32" height="32" />
        </div>
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay className="fixed  inset-0  bg-black/40" />

        <DrawerContent className="bg-white rounded-none flex flex-col  h-full w-full mt-24  fixed bottom-0 right-0 left-0">
          <div className="flex flex-col h-full">
            <DrawerHeader className="p-4 border-b border-gray-200 relative">
              <DrawerTitle className="text-lg font-semibold">
                <Link href="/">
                  <Image src={Mainlogo} alt="main_logo" height={40} />
                </Link>
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="outline" className="absolute top-4 right-4">
                  <Cross1Icon />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="max-w-md mx-auto">
                <ul className="space-y-6 ml-2">
                  <li>
                    <Link
                      href="/what-we-do"
                      className="text-xl hover:underline"
                    >
                      What We Do
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-we-think"
                      className="text-xl hover:underline"
                    >
                      What We Think
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/who-we-are"
                      className="text-xl hover:underline"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-xl hover:underline">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
