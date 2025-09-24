"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NavLinks } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoNavbar from "@/public/logo/LogoNavbar.svg";
function MobileSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={"left"} className="bg-white p-4 w-[90%]">
        <div className="flex items-center justify-between  border-b pb-3">
          <Link href="/" className="">
            <Image
              src={LogoNavbar}
              alt="Logo Navbar"
              width={120}
              height={100}
            />
          </Link>
          <SheetClose>
            <Button size={"icon"} variant={"ghost"}>
              <X />
            </Button>
          </SheetClose>
        </div>
        <SheetDescription className="space-y-2 p-2">
          <nav className="flex flex-col items-start gap-6 ">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-black-200 text-[14px] gap-1 font-normal hover:text-black-500 transition-all duration-300"
                )}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={20}
                  height={20}
                  className="w-5 h-5 "
                />
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSheet;
