import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaMapMarkerAlt,
  FaPlaneArrival,
  FaShieldAlt,
  FaSuitcase,
  FaUserCheck,
} from 'react-icons/fa'
import Hero_our_fleets from '../../components/UI/Hero_our_fleets'
import Testimonials from '../../components/UI/services/Testimonials'
import { DownloadApp } from '../../components/UI/HomeContentSections'

/* ─────────────────────────────────────────────
   Shared benefit cards shown on detailed pages
───────────────────────────────────────────── */
const sharedBenefits = [
  { icon: FaShieldAlt,    title: 'Licensed & DBS-checked',    text: 'Professional drivers you can rely on.' },
  { icon: FaPlaneArrival, title: 'Flight tracking',            text: 'We monitor delays and stay on schedule.' },
  { icon: FaSuitcase,     title: 'Luggage help included',      text: 'Assistance with bags and pushchairs.' },
  { icon: FaUserCheck,    title: 'Fluent English-speaking',    text: 'Smart, polite and experienced service.' },
  { icon: FaCheck,        title: 'Transparent booking',        text: 'Clear pricing discussed before your journey.' },
  { icon: FaClock,        title: 'Available 24/7',             text: 'Including weekends and bank holidays.' },
]

const sharedSteps = [
  { icon: FaMapMarkerAlt, title: 'Enter your route',   text: 'Add your pick-up and drop-off details.' },
  { icon: FaCheck,        title: 'See your quote',     text: 'Review the journey details before you confirm.' },
  { icon: FaCheck,        title: 'Confirm and relax',  text: 'Book online and receive instant confirmation.' },
]

