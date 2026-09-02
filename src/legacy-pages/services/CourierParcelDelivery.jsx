import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'

export default function CourierParcelDelivery() {
  usePageTitle('Courier & Parcel Delivery in Reading & Berkshire')
  return (
    <GenericServicePage
      title="Courier & Parcel Delivery"
      heading="Fast & Reliable Courier Service"
      description="Professional courier and parcel delivery across Berkshire and the UK. We ensure your packages arrive safely and on time."
      heroImage={heroImage}
      details={[
        'Fast same-day delivery available',
        'Insured parcels',
        'Real-time tracking',
        'Professional handling',
        'Flexible delivery windows',
        'Competitive pricing for regular deliveries',
      ]}
    />
  )
}
