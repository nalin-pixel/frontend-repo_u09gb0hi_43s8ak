import { useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thank you. We will be in touch shortly.'), 800)
  }

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Section title="Contact & Booking" subtitle="For press, partnerships, and bookings, share details below.">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-6 rounded-xl">
          <div className="space-y-2">
            <label className="text-sm text-white/70">Full name</label>
            <input required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Email</label>
            <input required type="email" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3" placeholder="jane@studio.com" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea required rows="6" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3" placeholder="Tell us about your request"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-amber-300/90">Serious inquiries only</p>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white font-medium">Send</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-green-400">{status}</p>}
        </form>
      </Section>
      <Footer />
    </div>
  )
}
