import usePageTitle from '../../hooks/usePageTitle'
import {
  ServiceHero,
  ArrivalSection,
  PricingSection,
  CoverageSection,
  BenefitsSection,
  FaqSection,
  ServiceCTABanner,
  Hero_our_fleets,
  Testimonials,
  DownloadApp,
} from './ServicePageLayout'

const heroImage = 'c:\Users\line\Downloads\gatwick-airport-transfers-abbey-cars.webp'
const arrivalImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85'

const coverageAreas = [
  { heading: 'Reading & Nearby', places: 'Reading Town Centre, East Reading, South Reading, West Reading, Caversham, Tilehurst, Earley, Woodley, Whitley, Lower Earley, Cemetery Junction, Kings Road, Whiteknights and Green Park.' },
  { heading: 'Wokingham & Surrounding Areas', places: 'Wokingham, Winnersh, Finchampstead, Woosehill, Twyford, Hurst, Charvil, Ruscombe and Wargrave.' },
  { heading: 'Newbury & West Berkshire', places: 'Newbury, Thatcham, Speen, Donnington, Wash Common, Cold Ash, Hermitage, Hampstead Norreys, Bucklebury, Yattendon, Woolhampton, Aldermaston and Beenham.' },
  { heading: 'Bracknell & Crowthorne', places: 'Bracknell, Binfield, Warfield, Birch Hill, Harmans Water and Crowthorne.' },
  { heading: 'Henley & Surrounding Areas', places: 'Henley-on-Thames, Shiplake, Nettlebed, Remenham, Pangbourne, Goring-on-Thames, Streatley, Whitchurch-on-Thames and Upper Basildon.' },
]

const faqs = [
  {
    question: 'Do you cover both North and South Terminals at Gatwick?',
    answer: 'Yes. Simply tell us which terminal your flight uses and we will arrange a pickup or drop-off at the correct one.',
  },
  {
    question: 'What happens if my flight is delayed?',
    answer: 'We track your flight and adjust the pickup time automatically. Free waiting time is included so you are not charged for reasonable delays.',
  },
  {
    question: 'Are child seats available?',
    answer: 'Yes — please request them when you book so we can prepare the right seats for your group.',
  },
  {
    question: 'Can I book a return transfer?',
    answer: 'Absolutely. Many customers book both the outbound and return journeys at the same time for convenience.',
  },
  {
    question: 'Which areas do you cover for Gatwick transfers?',
    answer: 'We cover Reading, Wokingham, Bracknell, Newbury, Henley-on-Thames and surrounding areas including Caversham, Tilehurst, Earley, Woodley, Winnersh, Charvil, and more.',
  },
  {
    question: 'Do you offer private taxis for families and groups?',
    answer: 'Yes. We have spacious MPVs and 8-seater vehicles for families, groups and passengers with extra luggage.',
  },
]

