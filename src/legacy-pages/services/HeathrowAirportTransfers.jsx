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

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'
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
    question: 'Do you provide transfers from Reading to Heathrow Airport?',
    answer: 'Yes, we offer private transfers from Reading and all surrounding areas straight to Heathrow Airport (LHR). Our drivers pick you up from your door and take you directly to your terminal.',
  },
  {
    question: 'Can you collect me from Heathrow and take me to Reading?',
    answer: 'Yes. We provide Meet & Greet service at Heathrow. Your driver will wait inside the terminal with a name board and take you to any address in Reading or the surrounding areas.',
  },
  {
    question: 'Which areas do you cover?',
    answer: "We cover Reading and nearby areas including Caversham, Tilehurst, Earley, Woodley, Wokingham, Newbury, Bracknell, Henley-on-Thames, and many more. If you're not sure, just send us your address and we'll confirm.",
  },
  {
    question: 'How does pricing work?',
    answer: 'Our prices depend on your pick-up location, destination, and time of travel. Contact us with your journey details and we will be happy to provide a quote.',
  },
  {
    question: 'Are you available 24/7?',
    answer: 'Yes, we operate 24 hours a day, 7 days a week, including weekends, bank holidays, and early morning or late-night flights.',
  },
  {
    question: 'Do you offer child seats and vehicles for groups?',
    answer: 'Yes. Free child seats and booster seats are available on request. We also have spacious 6-seater and 8-seater vehicles for families and groups with extra luggage.',
  },
]

export default function HeathrowAirportTransfers() {
  usePageTitle('Heathrow Airport Transfers from Reading, Wokingham & Nearby Areas')

  return (
    <main>
      <ServiceHero
        title="Heathrow Airport Transfers"
        heading="Heathrow Airport Transfer"
        description="Skip the stress of getting to Heathrow. We offer comfortable private transfers from Reading and the surrounding areas straight to your terminal."
        heroImage={heroImage}
        subLabel="Private airport transfers from Reading"
        badges={['24/7 availability', 'Meet & Greet', 'Flight tracking']}
      />

      <ArrivalSection
        heading="Arrive Relaxed: Heathrow to Reading Private Transfers"
        paragraphs={[
          'Arriving at Heathrow? Your driver will meet you inside the terminal (Meet & Greet available) with a name board, assist with your bags, and take you directly to your home, hotel, or any address in Reading and the surrounding areas.',
          'We track your flight in real time, so even if your flight is delayed, your driver will still be there waiting for you.',
        ]}
        image={arrivalImage}
        imageAlt="Heathrow airport arrival — Abbey Cars meet and greet service"
        badge="Meet & Greet available"
        badgeSubtext="We'll be there when you land."
      />

      <PricingSection
        pricingHeading="Our Pricing"
        pricingParagraphs={[
          'Our prices depend on your pick-up location, destination, and time of travel.',
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
          'We provide reliable private transfers between Heathrow Airport and a wide range of locations across Reading and the surrounding areas.',
          'Wherever you are in these areas, we can take you to Heathrow — or collect you from Heathrow and take you safely to your destination.',
        ]}
        areas={coverageAreas}
        closing="Not sure if we cover your exact address? Just send us your pick-up location and destination and we'll be happy to confirm."
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
        familyClosing="Travelling with a lot of bags or young children? Just let us know and we'll arrange the right vehicle."
      />

      <Testimonials />
      <DownloadApp />
      <FaqSection faqs={faqs} />

      <ServiceCTABanner
        heading="Ready to book your Heathrow transfer?"
        subtext="We're here to make your journey simple, comfortable, and stress-free."
      />
    </main>
  )
}
