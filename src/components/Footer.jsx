export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 ring-2 ring-white/10" />
            <p className="text-white font-semibold tracking-wide">Red-Hot Concepts</p>
          </div>
          <p className="text-white/60 mt-4 text-sm max-w-sm">Premium entertainment and film production studio representing global icon Omotola Jalade.</p>
        </div>
        <div>
          <p className="text-white/80 font-medium mb-3">Explore</p>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/news" className="hover:text-white">News</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white/80 font-medium mb-3">Contact</p>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Press & Bookings: press@redhotconcepts.com</li>
            <li>Business: partnerships@redhotconcepts.com</li>
          </ul>
        </div>
        <div>
          <p className="text-white/80 font-medium mb-3">Social</p>
          <div className="flex gap-3 text-sm text-white/70">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Red-Hot Concepts. All rights reserved.</p>
          <p>Designed for a cinematic, premium experience.</p>
        </div>
      </div>
    </footer>
  )
}
