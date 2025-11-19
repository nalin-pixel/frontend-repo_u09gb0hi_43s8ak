import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'

const sampleProjects = [
  { title: 'The Icon', year: '2024', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Golden Frame', year: '2023', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Pulse', year: '2022', image: 'https://images.unsplash.com/photo-1637592156141-d41fb6234e71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBJY29ufGVufDB8MHx8fDE3NjM1NjQyNzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />

      <Section id="projects" eyebrow="Featured" title="Projects & Filmography" subtitle="A selection of cinematic stories and collaborations.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p) => (
            <a key={p.title} href="/projects" className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-amber-300 text-xs tracking-widest">{p.year}</p>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="Omotola Jalade" title="Global Icon. Philanthropist. Producer." subtitle="An inspiring journey across film, music, and humanitarian work.">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop" alt="Omotola" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 text-white/80">
            <p>Omotola Jalade is one of Africa’s most celebrated stars, with a body of work spanning award-winning films, activism, and global influence.</p>
            <p>Red-Hot Concepts drives premium storytelling with a focus on African excellence, global distribution, and cultural impact.</p>
            <div className="flex gap-3 pt-2">
              <a href="/about" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">Read Biography</a>
              <a href="/contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white">Contact & Booking</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="news" eyebrow="Latest" title="News & Press">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <a key={i} href="/news" className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="h-44 bg-gradient-to-br from-red-900/50 via-amber-800/30 to-transparent" />
              <div className="p-5">
                <p className="text-xs text-amber-300 tracking-widest">Press</p>
                <h3 className="mt-1 text-lg font-semibold group-hover:underline">Major announcement headline goes here</h3>
                <p className="mt-2 text-white/60 text-sm">Studio partnership, festival premiere, awards and more.</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
