import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const articles = [
  { title: 'Studio partnership announced', date: 'Oct 2025' },
  { title: 'Festival premiere set for Q1', date: 'Sep 2025' },
  { title: 'New global ambassador role', date: 'Aug 2025' },
]

export default function News() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section title="News & Press" subtitle="Official updates, releases, and announcements.">
        <div className="space-y-4">
          {articles.map((a) => (
            <a key={a.title} href="#" className="block p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <p className="text-xs text-amber-300 tracking-widest">{a.date}</p>
              <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-white/60">Read more →</p>
            </a>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
