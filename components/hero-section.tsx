import Image from "next/image"
import { Search, Calendar, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8">

      {/* HERO IMAGE */}
      <section className="relative h-[600px] w-full overflow-hidden rounded-3xl">

        <div className="absolute inset-0 bg-white/10 z-[1] pointer-events-none" />

        <Image
          src="/images/hero.png"
          alt="Luxury hotel with pool and ocean view"
          fill
          priority
          className="object-cover brightness-[0.95]"
        />

        <div className="absolute top-0 left-0 h-full w-[35%] z-[2] bg-gradient-to-r from-[#3b82f6]/55 to-transparent pointer-events-none" />

        <div className="relative z-[3] h-full flex items-start">
          <div className="max-w-6xl px-12 lg:px-16 w-full pt-[190px]">

            <h1 className="font-serif italic font-medium leading-[1.1] text-white text-5xl max-w-xl">
              Chase elegance, Reserve <br />
              your dream stay now
            </h1>

            <p className="mt-4 text-white/80 text-base max-w-md">
              Discover the finest hotels from all over the world.
            </p>

          </div>
        </div>

      </section>


     <div className="relative z-10 -mt-20 ml-[600px]">


     <div className="bg-white rounded-2xl shadow-xl flex items-center divide-x divide-gray-200 w-[850px] h-[66px]">


          <div className="flex-1 flex items-center gap-3 px-6 py-4">
            <Search className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-gray-900">
                Where To?
              </div>
              <div className="text-sm text-gray-400">
                Search destinations
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-6 py-4">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-gray-900">
                Check in - Check out
              </div>
              <div className="text-sm text-gray-400">
                Add dates
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-6 py-4">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-gray-900">
                Travelers
              </div>
              <div className="text-sm text-gray-400">
                Add guests
              </div>
            </div>
          </div>

          <div className="px-2">
            <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}