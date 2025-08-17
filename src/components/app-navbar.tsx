"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function AppNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="p-3 z-50">
      <div className="flex items-center justify-between px-4 py-3 h-14">
        {/* Logo */}
        <Link href="">
          <Image
            src="/logo.png"
            alt="logo"
            width={1968}
            height={342}
            className="h-8 w-auto"
          />
        </Link>
        {/* Hamburger Button*/}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="">
            <Button
              variant="ghost"
              className="text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F4D03F] hover:to-[#E91E63] font-bold hover:text-white transition-all duration-300"
            >
              Home
            </Button>
          </Link>
          <Link href="#about">
            <Button variant="ghost" className="text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F4D03F] hover:to-[#E91E63] font-bold hover:text-white transition-all duration-300">
              About
            </Button>
          </Link>
          <Link href="#project">
            <Button variant="ghost" className="text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#F4D03F] hover:to-[#E91E63] font-bold hover:text-white transition-all duration-300">
              Project
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="ghost"
              className="text-lg rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#E91E63] font-bold text-white hover:from-white hover:to-white hover:text-black hover:ring-2 hover:ring-inset hover:ring-[#E91E63] transition-all duration-300"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
      {/* Sidebar Mobile */}
      <div
        className={`fixed top-14 right-0 h-[calc(100%-3.5rem)] w-64 bg-white border-l shadow-lg transform transition-transform duration-300 z-40
        ${open ? "translate-x-5" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 gap-4">
          <Link href="">
            <Button variant="ghost" className="" onClick={() => setOpen(false)}>
              Home
            </Button>
          </Link>
          <Link href="#about">
            <Button variant="ghost" className="" onClick={() => setOpen(false)}>
              About
            </Button>
          </Link>
          <Link href="#project">
            <Button variant="ghost" className="" onClick={() => setOpen(false)}>
              Project
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost" className="" onClick={() => setOpen(false)}>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
