"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Heart, Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Exclusive Club Deals", href: "#" },
  { label: "Become A Partner", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Free VIP ZNZ Ferry", href: "#" },
  { label: "Bookings4Education", href: "#" },
]

export default function AppHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full lg:px-16 px-6  lg:py-10 py-6 ">

      <div className="flex w-full items-center justify-between">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Travel Simba"
            width={113}
            height={48}
            priority
            className="object-contain"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-6 rounded-lg border border-white/10 bg-white/10 px-8 py-2.5 backdrop-blur-md">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-white/90 whitespace-nowrap transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

        </div>

        <div className="hidden xl:flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-lg px-3 py-2 backdrop-blur-md transition hover:bg-white/100">

            <Image
              src="/flags/flag.png"
              alt="US Flag"
              width={20}
              height={14}
              className="object-cover "
            />

            <span className="text-sm font-medium text-white">
              USD
            </span>

            <ChevronDown className="h-3.5 w-3.5 text-white/80" />

          </button>

          <button
            aria-label="Wishlist"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20"
          >
            <Heart className="h-5 w-5 text-white" />
          </button>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-full bg-[#0ea5e9] pl-5 pr-1.5 py-1.5 font-large text-white transition hover:bg-blue"
          >

            <span className="text-xs font-normal tracking-wide">SIGN IN NOW</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">

              <ArrowRight className="h-4 w-4 text-[#0ea5e9]" />

            </span>

          </Link>

        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {mobileOpen && (

        <div className="absolute left-0 right-0 top-full mt-4 rounded-none border border-white/10 bg-[#1a1a2e]/95 p-6 backdrop-blur-md xl:hidden">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (

              <Link
                key={link.label}
                href={link.href}
                className="text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>

            ))}

            <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20">

                <Image
                  src="/flags/flag.png"
                  alt="US Flag"
                  width={48}
                  height={48}
                  className="object-cover"
                />

                USD
              </button>

              <Heart className="h-48 w-48 text-white" />

            </div>

          </div>

        </div>

      )}

    </nav>
  )
}