"use client"

import { useState, useRef, useEffect } from "react"
import DestinationCard from "@/components/destination-card"
import PromoBanner from "@/components/promo-banner"

export default function ExploreDestinations() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [destinations, setDestinations] = useState<any[]>([])
  const [promos, setPromos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/api/content")
        if (response.ok) {
          const data = await response.json()
          setDestinations(data.destinations)
          setPromos(data.promoBanners)
        }
      } catch (error) {
        console.error("Failed to fetch content:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchContent()
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollLeft
      const itemWidth = scrollContainer.offsetWidth
      const newIndex = Math.round(scrollPosition / itemWidth)
      setActiveIndex(newIndex)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }

  if (loading) {
    return (
      <section className="bg-background py-6 sm:py-16 px-2 sm:px-6 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <h1 className="font-serif italic text-lg sm:text-3xl md:text-4xl lg:text-5xl text-foreground px-1 sm:px-0">
            Explore Popular Destinations
          </h1>
          <p className="text-gray-500 mt-4">Loading destinations...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-6 sm:py-16 px-2 sm:px-6 lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        <h1 className="font-serif italic text-lg sm:text-3xl md:text-4xl lg:text-5xl text-foreground px-1 sm:px-0">
          Explore Popular Destinations
        </h1>

        <div
          className="
            mt-4 sm:mt-10
            grid grid-cols-3 gap-2
            sm:grid-cols-3 sm:gap-5
            lg:grid-cols-6
          "
        >
          {destinations.map((dest) => (
            <div key={dest.name} className="sm:h-auto">
              <DestinationCard
                name={dest.name}
                imagePath={dest.imagePath}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-16">
          <div className="hidden sm:grid grid-cols-1 gap-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {promos.map((promo) => (
              <PromoBanner
                key={promo.tag}
                tag={promo.tag}
                title={promo.title}
                subtitle={promo.subtitle}
                imagePath={promo.imagePath}
                lightVariant={promo.lightVariant}
              />
            ))}
          </div>

          <div className="sm:hidden">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {promos.map((promo) => (
                <div
                  key={promo.tag}
                  className="flex-shrink-0 w-full snap-center px-1"
                >
                  <PromoBanner
                    tag={promo.tag}
                    title={promo.title}
                    subtitle={promo.subtitle}
                    imagePath={promo.imagePath}
                    lightVariant={promo.lightVariant}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {promos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-gray-800"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}
