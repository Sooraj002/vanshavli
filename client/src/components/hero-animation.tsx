"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroAnimation() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // DNA helix animation
  const strand1 = Array.from({ length: 15 }, (_, i) => i)
  const strand2 = Array.from({ length: 15 }, (_, i) => i)

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full flex items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <div className="relative h-full w-full max-w-[800px] mx-auto">
        {/* DNA Helix Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-[4px] bg-gradient-to-b from-primary/0 via-primary to-primary/0">
            {strand1.map((_, index) => (
              <motion.div
                key={`strand1-${index}`}
                className="absolute w-24 h-[3px] bg-primary/80 left-0 origin-left"
                style={{ top: `${(index + 0.5) * 6.67}%` }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  rotateZ: [-15, -15, -15, -15],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute right-0 w-4 h-4 rounded-full bg-primary"
                  animate={{
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}

            {strand2.map((_, index) => (
              <motion.div
                key={`strand2-${index}`}
                className="absolute w-24 h-[3px] bg-primary/80 right-0 origin-right"
                style={{ top: `${(index + 1) * 6.67}%` }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                  rotateZ: [15, 15, 15, 15],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2 + 2,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute left-0 w-4 h-4 rounded-full bg-primary"
                  animate={{
                    scale: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2 + 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating data points */}
        {[
          { width: 16.337, height: 16.337, left: 73.022, top: 3.313 },
          { width: 18.952, height: 18.952, left: 91.823, top: 43.403 },
          { width: 19.062, height: 19.062, left: 64.521, top: 50.555 },
          { width: 22.383, height: 22.383, left: 39.639, top: 31.915 },
          { width: 16.376, height: 16.376, left: 69.633, top: 46.998 },
          { width: 18.780, height: 18.780, left: 41.719, top: 62.097 },
          { width: 23.074, height: 23.074, left: 7.231, top: 13.077 },
          { width: 23.647, height: 23.647, left: 11.556, top: 44.540 },
          { width: 23.034, height: 23.034, left: 31.614, top: 5.947 },
          { width: 17.152, height: 17.152, left: 38.818, top: 45.308 },
          { width: 20.918, height: 20.918, left: 28.016, top: 38.148 },
          { width: 24.821, height: 24.821, left: 39.365, top: 3.144 },
          { width: 24.033, height: 24.033, left: 52.323, top: 25.508 },
          { width: 16.204, height: 16.204, left: 15.348, top: 47.288 },
          { width: 17.102, height: 17.102, left: 5.932, top: 2.042 }
        ].map((point, index) => (
          <motion.div
            key={`data-point-${index}`}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: point.width,
              height: point.height,
              left: `${point.left}%`,
              top: `${point.top}%`,
              opacity: 0,
              transform: "scale(0)"
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, (index % 2 === 0 ? 35 : -35)],
              y: [0, (index % 3 === 0 ? 35 : -35)]
            }}
            transition={{
              duration: 3 + (index % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
