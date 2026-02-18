import Image from "next/image"
import { Search, Calendar, Users, MapPin, FlagIcon } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8">

      <section className="relative w-full rounded-3xl" style={{ minHeight: '600px' }}>

        {/* HERO IMAGE */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-white/10 z-[1] pointer-events-none" />
          <Image
            src="/images/hero.png"
            alt="Luxury hotel with pool and ocean view"
            fill
            priority
            className="object-cover brightness-[0.95]"
          />
          <div className="absolute top-0 left-0 h-full w-[35%] z-[2] bg-gradient-to-r from-[#3b82f6]/55 to-transparent pointer-events-none" />
        </div>
<div className="relative z-[3] flex items-start">
  <div className="max-w-6xl px-6 sm:px-10 lg:px-16 w-full pt-[140px] sm:pt-[160px] lg:pt-[190px]">

    <h1 className="font-serif italic font-medium leading-[1.1] text-white max-w-xl">
      
      {/* Mobile Version */}
      <span className="block sm:hidden text-2xl">
     Chase elegance, Reserve <br />
your dream stay
      </span>

      {/* Tablet & Desktop Version */}
      <span className="hidden sm:block text-[clamp(1.8rem,4vw,3rem)]">
        Chase elegance, Reserve <br />
        your dream stay
      </span>

    </h1>

    <p className="mt-4 text-white/80 text-sm sm:text-base max-w-md">
      Discover luxury hotels worldwide.
    </p>

  </div>
</div>


     
       <div className="hidden sm:flex absolute bottom-[10px] right-[10px] z-[10] w-[95%] sm:w-[80%] md:w-[70%] lg:w-[58%] max-w-[850px]">
          <div className="w-full bg-white rounded-2xl shadow-xl border-2 border-gray-300 flex items-center divide-x divide-gray-200 h-[66px] overflow-hidden">

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Where To?</div>
                <div className="text-sm text-gray-400 truncate">Search destinations</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Check in - Check out</div>
                <div className="text-sm text-gray-400 truncate">Add dates</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Users className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Travelers</div>
                <div className="text-sm text-gray-400 truncate">Add guests</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <FlagIcon className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Client Nationality</div>
                <div className="text-sm text-gray-400 truncate">A0</div>
              </div>
            </div>

            <div className="px-2 shrink-0">
              <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE CARD — only on xs (< sm) */}
        <div className="flex sm:hidden absolute -bottom-5 left-4 right-4 z-[10]">
          <MobileSearchCard />
        </div>

      </section>

      <div className="hidden lg:block h-10" />

    </div>
  )
}

function MobileSearchCard() {
  return (
    <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/60 overflow-hidden">

          <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Where To?</div>
                <div className="text-sm text-gray-400 truncate">Search destinations</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Check in - Check out</div>
                <div className="text-sm text-gray-400 truncate">Add dates</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <Users className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Travelers</div>
                <div className="text-sm text-gray-400 truncate">Add guests</div>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-6 py-4 min-w-0">
              <FlagIcon className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">Client Nationality</div>
                <div className="text-sm text-gray-400 truncate">A0</div>
              </div>
            </div>
      <div className="px-5 py-4 flex items-center">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-200">
          <Search className="w-5 h-5" />
        </button>
      </div>

    </div>
  )
}