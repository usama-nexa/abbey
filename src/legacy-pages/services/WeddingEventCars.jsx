import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=85'

export default function WeddingEventCars() {
  usePageTitle('Wedding & Event Cars in Reading')
  return (
    <GenericServicePage
      title="Wedding & Event Cars"
      heading="Luxury Transport for Your Special Day"
      description="Travel in comfort and style on your special day. We provide reliable transport for weddings, parties, concerts, sporting events, and other special occasions."
      heroImage={heroImage}
      details={[
        'Premium luxury vehicles',
        'Professional drivers trained in event transport',
        'Flexible scheduling for all-day events',
        'Competitive event pricing',
        'Decorative options available',
        'Group booking discounts',
      ]}
    />
  )
}
