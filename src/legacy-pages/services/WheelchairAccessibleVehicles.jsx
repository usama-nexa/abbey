import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'

export default function WheelchairAccessibleVehicles() {
  usePageTitle('Wheelchair Accessible Vehicles in Reading')
  return (
    <GenericServicePage
      title="Wheelchair Accessible Vehicles"
      heading="Accessible Transport for Everyone"
      description="We provide professional wheelchair accessible transport, ensuring comfortable and dignified travel for all passengers."
      heroImage={heroImage}
      details={[
        'Fully accessible vehicles',
        'Ramps and securing equipment',
        'Professional, trained drivers',
        'Comfortable seating options',
        'Flexible booking and scheduling',
        'Available 24/7 for medical appointments',
      ]}
    />
  )
}
