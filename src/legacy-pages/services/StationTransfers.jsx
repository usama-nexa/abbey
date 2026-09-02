import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'

export default function StationTransfers() {
  usePageTitle('Station Transfers in Reading & Wokingham')
  return (
    <GenericServicePage
      title="Station Transfers"
      heading="Convenient Train Station Transfers"
      description="Make your journey to or from the station simple and stress-free. Arrange a reliable taxi to Reading, Wokingham or nearby railway stations, with convenient pickup and drop-off at a time that suits you."
      heroImage={heroImage}
      details={[
        'Flexible timing for train connections',
        'Journey tracking and updates',
        'Professional drivers familiar with stations',
        'Clear pricing available',
        'Luggage-friendly vehicles',
        'Reliable and punctual service',
      ]}
    />
  )
}
