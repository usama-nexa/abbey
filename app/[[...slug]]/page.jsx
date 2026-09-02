import LegacyAppLoader from '../../src/next/LegacyAppLoader'

const pageMetadata = {
  '': {
    title: 'Taxi in Reading : Trusted 24/7 Local Taxi Service : Abbey Cars',
    description: 'Book a trusted taxi in Reading with Abbey Cars. Safe, reliable 24/7 journeys, airport transfers and local taxi services across Reading.',
  },
  about: {
    title: 'About Abbey Cars',
    description: 'Learn about Abbey Cars and our trusted local taxi service in Reading and Berkshire.',
  },
  'about/privacy-policy': {
    title: 'Privacy Policy',
    description: 'Read how Abbey Cars collects, uses and protects information submitted through our booking and contact forms.',
  },
  'about/our-story': {
    title: 'Our Story',
    description: 'Discover the Abbey Cars story and our commitment to reliable local taxis, airport transfers and personal service across Reading and Berkshire.',
    keywords: ['Abbey Cars', 'local taxi service Reading', 'Reading taxi company', 'airport transfers Berkshire', 'executive travel Reading'],
  },
  fleet: {
    title: 'Our Fleet',
    description: 'Explore the comfortable and reliable vehicles available from Abbey Cars.',
  },
  'our-fleet': {
    title: 'Our Fleet',
    description: 'Explore the comfortable and reliable vehicles available from Abbey Cars.',
  },
  services: {
    title: 'Taxi Services',
    description: 'Book local taxis, airport transfers, corporate travel and specialist transport with Abbey Cars.',
  },
  'airport-transfers': {
    title: 'Airport Transfers',
    description: 'Reliable airport transfers from Reading to Heathrow, Gatwick, Luton and Stansted.',
  },
  'services/heathrow-airport-transfers': {
    title: 'Heathrow Airport Transfers from Reading, Wokingham & Nearby Areas',
    description: 'Private Heathrow airport transfers from Reading, Wokingham, Newbury, Bracknell and Henley. Door-to-door service, meet & greet, flight tracking. Available 24/7.',
  },
  'services/gatwick-airport-transfers': {
    title: 'Gatwick Airport Transfers from Reading and Berkshire',
    description: 'Reliable private Gatwick airport transfers from Reading, Wokingham, Bracknell and Newbury. Meet and greet, flight tracking, both terminals covered.',
  },
  'services/luton-airport-transfers': {
    title: 'Luton Airport Transfers from Reading & Berkshire',
    description: 'Dependable taxi transfers to Luton Airport from Reading and surrounding Berkshire areas. Comfortable vehicles and door-to-door service.',
  },
  'services/stansted-airport-transfers': {
    title: 'Stansted Airport Transfers from Reading & Berkshire',
    description: 'Reliable transfers to Stansted Airport from Reading, Wokingham and Berkshire. Professional drivers and timely pickups.',
  },
  'services/corporate-executive-travel': {
    title: 'Corporate & Executive Travel in Reading',
    description: 'Professional corporate and executive transport in Reading and Berkshire. Premium vehicles and discreet service for business meetings and events.',
  },
  'services/wedding-event-cars': {
    title: 'Wedding & Event Cars in Reading',
    description: 'Luxury transport for weddings, parties and special occasions in Reading. Premium vehicles and professional drivers for your special day.',
  },
  'services/local-long-distance-taxi': {
    title: 'Local & Long Distance Taxi in Reading',
    description: 'Flexible local and long distance taxi service across Reading and Berkshire. Reliable, comfortable journeys for any distance.',
  },
  'services/station-transfers': {
    title: 'Station Transfers in Reading & Wokingham',
    description: 'Reliable taxi transfers to and from Reading, Wokingham and nearby railway stations. Punctual pickups and drop-offs at a time that suits you.',
  },
  'services/school-run-service': {
    title: 'School Run Service in Reading & Berkshire',
    description: 'Safe and reliable school run service in Reading and Berkshire. Experienced drivers giving parents peace of mind every day.',
  },
  'services/courier-parcel-delivery': {
    title: 'Courier & Parcel Delivery in Reading',
    description: 'Fast and professional courier and parcel delivery across Reading, Berkshire and the UK. Same-day delivery available.',
  },
  'services/wheelchair-accessible-vehicles': {
    title: 'Wheelchair Accessible Vehicles in Reading',
    description: 'Comfortable and dignified wheelchair accessible transport in Reading and Berkshire. Professional drivers and fully equipped vehicles.',
  },
'services/gatwick-airport-transfers': {
  title: 'Gatwick Airport Transfers : Private Taxis and Meet and Greet',
  description: 'Skip the trains and queues. Reliable private transfers to Gatwick Airport from Reading, Wokingham, Bracknell and Newbury with meet and greet and flight tracking.',
},
'services/luton-airport-transfers': {
  title: 'luton Airport Transfers : Private Taxis and Meet and Greet',
  description: 'Skip the trains and queues. Reliable private transfers to luton Airport from Reading, Wokingham, Bracknell and Newbury with meet & greet and flight tracking.',
},
  'corporate-travel': {
    title: 'Corporate Travel',
    description: 'Professional and dependable corporate travel from Abbey Cars in Reading.',
  },
  contact: {
    title: 'Contact Abbey Cars',
    description: 'Contact Abbey Cars to arrange a taxi, airport transfer or private journey in Reading.',
  },
  booking: {
    title: 'Book a Taxi',
    description: 'Request a reliable taxi journey with Abbey Cars in Reading and Berkshire.',
  },
  'blogs/abbey-cars-vs-uber-reading': {
    title: 'Abbey Cars vs Uber in Reading | Local Taxi Guide',
    description: 'Compare Abbey Cars and Uber in Reading. Learn why local drivers, dependable service and direct support can make your journey easier.',
  },
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params
  const key = slug.join('/')
  const metadata = pageMetadata[key] || pageMetadata[slug[0]] || pageMetadata['']
  const canonical = `/${key}`

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  }
}

export default function CatchAllPage() {
  return <LegacyAppLoader />
}
