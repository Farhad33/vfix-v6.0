import Container from '@/components/Container'
import HomeTopSection from '@/components/HomeTopSection'

export const metadata = {
  title: "VFix",
  description: "VFix",
}

export default function HomePage() {
  return (
    <Container column center>
      <HomeTopSection />
    </Container>
  )
}