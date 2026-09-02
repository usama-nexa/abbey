import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'

export default function LocalLongDistanceTaxi() {
  usePageTitle('Local & Long Distance Taxi in Reading')
  return (
    <GenericServicePage
      title="Local & Long Distance Taxi"
      heading="Taxi Service for Every Journey"
      description="From short local journeys across Berkshire to long-distance trips anywhere in the UK, we provide safe, comfortable, and reliable taxi services tailored to your travel needs."
      heroImage={heroImage}
      details={[
        'Competitive rates for all distances',
        'Comfortable, modern vehicles',
        'Clear pricing available',
        'Professional drivers',
        'Available 24/7',
        'Easy advance booking',
      ]}
    />
  )
}
