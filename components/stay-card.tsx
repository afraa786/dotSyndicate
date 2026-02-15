"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface StayCardProps {
  label: string
  imagePath: string
  className?: string
}

export default function StayCard({ label, imagePath, className = "" }: StayCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-[16px] cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
    
      <Image
        src={imagePath}
        alt={label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
 
      <div className="absolute top-0 left-0 p-6">
        <h3 className="font-canva text-2xl text-white">
          {label}
        </h3>
      </div>
      
 
    </motion.div>
  )
}