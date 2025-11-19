import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function About() {
  const timeline = [
    { year: '1995', text: 'Breakthrough performance and rising stardom.' },
    { year: '2005', text: 'International recognition and awards.' },
    { year: '2013', text: 'TIME 100 Most Influential People.' },
    { year: '2020', text: 'Production leadership and global collaborations.' },
  ]

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section title="Biography" subtitle="A timeline of excellence and evolution.">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-white/80">
            <p>Omotola Jalade is a trailblazing actress, producer, and humanitarian whose career spans decades of groundbreaking work. From early breakout roles to global acclaim, her legacy continues to shape culture and inspire audiences worldwide.</p>
            <p>Red-Hot Concepts operates at the intersection of artistry and strategy—developing premium features, series, and brand partnerships that resonate globally.</p>
          </div>
          <div className="border-l border-white/10 pl-6">
            <ol className="space-y-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-gradient-to-tr from-red-600 to-amber-400 ring-2 ring-black" />
                  <p className="text-amber-300 text-sm tracking-widest">{t.year}</p>
                  <p className="text-white font-medium mt-1">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
