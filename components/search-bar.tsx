"use client"

import { MapPin, Calendar, Users, Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="w-full max-w-[920px]">

      
      <div className="rounded-2xl bg-white shadow-xl">

        <div className="flex flex-col items-stretch md:flex-row md:items-center">

       
          <div className="flex flex-1 items-center gap-3 px-6 py-4">
            <MapPin className="h-5 w-5 flex-shrink-0 text-[#1a1a2e]" />

            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">
                Where To?
              </p>

              <p className="text-sm text-[#6b7280]">
                Destinations & Hotels
              </p>
            </div>
          </div>


       
          <div className="hidden h-10 w-px bg-[#e5e7eb] md:block" />
          <div className="mx-6 h-px bg-[#e5e7eb] md:hidden" />


          <div className="flex flex-1 items-center gap-3 px-6 py-4">
            <Calendar className="h-5 w-5 flex-shrink-0 text-[#1a1a2e]" />

            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">
                Check in - Check out
              </p>

              <p className="text-sm text-[#6b7280]">
                Add dates
              </p>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-[#e5e7eb] md:block" />
          <div className="mx-6 h-px bg-[#e5e7eb] md:hidden" />


        
          <div className="flex flex-1 items-center gap-3 px-6 py-4">
            <Users className="h-5 w-5 flex-shrink-0 text-[#1a1a2e]" />

            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">
                Travelers
              </p>

              <p className="text-sm text-[#6b7280]">
                Add guests
              </p>
            </div>
          </div>


         
          <div className="flex items-center justify-center px-4 pb-4 md:pb-0">

            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0ea5e9] text-white transition hover:bg-[#0284c7]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}
