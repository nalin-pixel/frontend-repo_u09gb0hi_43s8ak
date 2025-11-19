import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[580px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-amber-300/90 tracking-widest text-xs sm:text-sm uppercase mb-3">Red-Hot Concepts</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
            Cinematic Stories. Global Impact.
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
            The official home of Omotola Jalade: films, news, and collaborations from Africa to the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white font-medium shadow-lg shadow-red-900/30">Explore Projects</a>
            <a href="/contact" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition">Booking & Press</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
