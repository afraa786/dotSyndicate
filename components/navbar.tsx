"use client"

import { useState, useEffect } from "react"
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<nav
  className={`
    fixed top-4 left-1/2 -translate-x-1/2
    w-[101%] max-w-[1450px]
    rounded-2xl
    py-3 lg:py-6
    px-6 lg:px-12
    z-50
    transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${isScrolled
      ? "bg-[#0b1d3a] shadow-2xl"
      : "bg-transparent shadow-none"
    }
  `}
>


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

        <div className={`hidden lg:flex items-center gap-6 rounded-lg px-8 py-2.5 ${isScrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-md border border-white/10"}`}>
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

        <div className="hidden lg:flex items-center gap-3">

          <button className={`flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-white/20 ${isScrolled ? "" : "backdrop-blur-md"}`}>
            <Image
              src="/flags/flag.png"
              alt="US Flag"
              width={20}
              height={14}
              className="object-cover"
            />
            <span className="text-sm font-medium text-white">USD</span>
            <ChevronDown className="h-3.5 w-3.5 text-white/80" />
          </button>

          <button
            aria-label="Wishlist"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 ${isScrolled ? "" : "backdrop-blur-md"}`}
          >
            <Heart className="h-5 w-5 text-white" />
          </button>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-full bg-[#0ea5e9] pl-5 pr-1.5 py-1.5 text-white transition hover:bg-blue-600"
          >
            <span className="text-xs font-normal tracking-wide">SIGN IN NOW</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
              <ArrowRight className="h-4 w-4 text-[#0ea5e9]" />
            </span>
          </Link>

        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {mobileOpen && (
        <div className="mt-6 rounded-xl bg-[#112240] p-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
              <button className="flex items-center gap-2 text-white">
                <Image src="/flags/flag.png" alt="US Flag" width={20} height={14} />
                USD
              </button>
              <Heart className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}