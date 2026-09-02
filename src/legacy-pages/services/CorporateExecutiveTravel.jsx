import usePageTitle from '../../hooks/usePageTitle'
import { GenericServicePage } from './ServicePageLayout'

const heroImage = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85'

export default function CorporateExecutiveTravel() {
  usePageTitle('Corporate & Executive Travel in Reading')
  return (
    <GenericServicePage
      title="Corporate & Executive Travel"
      heading="Premium Corporate Transport"
      description="Professional transport for business meetings, corporate events, and executive travel. Our premium vehicles and experienced drivers ensure you arrive on time and in comfort."
      heroImage={heroImage}
      details={[
        'Dedicated account management',
        'Transparent corporate rates',
        'Premium vehicle options',
        'Professional and discreet drivers',
        'Flexible booking for regular journeys',
        'Business-focused amenities',
      ]}
    />
  )
}
