import Image from "next/image"

interface Props {
  name: string
  imagePath: string
}

export default function DestinationCard({ name, imagePath }: Props) {
  return (
    <div className="w-full sm:w-[210px]">

      <div
        className="
          relative
          w-full
          h-[120px]
          rounded-[12px]
          overflow-hidden
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
      </div>

      <p className="mt-2 text-black font-bold text-[11px] sm:text-sm text-left">
        {name}
      </p>

    </div>
  )
}
