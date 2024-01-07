import Container from '@/components/Container'
import SidePanel from '@/components/SidePanel'
import { algorithems } from './data'

export const metadata = {
  title: "Majid's Algorithms",
  description: "Majid's Algorithms",
}

export default function Algorithms() {

  return (
    <Container>
      <SidePanel items={algorithems} />
    </Container>
  )
}