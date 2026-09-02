import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85'

export default function LutonAirportTransfers() {
  usePageTitle('Luton Airport Transfers from Reading & Berkshire')
  return (
    <GenericServicePage
      title="Luton Airport Transfers"
      heading="Convenient Luton Airport Transfers"
      description="Book dependable taxi transfers to Luton Airport with spacious vehicles and door-to-door service."
      heroImage={heroImage}
      details={[
        'Clear and transparent pricing',
        'Quick and efficient service',
        'Modern, well-maintained vehicles',
        'Experienced local drivers',
        'Available for groups and individuals',
        'Easy online booking system',
      ]}
    />
  )
}
