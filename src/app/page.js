import Container from '@/components/common/Container'
import TopSection from '@/components/home/TopSection'
import Services from '@/components/home/Services'
import Features from '@/components/home/Features'
import Protection from '@/components/home/Protection'

export const metadata = {
  title: "VFix",
  description: "VFix",
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