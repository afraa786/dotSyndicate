"use client"

import Image from "next/image"

interface Destination {
  name: string
  imagePath: string
}

export default function DestinationCard({
  destination,
}: {
  destination: Destination
}) {
  return (
    <div className="w-full">
      
 
      <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
        <Image
          src={destination.imagePath}
          alt={destination.name}
          fill
          className="object-cover"
        />
      </div>

     
      <p className="mt-3 text-lg font-semibold text-gray-900 text-left">
        {destination.name}
      </p>

    </div>
  )
}
