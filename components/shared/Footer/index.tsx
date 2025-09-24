"use client";
import React, { useState } from "react";
import LogoFooter from "@/public/logo/LogoFooter.svg";
import footerBg from "@/public/images/footer.jpg";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const NavLinks = [
  {
    category: "Let Us Help",
    links: [
      {
        label: "My Account",
        href: "/",
      },
      {
        label: "FAQs",
        href: "/",
      },
      {
        label: "Categories",
        href: "/",
      },
      {
        label: "All Products",
        href: "/",
      },
    ],
  },
  {
    category: "Policies",
    links: [
      {
        label: "Refund Policy",
        href: "/",
      },
      {
        label: "Cancellation Policy ",
        href: "/",
      },
      {
        label: "Terms and Conditions",
        href: "/",
      },
      {
        label: "Privacy Policy",
        href: "/",
      },
    ],
  },
];
function Footer({}: Props) {
  return (
    <footer className="relative ">
      <Image
        src={footerBg}
        alt="Footer Background"
        fill
        className="w-full h-full object-cover z-[-1]"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-[#020202B2] z-[-1]"></div>
      <section className="container z-1 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <Image alt="Footer Logo" src={LogoFooter} width={65} height={51} />
          <p className="text-14 text-white/70 font-semibold max-w-[325px]">
            Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
            in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
            quconsequatur ab cum maxime.Soluta dolor quae{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {NavLinks?.map((item) => {
            return (
              <div key={item.category}>
                <h4 className="text-24 font-bold text-white mb-4">
                  {item.category}
                </h4>
                <ul className="space-y-2">
                  {item.links.map((link) => {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-16 font-semibold text-white/70 hover:text-white transition-all duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="space-y-2">
          <h4 className="text-24 font-bold text-white mb-4">Send Email</h4>

          <form className="mb-4 ">
            <div className="flex relative bg-white max-w-[360px]  overflow-hidden rounded-[12px] h-14">
              <input
                type="email"
                placeholder="Email address"
                className="h-full w-full px-3"
              />
              <Button
                type="submit"
                className="absolute right-2 top-2 !h-10 w-[100px] "
              >
                Send
              </Button>
            </div>
          </form>
          <div className="">
            <h4 className="text-16 font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                {
                  label: "Facebook",
                  href: "/",
                  icon: Facebook,
                },
                {
                  label: "Twitter",
                  href: "/",
                  icon: Twitter,
                },
                {
                  label: "Instagram",
                  href: "/",
                  icon: Instagram,
                },
                {
                  label: "Linkedin",
                  href: "/",
                  icon: Linkedin,
                },

                {
                  label: "Send",
                  href: "/",
                  icon: Send,
                },
              ].map((item) => {
                return (
                  <a key={item.label} href={item.href}>
                    <item.icon
                      width={24}
                      height={24}
                      className="fill-white  text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
