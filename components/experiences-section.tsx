"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    number: "01",
    title: "Rooftop Breakfasts",
    description: "Start your day above the city, where gourmet meets the sky.",
    imagePath: "/images/experience-rooftop.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Infinity Pool Moments",
    description:
      "Soak in breathtaking panoramic views while floating in luxury.",
    imagePath: "/images/experience-infinity-pool.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Private Chef Dining",
    description:
      "Savor exquisite meals crafted by world-class chefs in your private villa.",
    imagePath: "/images/experience-private-chef.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Desert Stargazing",
    description:
      "Witness the cosmos unfold above the endless desert horizon.",
    imagePath: "/images/experience-stargazing.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Spa Escapes",
    description:
      "Rejuvenate your body and soul with exclusive wellness treatments.",
    imagePath: "/images/experience-spa.jpg",
  },
  {
    id: 6,
    number: "06",
    title: "Local Culture Tours",
    description:
      "Immerse yourself in authentic local traditions and heritage.",
    imagePath: "/images/experience-culture.jpg",
  },
]

export default function ExperiencesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">


        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-start">
          <h2 className="font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl">
            Experiences That Speak
            <br />
            for Themselves
          </h2>

          <p className="max-w-xl font-serif text-sm italic leading-relaxed text-foreground/80 md:text-base lg:text-lg">
            Moments to remember, in a new concept of sustainable Hospitality
            focused on people and authentic travel experiences.
          </p>
        </div>

     
        <div className="hidden h-[580px] gap-3 lg:flex">

          {experiences.map((exp, index) => {

            const isActive = activeIndex === index

            return (

              <motion.div
                key={exp.id}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                animate={{ flex: isActive ? 5 : 2 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(0)}
              >

          
                <Image
                  src={exp.imagePath}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />

                
                <motion.div
                  className="absolute inset-0 bg-black"
                  animate={{ opacity: isActive ? 0.2 : 0.6 }}
                  transition={{ duration: 0.5 }}
                />

             
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-serif text-7xl italic text-white/40">
                    {exp.number}
                  </span>

                  <h3 className="mt-2 font-serif text-2xl italic text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm text-white/80">
                    {exp.description}
                  </p>
                </motion.div>

         
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isActive ? 0 : 1 }}
                >
                  <div
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                    className="flex gap-3"
                  >
                    <span className="font-serif text-5xl text-white/30">
                      {exp.number}
                    </span>

                    <span className="font-serif text-xl text-white">
                      {exp.title}
                    </span>
                  </div>
                </motion.div>

              </motion.div>

            )

          })}

        </div>


        <div className="flex flex-col gap-3 lg:hidden">

          {experiences.map((exp, index) => {

            const isActive = activeIndex === index

            return (

              <motion.div
                key={exp.id}
                className="relative overflow-hidden rounded-2xl"
                animate={{ height: isActive ? 350 : 80 }}
                onClick={() => setActiveIndex(index)}
              >

                <Image
                  src={exp.imagePath}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />

                <motion.div
                  className="absolute inset-0 bg-black"
                  animate={{ opacity: isActive ? 0.2 : 0.6 }}
                />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  animate={{ opacity: isActive ? 1 : 0 }}
                >
                  <span className="text-5xl text-white/40">
                    {exp.number}
                  </span>

                  <h3 className="text-xl text-white">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-white/80">
                    {exp.description}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center px-6"
                  animate={{ opacity: isActive ? 0 : 1 }}
                >
                  <span className="text-3xl text-white/40">
                    {exp.number}
                  </span>

                  <span className="ml-4 text-lg text-white">
                    {exp.title}
                  </span>
                </motion.div>

              </motion.div>

            )

          })}

        </div>

      </div>
    </section>
  )
}
