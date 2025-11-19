export default function Section({ id, eyebrow, title, subtitle, children, dark = true }) {
  return (
    <section id={id} className={`${dark ? 'bg-black' : 'bg-neutral-950'} py-16 sm:py-24 border-t border-white/10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          {eyebrow && <p className="text-amber-300/90 tracking-widest text-xs uppercase mb-3">{eyebrow}</p>}
          {title && <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{title}</h2>}
          {subtitle && <p className="mt-4 text-white/70">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
