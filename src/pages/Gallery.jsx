import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Gallery() {
  const photos = Array.from({ length: 12 }).map((_, i) => `https://images.unsplash.com/photo-15${70 + i}05099483-002e4a4391a1?q=80&w=1200&auto=format&fit=crop`)
  const videos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  ]

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section title="Gallery" subtitle="Photos & behind-the-scenes moments.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Videos" dark>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
              <iframe className="w-full h-full" src={v} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