export default function GatwickAirportTransfers() {
  usePageTitle('Gatwick Airport Transfers from Reading, Wokingham & Nearby Areas')

  return (
    <main>
      <ServiceHero
        title="Gatwick Airport Transfers"
        heading="Gatwick Airport Transfers from Reading and Berkshire"
        description="Need a stress-free ride to Gatwick? Book private taxis with meet & greet from Reading, Wokingham, Bracknell and Newbury. 24/7 reliable transfers."
        heroImage={heroImage}
        subLabel="Private airport transfers from Reading"
        badges={['24/7 availability', 'Meet & Greet', 'Flight tracking']}
      />

      <ArrivalSection
        heading="Arrive Relaxed: Gatwick to Reading Private Transfers"
        paragraphs={[
          "Travelling to or from London Gatwick Airport doesn't need to be stressful. Our private transfer service collects you from your door in Reading, Wokingham, Bracknell, Newbury, Henley-on-Thames and nearby areas, then drives you directly to Gatwick Airport or picks you up on arrival and takes you home in comfort.",
          'We track your flight in real time, so if your departure or arrival time changes, we adjust the plan accordingly and keep your journey smooth from start to finish.',
        ]}
        image={arrivalImage}
        imageAlt="Gatwick airport arrival — Abbey Cars private transfer service"
        badge="Meet & Greet available"
        badgeSubtext="We'll be there when you land."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-[2.65rem]">Why Choose a Private Gatwick Airport Transfer?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Meet & Greet — Your driver waits inside the arrivals hall with a name board, helps with luggage, and walks you to the vehicle.',
              'Flight tracking — We monitor your flight in real time and adjust the pickup time if it is delayed or early.',
              'Free waiting time — Up to 60 minutes of complimentary waiting after landing for international flights.',
              '24/7 availability — Early morning departures and late-night arrivals are handled without extra fees.',
              'Suitable for every need — Extra space for luggage, child seats on request, and larger vehicles for groups.',
            ].map((item) => (
              <li key={item} className="rounded-3xl border border-slate-200 bg-[#fafafa] p-6 text-base leading-7 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-[2.65rem]">Typical Journey Times to Gatwick</h2>
          <ul className="mt-8 space-y-3 text-lg leading-8 text-slate-600">
            <li>Reading and nearby areas → Gatwick: approximately 1 hour 15 minutes to 1 hour 40 minutes</li>
            <li>Wokingham and surrounding villages → Gatwick: around 1 hour to 1 hour 30 minutes</li>
            <li>Bracknell and Crowthorne → Gatwick: roughly 1 hour to 1 hour 25 minutes</li>
            <li>Newbury and West Berkshire → Gatwick: usually 1 hour 20 minutes to 1 hour 50 minutes</li>
            <li>Henley and surrounding areas → Gatwick: approximately 1 hour 15 minutes to 1 hour 45 minutes</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">Journey times vary depending on traffic and your exact pickup location.</p>
        </div>
      </section>

      <PricingSection
        pricingHeading="Our Pricing"
        pricingParagraphs={[
          'Our prices depend on your pick-up location, destination, and time of travel.',
          'We will confirm the price with you before your journey.',
          'Contact us with your journey details and we will be happy to provide a quote.',
        ]}
        bookingHeading="Book Anytime — We're Available 24/7"
        bookingItems={[
          'Available 24 hours a day, 7 days a week',
          'Including weekends, bank holidays, and early morning or late-night flights',
          'Easy online booking with instant confirmation',
          'You can also book by phone',
        ]}
        bookingClosing="Book in advance or make a last-minute reservation — we're ready when you are."
      />

      <CoverageSection
        heading="Where We Pick You Up & Drop You Off"
        paragraphs={[
          'We provide reliable private transfers between Gatwick Airport and locations across Reading and the surrounding areas.',
          'Whether you are in the town centre, a nearby village, or a surrounding town, we can pick you up from your location and take you directly to the correct Gatwick terminal.',
        ]}
        areas={coverageAreas}
        closing="Not sure if we cover your exact address? Just send us your pickup location and we will confirm the best route for your journey."
      />

      <Hero_our_fleets />

      <BenefitsSection
        driversHeading="Professional Drivers You Can Rely On"
        driversItems={[
          'Fully licensed and professional drivers',
          'DBS-checked for your safety',
          'Smart, polite, and experienced',
          'Fluent English-speaking drivers',
          'Help with luggage included',
          'Quiet and comfortable journey',
        ]}
        driversClosing="Your driver will send you their details before pick-up so you know exactly who is coming."
        familyHeading="Travelling with Family, Groups or Extra Luggage?"
        familyItems={[
          'Generous luggage allowance in every vehicle',
          'Extra luggage space available on request',
          'Free child seats and booster seats (please request when booking)',
          'Spacious vehicles for families and groups',
          'Assistance with multiple suitcases and pushchairs',
        ]}
        familyClosing="Travelling with a lot of bags or young children? Just let us know and we will arrange the right vehicle."
      />

      <Testimonials />
      <DownloadApp />
      <FaqSection faqs={faqs} />

      <ServiceCTABanner
        heading="Ready to book your Gatwick transfer?"
        subtext="We're here to make your journey simple, comfortable, and stress-free."
      />
    </main>
  )
}
