import Image from "next/image"

interface Props {
  name: string
  imagePath: string
}

export default function DestinationCard({ name, imagePath }: Props) {
  return (
    <div
      className="
        relative
        w-full
        h-[120px]
        rounded-[12px]
        overflow-hidden

        sm:w-[210px]
        sm:h-[180px]
      "
    >
      <Image
        src={imagePath}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 33vw, 210px"
        priority
      />

      <div className="absolute bottom-1 left-2 text-white font-semibold text-[10px] sm:text-sm">
        {name}
      </div>
    </div>
  )
}
