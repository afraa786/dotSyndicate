"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "USA",
    featured: true,
  },
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "India",
    featured: false,
  },
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "Kenya",
    featured: false,
  },
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "Tanzania",
    featured: false,
  },
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "USA, California",
    featured: false,
  },
  {
    text: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Mark Roberts",
    location: "USA, California",
    featured: false,
  },
]

function TestimonialCard({
  text,
  name,
  location,
  featured,
}: {
  text: string
  name: string
  location: string
  featured: boolean
}) {
  return (
    <div
      className={`
        w-[414px]
        h-[225px]
        rounded-[24px]
        p-6
        transition-all duration-300
        
        ${
          featured
            ? `
              bg-[#1f6fa8] 
              text-white 
              shadow-[0_25px_60px_rgba(31,111,168,0.35)]
              scale-[1.02]
            `
            : `
              bg-white 
              border border-gray-200
              shadow-[0_12px_35px_rgba(0,0,0,0.10)]
              hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]
            `
        }
      `}
    >
      {/* Stars */}
      <div className="mb-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`
              h-5 w-5
              ${
                featured
                  ? "fill-white text-white"
                  : "fill-[#1f6fa8] text-[#1f6fa8]"
              }
            `}
          />
        ))}
      </div>

      {/* Text */}
      <p
        className={`
          text-[14px] font-normal leading-[20px] text-[#57595F] font-['Helvetica Neue']

          ${featured ? "text-white/90" : "text-gray-600"}
        `}
      >
        {text}
      </p>

      {/* User */}
      <div className="mt-6">
        <p className={`font-semibold ${featured ? "text-white" : "text-[#1a1a2e]"}`}>
          {name}
        </p>

        <p className={`text-sm ${featured ? "text-white/70" : "text-gray-400"}`}>
          {location}
        </p>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Layout container */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT TEXT */}
          <div className="lg:w-[35%]">
            <h2 className="font-serif italic text-[48px] leading-[1.1] text-[#1a1a2e]">
              Trusted By Many,
              <br />
              loved by All
            </h2>

            <p className="mt-6 italic text-[16px] leading-relaxed text-gray-500 max-w-md">
              Our Clients success stories reflect our commitment to excellence.
              See how we’ve helped them find their dream homes, sustainable
              investments and perfect getaways.
            </p>
          </div>

          {/* RIGHT GRID */}
     {/* RIGHT GRID */}
<div className="lg:w-[65%] flex justify-center">

  <div className="grid grid-cols-1 sm:grid-cols-[414px_414px] gap-x-8 gap-y-8 justify-center">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </div>

</div>


        </div>

      </div>
    </section>
  )
}
