import React from "react"
import { Button } from "@/components/ui/button"
import styles from "../../style"
import Home_1 from "@assets/Home_1.png"
import Home_2 from "@assets/Home_2.png"
import Home_3 from "@assets/Home_3.png"
import Home_4 from "@assets/Home_4.png"
import Home_5 from "@assets/Home_5.png"
import Home_6 from "@assets/Home_6.png"

const Hero = () => {
  const images = [Home_1, Home_2, Home_3, Home_4, Home_5, Home_6]

  return (
    <section className={`grid md:grid-cols-2 gap-10 items-center ${styles.paddingY}`}>

      <div className="text-white w-full max-w-lg space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Unlock Your Creative Potential with PhotoTrade
        </h1>
        <p className="text-base">
          PhotoTrade is the premier marketplace for photographers and digital
          artists to showcase and sell their work. Join us to secure your
          images and connect with buyers who appreciate your creativity.
        </p>
        <Button variant="secondary" className="text-base cursor-pointer">
          Explore
        </Button>
      </div>

      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-10 shadow-[0_20px_50px_rgba(162,_89,_255,_0.7)]">
        {images.map((src, index) => (
          <div className="carousel-item max-h-150" key={index}>
            <img
              src={src}
              className="rounded-box h-full w-full object-cover"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
