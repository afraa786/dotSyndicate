import Image from "next/image"
import { Info } from "lucide-react"

interface PromoBannerProps {
  tag: string
  title: string
  subtitle: string
  imagePath: string
  textColor?: "blue" | "white"  // Add this prop
}

export default function PromoBanner({
  tag,
  title,
  subtitle,
  imagePath,
  textColor = "white",  
}: PromoBannerProps) {
  const textColorClass = textColor === "blue" ? "text-[#2F80ED]" : "text-white"
  
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[16/9]">

      <Image
        src={imagePath}
        alt={tag}
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="absolute top-4 left-4 z-30">
        <Image
          src={`/images/tags/${tag.toLowerCase()}.png`}
          alt={tag}
          width={90}
          height={36}
          className="object-contain"
        />
      </div>

      <div className="absolute inset-y-0 left-4 flex flex-col justify-center z-30">
        <h3 className={`text-2xl font-bold ${textColorClass}`}>
          {title}
        </h3>

        <h4 className={`text-sm ${textColorClass}`}>
          {subtitle}
        </h4>
      </div>

      <div className={`absolute bottom-4 left-4 flex items-center gap-1 text-xs ${textColorClass} z-30`}>
        <Info className={`h-3.5 w-3.5 ${textColorClass}`} />
        <span>*T&C Applied*</span>
      </div>

    </div>
  )
}