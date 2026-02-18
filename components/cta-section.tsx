import Image from "next/image"

export default function CtaSection() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] h-[300px] md:h-[550px] overflow-hidden">

      {/* Cropping Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-[calc(100%+80px)] -left-[40px]">
          <Image
            src="/images/cta-beach.jpg"
            alt="Beautiful beach destination"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-start justify-center pt-10 md:pt-9">
        <h2 className="select-none whitespace-nowrap text-center font-serif font-bold uppercase tracking-widest text-white/80
                       text-4xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[140px]">
          TRAVEL SIMBA
        </h2>
      </div>
    </section>
  )
}
