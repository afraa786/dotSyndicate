"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const CARDS_PER_PAGE = 3

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const mobileSliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/content")
        if (response.ok) {
          const data = await response.json()
          setBlogPosts(data.blogPosts)
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const totalPages = blogPosts.length

  useEffect(() => {
    const slider = mobileSliderRef.current
    if (!slider) return

    const handleScroll = () => {
      const newPage = Math.floor(
        (slider.scrollLeft + slider.clientWidth / 2) /
          slider.clientWidth
      )
      setCurrentPage(newPage)
    }

    slider.addEventListener("scroll", handleScroll)
    return () => slider.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPage = useCallback((page: number) => {
    const slider = mobileSliderRef.current
    if (!slider) return

    slider.scrollTo({
      left: slider.clientWidth * page,
      behavior: "smooth",
    })

    setCurrentPage(page)
  }, [])

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1)
    }
  }

  const goPrev = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1)
    }
  }

  const totalDesktopPages = Math.ceil(blogPosts.length / CARDS_PER_PAGE)
  const startIndex = currentPage * CARDS_PER_PAGE + 1
  const endIndex = Math.min(
    (currentPage + 1) * CARDS_PER_PAGE,
    blogPosts.length
  )

  if (loading) {
    return (
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <h2 className="mb-12 font-serif text-3xl italic text-[#1a1a2e] md:text-4xl lg:text-5xl">
          Latest Insights & Updates
        </h2>
        <p className="text-gray-500">Loading blog posts...</p>
      </section>
    )
  }

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <h2 className="mb-12 font-serif text-3xl italic text-[#1a1a2e] md:text-4xl lg:text-5xl">
        Latest Insights & Updates
      </h2>

      <div className="block md:hidden">
        <div
          ref={mobileSliderRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-start px-1"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-[#1a1a2e]">
            {String(currentPage + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </span>

          <div className="relative mx-4 h-[2px] flex-1 bg-[#e5e7eb]">
            <div
              className="absolute left-0 top-0 h-full bg-[#1a1a2e] transition-all duration-700 ease-in-out"
              style={{
                width: `${((currentPage + 1) / totalPages) * 100}%`,
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="text-[#1a1a2e] disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              className="text-[#1a1a2e] disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, CARDS_PER_PAGE).map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}


function BlogCard({
  post,
}: {
  post: (typeof blogPosts)[number]
}) {
  return (
    <article className="group cursor-pointer">
      <div className="relative h-[260px] w-full overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />
      </div>

      <div className="pt-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat, i) => (
              <span
                key={i}
                className="rounded-full border border-[#c9d1db] px-3 py-1 text-xs font-medium text-[#1a1a2e]"
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="text-xs text-[#6b7280]">{post.date}</span>
        </div>

        <h3 className="mb-2 text-base font-semibold text-[#1a1a2e] transition-colors group-hover:text-[#1E88C7]">
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed text-[#6b7280]">
          {post.description}
        </p>
      </div>
    </article>
  )
}
