import Container from '@/components/Container'

export const metadata = {
  title: "Majid's Resume",
  description: "Majid's Resume",
}

export default function Resume() {
  const documentURL = 'https://docs.google.com/document/d/1shuSbqOjGzo-OGUTBSm9dcd2j3upstRGLKO0um9i8Cg/edit?usp=sharing'
  return (
    <Container column center>
      <iframe src={documentURL} width="100%" height="1000px" />
    </Container>
  )
}