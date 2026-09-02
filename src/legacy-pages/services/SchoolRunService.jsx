import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85'

export default function SchoolRunService() {
  usePageTitle('School Run Service in Reading & Berkshire')
  return (
    <GenericServicePage
      title="School Run Service"
      heading="Safe & Reliable School Transport"
      description="Our dependable school run service provides safe and punctual transport for children, giving parents peace of mind with experienced and professional drivers."
      heroImage={heroImage}
      details={[
        'Experienced, trustworthy drivers',
        'Flexible scheduling options',
        'Regular route discounts',
        'Safe, comfortable vehicles',
        'Parent communication and updates',
        'Professional and courteous service',
      ]}
    />
  )
}
