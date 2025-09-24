"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MobileSheet from "./mobile-sheet";
import { NavLinks } from "@/constants/navigation";
import Link from "next/link";
import LogoNavbar from "@/public/logo/LogoNavbar.svg";

import cartIcon from "@/public/icons/cart.svg";
import notificationIcon from "@/public/icons/notification.svg";
import loveIcon from "@/public/icons/love.svg";
import userIcon from "@/public/icons/user.svg";

export default function Navbar() {
  return (
    <section className="container ">
      {" "}
      <div className="h-[91px] flex items-center justify-between ">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center max-w-[65px]  max-h-[51px]"
          >
            <Image
              src={LogoNavbar}
              alt="Logo Navbar"
              width={150}
              height={100}
              className="w-full h-full "
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <Image
              src={cartIcon}
              alt="Cart Icon"
              width={24}
              height={24}
              className="w-6 h-6 "
            />
            <Image
              src={notificationIcon}
              alt="Notification Icon"
              width={24}
              height={24}
              className="w-6 h-6 "
            />
            <Image
              src={loveIcon}
              alt="Love Icon"
              width={24}
              height={24}
              className="w-6 h-6 "
            />

            <div className="flex items-center text-[14px] font-semibold gap-px">
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center text-[14px] font-semibold gap-px">
              <Image
                src={userIcon}
                alt="User Icon"
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <MobileSheet>
            <button className="lg:hidden" aria-label="Open main menu">
              <Menu />
            </button>
          </MobileSheet>
        </div>
      </div>
    </section>
  );
}
