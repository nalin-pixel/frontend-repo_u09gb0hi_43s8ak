import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const projects = [
  { title: 'Project A', role: 'Feature Film', year: '2024', poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Project B', role: 'Series', year: '2023', poster: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Project C', role: 'Documentary', year: '2022', poster: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Project D', role: 'Short Film', year: '2021', poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section title="Projects & Filmography" subtitle="A curated slate of works and collaborations.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={p.poster} alt={p.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-amber-300 text-xs tracking-widest">{p.year} • {p.role}</p>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
