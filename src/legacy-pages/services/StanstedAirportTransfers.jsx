import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85'

export default function StanstedAirportTransfers() {
  usePageTitle('Stansted Airport Transfers from Reading & Berkshire')
  return (
    <GenericServicePage
      title="Stansted Airport Transfers"
      heading="Efficient Stansted Airport Transfers"
      description="Travel to and from Stansted Airport with confidence. Our professional drivers ensure timely, comfortable, and reliable transfers."
      heroImage={heroImage}
      details={[
        'Punctual pickup and drop-off',
        'Clear and transparent pricing',
        'Comfortable vehicles',
        'Professional drivers',
        'Real-time booking confirmation',
        'Customer support available',
      ]}
    />
  )
}
