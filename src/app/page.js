import Container from '@/components/common/Container'
import TopSection from '@/components/home/TopSection'
import Services from '@/components/home/Services'
import Features from '@/components/home/Features'
import Protection from '@/components/home/Protection'

export const metadata = {
  title: "VFix",
  description: "VFIX offers a wide range of professional home services including TV mounting, furniture assembly, and more. Experience quality, efficiency, and peace of mind with our expert technicians.",
}

export default function HomePage() {
  return (
    <Container column center>
      <TopSection />
      <Services />
      <Features /> 
      <Protection />
    </Container>
  )
}