/* ─────────────────────────────────────────────
   Hero + breadcrumb banner — shared by all pages
───────────────────────────────────────────── */
export function ServiceHero({ title, heading, description, heroImage, subLabel, badges }) {
  return (
    <section className="relative flex min-h-[620px] w-full flex-col justify-center overflow-hidden bg-slate-950 pb-20 pt-32">
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={heading}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/60" />
        </>
      )}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center gap-2 text-sm text-white/70">
            <NavLink to="/" className="font-medium transition hover:opacity-70">Home</NavLink>
            <span>/</span>
            <NavLink to="/services" className="font-medium transition hover:opacity-70">Services</NavLink>
            <span>/</span>
            <span className="font-medium">{title}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              {subLabel || 'Professional travel across Reading'}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/85 sm:text-2xl">
              {description}
            </p>
            {badges && (
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-white/75">
                {badges.map((b) => <span key={b}>{b}</span>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Arrival / intro section (two-column)
───────────────────────────────────────────── */
export function ArrivalSection({ heading, paragraphs, image, imageAlt, badge, badgeSubtext }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">The Abbey standard</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">{heading}</h2>
            {paragraphs.map((p) => (
              <p key={p} className="mt-6 text-lg leading-8 text-slate-600">{p}</p>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-2xl">
            <img src={image} alt={imageAlt || heading} className="h-[360px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            {badge && (
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">{badge}</p>
                <p className="mt-2 text-2xl font-bold text-white">{badgeSubtext}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Pricing + booking steps section
───────────────────────────────────────────── */
export function PricingSection({ pricingHeading, pricingParagraphs, bookingHeading, bookingItems, bookingClosing }) {
  return (
    <section className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">Clear pricing, simple booking</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">{pricingHeading}</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-2 text-base leading-7 text-slate-600 sm:text-lg">
            {pricingParagraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sharedSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-base font-bold text-black">0{index + 1}</span>
                  <Icon className="text-xl text-slate-400" />
                </div>
                <h3 className="mt-7 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </article>
            )
          })}
        </div>
        {bookingItems && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">{bookingHeading}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {bookingItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
                  <FaCheck className="mt-1.5 shrink-0 text-yellow-500" />{item}
                </li>
              ))}
            </ul>
            {bookingClosing && <p className="mt-5 text-base leading-7 text-slate-600">{bookingClosing}</p>}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Coverage accordion section
───────────────────────────────────────────── */
export function CoverageSection({ heading, paragraphs, areas, closing }) {
  const [openArea, setOpenArea] = useState(0)
  return (
    <section className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Coverage</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.12] sm:text-[2.65rem]">{heading}</h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-white/70">
              {paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="space-y-3">
            {areas.map((area, index) => {
              const isOpen = openArea === index
              return (
                <div key={area.heading} className="border-b border-white/15 py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenArea(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 text-left text-xl font-bold text-white"
                  >
                    <span>{area.heading}</span>
                    <span className={`text-2xl font-light text-yellow-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-3xl pt-4 leading-7 text-white/65">{area.places}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            {closing && <p className="pt-5 text-white/70">{closing}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Benefits + drivers + family sections
───────────────────────────────────────────── */
export function BenefitsSection({ driversHeading, driversItems, driversClosing, familyHeading, familyItems, familyClosing }) {
  return (
    <section className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">Why riders choose Abbey Cars</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">The details that make your journey easier.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sharedBenefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Icon className="text-2xl text-yellow-500" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{benefit.text}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {driversItems && (
            <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-slate-950">
                <span>{driversHeading}</span>
                <span className="text-2xl font-light text-yellow-600 transition group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-5 space-y-3 text-slate-700">
                {driversItems.map((item) => (
                  <li key={item} className="flex gap-3"><FaCheck className="mt-1.5 shrink-0 text-yellow-500" />{item}</li>
                ))}
              </ul>
              {driversClosing && <p className="mt-5 leading-7 text-slate-600">{driversClosing}</p>}
            </details>
          )}
          {familyItems && (
            <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-slate-950">
                <span>{familyHeading}</span>
                <span className="text-2xl font-light text-yellow-600 transition group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-5 space-y-3 text-slate-700">
                {familyItems.map((item) => (
                  <li key={item} className="flex gap-3"><FaCheck className="mt-1.5 shrink-0 text-yellow-500" />{item}</li>
                ))}
              </ul>
              {familyClosing && <p className="mt-5 leading-7 text-slate-600">{familyClosing}</p>}
            </details>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FAQ accordion section
───────────────────────────────────────────── */
export function FaqSection({ faqs }) {
  return (
    <section className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">Need to know</p>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">Frequently asked questions.</h2>
        <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-slate-950">
                <span>{faq.question}</span>
                <span className="text-2xl font-light text-yellow-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Bottom CTA banner
───────────────────────────────────────────── */
export function ServiceCTABanner({ heading, subtext }) {
  const navigate = useNavigate()
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.12] text-white sm:text-[2.65rem]">{heading}</h2>
          {subtext && <p className="mt-3 text-white/65">{subtext}</p>}
        </div>
        <button
          type="button"
          onClick={() => navigate('/booking')}
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
        >
          Book your journey <FaArrowRight />
        </button>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Generic service page (for stub pages)
───────────────────────────────────────────── */
export function GenericServicePage({ title, heading, description, details, heroImage }) {
  return (
    <main>
      <ServiceHero title={title} heading={heading} description={description} heroImage={heroImage} />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">The Abbey standard</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">
                Why choose our {title.toLowerCase()}?
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We provide dependable, comfortable {title.toLowerCase()} tailored to your journey.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {details.map((detail, index) => (
                <article
                  key={detail}
                  className="rounded-3xl border border-slate-200 bg-[#fafafa] p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black">
                    0{index + 1}
                  </span>
                  <p className="mt-5 font-semibold leading-7 text-slate-950">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Hero_our_fleets />
      <section className="bg-[#fafafa] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">Ready when you are</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-slate-950 sm:text-[2.65rem]">Make your next journey simple.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Book your {title.toLowerCase()} with Abbey Cars and travel with confidence.
          </p>
          <NavLink
            to="/booking"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Book now <FaArrowRight />
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export { Hero_our_fleets, Testimonials, DownloadApp }
